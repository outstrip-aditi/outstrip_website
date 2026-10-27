"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SuccessPopup } from "@/components/ui/SuccessPopup";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [popupOpen, setPopupOpen] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (loading) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    setLoading(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.success) {
        throw new Error(
          result?.message || "Unable to send your message. Please try again."
        );
      }

      setStatus("sent");
      setPopupOpen(true);
      form.reset();
    } catch (error) {
      console.error("Contact form submission failed:", error);

      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
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
        <MagneticButton type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send message"}
        </MagneticButton>

        <AnimatePresence mode="wait">
          {status === "error" && (
            <motion.p
              key="error"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-sm font-medium text-red-600"
              role="alert"
            >
              {errorMessage}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <SuccessPopup
        open={popupOpen}
        title="Message sent"
        message="Thank you for contacting OUTSTRIP! Your message has been sent successfully. Our team will get back to you soon."
        onClose={() => setPopupOpen(false)}
      />
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