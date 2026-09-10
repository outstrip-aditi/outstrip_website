import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCode,
  FiCompass,
  FiGlobe,
  FiLayers,
  FiUsers,
  FiZap,
} from "react-icons/fi";

import client1 from "../../../public/images/about/client1.png";
import client2 from "../../../public/images/about/client2.png";
import client3 from "../../../public/images/about/client3.png";
import client4 from "../../../public/images/about/client4.png";

import { PageShell } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, } from "@/components/ui/SectionHeading";
import { StaggerChildren, } from "@/components/ui/StaggerChildren";
import { MagneticButton, } from "@/components/ui/MagneticButton";
import { aboutSections, } from "@/lib/aboutData";
import { IndustryExpertiseContent } from "@/components/about/IndustryExpertiseContent";
import { AboutOverviewStack } from "@/components/about/AboutOverviewStack";
import { CommunitySection } from "@/components/about/CommunitySection";
import { OurWorkSection } from "@/components/about/OurWorkSection";

export const metadata: Metadata = {
  title: "About | OUTSTRIP",
  description:
    "Discover OUTSTRIP — a technology company building digital products, platforms, and software solutions.",
};

const iconMap = {
  "Our Mission": FiCompass,
  "Our Story": FiLayers,
  "Industry Expertise": FiGlobe,
  "Our Culture": FiZap,
  Community: FiUsers,
  "Our Work": FiCode,
  "Work with Top Developers": FiCode,
};

export default function AboutPage() {


  return (
    <PageShell>
      <section className="section-pad relative overflow-hidden bg-background pb-20 pt-24 md:pt-32 lg:pt-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-1/4 h-[450px] w-[450px] rounded-full bg-accent/[0.08] blur-[140px]" />
          <div className="absolute right-[-120px] top-0 h-[400px] w-[400px] rounded-full bg-blue-400/[0.06] blur-[130px]" />
        </div>

        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="h-full w-full bg-[linear-gradient(rgba(7,17,31,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(7,17,31,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        </div>

        <div className="container-wide relative z-10">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="text-[12px] font-bold uppercase tracking-[0.24em] text-accent-deep">
                About OUTSTRIP
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-7 max-w-3xl font-display text-5xl font-semibold leading-[0.96] tracking-[-0.04em] text-ink sm:text-6xl md:text-5xl lg:text-5xl">
              A software company built for{" "}
              <span className="text-gradient">
                clarity and craft.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-9 flex max-w-4xl flex-col gap-7 md:flex-row md:items-end md:justify-between">
              <p className="max-w-2xl text-base leading-8 text-muted md:text-lg">
                OUTSTRIP helps businesses turn complex requirements into
                dependable digital products through design, engineering,
                strategy, and technology.
              </p>

              <MagneticButton
                href="/contact"
                variant="primary"
                size="md"
                className="shrink-0"
              >
                Start a conversation
                <FiArrowUpRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          </Reveal>


          {/* Trusted Clients */}
          <Reveal delay={0.28}>
            <div className="mt-20 border-t border-border pt-10">
              <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-accent" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent-deep">
                      Trusted by businesses
                    </span>
                  </div>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-muted">
                    Building dependable digital experiences with ambitious businesses
                    across industries.
                  </p>
                </div>

                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                  Our clients
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 overflow-hidden rounded-lg border border-border bg-white sm:grid-cols-4">
                {[
                  {
                    src: client1,
                    alt: "Pug Group",
                  },
                  {
                    src: client2,
                    alt: "QI Solutions",
                  },
                  {
                    src: client3,
                    alt: "REKAS",
                  },
                  {
                    src: client4,
                    alt: "BKI's",
                  },
                ].map((client, index) => (
                  <div
                    key={client.alt}
                    className="group relative flex h-28 items-center justify-center border-border bg-white px-6 transition-all duration-500 hover:bg-surface sm:h-32"
                  >
                    {index > 0 && (
                      <span className="absolute left-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-border sm:block" />
                    )}

                    <div className="relative flex h-full w-full items-center justify-center">
                      <Image
                        src={client.src}
                        alt={client.alt}
                        width={220}
                        height={90}
                        className="h-auto max-h-16 w-auto max-w-[90%] object-contain opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                      />
                    </div>

                    {/* Hover accent */}
                    <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-accent transition-all duration-500 group-hover:w-16" />
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-center gap-3">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-muted">
                  Trusted partnerships · Built to last
                </span>

                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad py-2 md:py-20">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="flex w-full justify-center lg:justify-start">
                <div className="w-full max-w-[620px]">
                  <AboutOverviewStack />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <SectionHeading
                  eyebrow="Overview"
                  title="Design, engineering, and strategy in one team."
                  description="Outstrip Infotech Pvt. Ltd. was established to solve complex digital challenges for medium and small enterprises."
                />

                <div className="mt-7 space-y-5 text-sm leading-7 text-muted md:text-base">
                  <p>
                    <strong className="text-ink">
                      Outstrip Infotech Pvt. Ltd.
                    </strong>{" "}
                    was established to solve these concerns. We are a desktop, web
                    and mobile application development company which is presently
                    available to bring about the complex structure of the companies
                    and the spirit of compatibility between the requirements of
                    medium and small enterprises.
                  </p>

                  <p>
                    <strong className="text-ink">Mr. Gaurav Jain</strong> has made
                    Outstrip Infotech Pvt. Ltd. a complete software company, which
                    has a dedicated team of{" "}
                    <strong className="text-ink">
                      50+ professional designers
                    </strong>
                    , developers, marketers and technology specialists.
                  </p>

                  <p>
                    We bring together digital strategists, designers, developers,
                    marketers, communications experts, project managers and business
                    developers to work together on client projects using modern,
                    cutting-edge technologies.
                  </p>

                </div>

                {/* Buttons */}
                <div className="mt-9 flex flex-wrap gap-3">
                  <MagneticButton
                    href="/about/story"
                    variant="primary"
                    size="sm"
                  >
                    Our story
                    <FiArrowRight className="h-4 w-4" />
                  </MagneticButton>

                  <MagneticButton
                    href="/about/mission"
                    variant="secondary"
                    size="sm"
                  >
                    Our mission
                  </MagneticButton>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INDUSTRY EXPERTISE */}
      <IndustryExpertiseContent />

      {/* COMMUNITY */}
      <CommunitySection />

      {/* OUR WORK */}
      <OurWorkSection />


      {/* TOP DEVELOPERS CTA */}
      <section className="section-pad relative overflow-hidden bg-surface-soft py-20 md:py-24">
        <div className="pointer-events-none absolute right-[-100px] top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-accent/[0.08] blur-[130px]" />
        <div className="container-wide relative">
          <Reveal>
            <div className="max-w-4xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent-deep">
                Work with Top Developers
              </p>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
                Have an idea?
                <br />
                <span className="text-gradient">
                  Let&apos;s build it together.
                </span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
                Tell us what you are building, what problem you want to solve,
                or where your existing product needs help. We will bring the
                right people and technology to the table.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <MagneticButton
                  href="/contact"
                  variant="primary"
                  size="md"
                >
                  Setup a call with us
                  <FiArrowUpRight className="h-4 w-4" />
                </MagneticButton>
                <MagneticButton
                  href="/about/top-developers"
                  variant="secondary"
                  size="md"
                >
                  Meet our developers
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}