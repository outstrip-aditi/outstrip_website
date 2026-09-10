"use client";

import { useState } from "react";
import { FiPlus } from "react-icons/fi";

import { cn } from "@/lib/utils";
import type { ServiceFaq } from "@/lib/services";

export function ServiceFaqAccordion({
  faqs,
}: {
  faqs: ServiceFaq[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs?.length) return null;

  return (
    <div className="border-t border-border">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={faq.question}
            data-faq-item
            className={cn(
              "border-b border-border transition-colors duration-300",
              isOpen && "border-accent/40",
            )}
          >
            <button
              type="button"
              onClick={() =>
                setOpenIndex((current) =>
                  current === index ? null : index,
                )
              }
              aria-expanded={isOpen}
              aria-controls={`service-faq-answer-${index}`}
              className="group flex w-full items-center justify-between gap-5 py-2 text-left md:py-3"
            >
              <span
                className={cn(
                  "font-display text-sm font-medium leading-6 text-ink transition-colors duration-300 sm:text-base",
                  "group-hover:text-accent-deep",
                  isOpen && "text-accent-deep",
                )}
              >
                {faq.question}
              </span>

              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                  "border border-border text-muted",
                  "transition-all duration-300 ease-out",
                  "group-hover:border-accent group-hover:text-accent-deep",
                  isOpen &&
                    "rotate-45 border-accent bg-accent text-white",
                )}
                aria-hidden="true"
              >
                <FiPlus className="h-4 w-4" />
              </span>
            </button>

            <div
              id={`service-faq-answer-${index}`}
              className="grid transition-[grid-template-rows,opacity] duration-400 ease-out"
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-6 pr-10 text-sm leading-7 text-muted md:pr-12 md:text-[15px]">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}