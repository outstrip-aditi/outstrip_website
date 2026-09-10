import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { siteConfig } from "@/lib/data";
import { images } from "@/lib/images";
import { industries } from "@/lib/industries";
import { PageHero, PageShell } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerChildren } from "@/components/ui/StaggerChildren";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { IndustryIcon } from "@/components/industries/IndustryIcon";

export const metadata: Metadata = {
  title: "Industries",
  description: `Domain fluency across e-commerce, healthcare, education, and more — how ${siteConfig.name} builds for how your industry actually operates.`,
};

export default function IndustriesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Industries"
        title="Software shaped for your domain"
        description="Every industry has different constraints — compliance, seasonality, workflows. We build with that context from day one instead of retrofitting it later."
      >
        <div className="mt-8">
          <MagneticButton href="/contact">Discuss your industry</MagneticButton>
        </div>
      </PageHero>

      {/* Quick-link grid: every industry, one click away */}
      <section className="section-pad py-16 md:py-20">
        <div className="container-wide">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-deep">
              Browse by industry
            </p>
            <h2 className="font-display mt-2 text-2xl text-ink sm:text-3xl">
              Jump straight to your domain
            </h2>
          </Reveal>

          <StaggerChildren className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                data-stagger-item
                className="group flex items-center gap-3 rounded-xl border border-border bg-surface p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_16px_40px_-24px_rgba(7,17,31,0.3)]"
              >
                <IndustryIcon icon={industry.icon} className="h-10 w-10 shrink-0" />
                <span className="min-w-0 flex-1 truncate text-sm font-semibold text-ink transition-colors group-hover:text-accent-deep">
                  {industry.title}
                </span>
                <FiArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-deep" />
              </Link>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <IndustriesSection />
    </PageShell>
  );
}
