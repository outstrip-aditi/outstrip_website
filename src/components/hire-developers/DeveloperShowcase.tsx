"use client";

import { motion } from "motion/react";
import { FiClock } from "react-icons/fi";
import { developerShowcase } from "@/lib/developers";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function DeveloperShowcase() {
  return (
    <section className="section-pad py-20 md:py-28">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            eyebrow="Developer showcase"
            title="The caliber of engineer you'll work with"
            description="Representative profiles from our bench — matched to your stack, not a generic resume pool."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {developerShowcase.map((dev, index) => (
            <motion.article
              key={dev.initials}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-xl border border-border bg-surface p-6 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_60px_-30px_rgba(13,159,138,0.3)]"
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-20 blur-[70px] transition-opacity duration-500 group-hover:opacity-40"
                style={{ background: dev.color }}
              />

              <div className="relative z-10 flex items-center gap-4">
                <span
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-base font-bold text-white"
                  style={{ background: `linear-gradient(135deg, ${dev.color}, ${dev.color}99)` }}
                >
                  {dev.initials}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-ink">{dev.role}</h3>
                  <p className="mt-0.5 text-xs text-muted">{dev.level}</p>
                </div>
              </div>

              <p className="relative z-10 mt-4 text-sm leading-relaxed text-muted">
                {dev.highlight}
              </p>

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
          ))}
        </div>
      </div>
    </section>
  );
}
