import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/data";
import { PageShell } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) return { title: "Case Study" };
  return {
    title: study.title,
    description: study.challenge,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) notFound();

  return (
    <PageShell>
      <article className="relative overflow-hidden mesh-bg pb-10 pt-32 md:pt-40">
        <div className="section-pad container-max">
          <Link
            href="/case-studies"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-deep hover:underline"
          >
            ← Case studies
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            {study.industry} · {study.client}
          </p>
          <h1 className="font-display mt-4 text-4xl leading-tight text-ink md:text-5xl">
            {study.title}
          </h1>
          <div className="mt-6 flex flex-wrap gap-2">
            {study.services.map((s) => (
              <span
                key={s}
                className="rounded border border-border bg-surface px-3 py-1 text-xs font-medium"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </article>

      <section className="section-pad py-16 md:py-24">
        <div className="container-max space-y-14">
          <Reveal>
            <h2 className="font-display text-2xl text-ink">Challenge</h2>
            <p className="mt-4 text-muted leading-relaxed">{study.challenge}</p>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-2xl text-ink">Approach</h2>
            <p className="mt-4 text-muted leading-relaxed">{study.approach}</p>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-2xl text-ink">Results</h2>
            <ul className="mt-6 space-y-3">
              {study.results.map((r) => (
                <li
                  key={r}
                  className="border-l-2 border-accent pl-4 text-base font-medium text-ink"
                >
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <div className="rounded-lg bg-ink p-8 text-white md:p-10">
              <p className="font-display text-2xl">Want similar outcomes?</p>
              <p className="mt-2 text-sm text-white/60">
                Let’s map your challenge and outline a delivery plan.
              </p>
              <div className="mt-6">
                <MagneticButton href="/contact" className="!bg-accent !text-ink">
                  Start a conversation
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
