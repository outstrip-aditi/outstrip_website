import type { Metadata } from "next";
import { values, careers, siteConfig } from "@/lib/data";
import { videos } from "@/lib/videos";
import { PageHero, PageShell } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerChildren } from "@/components/ui/StaggerChildren";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BackgroundVideo } from "@/components/ui/BackgroundVideo";

export const metadata: Metadata = {
  title: "Careers at OUTSTRIP",
  description: `Life at ${siteConfig.name} — culture, values, and how to join the team.`,
};

export default function AboutCareersPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Careers"
        title="Life at OUTSTRIP"
        description="A small, senior team that cares about craft — real ownership on real products, not busywork on a bench."
      >
        <div className="mt-8">
          <MagneticButton href="/careers">View open roles</MagneticButton>
        </div>
      </PageHero>

      <section className="section-pad py-20 md:py-28">
        <div className="container-wide grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <BackgroundVideo
              src={videos.careersCulture.src}
              poster={videos.careersCulture.poster}
              alt={videos.careersCulture.alt}
              className="aspect-[4/5] rounded-xl"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="Culture"
              title="What you'll find here"
              description="Fully functional delivery, honest communication, and secure-by-default engineering — the same standards we promise clients, applied to how we treat each other."
            />
          </Reveal>
        </div>
      </section>

      <section className="section-pad border-y border-border bg-surface py-20 md:py-28">
        <div className="container-wide">
          <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <article
                key={v.title}
                data-stagger-item
                className="rounded-lg border border-border bg-background p-6"
              >
                <h3 className="font-display text-lg text-ink">{v.title}</h3>
                <p className="mt-3 text-sm text-muted">{v.description}</p>
              </article>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="section-pad py-20 md:py-28">
        <div className="container-wide">
          <Reveal className="flex flex-col items-start justify-between gap-6 rounded-lg bg-ink px-8 py-10 text-white md:flex-row md:items-center md:px-12">
            <div>
              <p className="font-display text-2xl md:text-3xl">
                {careers.length} open role{careers.length === 1 ? "" : "s"} right now
              </p>
              <p className="mt-2 max-w-xl text-sm text-white/60">
                Engineering, design, and growth positions in Jaipur — hybrid and remote friendly.
              </p>
            </div>
            <MagneticButton
              href="/careers"
              className="!bg-accent !text-ink hover:!bg-accent-bright shrink-0"
            >
              See open positions
            </MagneticButton>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
