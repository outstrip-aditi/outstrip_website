"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

import { gsap, registerGSAP } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function OurWorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced || !sectionRef.current || !imageRef.current) return;

    registerGSAP();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        {
          opacity: 0,
          y: 35,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        },
      );

      gsap.to(imageRef.current, {
        y: -8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white section-pad py-20 md:py-24"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/3 h-[400px] w-[400px] rounded-full bg-accent/[0.05] blur-[130px]" />

        <div className="absolute -right-32 bottom-0 h-[450px] w-[450px] rounded-full bg-purple-400/[0.04] blur-[140px]" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* LEFT CONTENT */}
          <Reveal>
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-9 bg-accent" />

                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent-deep">
                  Portfolio
                </span>
              </div>

              <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-ink md:text-5xl lg:text-6xl">
                Our{" "}
                <span className="text-gradient">
                  Work
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-base leading-8 text-muted md:text-lg">
                We have amassed a fortune of experience and expertise in
                developing products for various industries. Feel free to browse
                through our past projects.
              </p>

              <div className="mt-9">
                <MagneticButton href="/projects" size="md">
                  View Portfolio
                  <FiArrowRight className="h-4 w-4" />
                </MagneticButton>
              </div>
            </div>
          </Reveal>

          {/* RIGHT IMAGE */}
          <Reveal delay={0.1}>
            <div
              ref={imageRef}
              className="relative mx-auto w-full max-w-[550px]"
            >
              <div className="relative overflow-hidden rounded-lg border border-gray-300 bg-white shadow-[0_30px_80px_rgba(7,17,31,0.14)]">
                <Image
                  src="/images/about/project.png"
                  alt="Outstrip Infotech projects portfolio"
                  width={1200}
                  height={900}
                  priority
                  sizes="(min-width: 1024px) 500px, 90vw"
                  className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.025]"
                />

                <div className="pointer-events-none absolute inset-0 rounded-lg border border-white/50" />
              </div>

              <div className="absolute -bottom-5 -right-5 -z-10 h-[75%] w-[75%] rounded-[24px] border-2 border-accent/20 bg-accent/[0.025]" />

              <div className="absolute -left-5 -top-5 -z-10 h-[65%] w-[65%] rounded-[24px] border border-accent/[0.09]" />

              <div className="absolute -right-4 top-12 h-4 w-4 rounded-full bg-accent shadow-[0_0_25px_rgba(26,224,200,0.65)]" />

              <div className="absolute -bottom-7 left-4 grid grid-cols-4 gap-1.5 opacity-60">
                {Array.from({ length: 12 }).map((_, index) => (
                  <span
                    key={index}
                    className="h-1.5 w-1.5 rounded-full bg-accent"
                  />
                ))}
              </div>

              <div className="absolute -right-4 -top-5 flex items-center gap-2 rounded-l border border-gray-300 bg-white/95 px-4 py-2 shadow-lg backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>

                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-ink">
                  Our Projects
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}