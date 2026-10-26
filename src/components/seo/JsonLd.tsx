import { siteConfig } from "@/lib/data";
import { absoluteUrl } from "@/lib/seo";

type JsonLdData = Record<string, unknown>;

function Script({ data }: { data: JsonLdData }) {
  return (
    <script
      type="application/ld+json"
      // "<" escaped so content can never close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\u003c") }}
    />
  );
}

const organizationRef = {
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.legalName,
  url: siteConfig.url,
};

/** Site-wide Organization + WebSite schema (rendered once in the root layout). */
export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    ...organizationRef,
    alternateName: siteConfig.name,
    logo: absoluteUrl("/images/logo.png"),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    foundingDate: String(siteConfig.founded),
    description: siteConfig.description,
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: "Outstripinfotech",
    url: siteConfig.url,
    inLanguage: "en-IN",
    publisher: { "@id": organizationRef["@id"] },
  };

  return (
    <>
      <Script data={organization} />
      <Script data={website} />
    </>
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; path: string }[] }) {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: absoluteUrl(item.path),
        })),
      }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        url: absoluteUrl(path),
        provider: { "@id": organizationRef["@id"] },
      }}
    />
  );
}

export function ArticleJsonLd({
  headline,
  description,
  path,
  datePublished,
  authorName,
  image,
}: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  authorName: string;
  image: string;
}) {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline,
        description,
        datePublished,
        image: image.startsWith("http") ? image : absoluteUrl(image),
        mainEntityOfPage: absoluteUrl(path),
        author: { "@type": "Person", name: authorName },
        publisher: { "@id": organizationRef["@id"] },
      }}
    />
  );
}
