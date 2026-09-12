"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { cn } from "@/lib/utils";

export function PortfolioGrid() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    [],
  );
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <>
      <div className="relative flex justify-center overflow-x-auto scrollbar-none px-1 pb-1">
        <div className="inline-flex min-w-max items-center gap-1 rounded-full border border-border bg-surface p-1.5 shadow-[0_2px_12px_-6px_rgba(7,17,31,0.12)]">
          {categories.map((category) => {
            const isActive = category === active;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={cn(
                  "relative rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition-colors duration-300 sm:px-5 sm:py-2.5 sm:text-sm sm:tracking-normal sm:normal-case",
                  isActive
                    ? "text-white"
                    : "text-muted hover:text-ink",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="portfolio-active-pill"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 34,
                    }}
                  />
                )}

                <span className="relative z-10">
                  {category}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-10 max-w-6xl mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:mt-12">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <ProjectCard key={`${project.slug}-${project.category}`} index={i} project={project} />
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
