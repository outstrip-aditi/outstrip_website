"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const HOVER_SELECTOR =
  'a, button, input, textarea, select, [role="button"], [data-cursor-hover]';

const TEXT_SELECTOR =
  'input[type="text"], input[type="email"], input[type="tel"], textarea';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    document.documentElement.classList.add("has-custom-cursor");

    const moveDot = gsap.quickTo(dot, "x", {
      duration: 0.04,
      ease: "power2.out",
    });

    const moveDotY = gsap.quickTo(dot, "y", {
      duration: 0.04,
      ease: "power2.out",
    });

    const moveRing = gsap.quickTo(ring, "x", {
      duration: 0.25,
      ease: "power3.out",
    });

    const moveRingY = gsap.quickTo(ring, "y", {
      duration: 0.25,
      ease: "power3.out",
    });

    const onMove = (e: MouseEvent) => {
      moveDot(e.clientX);
      moveDotY(e.clientY);

      moveRing(e.clientX);
      moveRingY(e.clientY);

      gsap.to([dot, ring], {
        opacity: 1,
        duration: 0.2,
      });
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (!target.closest) return;

      if (target.closest(TEXT_SELECTOR)) {
        gsap.to(ring, {
          scale: 1.25,
          opacity: 0.8,
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(dot, {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });

        return;
      }

      if (target.closest(HOVER_SELECTOR)) {
        gsap.to(ring, {
          scale: 1.18,
          opacity: 0.55,
          duration: 0.3,
          ease: "power2.out",
        });

        // Keep dot visible
        gsap.to(dot, {
          scale: 1,
          opacity: 1,
          duration: 0.25,
          ease: "power2.out",
        });
      }
    };

    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const related = e.relatedTarget as HTMLElement | null;

      if (!target.closest) return;

      if (
        target.closest(HOVER_SELECTOR) &&
        (!related || !related.closest?.(HOVER_SELECTOR))
      ) {
        gsap.to(ring, {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(dot, {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const onDown = () => {
      gsap.to(ring, {
        scale: 0.85,
        duration: 0.15,
      });
    };

    const onUp = () => {
      gsap.to(ring, {
        scale: 1,
        duration: 0.25,
      });
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver, true);
    document.addEventListener("mouseout", onOut, true);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver, true);
      document.removeEventListener("mouseout", onOut, true);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);

      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] hidden md:block"
      aria-hidden
    >
      <div
        ref={ringRef}
        className="
          custom-cursor-ring
          fixed left-0 top-0
          h-7 w-7
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border border-accent/50
          opacity-0
        "
      />

      <div
        ref={dotRef}
        className="
          custom-cursor-dot
          fixed left-0 top-0
          h-1.5 w-1.5
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-accent-bright
          opacity-0
        "
      />
    </div>
  );
}