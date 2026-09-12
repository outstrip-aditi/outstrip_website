import { whyHireUs } from "@/lib/developers";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BenefitsGrid } from "@/components/services/BenefitsGrid";

export function WhyHireUsSection() {
  return (
    <section className="section-pad relative overflow-hidden border-t border-border bg-surface-soft py-20 md:py-28">
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-accent/6 blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 bottom-10 h-80 w-80 rounded-full bg-accent/4 blur-[100px]" />

      <div className="container-wide relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="Why hire us"
            title="Why teams hire developers through OUTSTRIP"
            description="We remove the risk of hiring remote — vetting, delivery accountability, and flexibility built into every engagement."
          />
        </Reveal>

        <BenefitsGrid benefits={whyHireUs} />
      </div>
    </section>
  );
}
