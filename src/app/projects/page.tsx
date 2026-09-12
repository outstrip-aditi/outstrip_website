import type { Metadata } from "next";
import { PageHero, PageShell } from "@/components/layout/PageHero";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { ProcessSection } from "@/components/home/ProcessSection";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Selected OUTSTRIP portfolio — e-commerce, healthcare, logistics, education, and more.",
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our work"
        title="Selected projects that earn their place in production"
        description="A curated look at platforms we’ve shipped — across commerce, healthcare, mobility, education, and travel. Every build below is live, load-bearing software, not a concept."
      />

      <section className="section-pad relative overflow-hidden pt-20 md:pt-20 ">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent/5 blur-[120px]" />
        <div className="pointer-events-none absolute -right-20 bottom-1/4 h-64 w-64 rounded-full bg-blue-500/5 blur-[110px]" />

        <div className="container-wide relative mb-10">
          <PortfolioGrid />
        </div>

        <ProcessSection
          title="Have a product brief ready?"
          description="Have an idea in mind? Share your product brief with our team and let’s explore how we can turn it into a thoughtful, scalable digital experience."
          buttonText="Talk to us"
          buttonHref="/contact"
        />
      </section>
    </PageShell>
  );
}
