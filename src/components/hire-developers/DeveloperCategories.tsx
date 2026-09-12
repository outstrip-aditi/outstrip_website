import { FiArrowUpRight } from "react-icons/fi";
import { developerCategories } from "@/lib/developers";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerChildren } from "@/components/ui/StaggerChildren";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { FeatureIcon } from "@/components/industries/FeatureIcon";

export function DeveloperCategories() {
  return (
    <section className="section-pad py-20 md:py-28">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            eyebrow="Developer categories"
            title="Every role you need, already vetted"
            description="From a single senior engineer to a full cross-functional pod — pick the specialization your roadmap needs."
          />
        </Reveal>

        <StaggerChildren className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {developerCategories.map((category) => (
            <article
              key={category.slug}
              data-stagger-item
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-surface p-6 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_60px_-30px_rgba(13,159,138,0.3)]"
            >
              <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-accent/8 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 flex items-start justify-between gap-3">
                <FeatureIcon
                  icon={category.icon}
                  className="h-11 w-11 transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/10"
                />
                <span className="rounded-full bg-surface-soft px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                  {category.experience}
                </span>
              </div>

              <h3 className="font-display relative z-10 mt-5 text-lg text-ink">
                {category.title}
              </h3>
              <p className="relative z-10 mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-accent-deep">
                {category.tagline}
              </p>
              <p className="relative z-10 mt-3 text-sm leading-relaxed text-muted">
                {category.description}
              </p>

              <div className="relative z-10 mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-surface-soft px-2.5 py-1 text-xs font-medium text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="relative z-10 mt-6 flex items-center gap-1.5 text-xs font-semibold text-accent-deep opacity-0 transition-all duration-300 group-hover:opacity-100">
                Hire a {category.title.toLowerCase().replace(/s$/, "")}
                <FiArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              <div className="absolute bottom-0 left-6 right-6 h-px bg-border">
                <div className="h-full w-0 bg-accent transition-all duration-500 group-hover:w-1/2" />
              </div>
            </article>
          ))}
        </StaggerChildren>

        <Reveal className="mt-10 flex justify-center">
          <MagneticButton href="/contact" variant="secondary">
            Don&apos;t see the role you need?
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
