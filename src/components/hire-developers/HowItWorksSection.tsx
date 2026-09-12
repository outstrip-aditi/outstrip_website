import { hiringProcess } from "@/lib/developers";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessStepper } from "@/components/services/ProcessStepper";

export function HowItWorksSection() {
  return (
    <section className="section-pad relative overflow-hidden border-t border-white/10 bg-ink py-20 text-white md:py-24">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-accent/8 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-accent/5 blur-[120px]" />

      <div className="container-wide relative">
        <Reveal>
          <SectionHeading
            light
            eyebrow="How it works"
            title="From requirement to onboarded engineer"
            description="A clear, fast path — no lengthy procurement process required."
          />
        </Reveal>

        <ProcessStepper steps={hiringProcess} />
      </div>
    </section>
  );
}
