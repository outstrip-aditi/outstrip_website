import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/data";
import { getServiceBySlug, services } from "@/lib/services";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Services" };
  }

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    alternates: {
      canonical: `${siteConfig.url}/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.seo.title} · ${siteConfig.name}`,
      description: service.seo.description,
      type: "website",
      url: `${siteConfig.url}/services/${service.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: service.seo.title,
      description: service.seo.description,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}