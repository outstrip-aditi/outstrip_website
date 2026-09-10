"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data";
import { serviceImages } from "@/lib/images";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { gsap, ScrollTrigger, registerGSAP } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { legacyServiceCategoryAnchor } from "@/lib/services";

export function ServicesPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced || !sectionRef.current || !cardsRef.current || services.length <= 1) return;

    registerGSAP();

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".service-stack-card");

      if (!cards.length) return;

      gsap.set(cards, {
        yPercent: (index) => (index === 0 ? 0 : 110),
        scale: (index) => (index === 0 ? 1 : 0.94),
        opacity: (index) => (index === 0 ? 1 : 0),
        filter: (index) => (index === 0 ? "brightness(1) saturate(1)" : "brightness(0.8) saturate(0.9)"),
        transformOrigin: "center top",
      });

      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top+=80",
          end: `+=${Math.max(services.length * 650, 2200)}`,
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          pinSpacing: true,
        },
      });

      for (let index = 1; index < cards.length; index++) {
        const previous = cards[index - 1];
        const current = cards[index];

        timeline.add(`card-${index}`);

        timeline.to(previous, {
          scale: 0.88,
          yPercent: -4,
          filter: "brightness(0.68) saturate(0.8)",
          duration: 1,
        }, "<");

        timeline.to(current, {
          yPercent: 0,
          opacity: 1,
          scale: 1,
          filter: "brightness(1) saturate(1)",
          duration: 1,
        }, "<");

        timeline.to({}, { duration: 0.35 });
      }

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  if (reduced) {
    return (
      <section className="section-pad relative py-24 md:py-32">
        <div className="container-wide">
          <Reveal>
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <SectionHeading eyebrow="What we build" title="Services built for momentum" description="From first sketch to production traffic — product engineering, design, and growth under one roof." />
              <MagneticButton href="/services" variant="secondary" className="shrink-0 self-start md:self-auto">
                All services
              </MagneticButton>
            </div>
          </Reveal>

          <div className="mt-14 space-y-8">
            {services.map((service, index) => {
              const image = serviceImages[service.slug];

              return (
                <ServiceCard key={service.slug} service={service} image={image} index={index} />
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-background pb-20 pt-14 md:pb-30 md:pt-14">
      <div className="section-pad container-wide">
        <Reveal>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="What we build" title="Services built for momentum" description="From first sketch to production traffic — product engineering, design, and growth under one roof." />

            <MagneticButton href="/services" variant="secondary" className="shrink-0 self-start md:self-auto">
              All services
            </MagneticButton>
          </div>
        </Reveal>
      </div>

      <div ref={cardsRef} className="section-pad relative mt-12 md:mt-16">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.06] blur-[100px]" />

        <div className="relative mx-auto h-[400px] w-full max-w-7xl sm:h-[400px] lg:h-[370px]">
          {services.map((service, index) => {
            const image = serviceImages[service.slug];

            return (
              <div key={service.slug} className="service-stack-card absolute inset-0 mx-auto w-full will-change-transform" style={{ zIndex: index + 1 }}>
                <ServiceCard service={service} image={image} index={index} />
              </div>
            );
          })}
        </div>

        <div className="pointer-events-none relative z-[100] mt-8 flex items-center justify-center gap-2">
          {services.map((service) => (
            <span key={service.slug} className="h-1 w-6 rounded-full bg-ink/10 sm:w-10" aria-hidden="true" />
          ))}
        </div>
      </div>
    </section>
  );
}

type ServiceCardProps = {
  service: (typeof services)[number];
  image: { src: string; alt: string } | undefined;
  index: number;
};

function ServiceCard({ service, image, index }: ServiceCardProps) {
  return (
    <Link href={`/services#${legacyServiceCategoryAnchor[service.slug] ?? service.slug}`} className="service-card-inner group relative grid w-full overflow-hidden rounded-lg border border-border bg-surface shadow-[0_8px_20px_-14px_rgba(7,17,31,0.22)] transition-all duration-500 md:grid-cols-2">
      <div className="relative h-[220px] overflow-hidden bg-ink sm:h-[260px] md:h-full">
        {image && (
          <Image src={image.src} alt={image.alt} fill priority={index === 0} sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent md:bg-gradient-to-r md:from-ink/50 md:via-ink/10 md:to-transparent" />

        <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 backdrop-blur-md">
          <span className="font-display text-xs font-semibold text-white">{String(index + 1).padStart(2, "0")}</span>
          <span className="text-xs text-white/40">/</span>
          <span className="text-xs text-white/50">{String(services.length).padStart(2, "0")}</span>
        </div>

        <div className="absolute bottom-6 left-6 right-6 hidden md:block">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">OUTSTRIP</span>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-4 p-7 sm:p-6 md:p-8 lg:p-10">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/15 bg-accent/[0.07] text-accent-deep transition-all duration-500 group-hover:scale-110 group-hover:bg-accent/[0.12]">
          <ServiceIcon name={service.icon} />
        </div>

        <div>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-deep">Service</p>
          <h3 className="font-display text-xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-accent-deep sm:text-2xl lg:text-2xl">{service.title}</h3>
        </div>

        <p className="max-w-xl text-sm leading-7 text-muted">{service.description}</p>

        <div className="flex flex-wrap gap-2">
          {service.highlights.map((highlight) => (
            <span key={highlight} className="rounded-full border border-border bg-background px-3 py-1.5 text-[11px] font-medium text-muted transition-all duration-300 group-hover:border-accent/20 group-hover:text-ink">
              {highlight}
            </span>
          ))}
        </div>

        <div className="mt-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-accent-deep">
          <span>Explore service</span>
          <span className="text-base transition-transform duration-300 group-hover:translate-x-2" aria-hidden="true">→</span>
        </div>
      </div>
    </Link>
  );
}