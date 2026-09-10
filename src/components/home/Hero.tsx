"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { gsap, registerGSAP } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    registerGSAP();
    const el = root.current;
    if (!el || reduced) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-hero-brand]", {
        y: 80,
        opacity: 0,
        duration: 1.1,
        ease: "power4.out",
      });
      gsap.from("[data-hero-line]", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        delay: 0.25,
        ease: "power3.out",
      });
      gsap.from("[data-hero-cta]", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        delay: 0.55,
        ease: "power3.out",
      });
      gsap.to("[data-hero-orb]", {
        y: 40,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={root}
      className="relative flex min-h-[100svh] items-end overflow-hidden mesh-bg pb-16 pt-28 md:items-center md:pb-24 md:pt-24"
    >
      <div className="grid-overlay pointer-events-none absolute inset-0" />

      <div
        data-hero-orb
        className="pointer-events-none absolute -right-24 top-24 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-3xl md:right-0"
      />
      <div
        data-hero-orb
        className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl"
      />

      {/* Full-bleed atmospheric visual plane */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          aria-hidden
          className="absolute inset-y-0 right-0 w-full md:w-[55%]"
          initial={reduced ? false : { opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/90 md:to-background" />
          <div className="absolute inset-0 opacity-40 mix-blend-multiply">
            <div className="h-full w-full bg-[linear-gradient(135deg,transparent_40%,rgba(13,159,138,0.35)_70%,rgba(7,17,31,0.5)_100%)]" />
          </div>
          <svg
            className="absolute bottom-0 right-0 h-[70%] w-[90%] opacity-30"
            viewBox="0 0 800 600"
            fill="none"
            aria-hidden
          >
            <path
              d="M40 520 C180 420, 220 280, 360 260 C520 235, 560 360, 700 300"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-ink"
            />
            <path
              d="M80 540 C200 400, 280 220, 420 200 C580 175, 620 320, 760 260"
              stroke="currentColor"
              strokeWidth="1"
              className="text-accent"
              opacity="0.7"
            />
            <circle cx="360" cy="260" r="6" className="fill-accent" />
            <circle cx="700" cy="300" r="4" className="fill-ink" />
          </svg>
        </motion.div>
      </div>

      <div className="section-pad container-wide relative z-10 w-full">
        <p
          data-hero-brand
          className="font-display text-[clamp(3.5rem,14vw,10rem)] font-bold leading-[0.85] tracking-[-0.05em] text-ink"
        >
          OUTSTRIP
        </p>

        <div className="mt-8 max-w-xl md:mt-10">
          <h1
            data-hero-line
            className="font-display text-2xl leading-tight text-ink sm:text-3xl md:text-4xl"
          >
            Digital products engineered to outperform.
          </h1>
          <p data-hero-line className="mt-4 text-base text-muted md:text-lg">
            ISO-certified web, mobile, and growth systems for ambitious teams — from Jaipur to
            the world.
          </p>
        </div>

        <div data-hero-cta className="mt-8 flex flex-wrap items-center gap-4">
          <MagneticButton href="/contact">Start a project</MagneticButton>
          <MagneticButton href="/services" variant="secondary">
            Explore services
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
