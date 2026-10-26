import type { Metadata } from "next";
import { buildMetadata, SEO_SITE_NAME } from "@/lib/seo";
import { referenceServiceSeo } from "@/lib/referenceSeo";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
import { notFound } from "next/navigation";
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
    return { title: "Services", robots: { index: false, follow: false } };
  }

  const ref = referenceServiceSeo[service.slug];
  return buildMetadata({
    title: ref?.title ?? `${service.seo.title} - ${SEO_SITE_NAME}`,
    description: ref?.description ?? service.seo.description,
    path: `/services/${service.slug}`,
    keywords: service.seo.keywords,
    image: service.overview.heroImage
      ? { src: service.overview.heroImage, alt: service.title }
      : undefined,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceJsonLd
        name={service.title}
        description={service.seo.description}
        path={`/services/${service.slug}`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ]}
      />
      <ServicePageTemplate service={service} />
    </>
  );
}