import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { z } from "zod";

const text = (max: number) => z.string().trim().max(max);

export const contactSchema = z.object({
  fullName: text(100).min(2, "Please enter your full name"),
  email: text(200).email("Please enter a valid email"),
  company: text(150).optional().default(""),
  inquiryType: text(60).min(1, "Please choose an inquiry type"),
  subject: text(150).min(2, "Please enter a subject"),
  message: text(4000).min(10, "Please write at least 10 characters"),
});

export const bookingSchema = z.object({
  fullName: text(100).min(2, "Please enter your full name"),
  email: text(200).email("Please enter a valid email"),
  company: text(150).min(1, "Please enter your company name"),
  country: z.enum(["United States", "Canada", "Other"], { message: "Please choose a country" }),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Please choose a date"),
  time: z.string().regex(/^\d{2}:\d{2}$/, "Please choose a time"),
  timeZone: text(60).min(1, "Please choose a time zone"),
  service: text(100).min(1, "Please choose a service"),
  description: text(4000).min(10, "Please write at least 10 characters"),
});

const envelope = z.discriminatedUnion("kind", [
  z.object({ kind: z.literal("contact"), data: contactSchema, website: z.string().max(0).optional(), startedAt: z.number() }),
  z.object({ kind: z.literal("booking"), data: bookingSchema, website: z.string().max(0).optional(), startedAt: z.number() }),
]);

// Basic per-isolate rate limit: 5 submissions / 10 minutes per IP.
const hits = new Map<string, number[]>();
function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const esc = (s: string) => s.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c]!);

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => envelope.parse(input))
  .handler(async ({ data: payload }) => {
    // Honeypot or too-fast submissions: pretend success, send nothing.
    if (payload.website || Date.now() - payload.startedAt < 2500) return { ok: true as const };

    const req = getRequest();
    const ip = req.headers.get("cf-connecting-ip") ?? req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
    if (rateLimited(ip)) return { ok: false as const, error: "Too many requests. Please try again later." };

    // Bot token is a server-only project secret, never in this codebase.
    const botToken = process.env["TELEGRAM_BOT_TOKEN"];
    // Owner's Telegram chat that receives every inquiry.
    const chatId = "8762480548";
    if (!botToken) {
      console.error("Telegram credentials are not configured");
      return { ok: false as const, error: "We couldn't send your message right now. Please email us directly." };
    }

    let lines: [string, string][];
    let heading: string;
    if (payload.kind === "contact") {
      const d = payload.data;
      heading = "📩 New contact inquiry";
      lines = [["Name", d.fullName], ["Email", d.email], ["Company", d.company || "—"], ["Inquiry", d.inquiryType], ["Subject", d.subject], ["Message", d.message]];
    } else {
      const d = payload.data;
      heading = "📅 New consultation request";
      lines = [["Name", d.fullName], ["Email", d.email], ["Company", d.company], ["Country", d.country], ["Preferred", `${d.date} ${d.time} (${d.timeZone})`], ["Service", d.service], ["Project", d.description]];
    }
    const body = `<b>${heading}</b>\n\n` + lines.map(([k, v]) => `<b>${k}:</b> ${esc(v)}`).join("\n");

    try {
      const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: body, parse_mode: "HTML", disable_web_page_preview: true }),
      });
      if (!res.ok) {
        console.error("Telegram gateway error", res.status, await res.text());
        return { ok: false as const, error: "We couldn't send your message right now. Please try again or email us." };
      }
      const sent = (await res.json()) as { ok?: boolean; description?: string };
      if (sent.ok === false) {
        console.error("Telegram send rejected", sent.description);
        return { ok: false as const, error: "We couldn't send your message right now. Please try again or email us." };
      }
    } catch (e) {
      console.error("Telegram request failed", e);
      return { ok: false as const, error: "We couldn't send your message right now. Please try again or email us." };
    }
    return { ok: true as const };
  });
