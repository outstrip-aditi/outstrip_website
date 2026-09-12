"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";
import { products, type Product } from "@/lib/products";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function ProductShowcase() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product, index) => (
        <ProductCard key={product.slug} product={product} index={index} />
      ))}
    </div>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const reduced = usePrefersReducedMotion();
  const [isCoarse, setIsCoarse] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: none), (pointer: coarse)");
    const update = () => setIsCoarse(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const active = !reduced && (hovered || isCoarse);

  return (
    <motion.a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={reduced ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: reduced ? 0 : index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      animate={reduced ? undefined : { y: hovered ? -6 : 0 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_8px_24px_-18px_rgba(7,17,31,0.25)] transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-[0_30px_70px_-30px_rgba(7,17,31,0.4),0_0_36px_-14px_var(--glow)]"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-background">
        <motion.div
          className="absolute inset-0"
          animate={{ scale: active ? 1.08 : 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={product.image!}
            alt={`${product.name} preview`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top"
          />
        </motion.div>

        {/* browser chrome */}
        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between gap-2 bg-surface/85 px-4 py-2.5 backdrop-blur-sm">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-ink/15" />
            <span className="h-2 w-2 rounded-full bg-ink/15" />
            <span className="h-2 w-2 rounded-full bg-ink/15" />
          </div>
        </div>

        {/* category badge */}
        <span className="pointer-events-none absolute right-3 top-12 rounded-full border border-border bg-surface/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted backdrop-blur-sm">
          {product.category}
        </span>

        {/* hover scrim */}
        <motion.div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent"
          animate={{ opacity: active ? 1 : 0 }}
          transition={{ duration: 0.35 }}
        />

        {/* EXPLORE PRODUCT  */}
        <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-8">
          <motion.div
            initial={false}
            animate={active ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 14, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <span className="pointer-events-none absolute -inset-3 rounded-full">
              {[0, 1].map((ring) => (
                <motion.span
                  key={ring}
                  className="absolute inset-0 rounded-full border border-accent-bright/60"
                  animate={
                    active
                      ? { scale: [1, 1.55], opacity: [0.55, 0] }
                      : { scale: 1, opacity: 0 }
                  }
                  transition={{
                    duration: 1.6,
                    repeat: active ? Infinity : 0,
                    delay: ring * 0.55,
                    ease: "easeOut",
                  }}
                />
              ))}
            </span>
            <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
              <motion.span
                className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-accent-bright/70 to-transparent"
                animate={active ? { x: ["-140%", "240%"] } : { x: "-140%" }}
                transition={{
                  duration: 1.3,
                  repeat: active ? Infinity : 0,
                  ease: "linear",
                }}
              />
            </span>

            <span className="pointer-events-auto relative inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-white shadow-[0_16px_40px_-16px_rgba(7,17,31,0.6)]">
              Explore Product
              <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </motion.div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3">
          <div>
            <h3 className="font-display text-lg font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-accent-deep">
              {product.name}
            </h3>
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-accent-deep/80">
              {product.tagline}
            </p>
          </div>
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{product.description}</p>

        <ul className="mt-2 flex flex-wrap gap-2">
          {product.highlights.map((highlight) => (
            <li
              key={highlight}
              className="rounded-full border border-border bg-background px-3 py-1.5 text-[11px] font-medium text-muted transition-all duration-300 group-hover:border-accent/20 group-hover:text-ink"
            >
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </motion.a>
  );
}
