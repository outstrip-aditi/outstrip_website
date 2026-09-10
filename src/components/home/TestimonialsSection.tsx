import { testimonials } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { InfiniteCardSlider } from "@/components/ui/InfiniteCardSlider";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";

const cards = testimonials.map((testimonial, index) => (
  <TestimonialCard
    key={`${testimonial.author}-${index}`}
    testimonial={testimonial}
    className="h-[330px] w-full sm:h-[380px] sm:w-[260px]"
  />
));

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-ink pb-20 pt-18 md:pb-24 md:pt-20">
      <div className="section-pad container-wide">
        <Reveal>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              light
              eyebrow="Clients"
              title="What partners say"
              description="Delivery quality measured by the people who ship with us."
            />

            <MagneticButton href="/testimonials" variant="secondary" className="shrink-0 self-start border-white/20 bg-transparent text-white hover:border-accent-bright hover:text-accent-bright md:self-auto">
              View all testimonials
            </MagneticButton>
          </div>
        </Reveal>
      </div>

      <div className="mt-8">
        <InfiniteCardSlider items={cards} autoplaySeconds={4} />
      </div>
    </section>
  );
}
