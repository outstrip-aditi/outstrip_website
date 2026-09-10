import { Hero } from "@/components/home/Hero";
import { TechMarquee } from "@/components/home/TechMarquee";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { StatsSection } from "@/components/home/StatsSection";
import { GrowthPartnersSection } from "@/components/home/GrowthPartnersSection";
import { ProjectsPreview } from "@/components/home/ProjectsPreview";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { PageShell } from "@/components/layout/PageHero";
import { AboutPreview } from "@/components/home/AboutPreview";

export default function HomePage() {
  return (
    <PageShell>
      <Hero />
      <TechMarquee />
      <AboutPreview />
      <ServicesPreview />
      <StatsSection />
      <ProjectsPreview />
      <GrowthPartnersSection />
      <IndustriesSection />
      <TestimonialsSection />
      <FAQSection />
      <ProcessSection />
    </PageShell>
  );
}