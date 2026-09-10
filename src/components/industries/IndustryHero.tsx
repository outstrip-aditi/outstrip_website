"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { FiArrowRight, FiMail } from "react-icons/fi";

import { growthPartners } from "@/lib/data";
import type { Industry } from "@/lib/industries";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SelectInput } from "@/components/ui/SelectInput";
import { IndustryIcon } from "@/components/industries/IndustryIcon";
import { PartnerLogoSlider } from "@/components/industries/PartnerLogoSlider";

const budgets = ["Under $5k", "$5k – $15k", "$15k – $50k", "$50k+", "Not sure yet"].map((label) => ({
  label,
  value: label,
}));

function CallbackForm({ industry }: { industry: Industry }) {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
    (e.target as HTMLFormElement).reset();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="name"
          type="text"
          required
          placeholder="Your Name"
          className="w-full rounded-md border border-border bg-surface px-4 py-2.5 text-sm text-ink outline-none transition focus:border-accent"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Enter Email Address"
          className="w-full rounded-md border border-border bg-surface px-4 py-2.5 text-sm text-ink outline-none transition focus:border-accent"
        />
      </div>

      <input
        name="phone"
        type="tel"
        placeholder="Phone Number"
        className="w-full rounded-md border border-border bg-surface px-4 py-2.5 text-sm text-ink outline-none transition focus:border-accent"
      />

      <SelectInput name="budget" options={budgets} placeholder="Select Budget" />

      <textarea
        name="message"
        rows={4}
        placeholder={`Tell us about your ${industry.title.toLowerCase()} project…`}
        className="w-full resize-y rounded-md border border-border bg-surface px-4 py-3 text-sm text-ink outline-none transition focus:border-accent"
      />

      <label className="flex items-center justify-between gap-3 rounded-md border border-border bg-surface-soft px-4 py-3">
        <span className="flex items-center gap-3">
          <input
            type="checkbox"
            required
            className="h-4 w-4 shrink-0 rounded border-border accent-accent-deep"
          />
          <span className="text-sm text-muted">I&apos;m not a robot</span>
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-muted/70">
          reCAPTCHA
        </span>
      </label>

      <MagneticButton type="submit" className="w-full !justify-center">
        Send Your Enquiry
        <FiArrowRight className="h-4 w-4" />
      </MagneticButton>

      <AnimatePresence>
        {status === "sent" && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-center text-sm font-medium text-accent-deep"
          >
            Thanks — we&apos;ll get back to you shortly.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}

export function IndustryHero({ industry }: { industry: Industry }) {
  const trustedBy = growthPartners.slice(0, 5);

  return (
    <section className="relative overflow-hidden bg-background pb-16 pt-32 md:pb-20 md:pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-y-0 right-0 hidden w-[60%] bg-gradient-to-br from-accent/10 via-accent-bright/5 to-transparent lg:block"
          style={{ clipPath: "polygon(28% 0, 100% 0, 100% 100%, 0 100%)" }}
        />
        <div className="absolute -left-24 top-10 h-[380px] w-[380px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-[320px] w-[320px] rounded-full bg-accent-bright/10 blur-[110px]" />
      </div>
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-60" />

      <div className="section-pad container-wide relative">
        <div className="mt-8 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
          <Reveal>
            <div className="flex items-center gap-3">
              <IndustryIcon icon={industry.icon} className="h-11 w-11 rounded-xl [&>svg]:h-5 [&>svg]:w-5" />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-deep">
                {industry.title} Solutions
              </p>
            </div>

            <h1 className="font-display mt-5 max-w-xl text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-[3.25rem]">
              {industry.headline}
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">
              {industry.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <MagneticButton href="/contact">
                Get Started
                <FiArrowRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton href="#request-callback" variant="secondary">
                <FiMail className="h-4 w-4" />
                Request Quote
              </MagneticButton>
            </div>

            <div className="mt-12 w-full max-w-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                We are trusted by
              </p>

              <PartnerLogoSlider partners={trustedBy} />
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div
              id="request-callback"
              className="relative mx-auto w-full max-w-[480px] scroll-mt-28 rounded-lg border border-border bg-surface p-7 shadow-[0_35px_90px_-40px_rgba(7,17,31,0.4)] md:p-8"
            >
              <h2 className="font-display text-xl font-semibold text-ink">Request a Callback</h2>
              <p className="mt-1 text-sm text-muted">
                We respond promptly, typically within{" "}
                <span className="font-semibold text-accent-deep">30 minutes</span>
              </p>

              <div className="mt-6">
                <CallbackForm industry={industry} />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
