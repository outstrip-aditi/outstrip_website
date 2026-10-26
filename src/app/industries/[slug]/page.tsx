import type { Metadata } from "next";
import { buildMetadata, SEO_SITE_NAME } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { notFound } from "next/navigation";

import { getIndustryBySlug, industries } from "@/lib/industries";
import { IndustryPageTemplate } from "@/components/industries/IndustryPageTemplate";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return { title: "Industries", robots: { index: false, follow: false } };

  return buildMetadata({
    title: `${industry.title} Software Development - ${SEO_SITE_NAME}`,
    description: industry.intro,
    path: `/industries/${industry.slug}`,
    image: { src: industry.aboutImage, alt: industry.title },
  });
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: industry.title, path: `/industries/${industry.slug}` },
        ]}
      />
      <IndustryPageTemplate industry={industry} />
    </>
  );
}
