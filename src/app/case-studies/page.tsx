import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/lib/data";
import { PageHero, PageShell } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerChildren } from "@/components/ui/StaggerChildren";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Deep dives into how OUTSTRIP solves product, platform, and growth challenges.",
};

export default function CaseStudiesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Case studies"
        title="Problems, process, and measurable outcomes"
        description="How we partner with teams to diagnose friction and ship systems that move the numbers that matter."
      />

      <section className="section-pad pb-24 md:pb-32">
        <StaggerChildren className="container-wide space-y-8">
          {caseStudies.map((study, i) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              data-stagger-item
              className="group block overflow-hidden rounded-lg border border-border bg-surface transition hover:border-accent/40 hover:shadow-[0_30px_80px_-40px_rgba(7,17,31,0.4)]"
            >
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div className="p-8 md:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-deep">
                    {String(i + 1).padStart(2, "0")} · {study.industry}
                  </p>
                  <h2 className="font-display mt-3 text-2xl text-ink transition group-hover:text-accent-deep md:text-3xl">
                    {study.title}
                  </h2>
                  <p className="mt-4 text-sm text-muted">Client · {study.client}</p>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
                    {study.challenge}
                  </p>
                  <span className="mt-6 inline-flex text-sm font-semibold text-ink">
                    Read case study →
                  </span>
                </div>
                <div className="flex flex-col justify-center gap-3 border-t border-border bg-surface-soft p-8 lg:border-l lg:border-t-0 md:p-10">
                  {study.results.map((r) => (
                    <p key={r} className="border-l-2 border-accent pl-4 text-sm font-medium text-ink">
                      {r}
                    </p>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </StaggerChildren>

        <Reveal className="container-wide mt-12 text-center">
          <Link href="/projects" className="text-sm font-semibold text-accent-deep hover:underline">
            Browse the full portfolio →
          </Link>
        </Reveal>
      </section>
    </PageShell>
  );
}
