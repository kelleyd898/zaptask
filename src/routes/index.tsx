import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, ShieldCheck, MessagesSquare, Gauge, Building2, ShoppingBag, HeartPulse, GraduationCap, Briefcase, Truck } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { pageHead } from "@/lib/seo";
import { services } from "@/data/services";
import { site } from "@/config/site";
import { SectionHeading, ConsultationCTA } from "@/components/site/layout";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      path: "/",
      title: "Zaptask LLC — Website & Web App Development for Small Businesses",
      description:
        "Zaptask LLC builds websites, landing pages and business web applications for small businesses across the United States and Canada. Owner-operated, maintenance included.",
    }),
  component: Home,
});

const reasons = [
  { icon: Compass, title: "Requirements first", text: "We start by understanding your operations and goals before recommending a solution." },
  { icon: MessagesSquare, title: "Clear communication", text: "Straightforward updates and plain explanations throughout every project." },
  { icon: ShieldCheck, title: "Maintainable code", text: "Clean, documented engineering that your team can own and extend." },
  { icon: Gauge, title: "Performance minded", text: "Fast, accessible and responsive builds across devices and browsers." },
];

const steps = [
  { n: "01", title: "Discover", text: "Clarify objectives, constraints and requirements." },
  { n: "02", title: "Plan", text: "Define scope, architecture and an agreed approach." },
  { n: "03", title: "Build", text: "Design and engineer in reviewable increments." },
  { n: "04", title: "Support", text: "Launch assistance, updates and ongoing maintenance." },
];

const industries = [
  { icon: Briefcase, label: "Professional Services" },
  { icon: ShoppingBag, label: "Retail & E-commerce" },
  { icon: HeartPulse, label: "Health & Wellness" },
  { icon: GraduationCap, label: "Education" },
  { icon: Building2, label: "Real Estate" },
  { icon: Truck, label: "Logistics" },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-hero">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-70" aria-hidden="true" />
        <div className="container-page relative py-24 md:py-36">
          <p className="eyebrow">Software Development · {site.markets}</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.03] md:text-7xl">
            Technology solutions built around <span className="text-brand">your business.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Zaptask LLC builds and maintains websites, landing pages and business web applications for small businesses across the United States and Canada.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/services" className={cn(buttonVariants({ size: "lg" }), "h-12 px-6")}>
              Explore Our Services <ArrowRight className="size-4" />
            </Link>
            <Link to="/book" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 px-6 bg-card")}>
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page grid gap-10 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-5">
          <p className="eyebrow">Who we are</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">A focused software and technology partner.</h2>
        </div>
        <div className="space-y-5 text-lg text-muted-foreground md:col-span-7">
          <p>Zaptask handles website development, landing pages, frontend development, website maintenance and business web applications — the digital work a small business actually needs, without an agency attached.</p>
          <p>We are currently working with small businesses, and we keep things simple: clear scope, plain updates and one point of contact from start to finish.</p>
          <Link to="/about" className="inline-flex items-center gap-1.5 text-base font-medium text-brand hover:underline">
            More about Zaptask <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/60">
        <div className="container-page grid gap-6 py-16 md:grid-cols-2 md:py-20">
          <article className="rounded-2xl border border-border bg-card p-8 shadow-soft">
            <p className="eyebrow">{site.focus.audienceEyebrow}</p>
            <h2 className="mt-3 text-2xl font-semibold">Built for small businesses</h2>
            <p className="mt-3 text-muted-foreground">{site.focus.audienceLine}</p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-8 shadow-soft">
            <p className="eyebrow">{site.focus.ownerEyebrow}</p>
            <h2 className="mt-3 text-2xl font-semibold">You work with the owner</h2>
            <p className="mt-3 text-muted-foreground">{site.focus.ownerLine}</p>
          </article>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="container-page py-20 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Services" title="Core services" intro="Websites, landing pages, frontend builds, ongoing maintenance and business web applications." />
            <Link to="/services" className={buttonVariants({ variant: "outline" })}>All services</Link>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s) => (
              <Link key={s.slug} to="/services" hash={s.slug} className="group bg-card p-7 transition-colors hover:bg-background">
                <s.icon className="size-5 text-brand" />
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.summary}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-foreground opacity-60 transition-opacity group-hover:opacity-100">
                  Learn more <ArrowRight className="size-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <SectionHeading eyebrow="Why Zaptask" title="Why businesses choose to work with us" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <span className="grid size-10 place-items-center rounded-lg bg-brand-soft text-brand"><r.icon className="size-5" /></span>
              <h3 className="mt-5 font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/60">
        <div className="container-page py-20 md:py-28">
          <SectionHeading eyebrow="Our approach" title="A clear, structured way of working" />
          <ol className="mt-12 grid gap-8 md:grid-cols-4">
            {steps.map((s) => (
              <li key={s.n} className="border-t border-foreground/15 pt-6">
                <span className="font-mono text-sm text-brand">{s.n}</span>
                <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <SectionHeading eyebrow="Industries" title="Industries we support" intro="Small businesses of many kinds that rely on dependable digital tools." />
        <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {industries.map((i) => (
            <li key={i.label} className="flex flex-col items-start gap-4 rounded-xl border border-border bg-card p-5">
              <i.icon className="size-5 text-muted-foreground" />
              <span className="text-sm font-medium">{i.label}</span>
            </li>
          ))}
        </ul>
      </section>

      <ConsultationCTA />
    </>
  );
}
