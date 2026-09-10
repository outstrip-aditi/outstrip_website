import type { Metadata } from "next";
import Image from "next/image";
import { engagementModels, services, siteConfig } from "@/lib/data";
import { images } from "@/lib/images";
import { PageHero, PageShell } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerChildren } from "@/components/ui/StaggerChildren";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TechMarquee } from "@/components/home/TechMarquee";
import { ProcessSection } from "@/components/home/ProcessSection";

export const metadata: Metadata = {
  title: "Hire Developers",
  description: `Hire vetted, senior developers from ${siteConfig.name} — dedicated teams, fixed-scope builds, or staff augmentation.`,
};

export default function HireDevelopersPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Hire Developers"
        title="Senior engineers, ready to embed in your roadmap"
        description="Skip the months-long hiring cycle. Bring on vetted developers from OUTSTRIP under the engagement model that fits your project."
      >
        <div className="mt-8">
          <MagneticButton href="/contact">Talk to us about your team</MagneticButton>
        </div>
      </PageHero>

      <section className="section-pad pb-4 pt-4">
        <div className="container-wide">
          <Reveal>
            <div className="relative aspect-[21/9] overflow-hidden rounded-xl">
              <Image
                src={images.hireDevelopers.src}
                alt={images.hireDevelopers.alt}
                fill
                sizes="100vw"
                priority
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad py-20 md:py-28">
        <div className="container-wide">
          <Reveal>
            <SectionHeading
              eyebrow="Engagement models"
              title="Pick the model that fits how you work"
            />
          </Reveal>
          <StaggerChildren className="mt-12 grid gap-6 md:grid-cols-3">
            {engagementModels.map((model) => (
              <article
                key={model.title}
                data-stagger-item
                className="rounded-lg border border-border bg-surface p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-deep">
                  {model.bestFor}
                </p>
                <h3 className="font-display mt-3 text-xl text-ink">{model.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{model.description}</p>
              </article>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <TechMarquee />

      <section className="section-pad py-20 md:py-28">
        <div className="container-wide">
          <Reveal>
            <SectionHeading eyebrow="Skills on tap" title="Roles we place most often" />
          </Reveal>
          <StaggerChildren className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.slug}
                data-stagger-item
                className="rounded-lg border border-border bg-surface p-6 transition hover:border-accent/40"
              >
                <h3 className="font-display text-lg text-ink">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{service.short}</p>
              </article>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <ProcessSection />
    </PageShell>
  );
}
