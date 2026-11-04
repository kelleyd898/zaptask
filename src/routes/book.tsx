import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, type FormEvent } from "react";
import { Loader2, Info } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/seo";
import { services } from "@/data/services";
import { PageHero } from "@/components/site/layout";
import { Field, Honeypot, FormStatus, fieldErrors } from "@/components/site/form-kit";
import { bookingSchema, submitInquiry } from "@/lib/notify.functions";

export const Route = createFileRoute("/book")({
  validateSearch: z.object({ service: z.string().optional() }),
  head: () =>
    pageHead({
      path: "/book",
      title: "Book a Consultation — Zaptask LLC",
      description: "Request a consultation with Zaptask LLC to discuss your website, landing page, frontend or business web application project.",
    }),
  component: Book,
});

const timeZones = ["Eastern (ET)", "Central (CT)", "Mountain (MT)", "Pacific (PT)", "Alaska (AKT)", "Hawaii (HT)", "Atlantic (AT)", "Newfoundland (NT)", "Other"];

function Book() {
  const { service } = Route.useSearch();
  const initial = {
    fullName: "", email: "", company: "", country: "", date: "", time: "", timeZone: "",
    service: services.some((s) => s.title === service) ? service! : "", description: "",
  };
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMsg, setServerMsg] = useState("");
  const [hp, setHp] = useState("");
  const startedAt = useRef(Date.now());
  const today = new Date().toISOString().slice(0, 10);

  const set = (k: keyof typeof initial) => (e: { target: { value: string } }) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const inv = (k: string) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-error` : undefined });

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const parsed = bookingSchema.safeParse(form);
    const errs = parsed.success ? {} : fieldErrors(parsed.error.issues);
    if (form.date && form.date < today) errs["date"] = "Please choose a future date";
    if (!parsed.success || Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("loading");
    try {
      const res = await submitInquiry({ data: { kind: "booking", data: parsed.data, website: hp, startedAt: startedAt.current } });
      if (res.ok) {
        setStatus("success");
        setForm({ ...initial, service: "" });
      } else {
        setStatus("error");
        setServerMsg(res.error);
      }
    } catch {
      setStatus("error");
      setServerMsg("Something went wrong. Please try again or email us directly.");
    }
  }

  return (
    <>
      <PageHero eyebrow="Book a Consultation" title="Request a consultation.">
        Tell us about your project and your preferred time. We'll review your request and reply to confirm a meeting.
      </PageHero>
      <section className="container-page py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex gap-3 rounded-xl border border-border bg-brand-soft p-5 text-sm">
            <Info className="mt-0.5 size-4 shrink-0 text-brand" />
            <p>Submitting this form sends a <strong>request</strong> only — it does not automatically confirm an appointment. We'll contact you by email to confirm a date and time.</p>
          </div>
          <form onSubmit={onSubmit} noValidate className="relative space-y-5 rounded-2xl border border-border bg-card p-6 shadow-soft md:p-10">
            <Honeypot value={hp} onChange={setHp} />
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="fullName" label="Full Name" error={errors["fullName"]}>
                <input id="fullName" className="field" autoComplete="name" value={form.fullName} onChange={set("fullName")} {...inv("fullName")} />
              </Field>
              <Field id="email" label="Business Email" error={errors["email"]}>
                <input id="email" type="email" className="field" autoComplete="email" value={form.email} onChange={set("email")} {...inv("email")} />
              </Field>
              <Field id="company" label="Company Name" error={errors["company"]}>
                <input id="company" className="field" autoComplete="organization" value={form.company} onChange={set("company")} {...inv("company")} />
              </Field>
              <Field id="country" label="Country" error={errors["country"]}>
                <select id="country" className="field" value={form.country} onChange={set("country")} {...inv("country")}>
                  <option value="">Select…</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Other</option>
                </select>
              </Field>
              <Field id="date" label="Preferred Date" error={errors["date"]}>
                <input id="date" type="date" min={today} className="field" value={form.date} onChange={set("date")} {...inv("date")} />
              </Field>
              <Field id="time" label="Preferred Time" error={errors["time"]}>
                <input id="time" type="time" className="field" value={form.time} onChange={set("time")} {...inv("time")} />
              </Field>
              <Field id="timeZone" label="Time Zone" error={errors["timeZone"]}>
                <select id="timeZone" className="field" value={form.timeZone} onChange={set("timeZone")} {...inv("timeZone")}>
                  <option value="">Select…</option>
                  {timeZones.map((t) => <option key={t}>{t}</option>)}
                </select>
              </Field>
              <Field id="service" label="Service of Interest" error={errors["service"]}>
                <select id="service" className="field" value={form.service} onChange={set("service")} {...inv("service")}>
                  <option value="">Select…</option>
                  {services.map((s) => <option key={s.slug}>{s.title}</option>)}
                  <option>Not sure yet</option>
                </select>
              </Field>
            </div>
            <Field id="description" label="Project Description" error={errors["description"]}>
              <textarea id="description" rows={6} className="field" value={form.description} onChange={set("description")} {...inv("description")} />
            </Field>
            {status === "success" && <FormStatus status="success" message="Thank you — your consultation request was received. We'll email you to confirm a time." />}
            {status === "error" && <FormStatus status="error" message={serverMsg} />}
            <Button type="submit" size="lg" className="h-12 w-full sm:w-auto" disabled={status === "loading"}>
              {status === "loading" ? <><Loader2 className="size-4 animate-spin" /> Sending request…</> : "Request Consultation"}
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
