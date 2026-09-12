import { hireTechStack } from "@/lib/developers";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechTabs } from "@/components/industries/TechTabs";

export function TechStackSection() {
  return (
    <section className="section-pad relative overflow-hidden border-t border-border bg-surface-soft py-20 md:py-28">
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-accent/5 blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-accent/4 blur-[120px]" />

      <div className="container-wide relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="Technology stack"
            title="Engineers fluent in the stack you already run"
            description="Real brand-accurate tooling — no generic placeholders. Pick a category to see the technologies our developers ship with daily."
          />
        </Reveal>

        <Reveal delay={0.08} className="mt-12">
          <TechTabs categories={hireTechStack} />
        </Reveal>
      </div>
    </section>
  );
}
