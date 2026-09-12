"use client";

import { motion } from "motion/react";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { stats } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { TiltCard } from "@/components/ui/TiltCard";
import { TechIcon } from "@/components/industries/TechIcon";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const FLOATING_BADGES = [
  { name: "react", top: "6%", left: "4%", duration: 5.5 },
  { name: "next.js", top: "14%", right: "2%", duration: 6.2 },
  { name: "node.js", top: "62%", left: "-4%", duration: 5 },
  { name: "typescript", top: "78%", right: "6%", duration: 6.8 },
  { name: "docker", top: "40%", right: "-6%", duration: 5.8 },
];

export function HireDevelopersHero() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden mesh-bg pb-16 pt-32 md:pb-24 md:pt-38">
      <div className="grid-overlay pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-accent/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-blue-500/8 blur-[130px]" />

      <div className="section-pad container-wide relative">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-deep">
              Hire Developers
            </p>
            <h1 className="font-display mt-4 max-w-xl text-3xl leading-[1.05] tracking-tight text-ink sm:text-4xl md:text-5xl">
              Senior engineers, ready to embed in your roadmap
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
              Skip the months-long hiring cycle. Bring on vetted developers, designers, and
              engineers from OUTSTRIP under the engagement model that fits your project —
              live in days, not quarters.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <MagneticButton href="/contact">
                Talk to us about your team
                <FiArrowRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton href="#engagement-models" variant="secondary">
                See engagement models
              </MagneticButton>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-muted">
              {["No long-term lock-in", "Replacement guarantee", "Your hours, your tools"].map(
                (item) => (
                  <span key={item} className="inline-flex items-center gap-1.5">
                    <FiCheckCircle className="h-3.5 w-3.5 text-accent-deep" />
                    {item}
                  </span>
                ),
              )}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-6 sm:grid-cols-4 sm:max-w-xl">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Interactive developer/tech visual */}
          <Reveal delay={0.12} className="relative hidden lg:block">
            <div className="relative mx-auto aspect-square max-w-md">
              {!reduced &&
                FLOATING_BADGES.map((badge) => (
                  <motion.div
                    key={badge.name}
                    className="absolute z-20 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface/90 shadow-[0_20px_50px_-25px_rgba(7,17,31,0.35)] backdrop-blur-md"
                    style={{ top: badge.top, left: badge.left, right: badge.right }}
                    animate={{ y: [0, -14, 0] }}
                    transition={{
                      duration: badge.duration,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <TechIcon name={badge.name} className="[&>svg]:h-7 [&>svg]:w-7" />
                  </motion.div>
                ))}

              <TiltCard className="relative z-10 mx-auto flex h-full w-full items-center justify-center">
                <div className="relative w-full max-w-xs overflow-hidden rounded-2xl border border-white/15 bg-ink/95 p-6 text-white shadow-[0_40px_100px_-30px_rgba(7,17,31,0.6)] backdrop-blur-xl">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/25 blur-[80px]" />
                  <div className="relative z-10">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-bright">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-bright animate-pulse" />
                      Available for hire
                    </span>

                    <h3 className="font-display mt-4 text-xl">Senior Full-Stack Engineer</h3>
                    <p className="mt-1 text-sm text-white/50">8 yrs experience · Remote-ready</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {["Next.js", "Node.js", "TypeScript", "AWS"].map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-5">
                      <div>
                        <p className="font-display text-lg font-semibold text-white">2 weeks</p>
                        <p className="mt-0.5 text-[11px] text-white/45">Time to start</p>
                      </div>
                      <div>
                        <p className="font-display text-lg font-semibold text-white">100%</p>
                        <p className="mt-0.5 text-[11px] text-white/45">Dedicated hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
