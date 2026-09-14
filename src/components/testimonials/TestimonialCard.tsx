import { IoIosStar } from "react-icons/io";
import type { Testimonial } from "@/lib/data";
import { cn } from "@/lib/utils";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  const rating = testimonial.rating ?? 5;

  return (
    <figure
      className={cn(
        "flex h-full flex-col justify-between border border-border bg-surface p-5 shadow-[0_24px_60px_-40px_rgba(7,17,31,0.35)]",
        className,
      )}
    >
      <div>
        <div className="flex items-center justify-between">
          <span className="font-display text-6xl leading-none text-ink/15">“</span>

          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={cn("text-sm", star <= rating ? "text-yellow-500" : "text-ink/15")}
                aria-hidden="true"
              >
                <IoIosStar />
              </span>
            ))}
          </div>
        </div>

        <blockquote>
          <p className="line-clamp-6 font-display text-base leading-relaxed text-ink">
            “{testimonial.quote}”
          </p>
        </blockquote>
      </div>

      <figcaption className="mt-4 flex items-center gap-3 border-t border-border pt-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-deep via-accent to-accent-bright text-sm font-semibold text-white">
          {initials(testimonial.author)}
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-ink">{testimonial.author}</p>
          <p className="truncate text-xs text-muted">
            {testimonial.role}
            {testimonial.company ? ` · ${testimonial.company}` : ""}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
