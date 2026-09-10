import type { ReactNode } from "react";
import { PageTransition } from "@/components/layout/PageTransition";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden mesh-bg pb-16 pt-32 md:pb-20 md:pt-38",
        className,
      )}
    >
      <div className="grid-overlay pointer-events-none absolute inset-0" />
      <div className="section-pad container-wide relative">
        {eyebrow && (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent-deep">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display max-w-4xl text-3xl leading-[1.05] tracking-tight text-ink sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted md:text-base">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
