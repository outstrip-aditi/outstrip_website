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

export default function OurProductsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Prodcuts"
        title="Selected projects that earn their place in production"
        description="A curated look at platforms we’ve shipped — across commerce, healthcare, mobility, education, and travel. Every build below is live, load-bearing software, not a concept."
      />
    </PageShell>
  );
}
