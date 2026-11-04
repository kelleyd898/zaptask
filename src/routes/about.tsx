import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Workflow, BadgeCheck } from "lucide-react";
import { pageHead } from "@/lib/seo";
import { PageHero, ConsultationCTA } from "@/components/site/layout";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      path: "/about",
      title: "About Zaptask LLC — Software Engineering & Technology Services",
      description: "Learn about Zaptask LLC, a technology services company focused on software engineering, digital product development and practical technology solutions.",
    }),
  component: About,
});

const blocks = [
  { icon: Target, title: "Our Mission", text: "To help businesses solve real operational challenges with dependable, well-engineered software and clear technical guidance." },
  { icon: Eye, title: "Our Vision", text: "To be a trusted technology partner for businesses across the United States and Canada, known for clarity, craftsmanship and reliability." },
  { icon: Workflow, title: "Our Working Approach", text: "We listen first, define scope carefully, build in reviewable stages and keep you informed at every step. Decisions are explained in plain language." },
  { icon: BadgeCheck, title: "Quality and Reliability", text: "We prioritize clean architecture, testing, accessibility and documentation so that what we deliver remains maintainable long after launch." },
];

function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Practical technology, thoughtfully delivered.">
        Zaptask LLC is a technology services company focused on software engineering, digital product development and practical technology solutions.
      </PageHero>
      <section className="container-page grid gap-10 py-20 md:grid-cols-12 md:py-28">
        <h2 className="text-3xl font-semibold md:col-span-4 md:text-4xl">Who We Are</h2>
        <div className="space-y-5 text-lg text-muted-foreground md:col-span-8">
          <p>We work with businesses to understand their requirements and deliver solutions aligned with their operational and technical goals.</p>
          <p>Our work spans custom software engineering, web and mobile application design, IT consulting and software architecture — always grounded in what your organization actually needs.</p>
        </div>
      </section>
      <section className="border-t border-border bg-card">
        <div className="container-page grid gap-6 py-20 md:grid-cols-2 md:py-28">
          {blocks.map((b) => (
            <article key={b.title} className="rounded-2xl border border-border bg-background p-8">
              <b.icon className="size-6 text-brand" />
              <h2 className="mt-6 text-2xl font-semibold">{b.title}</h2>
              <p className="mt-3 text-muted-foreground">{b.text}</p>
            </article>
          ))}
        </div>
      </section>
      <ConsultationCTA />
    </>
  );
}
