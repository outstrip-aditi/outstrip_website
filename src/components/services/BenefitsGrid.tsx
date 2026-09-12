import { StaggerChildren } from "@/components/ui/StaggerChildren";
import type { ServicePoint } from "@/lib/services";

function getGridClass(index: number) {
  if (index === 0) return "sm:col-span-2 lg:col-span-7 lg:row-span-2";
  if (index === 1) return "lg:col-span-5";
  if (index === 2) return "lg:col-span-5";
  if (index === 3) return "sm:col-span-2 lg:col-span-6";
  if (index === 4) return "sm:col-span-2 lg:col-span-6";

  return "lg:col-span-6";
}

export function BenefitsGrid({ benefits }: { benefits: ServicePoint[] }) {
  return (
    <StaggerChildren className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-flow-dense lg:grid-cols-12 lg:auto-rows-[minmax(100px,auto)]">
      {benefits.map((item, index) => {
        const isFeatured = index === 0;

        return (
          <article
            key={item.title}
            data-stagger-item
            className={[
              "group relative isolate overflow-hidden rounded-lg border transition-all duration-700",
              getGridClass(index),

              isFeatured
                ? [
                  "min-h-[150px]",
                  "border-white/10",
                  "bg-ink",
                  "p-4 sm:p-4 lg:p-6",
                  "text-white",
                  "shadow-[0_30px_90px_-40px_rgba(7,17,31,0.7)]",
                  "hover:-translate-y-1",
                ].join(" ")
                : [
                  "min-h-[120px]",
                  "border-border",
                  "bg-surface",
                  "p-5 sm:p-6",
                  "shadow-[0_20px_60px_-40px_rgba(7,17,31,0.25)]",
                  "hover:-translate-y-1",
                  "hover:border-accent/30",
                  "hover:shadow-[0_25px_70px_-35px_rgba(7,17,31,0.35)]",
                ].join(" "),
            ].join(" ")}
          >
            {/* Background Glow */}
            <div
              className={[
                "pointer-events-none absolute rounded-full blur-[100px] transition-all duration-700",
                isFeatured
                  ? "-right-32 -top-32 h-80 w-80 bg-accent/20 opacity-60 group-hover:scale-125 group-hover:opacity-100"
                  : "-right-24 -top-24 h-64 w-64 bg-accent/10 opacity-0 group-hover:scale-125 group-hover:opacity-100",
              ].join(" ")}
            />

            {/* Bottom Glow */}
            {isFeatured && (
              <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-accent-bright/10 blur-[100px]" />
            )}

            {/* Decorative Grid */}
            <div
              className={[
                "pointer-events-none absolute inset-0",
                "bg-[linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)]",
                "bg-size-[42px_42px]",
                isFeatured
                  ? "opacity-[0.035]"
                  : "opacity-[0.025]",
              ].join(" ")}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col">

              {/* Label */}
              {isFeatured && (
                <span className="mb-3 inline-flex w-fit items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-accent-bright/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-bright" />
                  Key benefit
                </span>
              )}

              {/* Title + Description */}
              <div>
                <h3
                  className={[
                    "font-display font-semibold leading-tight transition-colors duration-300",
                    isFeatured
                      ? "max-w-2xl text-2xl text-white group-hover:text-accent-bright sm:text-3xl lg:text-[2rem]"
                      : "max-w-xl text-lg text-ink group-hover:text-accent-deep",
                  ].join(" ")}
                >
                  {item.title}
                </h3>

                <p
                  className={[
                    "mt-3 max-w-xl leading-relaxed",
                    isFeatured
                      ? "text-sm text-white/50 sm:text-base"
                      : "text-sm text-muted",
                  ].join(" ")}
                >
                  {item.description}
                </p>
              </div>

              {/* Accent Line */}
              <div
                className={[
                  "mt-2 h-[2px] transition-all duration-700",
                  isFeatured
                    ? "w-14 bg-accent group-hover:w-28"
                    : "w-10 bg-accent/40 group-hover:w-16 group-hover:bg-accent",
                ].join(" ")}
              />
            </div>

            {/* Hover Sheen */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                -translate-x-full
                bg-linear-to-r
                from-transparent
                via-white/[0.04]
                to-transparent
                transition-transform
                duration-1000
                group-hover:translate-x-full
              "
            />
          </article>
        );
      })}
    </StaggerChildren>
  );
}