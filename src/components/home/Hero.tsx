"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { motion } from "motion/react";
import { FiArrowUpRight, FiCode, FiLayers, FiZap } from "react-icons/fi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiMongodb } from "react-icons/si";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { gsap, ScrollTrigger, registerGSAP } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type TechBadge = {
  name: string;
  Icon: typeof FaReact;
  color: string;
  style: CSSProperties;
  cx: number;
  cy: number;
  duration: number;
};

const TECH_BADGES: TechBadge[] = [
  { name: "React", Icon: FaReact, color: "#61DAFB", style: { top: "4%", left: "8%" }, cx: 14, cy: 8, duration: 5.4 },
  { name: "Next.js", Icon: SiNextdotjs, color: "#000000", style: { top: "-6%", right: "20%" }, cx: 78, cy: -2, duration: 6.1 },
  { name: "Node.js", Icon: FaNodeJs, color: "#339933", style: { top: "40%", right: "-9%" }, cx: 105, cy: 42, duration: 5.8 },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6", style: { bottom: "0%", right: "10%" }, cx: 84, cy: 102, duration: 6.4 },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248", style: { bottom: "-8%", left: "22%" }, cx: 20, cy: 106, duration: 5.9 },
];

const METRICS = [
  { value: 99, suffix: "%", label: "Uptime" },
  { value: 24, suffix: "+", label: "Deploys / mo" },
  { value: 120, suffix: "ms", label: "Response" },
];

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const outerVisualRef = useRef<HTMLDivElement>(null);
  const innerVisualRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    registerGSAP();

    const section = root.current;
    const outerVisual = outerVisualRef.current;
    const innerVisual = innerVisualRef.current;
    const core = coreRef.current;

    if (!section) return;

    if (reduced) {
      gsap.set(
        [
          "[data-hero-eyebrow]",
          "[data-hero-word]",
          "[data-hero-description]",
          "[data-hero-cta]",
          "[data-hero-visual]",
        ],
        { clearProps: "all", opacity: 1 },
      );
      return;
    }

    let handleMouseMove: ((e: MouseEvent) => void) | undefined;
    let handleMouseLeave: (() => void) | undefined;

    const ctx = gsap.context(() => {
      // ---- Entrance timeline ----
      const intro = gsap.timeline({
        defaults: { ease: "power4.out" },
      });

      intro
        .from("[data-hero-eyebrow]", {
          y: 25,
          opacity: 0,
          duration: 0.7,
        })
        .fromTo(
          "[data-hero-word]",
          { yPercent: 110, opacity: 0, rotateX: -20, clipPath: "inset(0% 0% 100% 0%)" },
          {
            yPercent: 0,
            opacity: 1,
            rotateX: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 0.9,
            stagger: 0.07,
          },
          "-=0.3",
        )
        .from(
          "[data-hero-description]",
          { y: 25, opacity: 0, duration: 0.8 },
          "-=0.45",
        )
        .from(
          "[data-hero-cta]",
          { y: 25, opacity: 0, duration: 0.7, stagger: 0.08 },
          "-=0.4",
        )
        .from(
          "[data-hero-visual]",
          { opacity: 0, x: 70, scale: 0.92, duration: 1.1 },
          "-=0.8",
        )
        .fromTo(
          "[data-connection-path]",
          { strokeDashoffset: (i, target: SVGPathElement) => target.getTotalLength() },
          {
            strokeDashoffset: 0,
            duration: 1.4,
            stagger: 0.08,
            ease: "power2.inOut",
          },
          "-=0.7",
        )
        .from(
          "[data-tech-badge]",
          { opacity: 0, scale: 0.6, duration: 0.6, stagger: 0.06 },
          "-=1",
        )
        .from(
          "[data-secondary-ui]",
          { opacity: 0, scale: 0.92, duration: 0.6, stagger: 0.08 },
          "-=0.9",
        );

      // ---- Continuous orbit rotation ----
      gsap.to("[data-orbit]", {
        rotate: 360,
        duration: 28,
        repeat: -1,
        ease: "none",
      });

      gsap.to("[data-orbit-reverse]", {
        rotate: -360,
        duration: 36,
        repeat: -1,
        ease: "none",
      });

      // ---- Core engine pulse ----
      if (core) {
        gsap.to(core, {
          scale: 1.1,
          opacity: 0.65,
          duration: 2.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // ---- Particle drift ----
      gsap.utils.toArray<HTMLElement>("[data-particle]").forEach((particle, i) => {
        gsap.to(particle, {
          x: (i % 2 === 0 ? 1 : -1) * gsap.utils.random(10, 22),
          y: (i % 3 === 0 ? 1 : -1) * gsap.utils.random(10, 24),
          duration: gsap.utils.random(5, 9),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.2,
        });
      });

      // ---- Data-flow waveform ----
      gsap.to("[data-waveform]", {
        strokeDashoffset: -400,
        duration: 14,
        repeat: -1,
        ease: "none",
      });

      // ---- Scroll-linked layered parallax ----
      if (outerVisual) {
        gsap.to(outerVisual, {
          y: -70,
          rotate: -2,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      gsap.to("[data-hero-grid]", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to("[data-hero-glow]", {
        y: 60,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to("[data-particles-layer]", {
        y: -35,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      // ---- Subtle mouse-position parallax (right visual only, desktop pointer) ----
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
      const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

      if (innerVisual && isDesktop && canHover) {
        const xTo = gsap.quickTo(innerVisual, "x", { duration: 0.7, ease: "power3" });
        const yTo = gsap.quickTo(innerVisual, "y", { duration: 0.7, ease: "power3" });
        const rotateXTo = gsap.quickTo(innerVisual, "rotateX", { duration: 0.7, ease: "power3" });
        const rotateYTo = gsap.quickTo(innerVisual, "rotateY", { duration: 0.7, ease: "power3" });

        handleMouseMove = (e: MouseEvent) => {
          const rect = section.getBoundingClientRect();
          const px = (e.clientX - rect.left) / rect.width - 0.5;
          const py = (e.clientY - rect.top) / rect.height - 0.5;

          xTo(px * 20);
          yTo(py * 14);
          rotateYTo(px * 5);
          rotateXTo(-py * 5);
        };

        handleMouseLeave = () => {
          xTo(0);
          yTo(0);
          rotateXTo(0);
          rotateYTo(0);
        };

        section.addEventListener("mousemove", handleMouseMove);
        section.addEventListener("mouseleave", handleMouseLeave);
      }
    }, section);

    return () => {
      ctx.revert();
      if (handleMouseMove) section.removeEventListener("mousemove", handleMouseMove);
      if (handleMouseLeave) section.removeEventListener("mouseleave", handleMouseLeave);
      ScrollTrigger.getAll().forEach((st) => st.trigger === section && st.kill());
    };
  }, [reduced]);

  return (
    <section
      ref={root}
      className="relative isolate min-h-[100svh] overflow-hidden bg-background"
    >
      <div
        data-hero-grid
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
      >
        <div className="grid-overlay absolute inset-0" />
      </div>

      <div
        data-hero-glow
        className="pointer-events-none absolute -right-40 top-10 h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-[110px]"
      />
      <div
        data-hero-glow
        className="pointer-events-none absolute -left-40 bottom-0 h-[24rem] w-[24rem] rounded-full bg-accent/5 blur-[100px]"
      />

      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 w-full opacity-[0.18]"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          data-waveform
          d="M0,80 C150,20 300,100 450,60 C600,20 750,100 900,50 C1050,10 1150,70 1200,40"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.5"
          strokeDasharray="10 14"
        />
      </svg>

      {/* Main content */}
      <div className="section-pad container-wide relative z-10 flex min-h-[100svh] items-center">
        <div className="grid w-full items-center gap-14 py-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-36">
          <div className="relative z-20 max-w-3xl">
            <div data-hero-eyebrow className="mb-7 flex items-center gap-3">
              <span className="h-px w-9 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-deep">
                Digital Product Studio
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </div>

            {/* Heading */}
            <h1 className="font-display text-[clamp(3rem,5.8vw,5.8rem)] font-semibold leading-[0.92] tracking-[-0.05em] text-ink">
              <span className="block overflow-hidden">
                <span data-hero-word className="inline-block">
                  Build.
                </span>
              </span>
              <span className="block overflow-hidden">
                <span data-hero-word className="inline-block">
                  Launch.
                </span>
              </span>
              <span className="block overflow-hidden">
                <span data-hero-word className="inline-block text-accent-deep">
                  Outstrip.
                </span>
              </span>
            </h1>

            <p
              data-hero-description
              className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              We design and engineer high-performance web, mobile, and
              digital products that help ambitious businesses move
              faster and grow smarter.
            </p>

            <div data-hero-cta className="mt-9 flex flex-wrap items-center gap-4">
              <MagneticButton href="/contact">
                Start a project
                <span className="ml-2 inline-flex transition-transform duration-300 group-hover:translate-x-1">
                  <FiArrowUpRight className="h-4 w-4" />
                </span>
              </MagneticButton>

              <MagneticButton href="/projects" variant="secondary">
                View our work
              </MagneticButton>
            </div>

            {/* Small trust indicators */}
            <div
              data-hero-cta
              className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-border pt-6"
            >
              <div className="flex items-center gap-2 text-xs text-muted">
                <FiCode className="h-4 w-4 text-accent-deep" />
                <span>Engineering-first</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted">
                <FiLayers className="h-4 w-4 text-accent-deep" />
                <span>Product-focused</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted">
                <FiZap className="h-4 w-4 text-accent-deep" />
                <span>Built to scale</span>
              </div>
            </div>
          </div>

          <div
            ref={outerVisualRef}
            data-hero-visual
            className="relative mx-auto hidden aspect-square w-full max-w-[560px] md:flex md:items-center md:justify-center lg:ml-auto"
            style={{ perspective: 1200 }}
          >
            <div
              ref={innerVisualRef}
              className="relative flex h-full w-full items-center justify-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              <svg
                className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
                viewBox="0 0 100 100"
                aria-hidden
              >
                {TECH_BADGES.map((badge) => (
                  <path
                    key={badge.name}
                    data-connection-path
                    d={`M50,50 L${badge.cx},${badge.cy}`}
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="0.4"
                    strokeDasharray="2 2"
                    opacity={0.35}
                  />
                ))}
              </svg>

              <div
                data-particles-layer
                className="pointer-events-none absolute inset-0 hidden lg:block"
              >
                {Array.from({ length: 7 }).map((_, i) => (
                  <span
                    key={i}
                    data-particle
                    className="absolute h-1 w-1 rounded-full bg-accent/50"
                    style={{
                      top: `${(i * 37) % 90 + 5}%`,
                      left: `${(i * 53) % 90 + 5}%`,
                    }}
                  />
                ))}
              </div>

              <div
                data-orbit
                className="absolute h-[87%] w-[87%] rounded-full border border-accent/15"
              >
                <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_20px_var(--glow)]" />
              </div>

              <div
                data-orbit-reverse
                className="absolute h-[80%] w-[80%] rounded-full border border-dashed border-accent/15"
              >
                <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-accent-deep" />
              </div>

              <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[50px]" />
              <div
                ref={coreRef}
                className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent-bright via-accent to-accent-deep opacity-80"
              />

              <motion.div
                whileHover={reduced ? undefined : { y: -8, scale: 1.015 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 w-[76%] overflow-hidden rounded-lg border border-border bg-surface/90 p-5 shadow-[0_40px_100px_-35px_rgba(7,17,31,0.35)] backdrop-blur-xl sm:p-7"
              >
                {/* Browser header */}
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-ink/15" />
                    <span className="h-2 w-2 rounded-full bg-ink/15" />
                    <span className="h-2 w-2 rounded-full bg-ink/15" />
                  </div>
                  <span className="rounded-full border border-accent/15 bg-accent/5 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-accent-deep">
                    OUTSTRIP
                  </span>
                </div>

                {/* Live status */}
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs font-semibold text-ink">
                    Live engine
                  </span>
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                </div>

                {/* Code snippet */}
                <div className="mt-4 rounded-xl border border-border bg-ink/95 p-4 font-mono text-[10px] leading-relaxed text-white/70">
                  <p>
                    <span className="text-accent-bright">const</span> stack = [
                    <span className="text-accent-bright">&quot;Next.js&quot;</span>,{" "}
                    <span className="text-accent-bright">&quot;Node.js&quot;</span>,{" "}
                    <span className="text-accent-bright">&quot;MongoDB&quot;</span>];
                  </p>
                  <p className="mt-1">
                    <span className="text-accent-bright">status</span>:{" "}
                    <span className="text-emerald-300">&quot;deployed&quot;</span>
                  </p>
                </div>

                {/* Animated metrics */}
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {METRICS.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-xl border border-border bg-background p-3 text-center"
                    >
                      <p className="font-display text-base font-semibold text-ink sm:text-lg">
                        <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                      </p>
                      <p className="mt-1 text-[8px] uppercase tracking-wide text-muted sm:text-[9px]">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Connected stack footer */}
                <div
                  data-secondary-ui
                  className="mt-4 flex items-center justify-between border-t border-border pt-3"
                >
                  <span className="text-[9px] text-muted">
                    Connected to {TECH_BADGES.length} technologies
                  </span>
                  <div className="flex -space-x-1">
                    {TECH_BADGES.map((badge) => (
                      <span
                        key={badge.name}
                        className="h-2 w-2 rounded-full border border-surface bg-accent/60"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating tech badges (desktop only) */}
              {TECH_BADGES.map((badge) => {
                const Icon = badge.Icon;
                return (
                  <motion.div
                    key={badge.name}
                    data-tech-badge
                    className="absolute z-20 hidden h-12 w-12 items-center justify-center rounded-2xl border border-border bg-surface/90 shadow-[0_20px_50px_-25px_rgba(7,17,31,0.35)] backdrop-blur-md lg:flex"
                    style={badge.style}
                    animate={reduced ? undefined : { y: [0, -12, 0] }}
                    transition={
                      reduced
                        ? undefined
                        : { duration: badge.duration, repeat: Infinity, ease: "easeInOut" }
                    }
                    whileHover={
                      reduced
                        ? undefined
                        : {
                            scale: 1.15,
                            boxShadow: "0 0 0 1px var(--accent), 0 12px 30px -10px var(--glow)",
                          }
                    }
                  >
                    <Icon className="h-7 w-7" style={{ color: badge.color }} />
                  </motion.div>
                );
              })}

              {/* Floating status card */}
              <motion.div
                data-secondary-ui
                animate={reduced ? undefined : { y: [0, -10, 0] }}
                transition={
                  reduced ? undefined : { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }
                whileHover={reduced ? undefined : { y: -14, scale: 1.03 }}
                className="absolute right-[3%] top-[11%] z-20 hidden rounded-lg  border border-border bg-surface/90 px-4 py-3 shadow-[0_20px_50px_-25px_rgba(7,17,31,0.4)] backdrop-blur-xl lg:block"
              >
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-muted">
                  Digital
                </p>
                <p className="mt-1 text-sm font-semibold text-ink">Built for growth</p>
              </motion.div>

              {/* Floating bottom card */}
              <motion.div
                data-secondary-ui
                animate={reduced ? undefined : { y: [0, 8, 0] }}
                transition={
                  reduced
                    ? undefined
                    : { duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                }
                whileHover={reduced ? undefined : { y: -6, scale: 1.03 }}
                className="absolute bottom-[13%] left-[1%] z-20 hidden rounded-lg border border-border bg-surface/90 px-4 py-3 shadow-[0_20px_50px_-25px_rgba(7,17,31,0.4)] backdrop-blur-xl lg:block"
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span className="text-xs font-semibold text-ink">Performance</span>
                </div>
                <p className="mt-1 text-[10px] text-muted">Engineered to outperform</p>
              </motion.div>

              {/* Decorative dots */}
              <div className="absolute left-[8%] top-[15%] h-1.5 w-1.5 rounded-full bg-accent/60" />
              <div className="absolute bottom-[18%] right-[8%] h-1.5 w-1.5 rounded-full bg-accent-deep/50" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduced ? 0 : 1.5 }}
        className="absolute bottom-20 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-3 md:flex"
      >
        <motion.div
          animate={reduced ? undefined : { y: [0, 4, 0] }}
          transition={reduced ? undefined : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex h-8 w-5 items-start justify-center rounded-full border border-accent/50"
        >
          <motion.span
            animate={reduced ? undefined : { y: [3, 9, 3], opacity: [1, 0.3, 1] }}
            transition={reduced ? undefined : { duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="mt-1.5 h-1.5 w-[2px] rounded-full bg-accent"
          />
        </motion.div>
        <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-muted">
          Scroll to explore
        </span>
      </motion.div>
    </section>
  );
}



// "use client";

// import { useEffect, useRef } from "react";
// import { motion } from "motion/react";
// import { MagneticButton } from "@/components/ui/MagneticButton";
// import { gsap, registerGSAP } from "@/lib/gsap";
// import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

// export function Hero() {
//   const root = useRef<HTMLElement>(null);
//   const reduced = usePrefersReducedMotion();

//   useEffect(() => {
//     registerGSAP();
//     const el = root.current;
//     if (!el || reduced) return;

//     const ctx = gsap.context(() => {
//       gsap.from("[data-hero-brand]", {
//         y: 80,
//         opacity: 0,
//         duration: 1.1,
//         ease: "power4.out",
//       });
//       gsap.from("[data-hero-line]", {
//         y: 40,
//         opacity: 0,
//         duration: 0.9,
//         stagger: 0.12,
//         delay: 0.25,
//         ease: "power3.out",
//       });
//       gsap.from("[data-hero-cta]", {
//         y: 24,
//         opacity: 0,
//         duration: 0.8,
//         delay: 0.55,
//         ease: "power3.out",
//       });
//       gsap.to("[data-hero-orb]", {
//         y: 40,
//         ease: "none",
//         scrollTrigger: {
//           trigger: el,
//           start: "top top",
//           end: "bottom top",
//           scrub: true,
//         },
//       });
//     }, el);

//     return () => ctx.revert();
//   }, [reduced]);

//   return (
//     <section
//       ref={root}
//       className="relative flex min-h-[100svh] items-end overflow-hidden mesh-bg pb-16 pt-28 md:items-center md:pb-24 md:pt-24"
//     >
//       <div className="grid-overlay pointer-events-none absolute inset-0" />

//       <div
//         data-hero-orb
//         className="pointer-events-none absolute -right-24 top-24 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-3xl md:right-0"
//       />
//       <div
//         data-hero-orb
//         className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl"
//       />

//       {/* Full-bleed atmospheric visual plane */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <motion.div
//           aria-hidden
//           className="absolute inset-y-0 right-0 w-full md:w-[55%]"
//           initial={reduced ? false : { opacity: 0, scale: 1.08 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/90 md:to-background" />
//           <div className="absolute inset-0 opacity-40 mix-blend-multiply">
//             <div className="h-full w-full bg-[linear-gradient(135deg,transparent_40%,rgba(13,159,138,0.35)_70%,rgba(7,17,31,0.5)_100%)]" />
//           </div>
//           <svg
//             className="absolute bottom-0 right-0 h-[70%] w-[90%] opacity-30"
//             viewBox="0 0 800 600"
//             fill="none"
//             aria-hidden
//           >
//             <path
//               d="M40 520 C180 420, 220 280, 360 260 C520 235, 560 360, 700 300"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               className="text-ink"
//             />
//             <path
//               d="M80 540 C200 400, 280 220, 420 200 C580 175, 620 320, 760 260"
//               stroke="currentColor"
//               strokeWidth="1"
//               className="text-accent"
//               opacity="0.7"
//             />
//             <circle cx="360" cy="260" r="6" className="fill-accent" />
//             <circle cx="700" cy="300" r="4" className="fill-ink" />
//           </svg>
//         </motion.div>
//       </div>

//       <div className="section-pad container-wide relative z-10 w-full">
//         <p
//           data-hero-brand
//           className="font-display text-[clamp(3.5rem,14vw,10rem)] font-bold leading-[0.85] tracking-[-0.05em] text-ink"
//         >
//           OUTSTRIP
//         </p>

//         <div className="mt-8 max-w-xl md:mt-10">
//           <h1
//             data-hero-line
//             className="font-display text-2xl leading-tight text-ink sm:text-3xl md:text-4xl"
//           >
//             Digital products engineered to outperform.
//           </h1>
//           <p data-hero-line className="mt-4 text-base text-muted md:text-lg">
//             ISO-certified web, mobile, and growth systems for ambitious teams — from Jaipur to
//             the world.
//           </p>
//         </div>

//         <div data-hero-cta className="mt-8 flex flex-wrap items-center gap-4">
//           <MagneticButton href="/contact">Start a project</MagneticButton>
//           <MagneticButton href="/services" variant="secondary">
//             Explore services
//           </MagneticButton>
//         </div>
//       </div>
//     </section>
//   );
// }
