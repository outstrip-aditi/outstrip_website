"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
    (e.target as HTMLFormElement).reset();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Company" name="company" />
        <Field label="Phone" name="phone" type="tel" />
      </div>
      <label className="block">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted">
          How can we help?
        </span>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full resize-y rounded-md border border-border bg-surface px-4 py-3 text-sm text-ink outline-none transition focus:border-accent"
          placeholder="Tell us about your product, timeline, and goals…"
        />
      </label>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <MagneticButton type="submit">Send message</MagneticButton>
        <AnimatePresence>
          {status === "sent" && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-sm font-medium text-accent-deep"
            >
              Thanks — we’ll get back to you shortly.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-border bg-surface px-4 py-3 text-sm text-ink outline-none transition focus:border-accent"
      />
    </label>
  );
}
