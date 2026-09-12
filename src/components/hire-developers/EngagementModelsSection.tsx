import { FiCheck } from "react-icons/fi";
import { engagementModels } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerChildren } from "@/components/ui/StaggerChildren";
import { MagneticButton } from "@/components/ui/MagneticButton";

const PERKS = [
  ["Weekly progress check-ins", "Direct Slack access", "Scale up or down anytime"],
  ["Fixed price, fixed timeline", "Clear milestone delivery", "No scope surprises"],
  ["Billed monthly, cancel anytime", "Same-week availability", "Works inside your team"],
];

export function EngagementModelsSection() {
  return (
    <section id="engagement-models" className="section-pad scroll-mt-24 py-20 md:py-28">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            eyebrow="Engagement models"
            title="Pick the model that fits how you work"
            description="Every model comes with the same vetting bar — the difference is how the engagement is structured."
          />
        </Reveal>

        <StaggerChildren className="mt-12 grid gap-6 md:grid-cols-3">
          {engagementModels.map((model, index) => (
            <article
              key={model.title}
              data-stagger-item
              className="animated-gradient-border group relative flex flex-col rounded-lg p-7 transition-transform duration-500 hover:-translate-y-1"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-deep">
                {model.bestFor}
              </p>
              <h3 className="font-display mt-3 text-xl text-ink">{model.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{model.description}</p>

              <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                {(PERKS[index] ?? []).map((perk) => (
                  <li key={perk} className="flex items-start gap-2.5 text-sm text-ink">
                    <FiCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent-deep" />
                    {perk}
                  </li>
                ))}
              </ul>

              <MagneticButton href="/contact" variant="secondary" size="sm" className="mt-6 self-start">
                Get started
              </MagneticButton>
            </article>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
