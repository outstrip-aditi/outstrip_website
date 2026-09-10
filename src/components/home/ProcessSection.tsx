import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { FiArrowRight } from "react-icons/fi";

type ProcessSectionProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
};

export function ProcessSection({
  title = "Let’s build something amazing together.",
  description = "Tell us about your product, platform, or growth goal — we’ll respond with a clear next step.",
  buttonText = "Contact us",
  buttonHref = "/contact",
  className = "",
}: ProcessSectionProps) {
  return (
    <section
      className={`section-pad relative overflow-hidden pb-20 md:pb-20 ${className}`}
    >
      <div className="container-wide relative">
        <Reveal className="mt-14">
          <div className="flex flex-col items-start justify-between gap-6 rounded-lg bg-ink px-8 py-10 text-white md:flex-row md:items-center md:px-12">
            <div>
              <p className="font-display text-2xl md:text-3xl">
                {title}
              </p>

              <p className="mt-2 max-w-xl text-sm text-white/60">
                {description}
              </p>
            </div>

            <MagneticButton
              href={buttonHref}
              className="shrink-0 !bg-accent !text-ink hover:!bg-accent-bright"
            >
              {buttonText}
              <FiArrowRight className="h-4 w-4" />
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}