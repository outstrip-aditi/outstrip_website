"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import { industries } from "@/lib/data";
import { industryImages } from "@/lib/images";
import { gsap, registerGSAP } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const GRID_COLS = 3;

export function IndustryExpertiseContent() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    registerGSAP();

    const section = sectionRef.current;
    const cardsContainer = cardsRef.current;

    if (!section || !cardsContainer) return;

    const cards = Array.from(
      cardsContainer.querySelectorAll<HTMLElement>("[data-industry-card]"),
    );

    if (reduced) {
      gsap.set(cards, { opacity: 1, y: 0, scale: 1, rotateX: 0 });
      return;
    }

    const ctx = gsap.context(() => {

      gsap.fromTo(
        cards,
        {
          y: 60,
          opacity: 0,
          scale: 0.94,
          rotateX: -8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateX: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: {
            each: 0.09,
            grid: [Math.ceil(cards.length / GRID_COLS), GRID_COLS],
            from: "start",
          },
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            once: true,
          },
        },
      );

      gsap.to("[data-industry-grid]", {
        backgroundPosition: "70px 70px",
        duration: 18,
        ease: "none",
        repeat: -1,
      });

      const cleanups = cards.map((card) => {
        const glow = card.querySelector<HTMLElement>("[data-industry-glow]");
        const icon = card.querySelector<HTMLElement>("[data-card-icon]");

        const handleMove = (event: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;

          if (glow) {
            gsap.to(glow, {
              x: x - 120,
              y: y - 120,
              duration: 0.35,
              ease: "power2.out",
            });
          }

          gsap.to(card, {
            rotateX: (y / rect.height - 0.5) * -3,
            rotateY: (x / rect.width - 0.5) * 3,
            duration: 0.35,
            ease: "power2.out",
            transformPerspective: 1000,
          });
        };

        const handleEnter = () => {
          gsap.to(card, { y: -8, duration: 0.35, ease: "power3.out" });

          if (icon) {
            gsap.to(icon, {
              x: 4,
              y: -4,
              scale: 1.08,
              duration: 0.35,
              ease: "power3.out",
            });
          }
        };

        const handleLeave = () => {
          gsap.to(card, {
            y: 0,
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: "power3.out",
          });

          if (icon) {
            gsap.to(icon, {
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.4,
              ease: "power3.out",
            });
          }

          if (glow) {
            gsap.to(glow, { x: 0, y: 0, duration: 0.5, ease: "power3.out" });
          }
        };

        card.addEventListener("mousemove", handleMove);
        card.addEventListener("mouseenter", handleEnter);
        card.addEventListener("mouseleave", handleLeave);

        return () => {
          card.removeEventListener("mousemove", handleMove);
          card.removeEventListener("mouseenter", handleEnter);
          card.removeEventListener("mouseleave", handleLeave);
        };
      });

      return () => {
        cleanups.forEach((cleanup) => cleanup());
      };
    }, section);

    return () => {
      ctx.revert();
    };
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      className="section-pad relative overflow-hidden bg-ink section-pad py-2 md:py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[15%] h-[500px] w-[500px] rounded-full bg-accent/[0.08] blur-[150px]" />
        <div className="absolute bottom-[-150px] right-[-150px] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.06] blur-[150px]" />
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.03] blur-[120px]" />
      </div>

      <div
        data-industry-grid
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="pointer-events-none absolute left-[8%] top-[18%] h-2 w-2 rounded-full bg-accent shadow-[0_0_20px_rgba(26,224,200,0.8)]" />
      <div className="pointer-events-none absolute right-[10%] top-[32%] h-1.5 w-1.5 rounded-full bg-accent/70" />
      <div className="pointer-events-none absolute bottom-[18%] left-[18%] h-1 w-1 rounded-full bg-white/30" />

      <div className="container-wide relative z-10">
        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-accent" />
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent">
                Our Expertise
              </span>
            </div>

            <SectionHeading
              light
              eyebrow=""
              title="Different industries. One engineering mindset."
              description="We adapt our technology, design, and delivery approach to the needs of each business, combining domain understanding with modern engineering."
            />
          </div>
        </Reveal>

        <div
          ref={cardsRef}
          className="mx-auto mt-14 grid w-full max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {industries.map((industry, index) => {
            const featured = index === 0;
            const image = industryImages[industry.slug];

            return (
              <Link
                href={`/industries/${industry.slug}`}
                key={industry.slug}
                data-industry-card
                className={cn(
                  "group relative h-[250px] min-h-[25px] overflow-hidden rounded-lg border border-white/20 bg-white/[0.035] p-6 opacity-0 will-change-transform transform-3d",
                  featured &&
                  "sm:col-span-2 lg:col-span-2 lg:min-h-[250px]",
                )}
              >
                {image && (
                  <div className="absolute inset-0">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes={
                        featured
                          ? "(min-width: 1024px) 66vw, 100vw"
                          : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      }
                      className=" object-cover opacity-90 grayscale-[55%] transition-all duration-700 ease-out
                      group-hover:scale-110 group-hover:opacity-90 group-hover:grayscale-0 "
                    />

                    <div
                      className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/25 to-ink/20 transition-all 
                      duration-500 group-hover:from-ink/75 group-hover:via-ink/30group-hover:to-ink/10"
                    />
                  </div>
                )}

                <span
                  aria-hidden="true"
                  className="animated-gradient-border-dark pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                {/* Mouse Glow */}
                <div
                  data-industry-glow
                  className="pointer-events-none absolute left-0 top-0 h-60 w-60 rounded-full bg-accent/[0.12] blur-[80px]"
                />

                {/* Hover Grid */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:32px_32px]" />
                </div>

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent transition-transform duration-[1200ms] ease-out group-hover:translate-x-full"
                />
                {/* Top Accent */}
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-accent transition-all duration-700 group-hover:w-full" />

                <span
                  aria-hidden="true"
                  className="font-display pointer-events-none absolute -bottom-6 -right-2 select-none text-[7rem] font-bold leading-none text-white/[0.035] transition-colors duration-500 group-hover:text-accent/[0.08]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Card Content */}
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-accent/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      data-card-icon
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-white/[0.04] text-white/50 transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent group-hover:text-ink"
                    >
                      <FiArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>

                  <div className="mt-auto pt-6">
                    {featured && (
                      <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/[0.08] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-accent-bright">
                        Featured
                      </span>
                    )}
                    <h3
                      className={cn(
                        "font-display font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-accent",
                        featured ? "text-2xl md:text-3xl" : "text-xl",
                      )}
                    >
                      {industry.title}
                    </h3>

                    <p
                      className={cn(
                        "mt-3 text-sm leading-7 text-white/45 transition-colors duration-300 group-hover:text-white/65",
                        featured ? "max-w-lg" : "max-w-sm",
                      )}
                    >
                      {industry.description}
                    </p>
                  </div>

                  <div className="mt-5 h-[2px] w-10 bg-white/60 transition-all duration-500 group-hover:w-full group-hover:bg-accent/40" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
