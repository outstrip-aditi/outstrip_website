"use client";

import { useCallback, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  outcome: string;
  technology: string;
  image: string;
  projectUrl: string;
  color: string;
};

type Ripple = { id: number; x: number; y: number };

export function ProjectCard({
  project,
  index,
}: {
  project: PortfolioProject;
  index: number;
}) {
  const reduced = usePrefersReducedMotion();
  const imgRef = useRef<HTMLDivElement>(null);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const rippleId = useRef(0);

  const onMove = useCallback(
    (e: ReactMouseEvent<HTMLDivElement>) => {
      if (reduced) return;
      const el = imgRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `scale(1.06) translate3d(${px * -8}px, ${py * -8}px, 0)`;
    },
    [reduced],
  );

  const onLeave = useCallback(() => {
    const el = imgRef.current;
    if (!el) return;
    el.style.transform = "scale(1) translate3d(0,0,0)";
  }, []);

  const onEnter = useCallback(
    (e: ReactMouseEvent<HTMLDivElement>) => {
      const el = imgRef.current;
      if (el) el.style.transform = "scale(1.06) translate3d(0,0,0)";
      if (reduced) return;
      const target = e.currentTarget.getBoundingClientRect();
      const id = rippleId.current++;
      setRipples((prev) => [
        ...prev,
        { id, x: e.clientX - target.left, y: e.clientY - target.top },
      ]);
      window.setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 900);
    },
    [reduced],
  );

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -12, scale: 0.97 }}
      transition={{
        duration: 0.4,
        delay: reduced ? 0 : Math.min(index, 8) * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-surface shadow-[0_2px_16px_-8px_rgba(7,17,31,0.08)] transition-[border-color,box-shadow] duration-500 hover:border-accent/40 hover:shadow-[0_24px_60px_-24px_rgba(13,159,138,0.28)]"
    >
      {/* Image */}
      <div
        className="relative aspect-[5/3] w-full overflow-hidden"
        onMouseMove={onMove}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <div
          ref={imgRef}
          className="absolute inset-0 transition-transform duration-700 ease-out will-change-transform"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
            priority={index === 0}
          />
        </div>

        {/* Wave / ripple layer, clipped to the image */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {ripples.map((r) => (
            <span
              key={r.id}
              className="absolute rounded-full"
              style={{
                left: r.x,
                top: r.y,
                width: 24,
                height: 24,
                marginLeft: -12,
                marginTop: -12,
                background: `radial-gradient(circle, ${project.color}33 0%, ${project.color}12 45%, transparent 70%)`,
                animation: "portfolio-ripple 0.9s ease-out forwards",
              }}
            />
          ))}
        </div>

        {/* Dark overlay, fades in on hover */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(180deg, rgba(7,17,31,0.05) 0%, rgba(7,17,31,0.35) 55%, rgba(7,17,31,0.72) 100%)",
          }}
        />

        {/* Accent glow ring on hover */}
        <div className="pointer-events-none absolute inset-0 opacity-0 shadow-[inset_0_0_0_1.5px_var(--accent-bright)] transition-opacity duration-500 group-hover:opacity-60" />

        {/* Category tag */}
        <span className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-ink backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-0">
          {project.category}
        </span>

        {/* View Project CTA, revealed on hover */}
        <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center pb-6 opacity-0 translate-y-3 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-xs font-semibold text-ink shadow-[0_12px_30px_-10px_rgba(13,159,138,0.6)] transition-colors duration-300 hover:bg-accent-bright"
          >
            View Project
            <FiArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted">
          <span className="text-accent-deep">{project.category}</span>
          <span>{project.year}</span>
        </div>
        <h3 className="font-display mt-1 text-lg text-ink transition-transform duration-500 group-hover:-translate-y-0.5">
          {project.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted">
          {project.summary}
        </p>

        <div className="mt-3 flex flex-1 items-end justify-between gap-3 border-t border-border pt-3">
          <span className="rounded-full bg-surface-soft px-3 py-1 text-xs font-medium text-muted">
            {project.technology}
          </span>
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-1.5 whitespace-nowrap text-xs font-semibold text-accent-deep transition hover:text-accent"
          >
            View Project
            <span className="transition-transform duration-300 group-hover/link:translate-x-0.5" aria-hidden>
              →
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
