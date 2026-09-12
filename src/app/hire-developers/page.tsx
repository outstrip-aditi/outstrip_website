import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";
import { PageShell } from "@/components/layout/PageHero";
import { HireDevelopersHero } from "@/components/hire-developers/HireDevelopersHero";
import { WhyHireUsSection } from "@/components/hire-developers/WhyHireUsSection";
import { DeveloperCategories } from "@/components/hire-developers/DeveloperCategories";
import { TechStackSection } from "@/components/hire-developers/TechStackSection";
import { DeveloperShowcase } from "@/components/hire-developers/DeveloperShowcase";
import { HowItWorksSection } from "@/components/hire-developers/HowItWorksSection";
import { EngagementModelsSection } from "@/components/hire-developers/EngagementModelsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { HireFaqSection } from "@/components/hire-developers/HireFaqSection";
import { ProcessSection } from "@/components/home/ProcessSection";

export const metadata: Metadata = {
  title: "Hire Developers",
  description: `Hire vetted, senior developers from ${siteConfig.name} — dedicated teams, fixed-scope builds, or staff augmentation.`,
};

export default function HireDevelopersPage() {
  return (
    <PageShell>
      <HireDevelopersHero />
      <WhyHireUsSection />
      <DeveloperCategories />
      <TechStackSection />
      <DeveloperShowcase />
      <HowItWorksSection />
      <EngagementModelsSection />
      <TestimonialsSection />
      <HireFaqSection />
      <ProcessSection
        title="Ready to bring on your next engineer?"
        description="Tell us the role and stack you need — we'll respond with a shortlist, not a sales pitch."
        buttonText="Talk to us about your team"
        buttonHref="/contact"
      />
    </PageShell>
  );
}
