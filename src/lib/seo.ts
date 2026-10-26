import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";
import { referencePageSeo } from "@/lib/referenceSeo";
import { images } from "@/lib/images";

export const SEO_SITE_NAME = "Outstripinfotech";
export const SEO_LOCALE = "en_IN";
/** Bump when the /og rendering changes so crawlers re-fetch instead of using cached images. */
const OG_IMAGE_VERSION = "3";

type ImageInput = { url: string; alt?: string; width?: number; height?: number; type?: string };

type BuildMetadataInput = {
  /** Full <title> — used as-is (no template suffix). */
  title: string;
  description: string;
  /** Path starting with "/" — drives canonical + og:url. */
  path: string;
  /** The page's own image (hero/featured). Falls back to the brand logo. */
  image?: { src: string; alt?: string };
  type?: "website" | "article";
  keywords?: string[];
  publishedTime?: string;
  authors?: string[];
  noindex?: boolean;
};

export function absoluteUrl(path: string) {
  const clean = path === "/" ? "" : path.replace(/\/+$/, "");
  return `${siteConfig.url}${clean}`;
}

/**
 * Social image for a page: /og composes the page's own image onto a 1200x630
 * JPEG (no text). `src` is a /public path or an allow-listed https URL.
 */
export function ogImageFor(src?: string, alt?: string): ImageInput {
  const query = `?${src ? `src=${encodeURIComponent(src)}&` : ""}v=${OG_IMAGE_VERSION}`;
  return {
    url: absoluteUrl(`/og${query}`),
    alt,
    width: 1200,
    height: 630,
    type: "image/jpeg",
  };
}

export function buildMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  keywords,
  publishedTime,
  authors,
  noindex,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  // Every page uses a self-hosted card so crawlers always get a fast, correctly sized image.
  const images = [ogImageFor(image?.src, image?.alt ?? title)];

  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: SEO_SITE_NAME,
      locale: SEO_LOCALE,
      type,
      images,
      ...(type === "article" ? { publishedTime, authors } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: images.map((i) => i.url),
    },
  };
}

/** Existing hero/featured image for each static page. */
const pageImages: Record<string, { src: string; alt: string }> = {
  "/": images.hero,
  "/about": images.aboutUs,
  "/about/story": images.ourStory,
  "/about/team": images.ourTeam,
  "/about/careers": images.careers,
  "/about/talks-to-founders": images.ourTeam,
  "/about/mission": images.missionVision,
  "/about/industry-expertise": images.industries,
  "/about/culture": images.ourTeam,
  "/about/community": images.missionVision,
  "/about/work": images.aboutUs,
  "/about/top-developers": images.ourTeam,
  "/services": images.services,
  "/industries": images.industries,
  "/projects": images.portfolio,
  "/hire-developers": images.hireDevelopers,
  "/careers": images.careers,
  "/contact": images.contact,
  "/blog": images.office,
  "/testimonials": images.officeWide,
  "/our-products": { src: "/images/our-products/accounting-software.png", alt: "OUTSTRIP software products" },
};

/** Metadata for a static page. Reference title/description win; fallbacks fill gaps. */
export function pageMetadata(
  path: string,
  fallback: { title: string; description: string },
  referenceKey?: keyof typeof referencePageSeo,
): Metadata {
  const ref = referenceKey ? referencePageSeo[referenceKey] : undefined;
  return buildMetadata({
    title: ref?.title ?? `${fallback.title} - ${SEO_SITE_NAME}`,
    description: ref?.description ?? fallback.description,
    path,
    image: pageImages[path],
  });
}
