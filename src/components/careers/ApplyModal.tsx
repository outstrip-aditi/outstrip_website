"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";
import { FiX } from "react-icons/fi";

import { MagneticButton } from "@/components/ui/MagneticButton";

const MAX_RESUME_BYTES = 5 * 1024 * 1024;
const RESUME_EXTENSIONS = ["pdf", "doc", "docx"];

const inputClass =
  "w-full rounded-sm border border-[#cfe0f7] bg-[#f5f8fd] px-4 py-2.5 text-sm text-ink outline-none transition-all duration-300 placeholder:text-[#a7b6c9] focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/10";
const labelClass =
  "mb-2 block text-xs font-semibold uppercase tracking-wider text-ink";

/** Mounted only while open, so closing always discards the form state. */
export function ApplyModal({
  role,
  onClose,
  onSuccess,
}: {
  role: string;
  onClose: () => void;
  onSuccess: () => void;
}) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const submittingRef = useRef(false);
  const onCloseRef = useRef(onClose);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState("");
  const [resume, setResume] = useState<File | null>(null);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  // Scroll lock, Escape to close, focus trap, focus restore.
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusables = () =>
      Array.from(
        dialogRef.current?.querySelectorAll<HTMLElement>(
          "button:not([disabled]), input:not([disabled]):not([readonly]), textarea:not([disabled])",
        ) ?? [],
      );
    focusables()[1]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !submittingRef.current) {
        onCloseRef.current();
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      previouslyFocused?.focus?.();
    };
  }, []);

  function validate(data: FormData) {
    const next: Record<string, string> = {};
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();

    if (!name) next.name = "Full name is required.";
    if (!email) next.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Enter a valid email address.";
    if (!phone) next.phone = "Phone number is required.";
    else if (phone.replace(/\D/g, "").length < 7)
      next.phone = "Enter a valid phone number.";

    if (!resume) {
      next.resume = "Please upload your resume.";
    } else {
      const ext = resume.name.toLowerCase().split(".").pop() ?? "";
      if (!RESUME_EXTENSIONS.includes(ext))
        next.resume = "Resume must be a PDF, DOC or DOCX file.";
      else if (resume.size === 0) next.resume = "The selected file is empty.";
      else if (resume.size > MAX_RESUME_BYTES)
        next.resume = "Resume must be 5 MB or smaller.";
    }
    return next;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submittingRef.current) return;

    const data = new FormData(e.currentTarget);
    const validationErrors = validate(data);
    setErrors(validationErrors);
    setSubmitError("");
    if (Object.keys(validationErrors).length > 0) return;

    submittingRef.current = true;
    setSubmitting(true);

    const body = new FormData();
    body.set("name", String(data.get("name") ?? "").trim());
    body.set("email", String(data.get("email") ?? "").trim());
    body.set("phone", String(data.get("phone") ?? "").trim());
    body.set("role", role);
    body.set("coverLetter", String(data.get("coverLetter") ?? "").trim());
    body.set("resume", resume as File);

    try {
      const response = await fetch("/api/career", { method: "POST", body });
      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.success) {
        throw new Error(
          result?.message ||
            "Unable to submit your application. Please try again.",
        );
      }

      onSuccess();
    } catch (error) {
      console.error("Career application failed:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
      submittingRef.current = false;
      setSubmitting(false);
    }
  }

  if (typeof document === "undefined") return null;

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[150] flex items-start justify-center overflow-y-auto bg-ink/50 p-4 backdrop-blur-sm sm:items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget && !submitting) onClose();
      }}
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="relative my-4 w-full max-w-[560px] rounded-lg border border-border bg-white p-6 shadow-2xl sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          disabled={submitting}
          aria-label="Close application form"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-muted transition hover:bg-surface-soft hover:text-ink disabled:opacity-50"
        >
          <FiX className="h-4 w-4" />
        </button>

        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent-deep">
          Job application
        </p>
        <h3
          id={titleId}
          className="mt-3 pr-8 font-display text-lg font-semibold text-ink sm:text-xl"
        >
          Apply for {role}
        </h3>

        <form onSubmit={onSubmit} noValidate className="mt-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className={labelClass}>Full Name *</span>
              <input
                name="name"
                autoComplete="name"
                placeholder="John Smith"
                className={inputClass}
              />
              <FieldError message={errors.name} />
            </label>
            <label className="block">
              <span className={labelClass}>Email Address *</span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="john@company.com"
                className={inputClass}
              />
              <FieldError message={errors.email} />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className={labelClass}>Phone Number *</span>
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+91 98765 43210"
                className={inputClass}
              />
              <FieldError message={errors.phone} />
            </label>
            <label className="block">
              <span className={labelClass}>Applying For *</span>
              <input
                value={role}
                readOnly
                className={`${inputClass} cursor-not-allowed bg-surface-soft`}
              />
            </label>
          </div>

          <label className="block">
            <span className={labelClass}>
              Resume * (PDF, DOC, DOCX — max 5 MB)
            </span>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={(e) => setResume(e.target.files?.[0] ?? null)}
              className={`${inputClass} file:mr-3 file:rounded file:border-0 file:bg-ink file:px-3 file:py-1 file:text-xs file:font-semibold file:text-white`}
            />
            <FieldError message={errors.resume} />
          </label>

          <label className="block">
            <span className={labelClass}>
              Cover Letter / Additional Message
            </span>
            <textarea
              name="coverLetter"
              rows={4}
              maxLength={5000}
              placeholder="Tell us a little about yourself (optional)"
              className={`${inputClass} resize-none rounded-[10px]`}
            />
          </label>

          <div className="flex flex-wrap items-center gap-4 pt-1">
            <MagneticButton
              type="submit"
              disabled={submitting}
              className="w-full justify-center sm:w-auto"
            >
              {submitting ? "Submitting…" : "Submit Application"}
            </MagneticButton>

            {submitError && (
              <p role="alert" className="text-sm font-medium text-danger">
                {submitError}
              </p>
            )}
          </div>
        </form>
      </motion.div>
    </motion.div>,
    document.body,
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <span className="mt-1.5 block text-xs font-medium text-danger" role="alert">
      {message}
    </span>
  );
}
