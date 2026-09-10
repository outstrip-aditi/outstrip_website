"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import aboutbanner from "../../../public/images/about-us-banner.png";

export function AboutPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const elements = contentRef.current?.querySelectorAll("[data-about-reveal]");

      if (!elements?.length) return;

      gsap.fromTo(imageRef.current, { opacity: 0, x: -60, scale: 0.95 }, { opacity: 1, x: 0, scale: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true } });

      gsap.fromTo(elements, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 72%", once: true } });

      gsap.fromTo(badgeRef.current, { opacity: 0, scale: 0.8, y: 20 }, { opacity: 1, scale: 1, y: 0, duration: 0.8, delay: 0.5, ease: "back.out(1.5)", scrollTrigger: { trigger: sectionRef.current, start: "top 72%", once: true } });

      gsap.to(".about-floating-dot", { y: -12, duration: 2.5, ease: "sine.inOut", repeat: -1, yoyo: true });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section ref={sectionRef} className="section-pad relative overflow-hidden pb-20 pt-18 md:pb-28 md:pt-20">
      <div className="pointer-events-none absolute left-0 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-accent/[0.07] blur-[110px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[300px] w-[300px] rounded-full bg-blue-400/[0.05] blur-[100px]" />

      <div className="section-pad container-wide relative">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div ref={imageRef} className="relative mx-auto w-full max-w-xl">
              <div className="relative aspect-[1/1] overflow-hidden">
                <Image src={aboutbanner} alt="OUTSTRIP team" fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover transition-transform duration-1000 hover:scale-105" />
              </div>
              <span className="about-floating-dot absolute -right-6 bottom-24 h-3 w-3 rounded-full bg-accent shadow-[0_0_20px_rgba(13,159,138,0.5)]" />
              <span className="absolute -left-4 top-24 h-2.5 w-2.5 rounded-full bg-accent-bright" />

          </div>

          <div ref={contentRef}>
            <div data-about-reveal className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-deep">About OUTSTRIP</span>
            </div>

            <h2 data-about-reveal className="mt-5 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
              We turn ideas into <span className="text-gradient">digital products</span> that perform.
            </h2>

            <p data-about-reveal className="mt-6 max-w-xl text-sm leading-7 text-muted sm:text-base">
              Outstrip InfoTech is a technology company focused on building reliable web, mobile, and digital solutions for businesses that want to move faster.
            </p>

            <p data-about-reveal className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
              From strategy and UI/UX to development and deployment, we bring design, engineering, and business thinking together under one roof.
            </p>

            {/* Features */}
            <div data-about-reveal className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-xl border border-border bg-white/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/20 hover:shadow-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/[0.08] text-sm font-bold text-accent-deep">01</span>
                <span className="text-sm font-semibold text-ink">Product Engineering</span>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-border bg-white/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/20 hover:shadow-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/[0.08] text-sm font-bold text-accent-deep">02</span>
                <span className="text-sm font-semibold text-ink">Modern UI/UX</span>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-border bg-white/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/20 hover:shadow-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/[0.08] text-sm font-bold text-accent-deep">03</span>
                <span className="text-sm font-semibold text-ink">Scalable Solutions</span>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-border bg-white/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/20 hover:shadow-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/[0.08] text-sm font-bold text-accent-deep">04</span>
                <span className="text-sm font-semibold text-ink">Long-term Partnership</span>
              </div>
            </div>

            <div data-about-reveal className="mt-9 flex flex-wrap items-center gap-5">
              <Link href="/about" className="group inline-flex items-center gap-2 rounded-lg bg-ink px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-accent-deep hover:shadow-[0_15px_35px_-15px_rgba(13,159,138,0.45)]">
                More about us
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}