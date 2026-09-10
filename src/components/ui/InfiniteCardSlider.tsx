"use client";

import { useEffect, useRef, type ReactNode } from "react";

import { gsap, ScrollTrigger, Draggable, registerGSAP } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

type InfiniteCardSliderProps = {
  items: ReactNode[];
  className?: string;
  cardClassName?: string;
  autoplaySeconds?: number;
};

const STEP_PERCENT = 90;
const MAX_VISIBLE_DEPTH = 2.4;

export function InfiniteCardSlider({
  items,
  className,
  cardClassName,
  autoplaySeconds = 4,
}: InfiniteCardSliderProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const dragProxyRef = useRef<HTMLDivElement>(null);

  const reduced = usePrefersReducedMotion();
  const total = items.length;

  useEffect(() => {
    if (
      reduced ||
      total === 0 ||
      !sectionRef.current ||
      !trackRef.current ||
      !dragProxyRef.current
    ) {
      return;
    }

    registerGSAP();

    const ctx = gsap.context(() => {
      const section = sectionRef.current!;
      const track = trackRef.current!;
      const dragProxy = dragProxyRef.current!;

      const cardEls = gsap.utils.toArray<HTMLElement>(
        track.querySelectorAll(".testimonial-card"),
      );

      if (!cardEls.length) return;
      const state = { current: 0 };

      const wrappedDiff = (index: number) => {
        let diff = (index - state.current) % total;
        if (diff > total / 2) diff -= total;
        if (diff < -total / 2) diff += total;
        return diff;
      };

      const layout = () => {
        cardEls.forEach((el, i) => {
          const diff = wrappedDiff(i);
          const absDiff = Math.abs(diff);
          const isVisible = absDiff <= MAX_VISIBLE_DEPTH;

          gsap.set(el, {
            xPercent: diff * STEP_PERCENT,
            scale: gsap.utils.clamp(0.62, 1, 1 - absDiff * 0.16),
            opacity: isVisible
              ? gsap.utils.clamp(0, 1, 1 - absDiff * 0.36)
              : 0,
            rotateY: gsap.utils.clamp(-24, 24, diff * -12),
            zIndex: Math.round(200 - absDiff * 20),
            pointerEvents: isVisible ? "auto" : "none",
          });
        });
      };

      gsap.set(cardEls, { transformPerspective: 1200 });
      layout();


      let autoplayCall: gsap.core.Tween | null = null;
      let inView = false;

      const stopAutoplay = () => {
        autoplayCall?.kill();
        autoplayCall = null;
      };

      const startAutoplay = (delay = autoplaySeconds) => {
        stopAutoplay();
        if (!inView) return;
        autoplayCall = gsap.delayedCall(delay, () => {
          goTo(state.current + 1);
        });
      };

      const goTo = (
        target: number,
        opts: gsap.TweenVars = {},
      ) => {
        gsap.to(state, {
          current: target,
          duration: 0.9,
          ease: "power3.inOut",
          onUpdate: layout,
          overwrite: true,
          ...opts,
          onComplete: () => {
            opts.onComplete?.();
            startAutoplay();
          },
        });
      };

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top 85%",
        end: "bottom 15%",
        onEnter: () => {
          inView = true;
          startAutoplay(0.6);
        },
        onEnterBack: () => {
          inView = true;
          startAutoplay(0.6);
        },
        onLeave: () => {
          inView = false;
          stopAutoplay();
        },
        onLeaveBack: () => {
          inView = false;
          stopAutoplay();
        },
      });

      const nextButton = section.querySelector<HTMLButtonElement>(
        ".testimonial-next",
      );
      const prevButton = section.querySelector<HTMLButtonElement>(
        ".testimonial-prev",
      );

      const handleNext = () => {
        stopAutoplay();
        goTo(state.current + 1);
      };

      const handlePrev = () => {
        stopAutoplay();
        goTo(state.current - 1);
      };

      nextButton?.addEventListener("click", handleNext);
      prevButton?.addEventListener("click", handlePrev);

      const handleCardClick = (index: number) => {
        if (Math.round(state.current) % total === index % total) return;
        stopAutoplay();
        goTo(index);
      };

      const cardClickHandlers = cardEls.map((el, index) => {
        const handler = () => handleCardClick(index);
        el.addEventListener("click", handler);
        return { el, handler };
      });


      let dragStartCurrent = 0;

      const draggable = Draggable.create(dragProxy, {
        type: "x",
        trigger: track,
        onPress() {
          stopAutoplay();
          dragStartCurrent = state.current;
        },
        onDrag() {
          const cardWidth = cardEls[0]?.offsetWidth || 1;
          const stepPx = cardWidth * (STEP_PERCENT / 100);
          state.current =
            dragStartCurrent - (this.x - this.startX) / stepPx;
          layout();
        },
        onDragEnd() {
          goTo(Math.round(state.current), { duration: 0.5 });
        },
      });

      return () => {
        stopAutoplay();
        nextButton?.removeEventListener("click", handleNext);
        prevButton?.removeEventListener("click", handlePrev);
        cardClickHandlers.forEach(({ el, handler }) =>
          el.removeEventListener("click", handler),
        );
        draggable.forEach((instance) => instance.kill());
        trigger.kill();
        gsap.killTweensOf(state);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced, total, autoplaySeconds]);


  if (reduced) {
    return (
      <div className={cn("section-pad", className)}>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div key={index} className={cn("w-full", cardClassName)}>
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={sectionRef}
      className={cn(
        "relative w-full overflow-hidden py-8",
        className,
      )}
    >
      {/* Decorative background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-bright/10 blur-3xl" />
      </div>

      {/* Stage */}
      <ul
        ref={trackRef}
        role="list"
        aria-roledescription="carousel"
        className="
          relative
          left-1/2
          m-0
          h-[380px]
          w-[260px]
          -translate-x-1/2
          list-none
          p-0
          perspective-[1400px]
          sm:h-[380px]
          sm:w-[260px]
        "
      >
        {items.map((item, index) => (
          <li
            key={index}
            role="group"
            aria-roledescription="slide"
            aria-label={`Testimonial ${index + 1} of ${total}`}
            className={cn(
              `
              testimonial-card
              absolute
              inset-0
              m-auto
              h-full
              w-full
              list-none
              overflow-hidden
              rounded-xl
              border
              border-border
              bg-surface
              shadow-[0_30px_80px_-30px_rgba(7,17,31,0.35)]
              will-change-transform
              select-none
              `,
              cardClassName,
            )}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Navigation */}
      <div className="relative z-[250] mt-10 flex items-center justify-center gap-3">
        <button
          type="button"
          className="
            testimonial-prev
            inline-flex
            h-11
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-white/5
            px-5
            text-sm
            font-medium
            text-white
            backdrop-blur-sm
            transition-all
            duration-300
            hover:-translate-x-1
            hover:bg-white
            hover:text-ink
            active:scale-95
          "
          aria-label="Previous testimonial"
        >
          <span className="mr-2">←</span>
          Prev
        </button>

        <button
          type="button"
          className="
            testimonial-next
            inline-flex
            h-11
            items-center
            justify-center
            rounded-full
            border
            border-accent-bright
            bg-accent-bright
            px-5
            text-sm
            font-medium
            text-ink
            shadow-sm
            transition-all
            duration-300
            hover:translate-x-1
            hover:bg-white
            active:scale-95
          "
          aria-label="Next testimonial"
        >
          Next
          <span className="ml-2">→</span>
        </button>
      </div>

      {/* Drag hint */}
      <p className="pointer-events-none relative z-[250] mt-4 text-center text-xs uppercase tracking-[0.2em] text-white/40">
        Drag or use the buttons
      </p>

      {/* Drag proxy */}
      <div
        ref={dragProxyRef}
        className="invisible absolute left-0 top-0 h-10 w-10"
        aria-hidden="true"
      />
    </div>
  );
}
