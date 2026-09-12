"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/lib/data";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const WHATSAPP_GREEN = "#25D366";
const WHATSAPP_GREEN_DEEP = "#128C7E";

const phoneDigits = siteConfig.phone.replace(/\D/g, "");
const message = "Hi OUTSTRIP, I'd like to know more about your services.";
const whatsappHref = `https://wa.me/${phoneDigits}?text=${encodeURIComponent(message)}`;

export function WhatsAppButton() {
  const reduced = usePrefersReducedMotion();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="fixed right-5 z-50 sm:right-6"
      style={{
        bottom: "max(1.25rem, env(safe-area-inset-bottom, 0px))",
      }}
    >
      <div className="relative flex items-center justify-end">

        {/* TOOLTIP */}
        <AnimatePresence>
          {hovered && (
            <motion.span
              initial={{ opacity: 0, x: 8, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 8, scale: 0.96 }}
              transition={{
                duration: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full border border-border bg-surface px-3.5 py-2 text-xs font-semibold text-ink shadow-[0_12px_30px_-14px_rgba(7,17,31,0.35)] sm:block"
            >
              Chat with us on WhatsApp
            </motion.span>
          )}
        </AnimatePresence>

        {/* WAVE / OUTWARD PULSE */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          aria-hidden="true"
        >
          {!reduced && (
            <motion.span
              className="pointer-events-none absolute h-15 w-15 rounded-full"
              style={{
                backgroundColor: WHATSAPP_GREEN,
              }}
              animate={{
                scale: hovered ? [1, 3.2] : [1, 2.7],
                opacity: [0.16, 0],
              }}
              transition={{
                duration: hovered ? 1.5 : 2.1,
                repeat: Infinity,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          )}
        </div>

        {/* SOFT GLOW WAVE */}
        {!reduced && (
          <motion.span
            className="pointer-events-none absolute h-15 w-15 rounded-full"
            style={{
              backgroundColor: WHATSAPP_GREEN,
            }}
            animate={{
              scale: hovered ? [1, 2.4] : [1, 1.9],
              opacity: [0.18, 0],
            }}
            transition={{
              duration: hovered ? 1.3 : 1.9,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        )}

        {/* WHATSAPP BUTTON */}
        <motion.a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          onFocus={() => setHovered(true)}
          onBlur={() => setHovered(false)}
          animate={
            reduced
              ? undefined
              : {
                y: [0, -5, 0],
              }
          }
          transition={
            reduced
              ? undefined
              : {
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
              }
          }
          whileHover={
            reduced
              ? undefined
              : {
                scale: 1.08,
              }
          }
          whileTap={
            reduced
              ? undefined
              : {
                scale: 0.95,
              }
          }
          className="relative z-10 flex h-15 w-15 items-center justify-center rounded-full text-white shadow-[0_16px_40px_-14px_rgba(7,17,31,0.5)]"
          style={{
            background: `linear-gradient(
              135deg,
              ${WHATSAPP_GREEN},
              ${WHATSAPP_GREEN_DEEP}
            )`,
            boxShadow: hovered
              ? `0 20px 45px -16px rgba(7,17,31,0.55),
                 0 0 0 1px rgba(255,255,255,0.15),
                 0 0 35px -5px ${WHATSAPP_GREEN}`
              : undefined,
          }}
        >
          <FaWhatsapp className="h-10 w-10 text-white" />
        </motion.a>
      </div>
    </div>
  );
}