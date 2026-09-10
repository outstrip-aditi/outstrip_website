"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGSAP } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

type RevealTextProps = {
  children: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  split?: "words" | "chars" | "lines";
};

export function RevealText({
  children,
  as: Tag = "h2",
  className,
  delay = 0,
  split = "words",
}: RevealTextProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    registerGSAP();
    const el = ref.current;
    if (!el) return;

    if (reduced) {
      el.style.opacity = "1";
      return;
    }

    const parts =
      split === "chars"
        ? children.split("")
        : split === "lines"
          ? children.split("\n")
          : children.split(" ");

    el.innerHTML = parts
      .map((part) => {
        const safe = part === " " ? "&nbsp;" : part;
        const gap = split === "words" ? " " : "";
        return `<span class="line-reveal"><span class="reveal-inner inline-block will-change-transform">${safe}</span></span>${gap}`;
      })
      .join("");

    const inners = el.querySelectorAll(".reveal-inner");
    gsap.set(inners, { yPercent: 110, opacity: 0 });

    const tween = gsap.to(inners, {
      yPercent: 0,
      opacity: 1,
      duration: 0.9,
      stagger: split === "chars" ? 0.02 : 0.05,
      ease: "power3.out",
      delay,
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        once: true,
      },
    });

    return () => {
      tween.kill();
      el.textContent = children;
    };
  }, [children, delay, reduced, split]);

  return <Tag ref={ref as never} className={cn(className)} />;
}
