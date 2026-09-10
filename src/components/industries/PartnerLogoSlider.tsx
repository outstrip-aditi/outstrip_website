"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { cn } from "@/lib/utils";

type Partner = {
  name: string;
  short: string;
  logo: string;
};

const AUTOPLAY_MS = 2800;

export function PartnerLogoSlider({ partners }: { partners: Partner[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const stepRef = useRef(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [paused, setPaused] = useState(false);

  const measureStep = useCallback(() => {
    const track = trackRef.current;
    const card = track?.querySelector<HTMLElement>("[data-partner-logo]");
    if (!track || !card) return;
    const styles = getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap || "16");
    stepRef.current = card.offsetWidth + gap;
  }, []);

  const updateEdges = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setAtStart(track.scrollLeft <= 2);
    setAtEnd(track.scrollLeft >= max - 2);
  }, []);

  useEffect(() => {
    measureStep();
    updateEdges();
    const onResize = () => {
      measureStep();
      updateEdges();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [measureStep, updateEdges]);

  const scrollByCard = useCallback((direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * stepRef.current, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (paused || partners.length <= 3) return;
    const id = setInterval(() => {
      const track = trackRef.current;
      if (!track) return;
      const max = track.scrollWidth - track.clientWidth;
      if (track.scrollLeft >= max - 2) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({ left: stepRef.current, behavior: "smooth" });
      }
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, partners.length]);

  return (
    <div
      className="mt-5"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          disabled={atStart}
          aria-label="Previous partners"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-muted transition-all duration-300 hover:border-accent/40 hover:bg-accent/5 hover:text-accent disabled:pointer-events-none disabled:opacity-30"
        >
          <FiChevronLeft className="h-4 w-4" />
        </button>

        <div className="relative min-w-0 flex-1">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-background to-transparent transition-opacity duration-300"
            style={{ opacity: atStart ? 0 : 1 }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-background to-transparent transition-opacity duration-300"
            style={{ opacity: atEnd ? 0 : 1 }}
            aria-hidden
          />

          <div
            ref={trackRef}
            onScroll={updateEdges}
            className="scrollbar-none flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth scroll-px-1 pb-1"
          >
            {partners.map((partner, index) => (
              <div
                key={`${partner.short}-${index}`}
                data-partner-logo
                title={partner.name}
                className={cn(
                  "group flex h-15 w-[calc((100%-4rem)/3)] min-w-[calc((100%-4rem)/3)] shrink-0 snap-start items-center justify-center",
                  "bg-white p-2",
                  "shadow-[0_2px_6px_-2px_rgba(7,17,31,0.08)] transition-all duration-300",
                  "hover:-translate-y-0.5 hover:border-accent/40",
                )}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    sizes="128px"
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => scrollByCard(1)}
          disabled={atEnd}
          aria-label="Next partners"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-muted transition-all duration-300 hover:border-accent/40 hover:bg-accent/5 hover:text-accent disabled:pointer-events-none disabled:opacity-30"
        >
          <FiChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
