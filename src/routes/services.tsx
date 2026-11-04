import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { pageHead } from "@/lib/seo";
import { services } from "@/data/services";
import { site } from "@/config/site";
import { PageHero, ConsultationCTA, SectionHeading } from "@/components/site/layout";

export const Route = createFileRoute("/services")({
  head: () =>
    pageHead({
      path: "/services",
      title: "Services — Websites, Landing Pages, Frontend & Web Apps | Zaptask LLC",
      description: "Website development, landing pages, frontend development, website maintenance and business web applications for small businesses in the US and Canada.",
    }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="Websites and web tools, done properly.">
        Zaptask builds and maintains websites, landing pages and business web applications for small businesses across the United States and Canada. Every project is handled personally by the owner.
      </PageHero>

      <nav aria-label="Services" className="border-b border-border bg-card">
        <div className="container-page flex gap-2 overflow-x-auto py-4">
          {services.map((s) => (
            <a key={s.slug} href={`#${s.slug}`} className="shrink-0 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground">
              {s.title}
            </a>
          ))}
        </div>
      </nav>

      <div className="container-page divide-y divide-border">
        {services.map((s, i) => (
          <section key={s.slug} id={s.slug} className="grid scroll-mt-24 gap-8 py-14 md:grid-cols-12 md:py-20">
            <div className="md:col-span-5">
              <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              <div className="mt-3 flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-lg bg-brand-soft text-brand"><s.icon className="size-5" /></span>
                <h2 className="text-2xl font-semibold md:text-3xl">{s.title}</h2>
              </div>
              <p className="mt-4 text-muted-foreground">{s.summary}</p>
              <Link to="/book" search={{ service: s.title }} className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline">
                {s.cta} <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:col-span-7">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-sm font-semibold">What it covers</h3>
                <ul className="mt-4 space-y-2.5">
                  {s.covers.map((c) => (
                    <li key={c} className="flex gap-2 text-sm text-muted-foreground"><Check className="mt-0.5 size-4 shrink-0 text-brand" />{c}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-sm font-semibold">Business benefits</h3>
                <ul className="mt-4 space-y-2.5">
                  {s.benefits.map((c) => (
                    <li key={c} className="flex gap-2 text-sm text-muted-foreground"><Check className="mt-0.5 size-4 shrink-0 text-success" />{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      {site.portfolio.enabled && site.portfolio.projects.length > 0 && (
        <section className="border-t border-border bg-card">
          <div className="container-page py-20">
            <SectionHeading eyebrow="Portfolio" title="Selected work" />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {site.portfolio.projects.map((p) => (
                <article key={p.title} className="rounded-2xl border border-border p-6">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
                  <p className="mt-4 text-xs text-muted-foreground">{p.services.join(" · ")}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <ConsultationCTA />
    </>
  );
}
