import Link from "next/link";
import { FiCheck } from "react-icons/fi";
import { values } from "@/lib/data";
import type { Industry } from "@/lib/industries";
import { PageShell } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerChildren } from "@/components/ui/StaggerChildren";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { TiltCard } from "@/components/ui/TiltCard";
import { IndustryHero } from "@/components/industries/IndustryHero";
import { FeatureIcon } from "@/components/industries/FeatureIcon";
import { TechTabs } from "@/components/industries/TechTabs";
import { ShowcaseCarousel } from "@/components/industries/ShowcaseCarousel";
import Image from "next/image";

export function IndustryPageTemplate({ industry }: { industry: Industry }) {

  return (
    <PageShell>
      <IndustryHero industry={industry} />

      {/* STATS */}
      <section className="section-pad bg-ink py-8 text-white md:py-10">
        <div className="container-wide">
          <div className="grid grid-cols-2 border-l border-white/10 md:grid-cols-4">
            {industry.stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.05}>
                <div className="border-b border-r border-white/10 px-6 py-7 md:border-b-0">
                  <p className="font-display text-3xl font-semibold sm:text-4xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-white/45">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section-pad overflow-hidden py-16 md:py-20">
        <div className="container-wide">
          <div className="grid items-center gap-5 lg:grid-cols-[1fr_0.9fr] lg:gap-5">
            <Reveal>
              <div className="">
                <div className="flex items-center gap-3">
                  <span className="h-[1px] w-8 bg-accent" />
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-deep">
                    {industry.about.eyebrow}
                  </p>
                </div>
                <h2 className="font-display mt-5 text-2xl font-semibold leading-[1.08] tracking-[-0.035em] text-ink sm:text-3xl md:text-4xl">
                  {industry.about.title}
                </h2>
                <p className="mt-4 text-sm leading-6 text-muted md:text-base md:leading-7">
                  {industry.about.description}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted md:text-base md:leading-7">
                  {industry.about.intro}
                </p>
                <div className="mt-3 ">
                  {industry.about.points.map((point, index) => (
                    <Reveal key={point.title} delay={index * 0.08}>
                      <div className="group relative border-l-2 border-transparent py-2 pl-5 pr-3 transition-all duration-300 hover:translate-x-1 hover:border-accent ">
                        {/* Point Number */}
                        <div className="flex items-start gap-4">
                          <span className=" mt-0.5 shrink-0 text-[11px] font-bold tracking-[0.12em] text-accent-deep/60 
                                            transition-colors duration-300 group-hover:text-accent-deep ">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <div>
                            <h3 className=" font-display text-sm font-semibold text-ink transition-colors duration-300 group-hover:text-accent-deep sm:text-base " >
                              {point.title}
                            </h3>
                            <p className="mt-1 max-w-xl text-xs leading-5 text-muted sm:text-sm sm:leading-6 " >
                              {point.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>

              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="relative">

                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

                <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent-bright/10 blur-3xl" />

                <div className="relative z-10 h-[350px] w-full sm:h-[420px] md:h-[470px]">
                  <Image
                    src={industry.aboutImage}
                    alt={`${industry.title} technology solutions`}
                    fill
                    priority
                    className="object-contain transition-transform duration-700 hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>

                <div className="absolute bottom-4 left-4 z-20 rounded-2xl border border-border bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md sm:bottom-6 sm:left-6">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-accent-deep">
                    Industry Solutions
                  </p>

                  <p className="mt-1.5 font-display text-sm font-semibold text-ink">
                    Built for {industry.title}
                  </p>

                  <div className="mt-3 h-1 w-8 rounded-full bg-accent" />
                </div>

              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="section-pad border-t border-border py-16 md:py-20">
        <div className="container-wide">
          <Reveal>
            <SectionHeading
              eyebrow="Key challenges"
              title={`What makes ${industry.title.toLowerCase()} hard to build for`}
              description="The constraints we design around before a single line of code ships."
            />
          </Reveal>

          <StaggerChildren className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industry.challenges.map((item, index) => (
              <article
                key={item.title}
                data-stagger-item
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_24px_60px_-30px_rgba(7,17,31,0.3)]"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <span className="font-display text-3xl font-semibold text-accent/25 transition-colors duration-500 group-hover:text-accent/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
              </article>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* WHAT WE PROVIDE */}
      <section className="section-pad relative isolate overflow-hidden border-t border-border bg-surface-soft py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[560px] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
        </div>

        <div className="container-wide relative">
          {/* HEADER */}
          <Reveal>
            <SectionHeading
              eyebrow="What we provide"
              title={`Everything you need to build for ${industry.title}`}
              description="From product strategy and user experience to technology, integrations, and scalable infrastructure — the capabilities needed to build reliable digital products."
            />
          </Reveal>

          {/* 3D COMPOSITION */}
          <div className="relative z-0 mx-auto max-w-6xl mt-20 lg:h-[620px]">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
            >
              <div className="h-[520px] w-[520px] rounded-full border border-dashed border-accent/20" />
              <div className="absolute inset-0 m-auto h-[580px] w-[580px] rounded-full border border-dashed border-accent/30" />
            </div>

            <div className="relative z-10 flex justify-center lg:absolute lg:inset-0 lg:items-center lg:justify-center">
              <Reveal>
                <TiltCard
                  max={5}
                  scale={1.015}
                  className="relative mx-auto h-[260px] w-[260px] sm:h-[350px] sm:w-[350px]
                    md:h-[400px] md:w-[400px] lg:h-[480px] lg:w-[480px]"
                >
                  <div className=" relative h-full w-full overflow-hidden">
                    <Image
                      src={industry.aboutImage}
                      alt={`${industry.title} solutions`}
                      fill
                      className="object-contain p-10 sm:p-12"
                      sizes="(max-width: 768px) 70vw, 450px"
                    />
                  </div>

                  <div
                    className="
                      absolute bottom-16 left-1/2 z-20 -translate-x-1/2
                      whitespace-nowrap rounded-full border border-border
                      bg-white/95 px-5 py-2.5 shadow-xl backdrop-blur-md
                    "
                  >
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-deep">
                      {industry.title} Solutions
                    </span>
                  </div>
                </TiltCard>
              </Reveal>
            </div>

            {/* FLOATING CARDS */}
            <div className="relative z-20 grid gap-5 sm:grid-cols-2 lg:mt-0 lg:block lg:h-full">
              {industry.whatWeProvide.map((item, index) => {
                const layout = [
                  { wrap: "lg:left-52 lg:top-3", rotate: "lg:rotate-2", hover: "lg:hover:-translate-x-3", connector: "left" as const },
                  { wrap: "lg:right-40 lg:top-3", rotate: "lg:-rotate-3", hover: "lg:hover:translate-x-3", connector: "right" as const },
                  { wrap: "lg:left-[2%] lg:top-[200px]", rotate: "lg:rotate-2", hover: "lg:hover:-translate-x-3", connector: "left" as const },
                  { wrap: "lg:right-[1%] lg:top-[200px]", rotate: "lg:-rotate-2", hover: "lg:hover:translate-x-3", connector: "right" as const },
                  { wrap: "lg:left-28 lg:bottom-16", rotate: "lg:-rotate-3", hover: "lg:hover:-translate-x-3", connector: "left" as const },
                  { wrap: "lg:right-24 lg:bottom-16", rotate: "lg:rotate-3", hover: "lg:hover:translate-x-3", connector: "right" as const },
                ][index % 6];

                return (
                  <Reveal key={item.title} delay={index * 0.07} className={`relative lg:absolute ${layout.wrap}`}>
                    <span
                      aria-hidden
                      className={
                        layout.connector === "left"
                          ? "pointer-events-none absolute left-full top-1/2 hidden h-px w-12 -translate-y-1/2 bg-gradient-to-r from-accent/50 to-transparent lg:block"
                          : "pointer-events-none absolute right-full top-1/2 hidden h-px w-12 -translate-y-1/2 bg-gradient-to-l from-accent/50 to-transparent lg:block"
                      }
                    />
                    <span
                      aria-hidden
                      className={
                        layout.connector === "left"
                          ? "pointer-events-none absolute left-[calc(100%+3rem)] top-1/2 hidden h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent/60 lg:block"
                          : "pointer-events-none absolute right-[calc(100%+3rem)] top-1/2 hidden h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent/60 lg:block"
                      }
                    />

                    <article className={` group relative w-full overflow-hidden rounded-2xl border border-border
                      bg-white/95 p-5 shadow-[0_20px_50px_-28px_rgba(7,17,31,0.35)] backdrop-blur-xl
                      transition-all duration-500 ease-out hover:-translate-y-1 hover:border-accent/40
                      hover:shadow-[0_35px_80px_-28px_rgba(7,17,31,0.45)]
                      lg:w-[270px] lg:hover:z-30 lg:hover:rotate-0 ${layout.rotate} ${layout.hover} `}
                    >
                      {/* Background Number */}
                      <span className=" pointer-events-none absolute -right-2 -bottom-7 select-none font-display text-[110px]
                      font-bold leading-none tracking-[-0.08em] text-accent/[0.07] transition-all duration-500 group-hover:-translate-y-1 group-hover:text-accent/[0.12]"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className=" pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full
                        bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 "
                      />

                      {/* Title + Icon */}
                      <div className="relative flex items-center justify-between gap-4">
                        <h3 className="min-w-0 flex-1 font-display text-base font-semibold leading-snug text-ink transition-colors duration-300 group-hover:text-accent-deep">
                          {item.title}
                        </h3>

                        <FeatureIcon
                          icon={item.icon}
                          className="h-9 w-9 shrink-0border-accent/10 bg-accent/5 transition-all duration-300 group-hover:scale-110 group-hover:border-accent
                          group-hover:bg-accent group-hover:text-white"
                        />
                      </div>

                      {/* Description */}
                      <div className="relative mt-3">
                        <p className="text-sm leading-5 text-muted">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* BOTTOM MESSAGE */}
          <Reveal delay={0.2}>
            <div className="mx-auto mt-14 max-w-3xl text-center">
              <p className="text-sm leading-7 text-muted">
                We combine industry knowledge, thoughtful design, and modern
                engineering to create digital experiences that are easier to use,
                easier to manage, and ready to scale.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SOLUTIONS SHOWCASE */}
      <section className="section-pad py-16 md:py-20">
        <div className="container-wide">
          <Reveal>
            <SectionHeading
              eyebrow="Showcase"
              title="Solutions we build in this space"
              description="A closer look at the platforms and modules we deliver for this industry."
            />
          </Reveal>

          <Reveal delay={0.08} className="mt-10">
            <ShowcaseCarousel items={industry.showcase} />
          </Reveal>
        </div>
      </section>

      {/* INDUSTRY-SPECIFIC SOLUTIONS */}
      <section className="section-pad border-t border-border bg-surface-soft py-16 md:py-20">
        <div className="container-wide">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div className="lg:sticky lg:top-24 lg:self-start">
                <SectionHeading
                  eyebrow="Our solutions"
                  title="How we solve it"
                  description="A practical approach built from repeated delivery — not a generic playbook."
                />

                <div className="mt-8 max-w-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    Built around your industry
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    We combine product thinking, technical expertise, and
                    industry-specific workflows to build solutions that actually
                    solve operational challenges.
                  </p>
                </div>
              </div>
              <StaggerChildren className="divide-y divide-border border-y border-border">
                {industry.solutions.map((item) => (
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

      {/* TECHNOLOGY */}
      <section className="section-pad border-t border-border py-16 md:py-24">
        <div className="container-wide">
          <Reveal>
            <SectionHeading
              eyebrow="Built with"
              title={`Technology suited to ${industry.title.toLowerCase()}`}
              description="Explore the stack by layer — the same categories our engineers plan around on day one."
            />
          </Reveal>

          <Reveal delay={0.08} className="mt-14">
            <TechTabs categories={industry.techStack} />
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE OUTSTRIP */}
      <section className="section-pad border-t border-border bg-ink py-16 text-white md:py-20">
        <div className="container-wide">
          <Reveal>
            <SectionHeading
              light
              eyebrow="Why OUTSTRIP"
              title={`Why teams choose us for ${industry.title.toLowerCase()}`}
              description="The same reasons clients stay with us across every industry we serve."
            />
          </Reveal>

          <StaggerChildren className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item, index) => (
              <article
                key={item.title}
                data-stagger-item
                className="group border-t border-white/10 pt-7 transition-transform duration-500 hover:-translate-y-2"
              >
                <span className="text-[10px] font-semibold tracking-[0.2em] text-accent-bright/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50">{item.description}</p>
              </article>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="section-pad py-16 md:py-20">
        <div className="container-wide">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
              <div className="lg:sticky lg:top-24">
                <SectionHeading
                  eyebrow="Key features"
                  title="Everything you need to move your workflow forward."
                  description="A focused set of capabilities designed around your business needs, with the flexibility to evolve as you grow."
                />

                <div className="mt-8 h-px w-20 bg-accent" />
              </div>

              <div className="divide-y divide-border border-y border-border">
                {industry.features.map((feature) => (
                  <div
                    key={feature}
                    className="group flex items-center gap-4 py-5 transition-all duration-300 hover:pl-2 md:py-5"
                  >
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        className="h-3.5 w-3.5"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path
                          d="M5 10.5l3.2 3L15 7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    {/* Feature */}
                    <p className="text-sm font-medium leading-6 text-ink transition-colors duration-300 group-hover:text-accent-deep md:text-base">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-14 border-t border-border pt-6">
              <p className="text-xs font-medium text-muted md:text-sm">
                Designed around your needs.
                <span className="ml-1 font-semibold text-ink">
                  Built to grow with you.
                </span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

    </PageShell>
  );
}
