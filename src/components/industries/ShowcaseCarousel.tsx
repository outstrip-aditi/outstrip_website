"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";

import type { ShowcaseItem } from "@/lib/industries";
import { cn } from "@/lib/utils";

const ACCENTS = [
  "from-accent/25 via-accent/5 to-transparent",
  "from-accent-bright/25 via-accent-bright/5 to-transparent",
  "from-ink/15 via-ink/5 to-transparent",
] as const;

const AUTOPLAY_MS = 4200;

export function ShowcaseCarousel({ items }: { items: ShowcaseItem[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const stepRef = useRef(340);
  const rafRef = useRef<number | null>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);

  const measureStep = useCallback(() => {
    const track = trackRef.current;
    const card = track?.querySelector<HTMLElement>("[data-showcase-card]");
    if (!track || !card) return;
    const styles = getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap || "24");
    stepRef.current = card.offsetWidth + gap;
  }, []);

  const updateFromScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    const ratio = max > 0 ? track.scrollLeft / max : 0;
    setProgress(Math.min(1, Math.max(0, ratio)));
    const index = Math.round(track.scrollLeft / stepRef.current);
    setActive(Math.min(items.length - 1, Math.max(0, index)));
  }, [items.length]);

  useEffect(() => {
    measureStep();
    const onResize = () => {
      measureStep();
      updateFromScroll();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [measureStep, updateFromScroll]);

  const onScroll = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(updateFromScroll);
  }, [updateFromScroll]);

  const goTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.min(items.length - 1, Math.max(0, index));
    track.scrollTo({ left: clamped * stepRef.current, behavior: "smooth" });
  }, [items.length]);

  const scrollByCard = useCallback((direction: 1 | -1) => {
    goTo(active + direction);
  }, [active, goTo]);

  // Autoplay — pauses on hover/touch/drag and resumes after.
  useEffect(() => {
    if (paused || items.length <= 1) return;
    autoplayRef.current = setInterval(() => {
      const track = trackRef.current;
      if (!track) return;
      const atEnd = track.scrollLeft >= track.scrollWidth - track.clientWidth - 4;
      goTo(atEnd ? 0 : active + 1);
    }, AUTOPLAY_MS);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [active, paused, items.length, goTo]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-background to-transparent transition-opacity duration-300 sm:w-16"
        style={{ opacity: progress > 0.02 ? 1 : 0 }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background to-transparent transition-opacity duration-300 sm:w-16"
        style={{ opacity: progress < 0.98 ? 1 : 0 }}
        aria-hidden
      />

      <motion.div
        ref={trackRef}
        onScroll={onScroll}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.09 }}
        className="scrollbar-none max-w-7xl mx-auto flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2"
      >
        {items.map((item, index) => {
          const isActive = index === active;
          return (
            <motion.article
              key={item.title}
              data-showcase-card
              data-active={isActive}
              variants={{
                hidden: { opacity: 0, y: 28, scale: 0.96 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "group relative flex w-[280px] shrink-0 snap-start flex-col overflow-hidden border border-border bg-surface p-5",
                "transition-all duration-500 ease-out will-change-transform",
                "hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_20px_20px_-20px_rgba(7,17,31,0.35)]",
                "data-[active=true]:border-accent/40 data-[active=true]:shadow-[0_24px_17px_-32px_rgba(7,17,31,0.3)]",
                "sm:w-[320px]",
              )}
            >
              <div
                className={cn(
                  "pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br opacity-0 blur-2xl transition-opacity duration-500",
                  "group-hover:opacity-100 group-data-[active=true]:opacity-70",
                  ACCENTS[index % ACCENTS.length],
                )}
              />

              <div className="relative flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-accent-deep">
                  <span className="h-1 w-1 rounded-full bg-accent-deep" />
                  {item.tag}
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-white text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-accent/40 group-hover:bg-accent group-hover:text-white">
                  <FiArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>

              <h3 className="relative mt-4 font-display text-lg font-semibold text-ink transition-colors duration-300 group-hover:text-accent-deep">
                {item.title}
              </h3>
              <p className="relative mt-2.5 text-sm leading-relaxed text-muted">{item.description}</p>

              <div className="relative mt-3 flex items-center gap-2">
                <span className="h-px w-6 bg-accent/40 transition-all duration-300 group-hover:w-10 group-hover:bg-accent" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted/60 transition-colors duration-300 group-hover:text-accent-deep">
                  View solution
                </span>
              </div>
            </motion.article>
          );
        })}
      </motion.div>

      {/* prev/next */}
      <div className="mt-7 flex items-center gap-5 mx-8">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Previous"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-ink transition-all duration-300 hover:-translate-x-0.5 hover:border-accent/40 hover:text-accent-deep active:scale-95"
        >
          <FiArrowRight className="h-4 w-4 rotate-180" />
        </button>

        <div className="flex flex-1 items-center gap-3">
          <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-border">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-accent-deep"
              animate={{ width: `${progress * 100}%` }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            />
          </div>

          <div className="hidden items-center gap-1.5 sm:flex">
            {items.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Go to ${item.title}`}
                className="relative flex h-4 w-4 items-center justify-center"
              >
                <span
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    index === active ? "w-4 bg-accent-deep" : "w-1.5 bg-border group-hover:bg-accent/40",
                  )}
                />
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Next"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent-deep text-white transition-all duration-300 hover:translate-x-0.5 hover:bg-accent active:scale-95"
        >
          <FiArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
