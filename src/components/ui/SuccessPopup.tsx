"use client";

import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { FiCheck, FiX } from "react-icons/fi";

type SuccessPopupProps = {
  open: boolean;
  message: string;
  title?: string;
  onClose: () => void;
  duration?: number;
};

export function SuccessPopup({
  open,
  message,
  title = "Success",
  onClose,
  duration = 2000,
}: SuccessPopupProps) {
  const titleId = useId();
  const descId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const timer = window.setTimeout(() => onCloseRef.current(), duration);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCloseRef.current();
      // Single focusable control: keep focus on it.
      if (e.key === "Tab") {
        e.preventDefault();
        closeRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("keydown", onKey);
      previouslyFocused?.focus?.();
    };
  }, [open, duration]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="success-popup"
          className="fixed inset-0 z-[200] flex items-center justify-center bg-ink/50 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => onCloseRef.current()}
        >
          <motion.div
            role="alertdialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descId}
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-xl border border-border bg-white p-6 text-center shadow-2xl sm:p-8"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={() => onCloseRef.current()}
              aria-label="Close"
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-muted transition hover:bg-surface-soft hover:text-ink focus-visible:outline-2 focus-visible:outline-accent"
            >
              <FiX className="h-4 w-4" />
            </button>

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent-deep">
              <FiCheck className="h-7 w-7" strokeWidth={3} aria-hidden />
            </div>

            <h2
              id={titleId}
              className="mt-4 font-display text-lg font-semibold text-ink sm:text-xl"
            >
              {title}
            </h2>
            <p id={descId} className="mt-2 text-sm leading-relaxed text-muted">
              {message}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
