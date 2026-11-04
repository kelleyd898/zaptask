import type { ReactNode } from "react";
import { PageHero } from "./layout";
import { site } from "@/config/site";

export function LegalPage({ title, sections }: { title: string; sections: { h: string; body: ReactNode }[] }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title}>
        Effective {site.legal.effectiveDate}
      </PageHero>
      <article className="container-page max-w-3xl py-16 md:py-24">
        <div className="space-y-10">
          {sections.map((s) => (
            <section key={s.h}>
              <h2 className="text-xl font-semibold">{s.h}</h2>
              <div className="mt-3 space-y-3 leading-relaxed text-muted-foreground">{s.body}</div>
            </section>
          ))}
        </div>
      </article>
    </>
  );
}
