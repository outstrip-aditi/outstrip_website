"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { SelectInput } from "@/components/ui/SelectInput";

const serviceOptions = [
  "Web Development",
  "E-commerce",
  "Hosting",
  "Mobile Application",
  "Web Design",
  "Digital Marketing",
].map((label) => ({ label, value: label }));

type Status = "idle" | "submitting" | "success" | "error";

export function ServiceEnquiryForm({
  serviceTitle,
}: {
  serviceTitle: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: FormData) {
    const next: Record<string, string> = {};

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const service = String(data.get("serviceNeeded") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name) {
      next.name = "Full name is required.";
    }

    if (!email) {
      next.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Enter a valid email address.";
    }

    if (!phone) {
      next.phone = "Phone number is required.";
    }

    if (!service) {
      next.serviceNeeded = "Please select a service.";
    }

    if (!message) {
      next.message = "Please tell us about your project.";
    }

    return next;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const validationErrors = validate(data);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    // Simulated submission
    await new Promise((resolve) => setTimeout(resolve, 700));

    setStatus("success");
    setErrors({});
    form.reset();
  }

  return (
    <div className="relative w-full max-w-[550px] overflow-hidden rounded-lg border border-border bg-white/95 p-6 sm:p-8">

      <p className="relative text-[10px] font-bold uppercase tracking-[0.22em] text-accent-deep">
        Get a free consultation
      </p>
      <h3 className="relative mt-3 font-display text-base font-semibold text-ink sm:text-xl">
        Talk to us about {serviceTitle}
      </h3>
      <p className="relative mt-1 text-sm leading-relaxed text-muted">
        Share a few details and we&apos;ll get back to you within one business
        day.
      </p>

      {/* Form */}
      <form onSubmit={onSubmit} noValidate className="relative mt-6 space-y-4">
        {/* Full Name + Email */}
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label="Full Name"
            name="name"
            placeholder="John Smith"
            required
            error={errors.name}
          />

          <Field
            label="Email Address"
            name="email"
            type="email"
            placeholder="john@company.com"
            required
            error={errors.email}
          />
        </div>

        {/* Phone + Service */}
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label="Phone Number"
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            required
            error={errors.phone}
          />

          <SelectInput
            label="Service Needed"
            name="serviceNeeded"
            options={serviceOptions}
            defaultValue={serviceOptions.some((option) => option.value === serviceTitle) ? serviceTitle : ""}
            placeholder="Select a service"
            error={errors.serviceNeeded}
          />
        </div>

        {/* Project Details */}
        <label className="block">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink">
            Project Details
          </span>

          <textarea
            name="message"
            rows={4}
            placeholder="Tell us about your project..."
            className="w-full resize-none rounded-[10px] border border-[#cfe0f7] bg-[#f5f8fd] px-4 py-3 text-sm text-ink outline-none transition-all duration-300 placeholder:text-[#a7b6c9] focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/10"
          />

          {errors.message && (
            <span className="mt-1.5 block text-xs font-medium text-danger">
              {errors.message}
            </span>
          )}
        </label>

        {/* Submit */}
        <div className="flex flex-wrap items-center gap-4 pt-1">
          <MagneticButton
            type="submit"
            disabled={status === "submitting"}
            className="w-full justify-center sm:w-auto"
          >
            {status === "submitting" ? "Sending…" : "Send enquiry"}
          </MagneticButton>

          <AnimatePresence mode="wait">
            {status === "success" && (
              <motion.p
                key="success"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-sm font-medium text-accent-deep"
              >
                Thanks — we&apos;ll be in touch shortly.
              </motion.p>
            )}

            {status === "error" && Object.keys(errors).length > 0 && (
              <motion.p
                key="error"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-sm font-medium text-danger"
              >
                Please fix the highlighted fields.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </form>
    </div>
  );
}

/* Reusable Input Field */
function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink">
        {label}
      </span>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-sm border border-[#cfe0f7] bg-[#f5f8fd] px-4 py-2.5 text-sm text-ink outline-none transition-all duration-300 placeholder:text-[#a7b6c9] focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/10"
      />

      {error && (
        <span className="mt-1.5 block text-xs font-medium text-danger">
          {error}
        </span>
      )}
    </label>
  );
}