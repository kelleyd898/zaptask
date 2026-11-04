import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef, type FormEvent } from "react";
import { Mail, Phone, Loader2, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/seo";
import { site } from "@/config/site";
import { PageHero } from "@/components/site/layout";
import { Field, Honeypot, FormStatus, fieldErrors } from "@/components/site/form-kit";
import { contactSchema, submitInquiry } from "@/lib/notify.functions";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      path: "/contact",
      title: "Contact Zaptask LLC — Software Development Inquiries",
      description: "Get in touch with Zaptask LLC by email, phone or our contact form for software development, web and IT consulting inquiries.",
    }),
  component: Contact,
});

const inquiryTypes = ["New project", "Existing website or app", "Technical support", "Consulting", "Partnership", "Other"];
const empty = { fullName: "", email: "", company: "", inquiryType: "", subject: "", message: "" };

function Contact() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMsg, setServerMsg] = useState("");
  const [hp, setHp] = useState("");
  const startedAt = useRef(Date.now());

  const set = (k: keyof typeof empty) => (e: { target: { value: string } }) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      setErrors(fieldErrors(parsed.error.issues));
      return;
    }
    setErrors({});
    setStatus("loading");
    try {
      const res = await submitInquiry({ data: { kind: "contact", data: parsed.data, website: hp, startedAt: startedAt.current } });
      if (res.ok) {
        setStatus("success");
        setForm(empty);
      } else {
        setStatus("error");
        setServerMsg(res.error);
      }
    } catch {
      setStatus("error");
      setServerMsg("Something went wrong. Please try again or email us directly.");
    }
  }

  const inv = (k: string) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-error` : undefined });

  return (
    <>
      <PageHero eyebrow="Contact Us" title="Let's talk about your project.">
        Send us a message and we'll respond as soon as we can.
      </PageHero>
      <section className="container-page grid gap-12 py-16 md:grid-cols-12 md:py-24">
        <aside className="space-y-4 md:col-span-4">
          <a href={`mailto:${site.email}`} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-soft">
            <Mail className="mt-0.5 size-5 text-brand" />
            <div><p className="text-sm text-muted-foreground">Email</p><p className="font-medium break-all">{site.email}</p></div>
          </a>
          <a href={site.phoneHref} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-soft">
            <Phone className="mt-0.5 size-5 text-brand" />
            <div><p className="text-sm text-muted-foreground">Phone</p><p className="font-medium">{site.phone}</p></div>
          </a>
          <Link to="/book" className="flex items-start gap-4 rounded-2xl border border-border bg-brand-soft p-6">
            <CalendarDays className="mt-0.5 size-5 text-brand" />
            <div><p className="font-medium">Prefer a call?</p><p className="text-sm text-muted-foreground">Request a consultation time.</p></div>
          </Link>
        </aside>

        <form onSubmit={onSubmit} noValidate className="relative space-y-5 rounded-2xl border border-border bg-card p-6 shadow-soft md:col-span-8 md:p-10">
          <Honeypot value={hp} onChange={setHp} />
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="fullName" label="Full Name" error={errors["fullName"]}>
              <input id="fullName" className="field" autoComplete="name" value={form.fullName} onChange={set("fullName")} {...inv("fullName")} />
            </Field>
            <Field id="email" label="Business Email" error={errors["email"]}>
              <input id="email" type="email" className="field" autoComplete="email" value={form.email} onChange={set("email")} {...inv("email")} />
            </Field>
            <Field id="company" label="Company Name" optional error={errors["company"]}>
              <input id="company" className="field" autoComplete="organization" value={form.company} onChange={set("company")} />
            </Field>
            <Field id="inquiryType" label="Inquiry Type" error={errors["inquiryType"]}>
              <select id="inquiryType" className="field" value={form.inquiryType} onChange={set("inquiryType")} {...inv("inquiryType")}>
                <option value="">Select…</option>
                {inquiryTypes.map((t) => <option key={t}>{t}</option>)}
              </select>
            </Field>
          </div>
          <Field id="subject" label="Subject" error={errors["subject"]}>
            <input id="subject" className="field" value={form.subject} onChange={set("subject")} {...inv("subject")} />
          </Field>
          <Field id="message" label="Message" error={errors["message"]}>
            <textarea id="message" rows={6} className="field" value={form.message} onChange={set("message")} {...inv("message")} />
          </Field>
          {status === "success" && <FormStatus status="success" message="Thank you — your message has been sent. We'll be in touch soon." />}
          {status === "error" && <FormStatus status="error" message={serverMsg} />}
          <Button type="submit" size="lg" className="h-12 w-full sm:w-auto" disabled={status === "loading"}>
            {status === "loading" ? <><Loader2 className="size-4 animate-spin" /> Sending…</> : "Send Message"}
          </Button>
        </form>
      </section>
    </>
  );
}
