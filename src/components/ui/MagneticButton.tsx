"use client";

import {
  useCallback,
  useEffect,
  useRef,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit";
  strength?: number;
  disabled?: boolean;
};

export function MagneticButton({
  children,
  href,
  onClick,
  className,
  variant = "primary",
  size = "md",
  type = "button",
  strength = 0.35,
  disabled = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const reduced = usePrefersReducedMotion();

  const reset = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate3d(0,0,0)";
  }, []);

  const onMove = useCallback(
    (e: ReactMouseEvent<HTMLElement>) => {
      if (reduced) return;

      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      el.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
    },
    [reduced, strength],
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.transition =
      "transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)";
  }, []);

  const styles = cn(
    "magnetic-btn group relative inline-flex items-center justify-center overflow-hidden rounded-md font-semibold tracking-wide transition-colors duration-300",

    // Size
    size === "sm" && "px-4 py-2.5 text-xs",
    size === "md" && "px-7 py-3 text-sm",
    size === "lg" && "px-8 py-4 text-base",

    // Variant
    variant === "primary" &&
      "bg-ink text-white shadow-[0_12px_40px_-12px_rgba(7,17,31,0.45)] hover:bg-ink-soft",

    variant === "secondary" &&
      "border border-ink/15 bg-surface text-ink hover:border-accent hover:text-accent-deep",

    variant === "ghost" &&
      "bg-transparent text-ink hover:text-accent-deep",

    disabled && "pointer-events-none opacity-60",

    className,
  );

  const inner = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>

      {variant === "primary" && (
        <span
          aria-hidden
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-accent-deep via-accent to-accent-bright opacity-0 transition duration-500 group-hover:translate-x-0 group-hover:opacity-100"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link
        ref={ref as React.RefObject<HTMLAnchorElement | null>}
        href={href}
        className={styles}
        onMouseMove={onMove}
        onMouseLeave={reset}
      >
        {inner}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement | null>}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styles}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      {inner}
    </button>
  );
}