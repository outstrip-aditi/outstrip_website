import { hireFaqs } from "@/lib/developers";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceFaqAccordion } from "@/components/services/ServiceFaqAccordion";

export function HireFaqSection() {
  return (
    <section className="section-pad border-t border-border pt-16 md:pt-20 pb-10 md:pb-10">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:self-start">
              <SectionHeading
                eyebrow="FAQ"
                title="Common questions"
                description="Answers to what clients usually ask before hiring their first developer with us."
              />
              <div className="mt-3 hidden items-center gap-3 lg:flex">
                <span className="h-0.5 w-10 bg-accent" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                  We are here to help
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ServiceFaqAccordion faqs={hireFaqs} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
