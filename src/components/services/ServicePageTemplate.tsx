import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import { industries } from "@/lib/industries";
import { type ServiceDetail } from "@/lib/services";
import { PageShell } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerChildren } from "@/components/ui/StaggerChildren";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { FeatureIcon } from "@/components/industries/FeatureIcon";
import { TechLogo } from "@/components/services/TechLogo";
import { ProcessStepper } from "@/components/services/ProcessStepper";
import { BenefitsGrid } from "@/components/services/BenefitsGrid";
import { ServiceEnquiryForm } from "@/components/services/ServiceEnquiryForm";
import { ServiceFaqAccordion } from "@/components/services/ServiceFaqAccordion";
import { ProcessSection } from "../home/ProcessSection";

export function ServicePageTemplate({ service }: { service: ServiceDetail }) {
  const industrySlugs = new Set(industries.map((industry) => industry.slug));
  const overviewImage = service.overview.heroImage;
  const overview = service.overview;

  return (
    <PageShell>
      <section className="relative overflow-hidden mesh-bg pb-16 pt-32 md:pb-20 md:pt-38">
        <div className="grid-overlay pointer-events-none absolute inset-0" />
        <div className="section-pad container-wide relative">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
            <div className="mt-16">
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-deep">
                  {service.category} · {service.tagline}
                </p>
                <h1 className="font-display mt-4 max-w-xl text-2xl leading-[1.05] tracking-tight text-ink sm:text-3xl md:text-4xl">
                  {service.headline}
                </h1>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
                  {service.intro}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <MagneticButton href="/contact">Start your project</MagneticButton>
                  <MagneticButton href="#process" variant="secondary">
                    See how we work
                  </MagneticButton>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6 sm:max-w-lg">
                  {service.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-muted">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1} className="flex justify-end">
              <ServiceEnquiryForm serviceTitle={service.title} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section-pad overflow-hidden py-16 md:py-20">
        <div className="container-wide">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
            <div className="flex flex-col">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-accent" />
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-deep">
                    Overview
                  </p>
                </div>

                <h2 className="font-display mt-5 text-2xl font-semibold leading-[1.08] tracking-[-0.035em] text-ink sm:text-3xl md:text-4xl">
                  {service.overview.title}
                </h2>

                {service.overview.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 24)}
                    className="mt-4 text-sm leading-6 text-muted md:text-base md:leading-7"
                  >
                    {paragraph}
                  </p>
                ))}
              </Reveal>

              <div className="mt-6">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-8 bg-accent" />
                  <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">
                    Types of SMO
                  </h3>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  {overview?.types?.map((type) => (
                    <div key={type.number} className="relative border-l-2 border-accent/30 pl-5">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold tracking-[0.15em] text-accent">
                          {type.number}
                        </span>
                        <h4 className="font-display text-base font-semibold text-ink">
                          {type.title}
                        </h4>
                      </div>

                      <div className="mt-3 flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <p className="text-sm leading-6 text-muted">{type.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* OVERVIEW IMAGE */}
            {overviewImage && (
              <Reveal delay={0.12}>
                <div className="relative">
                  <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
                  <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent-bright/10 blur-3xl" />
                  <div className="relative z-10 flex justify-center">
                    <Image
                      src={overviewImage}
                      alt={`${service.overview.title} - OUTSTRIP`}
                      width={500}
                      height={340}
                      className="h-auto w-[600px] max-w-full object-contain transition-transform duration-700 hover:scale-105 sm:w-[530px] md:w-[550px]"
                    />
                  </div>
                  {/* Floating label */}
                  <div className="absolute -bottom-7 left-2 z-20 rounded-lg border border-border bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md">
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-accent-deep">
                      {service.category}
                    </p>
                    <p className="mt-1.5 font-display text-sm font-semibold text-ink">
                      {service.shortTitle}
                    </p>
                    <div className="mt-1 h-0.5 w-9 rounded-full bg-accent" />
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE THIS SERVICE */}
      <section className="section-pad relative overflow-hidden border-t border-border bg-surface-soft py-20 md:py-28">
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-accent/6 blur-[120px]" />
        <div className="pointer-events-none absolute -left-40 bottom-10 h-80 w-80 rounded-full bg-accent/4 blur-[100px]" />

        <div className="container-wide relative z-10">
          <Reveal>
            <SectionHeading
              eyebrow="Why choose us"
              title={`Why teams choose OUTSTRIP for ${service.shortTitle}`}
              description="We combine strategy, execution, and continuous optimization to create work that supports your business goals — not just deliver another service."
            />
          </Reveal>

          {/* Bento Grid */}
          <StaggerChildren className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {service.whyChooseUs.map((item, index) => {
              const isFeature = index === 0;
              const isWide = index === 1 || index === 4 || index === 5;

              return (
                <article
                  key={item.title}
                  data-stagger-item
                  className={[
                    "group relative overflow-hidden rounded-xl border border-border bg-white p-5",
                    "transition-all duration-500 hover:-translate-y-1 hover:border-accent/40",
                    "hover:shadow-[0_20px_50px_-30px_rgba(7,17,31,0.3)]",
                    (isFeature || isWide) && "lg:col-span-2",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {/* Background number */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-5 -top-3 z-0 select-none font-display text-[9rem] font-bold leading-none tracking-[-0.12em] text-accent/4.5 transition-all duration-500 group-hover:text-accent/8"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Top */}
                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-display text-base font-semibold leading-snug text-ink lg:text-lg">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
                        {item.description}
                      </p>
                    </div>

                    {/* Icon */}
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-soft transition-all duration-300 group-hover:border-accent/30 group-hover:bg-accent">
                      <FeatureIcon icon={item.icon ?? "check"} className="h-4 w-4" />
                    </span>
                  </div>

                  {/* Bottom */}
                  <div className="relative z-10 mt-5 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-muted">
                    <span>Our advantage</span>
                    <FiArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>

                  {/* Bottom border */}
                  <div className="absolute bottom-0 left-5 right-5 h-px bg-border">
                    <div className="h-full w-0 bg-accent transition-all duration-500 group-hover:w-1/2" />
                  </div>
                </article>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="section-pad border-t border-border bg-surface-soft py-16 md:py-20">
        <div className="container-wide">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
              <div className="lg:sticky lg:top-24">
                <SectionHeading
                  eyebrow="Key features"
                  title="What's included"
                  description={`Core capabilities delivered as part of every ${service.shortTitle} engagement.`}
                />
                <div className="mt-8 h-px w-20 bg-accent" />
              </div>

              <div className="divide-y divide-border border-y border-border">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="group flex items-center gap-4 py-5 transition-all duration-300 hover:pl-2"
                  >
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                      <FiCheck className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </div>
                    <p className="text-sm font-medium leading-6 text-ink transition-colors duration-300 group-hover:text-accent-deep md:text-base">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="section-pad relative overflow-hidden border-t border-border bg-surface-soft py-20 md:py-28">
        <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-accent/5 blur-[120px]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-accent/4 blur-[120px]" />

        <div className="container-wide relative z-10">
          <Reveal>
            <SectionHeading
              eyebrow="Technologies & tools"
              title="Built with the right technology for the job"
              description="A carefully selected stack that gives every project the right balance of performance, scalability, and maintainability."
            />
          </Reveal>

          <StaggerChildren className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.technologies.map((tech) => (
              <div
                key={tech.name}
                data-stagger-item
                className="group relative overflow-hidden rounded-lg border border-border bg-surface p-2 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_60px_-30px_rgba(13,159,138,0.35)]"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-accent/8 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex items-start">
                  {/* Technology Logo */}
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center transition-all duration-500 group-hover:scale-105">
                    <TechLogo
                      icon={tech.icon}
                      name={tech.name}
                      className="h-full w-full transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="min-w-0 pt-1">
                    <div className="flex items-center gap-2">
                      <p className="font-display text-base font-semibold text-ink">
                        {tech.name}
                      </p>
                      <span className="h-1.5 w-1.5 rounded-full bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>

                    <p className="mt-1.5 text-sm leading-6 text-muted">{tech.description}</p>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-5 right-5 h-px origin-left scale-x-0 bg-linear-to-r from-accent/70 via-accent/30 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* PROCESS */}
      <section
        id="process"
        className="section-pad relative overflow-hidden border-t border-white/10 bg-ink py-18 text-white md:py-20"
      >
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-accent/8 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-accent/5 blur-[120px]" />

        <div className="container-wide relative">
          <Reveal>
            <SectionHeading
              light
              eyebrow="How we work"
              title="Our development process"
              description="A clear, milestone-driven path from first conversation to launch."
            />
          </Reveal>

          <ProcessStepper steps={service.process} />
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section-pad relative overflow-hidden border-t border-border bg-surface-soft py-20 md:py-20">
        <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-accent/6 blur-[120px]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-accent/4 blur-[120px]" />

        <div className="container-wide relative z-10">
          <Reveal>
            <SectionHeading
              eyebrow="Benefits"
              title="What you gain"
              description={`The outcomes clients see from a well-executed ${service.shortTitle} engagement.`}
            />
          </Reveal>

          <BenefitsGrid benefits={service.benefits} />
        </div>
      </section>

      {/* INDUSTRIES SERVED */}
      {service.industriesServed.length > 0 && (
        <section className="section-pad py-16 md:py-20">
          <div className="container-wide">
            <Reveal>
              <SectionHeading
                eyebrow="Industries we serve"
                title="Built with domain context, not guesswork"
                description="This service shows up most often across the following industries."
              />
            </Reveal>

            <StaggerChildren className="mt-8 flex flex-wrap gap-3">
              {service.industriesServed.map((item) =>
                item.slug && industrySlugs.has(item.slug) ? (
                  <Link
                    key={item.label}
                    href={`/industries/${item.slug}`}
                    data-stagger-item
                    className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent-deep"
                  >
                    {item.label}
                    <FiArrowUpRight className="h-3.5 w-3.5 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-deep" />
                  </Link>
                ) : (
                  <span
                    key={item.label}
                    data-stagger-item
                    className="inline-flex items-center rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-ink"
                  >
                    {item.label}
                  </span>
                ),
              )}
            </StaggerChildren>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section-pad border-t border-border pt-16 md:pt-20 pb-10 md:pb-10">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <div className="lg:sticky lg:self-start">
                <SectionHeading
                  eyebrow="FAQ"
                  title="Common questions"
                  description={`Answers to what clients usually ask before starting a ${service.shortTitle} project.`}
                />
                <div className="mt-3 hidden items-center gap-3 lg:flex">
                  <span className="h-0.5 w-10 bg-accent" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                    We are here to help
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <ServiceFaqAccordion faqs={service.faqs} />
            </Reveal>
          </div>
        </div>
      </section>

      <ProcessSection
        title={service.ctaTitle}
        description={service.ctaDescription}
        buttonText="Get a free consultation"
        buttonHref="/contact"
      />
    </PageShell>
  );
}
