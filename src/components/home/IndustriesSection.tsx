"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { industries } from "@/lib/data";
import { industryImages } from "@/lib/images";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { gsap, registerGSAP } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

export function IndustriesSection() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced || !sectionRef.current) return;
    registerGSAP();

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".industry-panel");
      if (!panels.length) return;

      gsap.fromTo(
        panels,
        { opacity: 0, y: 44, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      className="bg-white section-pad relative overflow-hidden border-y border-border py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-40" />
      <div className="container-wide relative">
        <Reveal>
          <SectionHeading
            eyebrow="Industries"
            title="Domain fluency across markets"
            description="Promote transparency, mitigate risk, enhance quality — with solutions shaped for how your industry actually operates."
          />
        </Reveal>

        <div className="mt-14 hidden gap-3 md:flex md:h-[360px] lg:h-[400px]">
          {industries.map((item, index) => {
            const image = industryImages[item.slug];
            const isActive = active === index;

            return (
              <Link
                href={`/industries/${item.slug}`}
                key={item.slug}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                aria-expanded={isActive}
                aria-label={item.title}
                className={cn(
                  "industry-panel group relative overflow-hidden rounded-lg border border-border text-left outline-none transition-[flex] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  isActive ? "flex-[5]" : "flex-[1]",
                )}
              >
                {image && (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className={cn(
                      "object-cover transition-transform duration-700 ease-out",
                      isActive ? "scale-100" : "scale-110",
                    )}
                  />
                )}
                <div
                  className={cn(
                    "absolute inset-0 transition-colors duration-700",
                    isActive ? "bg-ink/55" : "bg-ink/78",
                  )}
                />

                <span
                  className={cn(
                    "font-display absolute text-white transition-all duration-500",
                    isActive
                      ? "bottom-8 left-8 origin-bottom-left rotate-0 text-2xl lg:text-3xl"
                      : "bottom-36 left-1/2 origin-bottom-left -translate-x-1/2 rotate-90 whitespace-nowrap text-base",
                  )}
                >
                  {item.title}
                </span>

                <p
                  className={cn(
                    "absolute inset-x-8 bottom-20 max-w-xs text-sm leading-relaxed text-white/75 transition-all duration-500",
                    isActive
                      ? "translate-y-0 opacity-100 delay-200"
                      : "pointer-events-none translate-y-3 opacity-0",
                  )}
                >
                  {item.description}
                </p>

                <span
                  className={cn(
                    "font-display absolute right-6 top-6 text-xs text-white/50 transition-opacity duration-300",
                    isActive ? "opacity-100" : "opacity-0",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Mobile: stacked image cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:hidden">
          {industries.map((item) => {
            const image = industryImages[item.slug];

            return (
              <Link
                href={`/industries/${item.slug}`}
                key={item.slug}
                className="industry-panel group relative h-56 overflow-hidden rounded-2xl border border-border"
              >
                {image && (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
                <div className="absolute inset-x-5 bottom-5">
                  <h3 className="font-display text-lg text-white">{item.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/70">{item.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
