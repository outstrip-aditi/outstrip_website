"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

import { stats } from "@/lib/data";
import { gsap, registerGSAP } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { MagneticButton } from "@/components/ui/MagneticButton";

import aboutOverview from "../../../public/images/aboutOverview.png";

const featuredStats = stats.slice(0, 3);

export function CommunitySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced || !sectionRef.current) return;
    registerGSAP();

    const ctx = gsap.context(() => {
      // Decorative "slider" dot drifts along the stat bar on its own —
      // purely atmospheric, echoes the reference design's progress handle.
      gsap.to("[data-stat-dot]", {
        left: "82%",
        duration: 3.2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      className="section-pad relative overflow-hidden py-20 text-white md:py-24"
      
    >
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent/10 blur-[130px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <div className="container-wide relative z-10 grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={aboutOverview}
              alt="The OUTSTRIP community, together"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent-deep">
            Community
          </span>

          <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-ink md:text-5xl">
            We are powered by{" "}
            <span className="text-gradient">
              tech minds
            </span>
          </h2>

          <p className="mt-6 max-w-lg text-base leading-8 text-muted">
            We are powered by tech minds that help convert product visions into
            real products. Together we build digital products that make a real
            difference.
          </p>

          <div className="relative mt-9 flex max-w-md items-center gap-8 rounded-full bg-white px-8 py-5">
            {featuredStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-bold text-ink">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-0.5 text-[10px] font-medium text-muted">{stat.label}</p>
              </div>
            ))}

            <span
              data-stat-dot
              className="absolute -top-1.5 h-3 w-3 rounded-full bg-accent-deep shadow-[0_0_16px_rgba(13,159,138,0.6)]"
              style={{ left: "18%" }}
              aria-hidden="true"
            />
          </div>

          <div className="mt-9">
            <MagneticButton href="/about/careers" size="md">
              Join Our Team
              <FiArrowRight className="h-4 w-4" />
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
