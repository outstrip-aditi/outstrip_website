"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

type BackgroundVideoProps = {
  /** Empty/undefined renders the poster image only — no video request is made. */
  src?: string;
  poster: string;
  alt: string;
  className?: string;
  /** Extra classes for an overlay div rendered above the media (e.g. a gradient). */
  overlayClassName?: string;
  priority?: boolean;
};

export function BackgroundVideo({
  src,
  poster,
  alt,
  className,
  overlayClassName,
  priority = false,
}: BackgroundVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const reduced = usePrefersReducedMotion();

  const hasVideo = Boolean(src);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !hasVideo || reduced) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, [hasVideo, reduced]);

  const showVideo = hasVideo && !reduced && inView;

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)}>
      <Image
        src={poster}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className={cn(
          "object-cover transition-opacity duration-700",
          showVideo ? "opacity-0" : "opacity-100",
        )}
      />
      {showVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={poster}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
      {overlayClassName && (
        <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0", overlayClassName)} />
      )}
    </div>
  );
}
