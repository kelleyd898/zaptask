import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Mail, Phone, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { nav, site } from "@/config/site";
import { services } from "@/data/services";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight text-foreground" aria-label="Zaptask LLC home">
      <span className="grid size-7 place-items-center rounded-md bg-primary text-primary-foreground">
        <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
          <path d="M13.5 2 4 14h6.5L9.5 22 20 9.5h-6.5L13.5 2Z" />
        </svg>
      </span>
      <span>
        Zaptask<span className="text-muted-foreground font-normal"> LLC</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const linkCls = "text-sm text-muted-foreground transition-colors hover:text-foreground";
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className={linkCls} activeProps={{ className: "text-foreground" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link to="/book" className={buttonVariants({ size: "sm" })}>
            Book a Consultation
          </Link>
        </div>
        <button
          className="grid size-11 place-items-center rounded-md md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border bg-background md:hidden">
          <div className="container-page flex flex-col py-3">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-3 text-base text-foreground">
                {n.label}
              </Link>
            ))}
            <Link to="/book" onClick={() => setOpen(false)} className={cn(buttonVariants(), "mt-2 h-11")}>
              Book a Consultation
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  const h = "text-xs font-mono uppercase tracking-wider text-ink-foreground/50";
  const a = "text-sm text-ink-foreground/75 transition-colors hover:text-ink-foreground";
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="text-lg font-semibold">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm text-ink-foreground/65">
            Software development and technology services for businesses across the {site.markets}.
          </p>
          <div className="mt-6 space-y-2">
            <a href={`mailto:${site.email}`} className={cn(a, "flex items-center gap-2")}>
              <Mail className="size-4" /> {site.email}
            </a>
            <a href={site.phoneHref} className={cn(a, "flex items-center gap-2")}>
              <Phone className="size-4" /> {site.phone}
            </a>
            {site.address && <p className="text-sm text-ink-foreground/65">{site.address}</p>}
          </div>
        </div>
        <div className="md:col-span-2">
          <p className={h}>Company</p>
          <ul className="mt-4 space-y-3">
            {nav.map((n) => (
              <li key={n.to}><Link to={n.to} className={a}>{n.label}</Link></li>
            ))}
            <li><Link to="/book" className={a}>Book a Consultation</Link></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className={h}>Services</p>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {services.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link to="/services" hash={s.slug} className={a}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className={h}>Legal</p>
          <ul className="mt-4 space-y-3">
            <li><Link to="/privacy" className={a}>Privacy Policy</Link></li>
            <li><Link to="/terms" className={a}>Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-ink-foreground/55 sm:flex-row sm:justify-between">
          <p>© 2026 Zaptask LLC. All rights reserved.</p>
          <p>Serving clients in the United States and Canada.</p>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-hero">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" aria-hidden="true" />
      <div className="container-page relative py-20 md:py-28">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.08] md:text-6xl">{title}</h1>
        {children && <div className="mt-6 max-w-2xl text-lg text-muted-foreground">{children}</div>}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-muted-foreground">{intro}</p>}
    </div>
  );
}

export function ConsultationCTA() {
  return (
    <section className="container-page py-20 md:py-28">
      <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-14 text-ink-foreground md:px-16 md:py-20">
        <div className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-brand/30 blur-3xl" aria-hidden="true" />
        <div className="relative max-w-2xl">
          <h2 className="text-3xl font-semibold md:text-4xl">Have a project in mind?</h2>
          <p className="mt-4 text-ink-foreground/70">
            Share your goals and requirements. We'll review your request and follow up to schedule a conversation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/book" className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "h-12")}>
              Book a Consultation <ArrowRight className="size-4" />
            </Link>
            <Link to="/contact" className="inline-flex h-12 items-center rounded-md border border-ink-foreground/20 px-6 text-sm font-medium transition-colors hover:bg-ink-foreground/10">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
