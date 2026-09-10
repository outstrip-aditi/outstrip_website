"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { FiChevronDown, FiArrowUpRight } from "react-icons/fi";

import { industries, type Industry } from "@/lib/data";
import { industryImages } from "@/lib/images";
import { cn } from "@/lib/utils";
import { registerGSAP } from "@/lib/gsap";
import { IndustryIcon } from "@/components/industries/IndustryIcon";

export function IndustriesMegaMenu({ active }: { active: boolean }) {
  const [open, setOpen] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState<Industry>(industries[0]);

  const panelRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    registerGSAP();
  }, []);

  useEffect(() => {
    const panel = panelRef.current;

    if (!panel) return;

    if (open) {
      gsap.killTweensOf(panel);

      gsap.set(panel, {
        display: "block",
      });

      gsap.fromTo(
        panel,
        {
          opacity: 0,
          y: -12,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: "power3.out",
        },
      );

      gsap.fromTo(
        panel.querySelectorAll("[data-mega-item]"),
        {
          opacity: 0,
          y: 10,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.035,
          delay: 0.05,
          ease: "power3.out",
        },
      );
    } else {
      gsap.to(panel, {
        opacity: 0,
        y: -10,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(panel, {
            display: "none",
          });
        },
      });
    }
  }, [open]);

  /* Change preview image */
  const handleIndustryHover = (industry: Industry) => {
    if (industry.title === activeIndustry.title) return;

    setActiveIndustry(industry);

    const image = imageRef.current;

    if (!image) return;

    gsap.killTweensOf(image);

    gsap.fromTo(
      image,
      {
        opacity: 0,
        scale: 1.06,
        x: 15,
      },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 0.45,
        ease: "power3.out",
      },
    );
  };

  const scheduleClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }

    closeTimer.current = setTimeout(() => {
      setOpen(false);
    }, 160);
  };

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
  };

  const activeImage = industryImages[activeIndustry.slug];

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <Link
        href="/industries"
        onFocus={() => setOpen(true)}
        className={cn(
          "relative flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors",
          active
            ? "text-ink"
            : "text-muted hover:text-ink",
        )}
      >
        Industries

        <FiChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-300",
            open && "rotate-180",
          )}
        />

        {active && (
          <span className="absolute inset-x-3 -bottom-0.5 h-[2px] bg-accent" />
        )}
      </Link>

      {/* Mega Menu */}
      <div
        ref={panelRef}
        className="fixed left-1/2 top-[74px] z-[999] hidden w-[min(1180px,calc(100vw-32px))] -translate-x-1/2 pt-3 opacity-0"
      >
        <div
          className="
            overflow-hidden rounded-lg border border-border bg-surface
            shadow-[0_35px_100px_-35px_rgba(7,17,31,0.45)]
          "
        >
          <div className="grid grid-cols-[1fr_300px]">
            <div className="p-7">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent-deep">
                    Our Industries
                  </p>

                  <h3 className="mt-1 font-display text-lg font-semibold text-ink">
                    Domain fluency across markets.
                  </h3>
                </div>

                <Link
                  href="/industries"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-1.5
                    text-xs
                    font-semibold
                    text-muted
                    transition-colors
                    hover:text-accent-deep
                  "
                >
                  View all
                  <FiArrowUpRight
                    className="
                      h-3.5
                      w-3.5
                      transition-transform
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </Link>
              </div>

              {/* grid of industries */}
              <div className="grid grid-cols-4 gap-x-6 gap-y-8">
                {industries.map((industry, index) => {
                  const isActive = activeIndustry.title === industry.title;

                  return (
                    <Link
                      key={industry.slug}
                      href={`/industries/${industry.slug}`}
                      data-mega-item
                      onMouseEnter={() => handleIndustryHover(industry)}
                      className="min-w-0"
                    >
                      <div
                        className={cn(
                          "mb-0 flex items-center gap-2",
                          isActive ? "text-accent-deep" : "text-ink",
                        )}
                      >
                        <span
                          className={cn(
                            "flex h-7 w-7 shrink-0 items-center justify-center rounded-md border text-[10px] font-bold",
                            isActive
                              ? "border-accent/40 bg-accent/10 text-accent-deep"
                              : "border-border bg-surface-soft text-muted",
                          )}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="truncate text-sm font-semibold">
                          {industry.title}
                        </span>
                      </div>

                      <div className="ml-6">
                        <span className="group/link flex items-center gap-1.5 py-0.5 text-[12px] leading-6 text-muted transition-all duration-200 hover:translate-x-1 hover:text-accent-deep">
                          <span className="h-1 w-1 rounded-full bg-transparent transition-colors group-hover/link:bg-accent" />
                          {industry.tagline}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Image Panel */}
            <div className="relative overflow-hidden bg-ink">
              {/* Background glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-[90px]" />

              <div
                ref={imageRef}
                className="absolute inset-0"
              >
                {activeImage && (
                  <Image
                    src={activeImage.src}
                    alt={activeImage.alt}
                    fill
                    sizes="360px"
                    priority
                    className="object-cover"
                  />
                )}

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

                {/* Subtle grid */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-20
                    bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
                    bg-[size:32px_32px]
                  "
                />
              </div>

              {/* Image content */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-7">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-accent-bright backdrop-blur-md">
                  <IndustryIcon icon={activeIndustry.icon} className="h-9 w-9 border-0 bg-transparent text-accent-bright [&>svg]:h-4 [&>svg]:w-4" />
                </span>

                <span className="mt-3 block text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-bright">
                  Featured Industry
                </span>

                <h4 className="mt-2 font-display text-2xl font-semibold text-white">
                  {activeIndustry.title}
                </h4>

                <div className="mt-4 h-[2px] w-12 bg-accent transition-all duration-500" />

                <Link
                  href={`/industries/${activeIndustry.slug}`}
                  className="
                    group
                    mt-5
                    inline-flex
                    items-center
                    gap-2
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-white/80
                    transition-colors
                    hover:text-accent-bright
                  "
                >
                  Explore industry

                  <FiArrowUpRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
