import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { siteConfig } from "@/lib/data";
import { getIndustryBySlug, industries } from "@/lib/industries";
import { industryImages } from "@/lib/images";
import { IndustryPageTemplate } from "@/components/industries/IndustryPageTemplate";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return { title: "Industries" };

  const image = industryImages[industry.slug];

  return {
    title: `${industry.title} Software Development`,
    description: industry.intro,
    openGraph: {
      title: `${industry.title} Software Development · ${siteConfig.name}`,
      description: industry.intro,
      type: "website",
      url: `${siteConfig.url}/industries/${industry.slug}`,
      images: image ? [{ url: image.src, alt: image.alt }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${industry.title} Software Development`,
      description: industry.intro,
      images: image ? [image.src] : undefined,
    },
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  return <IndustryPageTemplate industry={industry} />;
}
