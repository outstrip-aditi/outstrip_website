"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap, registerGSAP } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

type StaggerChildrenProps = {
  children: ReactNode;
  className?: string;
  selector?: string;
  stagger?: number;
  y?: number;
};

export function StaggerChildren({
  children,
  className,
  selector = "[data-stagger-item]",
  stagger = 0.1,
  y = 40,
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    registerGSAP();
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll(selector);
    if (!items.length) return;

    if (reduced) {
      gsap.set(items, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(items, { opacity: 0, y });
    const tween = gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.85,
      stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [reduced, selector, stagger, y]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
