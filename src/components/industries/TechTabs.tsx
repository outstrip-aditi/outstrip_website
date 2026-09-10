"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import type { TechCategory } from "@/lib/industries";
import { TechIcon } from "@/components/industries/TechIcon";
import { cn } from "@/lib/utils";

export function TechTabs({
  categories,
}: {
  categories: TechCategory[];
}) {
  const [active, setActive] = useState(categories[0]?.key);

  const activeCategory =
    categories.find((category) => category.key === active) ??
    categories[0];

  if (!activeCategory) return null;

  return (
    <div className="relative">
      <div className="relative overflow-x-auto scrollbar-hide">
        <div className="flex min-w-max items-center gap-1 border-b border-border">
          {categories.map((category) => {
            const isActive = category.key === activeCategory.key;

            return (
              <button
                key={category.key}
                type="button"
                onClick={() => setActive(category.key)}
                className={cn(
                  "relative px-5 py-3.5 text-sm font-semibold transition-all duration-300",
                  isActive
                    ? "text-accent-deep"
                    : "text-muted hover:text-ink"
                )}
              >
                {category.label}

                {isActive && (
                  <motion.span
                    layoutId="technology-active-line"
                    className="absolute bottom-[-1px] left-3 right-3 h-[2px] rounded-full bg-accent"
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 35,
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.key}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mt-7 grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4">
              {activeCategory.items.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.04,
                  }}
                  className="group relative flex gap-4 items-center overflow-hidden text-start "
                >
                  <TechIcon name={item.name} className="[&>svg]:h-12 [&>svg]:w-12" />
                  <div>
                    <h4 className="relative mt-4 font-display text-sm font-semibold text-ink transition-colors duration-300 group-hover:text-accent-deep">
                      {item.name}
                    </h4>
                    <p className="relative mt-1.5 text-xs leading-5 text-muted line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}