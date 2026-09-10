"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data";
import { images } from "@/lib/images";
import { gsap, registerGSAP } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

type AboutItem = {
  href: string;
  label: string;
  description: string;
  image: { src: string; alt: string };
};

const aboutItems: AboutItem[] = [
  {
    href: "/about",
    label: "About Us",
    description: "Who we are and what we stand for.",
    image: images.aboutUs,
  },
  {
    href: "/about/team",
    label: "Our Team",
    description: "The specialists behind every build.",
    image: images.ourTeam,
  },
  {
    href: "/blog",
    label: "Blogs",
    description: "Insights on technology, design, and digital growth.",
    image: images.ourStory,
  },
  {
    href: "/about/talks-to-founders",
    label: "Talk to Founders",
    description: "Connect directly with our founders and leadership team.",
    image: images.missionVision,
  },
  {
    href: "/careers",
    label: "Careers",
    description: "Open roles and life at OUTSTRIP.",
    image: images.careers,
  },
  {
    href: "/contact",
    label: "Contact Us",
    description: "Studio location and direct lines.",
    image: images.contact,
  },
];

export function AboutMegaMenu({ active }: { active: boolean }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(aboutItems[0].href);

  const panelRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const reduced = usePrefersReducedMotion();

  const current =
    aboutItems.find((item) => item.href === hovered) ?? aboutItems[0];

  useEffect(() => {
    registerGSAP();
  }, []);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();

    closeTimer.current = setTimeout(() => {
      setOpen(false);
    }, 180);
  };

  const openMenu = () => {
    cancelClose();
    setHovered(aboutItems[0].href);
    setOpen(true);
  };

  useEffect(() => {
    const panel = panelRef.current;

    if (!panel) return;

    gsap.killTweensOf(panel);

    if (open) {
      gsap.set(panel, { display: "block" });

      if (reduced) {
        gsap.set(panel, { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        panel,
        { opacity: 0, y: -14, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.35,
          ease: "power3.out",
        },
      );

      gsap.fromTo(
        panel.querySelectorAll("[data-about-item]"),
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.05,
          delay: 0.08,
          ease: "power3.out",
        },
      );
    } else {
      if (reduced) {
        gsap.set(panel, { display: "none" });
        return;
      }

      gsap.to(panel, {
        opacity: 0,
        y: -10,
        scale: 0.99,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(panel, { display: "none" });
        },
      });
    }
  }, [open, reduced]);

  useEffect(() => {
    if (!imageRef.current || reduced) return;

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 1.06 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.45,
        ease: "power3.out",
      },
    );
  }, [hovered, reduced]);

  return (
    <div
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      {/* About Trigger */}
      <Link
        href="/about"
        onFocus={openMenu}
        className={cn(
          "relative flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors",
          active || open ? "text-ink" : "text-muted hover:text-ink",
        )}
      >
        About

        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-300",
            open && "rotate-180",
          )}
        >
          <path
            d="m6 9 6 6 6-6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {(active || open) && (
          <span className="absolute inset-x-3 -bottom-0.5 h-[2px] bg-accent" />
        )}
      </Link>

      {/* Mega Menu */}
      <div
        ref={panelRef}
        className="fixed left-1/2 top-[76px] z-[999] hidden w-[min(1050px,calc(100vw-32px))] -translate-x-1/2 pt-3 opacity-0"
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
        onFocus={cancelClose}
        onBlur={scheduleClose}
      >
        <div className="overflow-hidden rounded-lg border border-border bg-surface shadow-[0_30px_80px_-35px_rgba(7,17,31,0.4)]">
          <div className="grid min-h-350px] grid-cols-[0.7fr_1.1fr]">
            {/* Left Image */}
            <div className="relative p-5">
              <div
                ref={imageRef}
                className="relative h-full min-h-[280px] overflow-hidden rounded-lg bg-ink"
              >
                <Image
                  key={current.href}
                  src={current.image.src}
                  alt={current.image.alt}
                  fill
                  sizes="(min-width: 1024px) 430px, 45vw"
                  className="object-cover transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent" />

                <div className="absolute left-6 right-6 top-6 flex items-center justify-between">
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-md">
                    OUTSTRIP
                  </span>

                  <span className="font-display text-xs text-white/50">
                    01 / 06
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-bright">
                    Discover
                  </p>

                  <h3 className="mt-2 font-display text-3xl font-semibold text-white">
                    {current.label}
                  </h3>

                  <p className="mt-2 max-w-sm text-xs leading-relaxed text-white/60">
                    {current.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col pl-0 p-4 pr-5 md:py-5 md:pr-5">
              <div className="border-b border-border pb-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent-deep">
                  About OUTSTRIP
                </p>

                <h2 className="mt-2 font-display text-lg font-semibold text-ink">
                  Get to know us
                </h2>

              </div>

              <div className="mt-3 grid grid-cols-3 ">
                {aboutItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    data-about-item
                    onMouseEnter={() => setHovered(item.href)}
                    className={cn(
                      "group relative flex flex-col justify-center rounded-lg p-2.5 transition-all duration-300 hover:bg-surface-soft",
                    )}
                  >
                    <div className="flex items-start gap-2">
                      <span className="font-display text-xs font-semibold text-accent/60">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <h3 className="text-sm font-semibold text-ink transition-colors group-hover:text-accent-deep">
                          {item.label}
                        </h3>

                        <p className="mt-1 text-xs leading-relaxed text-muted">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
                <div></div>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-deep"
                >
                  About Us
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { aboutItems };