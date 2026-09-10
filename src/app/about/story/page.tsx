import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig, stats } from "@/lib/data";
import { images } from "@/lib/images";
import { PageHero, PageShell } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const milestones = [
  {
    year: String(siteConfig.founded),
    title: "Founded in Jaipur",
    description:
      "Outstrip InfoTech opens its doors to close the gap between ambitious ideas and dependable software for SMEs.",
  },
  {
    year: "2013",
    title: "ISO-certified delivery",
    description:
      "Formalized our engineering and information-security practices, earning ISO 9001:2015 and ISO/IEC 27001:2013 certification.",
  },
  {
    year: "2019",
    title: "Full-stack studio",
    description:
      "Grew into a complete software company — design, engineering, QA, and growth under one roof for every engagement.",
  },
  {
    year: "Today",
    title: "50+ specialists, global clients",
    description:
      "A cross-functional team shipping web, mobile, and commerce products for clients across 10+ countries.",
  },
];

export const metadata: Metadata = {
  title: "Our Story",
  description: `How ${siteConfig.name} grew from a Jaipur startup into an ISO-certified software company serving clients worldwide.`,
};

export default function StoryPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Story"
        title="Built one dependable release at a time"
        description={`Founded in ${siteConfig.founded}, ${siteConfig.name} grew from a small Jaipur team into a full software studio — without losing the close, accountable way we work with clients.`}
      />

      <section className="section-pad py-20 md:py-28">
        <div className="container-wide grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
              <Image
                src={images.ourStory.src}
                alt={images.ourStory.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="Where it started"
              title="Solving a gap we saw firsthand"
            />
            <div className="mt-6 space-y-5 text-muted leading-relaxed">
              <p>
                {siteConfig.legalName} was established to solve a recurring problem: small and
                medium enterprises needed enterprise-grade software, but most vendors were built
                for enterprise budgets and timelines, not SME realities.
              </p>
              <p>
                Under the leadership of Mr. Gaurav Jain, we built a team that could move at
                startup speed while holding ISO-certified process discipline — so clients get
                dependable delivery without the overhead.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad border-y border-border bg-surface py-20 md:py-28">
        <div className="container-wide">
          <Reveal>
            <SectionHeading eyebrow="Timeline" title="Milestones along the way" />
          </Reveal>

          <div className="mt-14 space-y-10 border-l border-border pl-8">
            {milestones.map((m) => (
              <div key={m.title} className="relative">
                <span className="absolute -left-[2.35rem] top-1 h-3 w-3 rounded-full border-2 border-accent bg-background" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-deep">
                  {m.year}
                </p>
                <h3 className="font-display mt-2 text-xl text-ink">{m.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-ink py-20 text-white md:py-28">
        <div className="container-wide">
          <Reveal>
            <SectionHeading light eyebrow="By the numbers" title="Where we stand today" />
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-3">
            {stats.slice(0, 6).map((s) => (
              <div key={s.label}>
                <p className="font-display text-4xl">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-white/55">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
