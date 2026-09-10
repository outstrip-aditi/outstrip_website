import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/data";
import { PageHero, PageShell } from "@/components/layout/PageHero";
import { StaggerChildren } from "@/components/ui/StaggerChildren";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected OUTSTRIP portfolio — e-commerce, healthcare, logistics, education, and more.",
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Portfolio"
        title="Work that earns its place in production"
        description="A curated look at platforms we’ve shipped — across commerce, healthcare, mobility, education, and travel."
      >
        <div className="mt-8">
          <MagneticButton href="/case-studies" variant="secondary">
            Read case studies
          </MagneticButton>
        </div>
      </PageHero>

      <section className="section-pad pb-24 md:pb-32">
        <StaggerChildren className="container-wide grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              id={project.slug}
              data-stagger-item
              className="group scroll-mt-28 overflow-hidden rounded-lg border border-border bg-surface"
            >
              <div
                className="aspect-[16/10] transition duration-700 group-hover:scale-[1.03]"
                style={{
                  background: `linear-gradient(140deg, ${project.color}55, ${project.color}15 45%, #d8e0ea)`,
                }}
              />
              <div className="p-7">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
                <h2 className="font-display mt-3 text-2xl text-ink">{project.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>
                <p className="mt-4 text-sm font-semibold text-accent-deep">{project.outcome}</p>
              </div>
            </article>
          ))}
        </StaggerChildren>

        <Reveal className="container-wide mt-16">
          <div className="flex flex-col items-start gap-4 rounded-lg border border-border bg-surface-soft p-8 md:flex-row md:items-center md:justify-between">
            <p className="font-display text-xl text-ink md:text-2xl">
              Have a product brief ready?
            </p>
            <div className="flex flex-wrap gap-3">
              <MagneticButton href="/contact">Talk to us</MagneticButton>
              <Link
                href="/case-studies"
                className="inline-flex items-center text-sm font-semibold text-accent-deep hover:underline"
              >
                Case studies →
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
