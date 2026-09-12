"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGSAP, ScrollTrigger } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerChildren } from "@/components/ui/StaggerChildren";
import type { ServiceProcessStep } from "@/lib/services";

const ACTIVE_CIRCLE_CLASSES = [
  "border-accent",
  "bg-accent",
  "shadow-[0_0_0_8px_rgba(255,255,255,0.03),0_0_35px_rgba(255,255,255,0.12)]",
];
const ACTIVE_NUMBER_CLASSES = ["text-ink"];
const ACTIVE_TITLE_CLASSES = ["text-accent-bright"];

export function ProcessStepper({ steps }: { steps: ServiceProcessStep[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const fillDesktopRef = useRef<HTMLDivElement>(null);
  const fillMobileRef = useRef<HTMLDivElement>(null);
  const circleRefsDesktop = useRef<Array<HTMLDivElement | null>>([]);
  const numberRefsDesktop = useRef<Array<HTMLSpanElement | null>>([]);
  const titleRefsDesktop = useRef<Array<HTMLHeadingElement | null>>([]);
  const circleRefsMobile = useRef<Array<HTMLDivElement | null>>([]);
  const numberRefsMobile = useRef<Array<HTMLSpanElement | null>>([]);
  const titleRefsMobile = useRef<Array<HTMLHeadingElement | null>>([]);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    registerGSAP();
    const section = sectionRef.current;
    if (!section) return;

    const total = steps.length;

    const setActive = (progress: number) => {
      const activeCount = Math.round(progress * total);
      for (let i = 0; i < total; i += 1) {
        const isActive = i < activeCount;
        ACTIVE_CIRCLE_CLASSES.forEach((cls) => {
          circleRefsDesktop.current[i]?.classList.toggle(cls, isActive);
          circleRefsMobile.current[i]?.classList.toggle(cls, isActive);
        });
        ACTIVE_NUMBER_CLASSES.forEach((cls) => {
          numberRefsDesktop.current[i]?.classList.toggle(cls, isActive);
          numberRefsMobile.current[i]?.classList.toggle(cls, isActive);
        });
        ACTIVE_TITLE_CLASSES.forEach((cls) => {
          titleRefsDesktop.current[i]?.classList.toggle(cls, isActive);
          titleRefsMobile.current[i]?.classList.toggle(cls, isActive);
        });
      }
    };

    if (reduced) {
      gsap.set([fillDesktopRef.current, fillMobileRef.current], { scaleX: 1, scaleY: 1 });
      setActive(1);
      return;
    }

    gsap.set(fillDesktopRef.current, { scaleX: 0 });
    gsap.set(fillMobileRef.current, { scaleY: 0 });

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top 75%",
      end: "bottom 55%",
      scrub: 0.6,
      onUpdate: (self) => {
        gsap.set(fillDesktopRef.current, { scaleX: self.progress });
        gsap.set(fillMobileRef.current, { scaleY: self.progress });
        setActive(self.progress);
      },
    });

    return () => {
      trigger.kill();
    };
  }, [reduced, steps.length]);

  return (
    <div ref={sectionRef}>
      <Reveal delay={0.08} className="mt-10 hidden lg:block">
        <div className="relative">
          <div className="absolute left-[12.5%] right-[12.5%] top-8 h-px overflow-hidden bg-white/10">
            <div
              ref={fillDesktopRef}
              className="h-full w-full origin-left bg-gradient-to-r from-accent via-accent-bright to-accent"
            />
          </div>

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <article
                key={step.step}
                className="group relative flex flex-col items-center text-center"
              >
                <div
                  ref={(el) => {
                    circleRefsDesktop.current[index] = el;
                  }}
                  className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/15  shadow-[0_0_0_8px_rgba(255,255,255,0.015)] transition-all duration-500 group-hover:border-accent group-hover:bg-[#087a6a] group-hover:shadow-[0_0_0_8px_rgba(255,255,255,0.03),0_0_35px_rgba(255,255,255,0.12)]"
                >
                  <span
                    ref={(el) => {
                      numberRefsDesktop.current[index] = el;
                    }}
                    className="font-display text-sm font-bold tracking-wide text-white transition-colors duration-500 group-hover:text-white"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-6 transition-transform duration-500 group-hover:-translate-y-1">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-accent-bright/70">
                    Step {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3
                    ref={(el) => {
                      titleRefsDesktop.current[index] = el;
                    }}
                    className="mt-3 font-display text-xl font-semibold text-white transition-colors duration-300 group-hover:text-accent-bright"
                  >
                    {step.title}
                  </h3>

                  <p className="mx-auto mt-3 max-w-[250px] text-sm leading-7 text-white/45">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="mt-7 h-px w-0 bg-accent transition-all duration-500 group-hover:w-16" />
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      {/* MOBILE / TABLET VERTICAL STEPPER */}
      <StaggerChildren className="mt-14 lg:hidden">
        <div className="relative ml-2">
          {/* Vertical Line */}
          <div className="absolute bottom-8 left-[23px] top-8 w-px overflow-hidden bg-white/10">
            <div
              ref={fillMobileRef}
              className="h-full w-full origin-top bg-gradient-to-b from-accent via-accent-bright to-accent"
            />
          </div>

          <div className="space-y-10">
            {steps.map((step, index) => (
              <article key={step.step} data-stagger-item className="group relative flex gap-6">
                {/* Step Number */}
                <div
                  ref={(el) => {
                    circleRefsMobile.current[index] = el;
                  }}
                  className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-ink transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:shadow-[0_0_25px_rgba(255,255,255,0.12)]"
                >
                  <span
                    ref={(el) => {
                      numberRefsMobile.current[index] = el;
                    }}
                    className="text-xs font-bold text-white/60 transition-colors duration-500 group-hover:text-ink"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent-bright/70">
                    Step {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3
                    ref={(el) => {
                      titleRefsMobile.current[index] = el;
                    }}
                    className="mt-2 font-display text-xl font-semibold text-white transition-colors duration-300 group-hover:text-accent-bright"
                  >
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-white/45">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </StaggerChildren>
    </div>
  );
}
