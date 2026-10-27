import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/data";
import { PageHero, PageShell } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FiArrowRight } from "react-icons/fi";

export const metadata: Metadata = pageMetadata("/testimonials", { title: "Testimonials", description: `What clients say about working with ${siteConfig.name} — real feedback from the businesses we've built for.` });

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

      <TestimonialsSection showViewAll={false} />

      <section className="section-pad relative overflow-hidden pb-20 md:pb-20">
        <div className="container-wide relative">
          <Reveal className="mt-14">
            <div className="flex flex-col items-start justify-between gap-6 rounded-lg bg-ink px-8 py-10 text-white md:flex-row md:items-center md:px-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-bright">
                  Your story, next
                </p>

                <h2 className="font-display mt-3 text-2xl leading-tight md:text-3xl">
                  Ready to become our next client story?
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
                  Tell us what you&apos;re building — we&apos;ll show you exactly how
                  we&apos;d approach it.
                </p>
              </div>

              <MagneticButton
                href="/contact"
                size="md"
                className="shrink-0 !bg-accent !text-ink hover:!bg-accent-bright"
              >
                Get a free consultation
                <FiArrowRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
