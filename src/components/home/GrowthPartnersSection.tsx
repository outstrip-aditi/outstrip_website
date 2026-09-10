"use client";

import { useEffect, useRef, type ElementType } from "react";
import { SiGooglecloud, SiShopify, SiStripe, SiMeta } from "react-icons/si";
import { FaAws, FaSalesforce } from "react-icons/fa6";
import { TbBrandAdobe, TbBrandGoogle } from "react-icons/tb";
import { FiArrowUpRight } from "react-icons/fi";
import { growthPartners } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { gsap, registerGSAP } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

// Keyed by each partner's stable `short` code (see lib/data.ts) rather than
// its display name, since name-string matching is fragile to copy edits.
// Each brand's real color is used so the badges read as genuinely colorful
// logos, not a single flat site-accent tint.
const logoMap: Record<string, { Icon: ElementType; color: string }> = {
  AWS: { Icon: FaAws, color: "#FF9900" },
  GCP: { Icon: SiGooglecloud, color: "#4285F4" },
  SF: { Icon: FaSalesforce, color: "#00A1E0" },
  SHP: { Icon: SiShopify, color: "#95BF47" },
  AC: { Icon: TbBrandAdobe, color: "#FF0000" },
  STR: { Icon: SiStripe, color: "#635BFF" },
  META: { Icon: SiMeta, color: "#0866FF" },
  GWS: { Icon: TbBrandGoogle, color: "#4285F4" },
};

function PartnerCard({
  name,
  short,
  category,
}: {
  name: string;
  short: string;
  category: string;
}) {
  const logo = logoMap[short];

  return (
    <div className="group relative flex h-[92px] w-[270px] shrink-0 items-center gap-4 overflow-hidden bg-surface px-5 transition-all duration-500 hover:-translate-y-1 hover:bg-white">
      <div className="absolute inset-y-0 left-0 w-[2px] origin-bottom scale-y-0 bg-accent transition-transform duration-500 group-hover:scale-y-100" />

      <div
        className={cn(
          "relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-all duration-500 group-hover:scale-105",
          !logo && "bg-background text-ink",
        )}
        style={logo ? { backgroundColor: `${logo.color}17` } : undefined}
      >
        {logo ? (
          <logo.Icon
            className="h-10 w-10 transition-transform duration-500 group-hover:scale-110"
            style={{ color: logo.color }}
          />
        ) : (
          <span className="font-display text-sm font-bold text-ink">{short}</span>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <span className="block truncate font-display text-sm font-semibold text-ink transition-colors duration-300 group-hover:text-accent-deep">
          {name}
        </span>

        <span className="mt-1 block truncate text-[9px] font-semibold uppercase tracking-[0.18em] text-muted">
          {category}
        </span>
      </div>

      <span className="flex h-7 w-7 shrink-0 translate-x-2 items-center justify-center text-muted opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-accent-deep group-hover:opacity-100">
        <FiArrowUpRight className="h-4 w-4" />
      </span>
    </div>
  );
}

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced || !trackRef.current) return;

    registerGSAP();

    const track = trackRef.current;

    gsap.set(track, {
      xPercent: reverse ? -50 : 0,
    });

    const tween = gsap.to(track, {
      xPercent: reverse ? 0 : -50,
      duration: reverse ? 38 : 34,
      ease: "none",
      repeat: -1,
    });

    const handleEnter = () => {
      gsap.to(tween, {
        timeScale: 0.12,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    const handleLeave = () => {
      gsap.to(tween, {
        timeScale: 1,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    track.addEventListener("mouseenter", handleEnter);
    track.addEventListener("mouseleave", handleLeave);

    return () => {
      tween.kill();
      track.removeEventListener("mouseenter", handleEnter);
      track.removeEventListener("mouseleave", handleLeave);
    };
  }, [reduced, reverse]);

  const row = [...growthPartners, ...growthPartners];

  return (
    <div className="overflow-hidden">
      <div
        ref={trackRef}
        className="flex w-max gap-3 will-change-transform"
      >
        {row.map((partner, index) => (
          <PartnerCard
            key={`${partner.short}-${index}`}
            {...partner}
          />
        ))}
      </div>
    </div>
  );
}

export function GrowthPartnersSection() {
  const reduced = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (reduced || !sectionRef.current) return;

    registerGSAP();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-partner-content]",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
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
      className="section-pad relative overflow-hidden bg-background py-20 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-accent/[0.07] blur-[140px]" />
        <div className="absolute -right-40 bottom-1/4 h-[360px] w-[360px] rounded-full bg-cyan-300/[0.05] blur-[130px]" />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="h-full w-full bg-[linear-gradient(rgba(7,17,31,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(7,17,31,0.04)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />
      </div>

      <div className="container-wide relative z-10">
        {/* Header */}
        <div data-partner-content>
          <Reveal>
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <SectionHeading
                  eyebrow="Our Growth Partners"
                  title="Built on the platforms that power modern business"
                  description="We work across leading cloud, commerce, marketing, and technology ecosystems to create products that are flexible, scalable, and ready for growth."
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Marquee */}
        <div
          data-partner-content
          className={cn(
            "relative mt-12",
            !reduced &&
              "[mask-image:linear-gradient(90deg,transparent,black_7%,black_93%,transparent)]",
          )}
        >
          {reduced ? (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {growthPartners.map((partner) => (
                <PartnerCard
                  key={partner.short}
                  {...partner}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <MarqueeRow />
              <MarqueeRow reverse />
            </div>
          )}
        </div>

        {/* Bottom statement */}
        <div
          data-partner-content
          className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <span className="h-[2px] w-10 bg-border" />

          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">
            The right technology for every ambition
          </p>

          <span className="h-[2px] w-10 bg-border" />
        </div>
      </div>
    </section>
  );
}