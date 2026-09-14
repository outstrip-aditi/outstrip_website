import type { Metadata } from "next";
import { siteConfig, testimonials } from "@/lib/data";
import { PageHero, PageShell } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerChildren } from "@/components/ui/StaggerChildren";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";

export const metadata: Metadata = {
  title: "Testimonials",
  description: `What clients say about working with ${siteConfig.name} — real feedback from the businesses we've built for.`,
  alternates: { canonical: `${siteConfig.url}/testimonials` },
};

export default function TestimonialsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Client stories"
        title="What our partners say about working with us"
        description="Every project measured by the same standard — did we make the client's business better. Here's what they told us afterward."
      >
        <div className="mt-8">
          <MagneticButton href="/contact">Start your project</MagneticButton>
        </div>
      </PageHero>

      <section className="section-pad py-18 md:py-20">
        <div className="container-wide">
          <Reveal>
            <SectionHeading
              eyebrow={`${testimonials.length} client stories`}
              title="Delivery quality, in their words"
              description="Feedback collected across web, mobile, e-commerce, and marketing engagements."
            />
          </Reveal>

          <StaggerChildren className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={`${testimonial.author}-${index}`} data-stagger-item>
                <TestimonialCard testimonial={testimonial} className="h-full transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_24px_60px_-30px_rgba(7,17,31,0.3)]" />
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="section-pad border-t border-border bg-ink py-16 text-white md:py-20">
        <div className="container-wide">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-bright">
                  Your story, next
                </p>
                <h2 className="font-display mt-3 text-2xl leading-tight sm:text-3xl md:text-4xl">
                  Ready to become our next client story?
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/60 md:text-base">
                  Tell us what you&apos;re building — we&apos;ll show you exactly how we&apos;d approach it.
                </p>
              </div>
              <MagneticButton href="/contact" size="lg">
                Get a free consultation
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
