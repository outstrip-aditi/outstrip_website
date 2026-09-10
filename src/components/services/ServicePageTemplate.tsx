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
import { ServiceTechIcon } from "@/components/services/ServiceTechIcon";
import { ServiceEnquiryForm } from "@/components/services/ServiceEnquiryForm";
import { ServiceFaqAccordion } from "@/components/services/ServiceFaqAccordion";
import { ProcessSection } from "../home/ProcessSection";

export function ServicePageTemplate({ service }: { service: ServiceDetail }) {
  const industrySlugs = new Set(industries.map((industry) => industry.slug));
  const overviewImage = service.overview.heroImage;

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

            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 bg-accent" />
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
                      className="h-auto w-[600px] max-w-full object-contain sm:w-[530px] md:w-[550px] transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  {/* Floating label */}
                  <div className="absolute -bottom-7 left-2 z-20 rounded-lg border border-border bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md sm:-bottom-7 sm:left-2">
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-accent-deep">
                      {service.category}
                    </p>
                    <p className="mt-1.5 font-display text-sm font-semibold text-ink">
                      {service.shortTitle}
                    </p>
                    <div className="mt-1 h-[2px] w-9 rounded-full bg-accent" />
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE THIS SERVICE */}
      <section className="section-pad border-t border-border py-16 md:py-20">
        <div className="container-wide">
          <Reveal>
            <SectionHeading
              eyebrow="Why choose us"
              title={`Why teams choose OUTSTRIP for ${service.shortTitle}`}
              description="The specific strengths that shape how we approach this service."
            />
          </Reveal>

          <StaggerChildren className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.whyChooseUs.map((item, index) => (
              <article
                key={item.title}
                data-stagger-item
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_24px_60px_-30px_rgba(7,17,31,0.3)]"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <FeatureIcon icon={item.icon ?? "check"} className="h-11 w-11" />
                <h3 className="mt-4 font-display text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                <span className="mt-4 block font-display text-2xl font-semibold text-accent/20 transition-colors duration-500 group-hover:text-accent/35">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </article>
            ))}
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
      <section className="section-pad py-16 md:py-20">
        <div className="container-wide">
          <Reveal>
            <SectionHeading
              eyebrow="Technologies & tools"
              title="Built with a stack matched to the job"
              description="The technologies our team reaches for, and why each one earns its place."
            />
          </Reveal>

          <StaggerChildren className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.technologies.map((tech) => (
              <div
                key={tech.name}
                data-stagger-item
                className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
              >
                <ServiceTechIcon icon={tech.icon} className="h-11 w-11 shrink-0" />
                <div>
                  <p className="font-display text-sm font-semibold text-ink">{tech.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{tech.description}</p>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section-pad border-t border-border bg-ink py-16 text-white md:py-20">
        <div className="container-wide">
          <Reveal>
            <SectionHeading
              light
              eyebrow="How we work"
              title="Our development process"
              description="A clear, milestone-driven path from first conversation to launch."
            />
          </Reveal>

          <StaggerChildren className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step) => (
              <article
                key={step.step}
                data-stagger-item
                className="group border-t border-white/10 pt-7 transition-transform duration-500 hover:-translate-y-2"
              >
                <span className="text-[10px] font-semibold tracking-[0.2em] text-accent-bright/70">
                  {step.step}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50">{step.description}</p>
              </article>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section-pad py-16 md:py-20">
        <div className="container-wide">
          <Reveal>
            <SectionHeading
              eyebrow="Benefits"
              title="What you gain"
              description={`The outcomes clients see from a well-executed ${service.shortTitle} engagement.`}
            />
          </Reveal>

          <StaggerChildren className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((item) => (
              <div
                key={item.title}
                data-stagger-item
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <h3 className="font-display text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section-pad border-t border-border bg-surface-soft py-16 md:py-20">
        <div className="container-wide">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div className="lg:sticky lg:top-24 lg:self-start">
                <SectionHeading
                  eyebrow="Use cases"
                  title="Where this service fits"
                  description="Real scenarios where this engagement delivers the most value."
                />
              </div>
              <StaggerChildren className="divide-y divide-border border-y border-border">
                {service.useCases.map((item) => (
                  <div
                    key={item.title}
                    data-stagger-item
                    className="group relative py-4 pl-6 transition-all duration-300 hover:pl-8 md:py-5"
                  >
                    <span className="absolute bottom-0 left-0 top-0 w-[2px] origin-top scale-y-0 bg-accent transition-transform duration-300 group-hover:scale-y-100" />
                    <div className="max-w-2xl">
                      <h3 className="font-display text-lg font-semibold text-ink transition-colors duration-300 group-hover:text-accent-deep md:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-0 text-sm leading-6 text-muted md:text-[15px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </StaggerChildren>
            </div>
          </Reveal>
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
      <section className="section-pad border-t border-border py-16 md:py-20">
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
                  <span className="h-[2px] w-10 bg-accent" />
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
