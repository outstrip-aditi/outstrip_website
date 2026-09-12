"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, animate, useMotionValue, type PanInfo } from "motion/react";
import { FiChevronLeft, FiChevronRight, FiClock } from "react-icons/fi";
import { developerShowcase } from "@/lib/developers";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 4500;

function useCardsPerView() {
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const mqLg = window.matchMedia("(min-width: 1024px)");
    const mqSm = window.matchMedia("(min-width: 640px)");

    const update = () => setCardsPerView(mqLg.matches ? 3 : mqSm.matches ? 2 : 1);
    update();

    mqLg.addEventListener("change", update);
    mqSm.addEventListener("change", update);
    return () => {
      mqLg.removeEventListener("change", update);
      mqSm.removeEventListener("change", update);
    };
  }, []);

  return cardsPerView;
}

export function DeveloperShowcase() {
  const reduced = usePrefersReducedMotion();
  const cardsPerView = useCardsPerView();
  const total = developerShowcase.length;
  const maxIndex = Math.max(0, total - cardsPerView);

  const [rawIndex, setIndex] = useState(0);
  const index = Math.min(rawIndex, maxIndex);
  const [isInteracting, setIsInteracting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const x = useMotionValue(0);

  const cardWidth = containerWidth / cardsPerView;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width;
      if (width) setContainerWidth(width);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!cardWidth || isInteracting) return;
    const controls = animate(x, -index * cardWidth, {
      type: reduced ? "tween" : "spring",
      stiffness: 340,
      damping: 36,
      duration: reduced ? 0 : undefined,
    });
    return () => controls.stop();
  }, [index, cardWidth, reduced, isInteracting, x]);

  useEffect(() => {
    if (reduced || isInteracting || maxIndex === 0) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [reduced, isInteracting, maxIndex]);

  const goTo = (target: number) => setIndex(Math.max(0, Math.min(target, maxIndex)));
  const next = () => setIndex((current) => (current >= maxIndex ? 0 : current + 1));
  const prev = () => setIndex((current) => (current <= 0 ? maxIndex : current - 1));

  const handleDragEnd = (_event: PointerEvent | MouseEvent | TouchEvent, info: PanInfo) => {
    setIsInteracting(false);
    if (!cardWidth) return;

    const draggedBy = info.offset.x;
    const flickBoost = info.velocity.x * 0.15;
    const projected = -index * cardWidth + draggedBy + flickBoost;
    const nearest = Math.round(-projected / cardWidth);

    goTo(Math.max(0, Math.min(nearest, maxIndex)));
  };

  const dragConstraints = useMemo(
    () => ({ left: -maxIndex * cardWidth, right: 0 }),
    [maxIndex, cardWidth],
  );

  const showControls = maxIndex > 0;

  return (
    <section className="section-pad py-20 md:py-28">
      <div className="container-wide">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Developer showcase"
              title="The caliber of engineer you'll work with"
              description="Representative profiles from our bench — matched to your stack, not a generic resume pool."
            />

            {showControls && (
              <div className="hidden shrink-0 items-center gap-2 md:flex">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous developers"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-ink transition-all duration-300 hover:border-accent/40 hover:text-accent-deep"
                >
                  <FiChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next developers"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-ink transition-all duration-300 hover:border-accent/40 hover:text-accent-deep"
                >
                  <FiChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </Reveal>

        <div
          ref={containerRef}
          className="relative mt-12 -mx-2.5 overflow-hidden"
          onMouseEnter={() => setIsInteracting(true)}
          onMouseLeave={() => setIsInteracting(false)}
        >
          <motion.div
            className="flex"
            style={{ x }}
            drag={showControls ? "x" : false}
            dragConstraints={dragConstraints}
            dragElastic={0.12}
            onPointerDown={() => setIsInteracting(true)}
            onDragEnd={handleDragEnd}
          >
            {developerShowcase.map((dev, i) => (
              <div
                key={dev.initials}
                className="shrink-0 px-2.5"
                style={{ width: `${100 / cardsPerView}%` }}
              >
                <DeveloperCard dev={dev} index={i} />
              </div>
            ))}
          </motion.div>
        </div>

        {showControls && (
          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to developer slide ${i + 1}`}
                aria-current={i === index}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === index ? "w-6 bg-accent" : "w-1.5 bg-border hover:bg-accent/50",
                )}
              />
            ))}
          </div>
        )}

        {showControls && (
          <div className="mt-6 flex items-center justify-center gap-3 md:hidden">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous developers"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-ink transition-all duration-300 hover:border-accent/40 hover:text-accent-deep"
            >
              <FiChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next developers"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-ink transition-all duration-300 hover:border-accent/40 hover:text-accent-deep"
            >
              <FiChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function DeveloperCard({
  dev,
  index,
}: {
  dev: (typeof developerShowcase)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative h-full overflow-hidden rounded-xl border border-border bg-surface/70 p-6 shadow-[0_2px_20px_-10px_rgba(7,17,31,0.12)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_30px_70px_-30px_rgba(13,159,138,0.35)]"
    >
      {/* Gradient glow — theme accent only */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-100" />
      {/* Glass top highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

      <div className="relative z-10 flex items-center gap-4">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-deep text-base font-bold text-white shadow-[0_10px_24px_-10px_rgba(13,159,138,0.6)]">
          {dev.initials}
        </span>
        <div>
          <h3 className="font-display text-base font-semibold text-ink">{dev.role}</h3>
          <p className="mt-0.5 text-xs text-muted">{dev.level}</p>
        </div>
      </div>

      <p className="relative z-10 mt-4 text-sm leading-relaxed text-muted">{dev.highlight}</p>

      <div className="relative z-10 mt-4 flex flex-wrap gap-2">
        {dev.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border bg-surface-soft px-2.5 py-1 text-xs font-medium text-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="relative z-10 mt-5 flex items-center gap-1.5 border-t border-border pt-4 text-xs font-semibold text-accent-deep">
        <FiClock className="h-3.5 w-3.5" />
        {dev.availability}
      </div>
    </motion.article>
  );
}
