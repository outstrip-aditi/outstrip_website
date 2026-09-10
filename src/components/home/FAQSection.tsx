"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerChildren } from "@/components/ui/StaggerChildren";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";
import { FiPlus } from "react-icons/fi";

function FAQItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      data-stagger-item
      className={cn(
        "border-b border-border transition-colors duration-300",
        open && "border-accent/40",
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="group flex w-full items-center justify-between gap-5 py-3 text-left"
      >
        <span
          className={cn(
            "font-display text-base font-medium text-ink transition-colors duration-300 sm:text-base",
            open && "text-accent-deep",
            "group-hover:text-accent-deep",
          )}
        >
          {question}
        </span>

        <span
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-all duration-300",
            "group-hover:border-accent group-hover:text-accent-deep",
            open && "rotate-45 border-accent bg-accent text-white",
          )}
          aria-hidden="true"
        >
          <FiPlus className="h-4 w-4" />
        </span>
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-400 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-6 pr-12 text-sm leading-7 text-muted">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white section-pad relative overflow-hidden p-20 md:p-24">
      <div className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-accent/[0.06] blur-[110px]" />

      <div className="container-wide relative z-10 grid gap-5 lg:grid-cols-[0.8fr_1.3fr] lg:gap-24">
        <Reveal>
          <div className="lg:sticky lg:self-start">
            <SectionHeading
              eyebrow="FAQ"
              title="Questions, answered."
              description="The things clients usually ask before kicking off a project. Don't see yours? Just ask."
            />

            <div className="mt-8">
              <MagneticButton
                href="/contact"
                variant="secondary"
                size="md"
              >
                Ask us anything
                <span aria-hidden>→</span>
              </MagneticButton>
            </div>

            <div className="mt-10 hidden items-center gap-3 lg:flex">
              <span className="h-[2px] w-10 bg-accent" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                We are here to help
              </span>
            </div>
          </div>
        </Reveal>

        <StaggerChildren
          className="border-t border-border"
          y={20}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              open={openIndex === index}
              onToggle={() =>
                setOpenIndex((value) =>
                  value === index ? null : index,
                )
              }
            />
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}