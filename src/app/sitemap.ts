import type { MetadataRoute } from "next";
import { aboutSections } from "@/lib/aboutData";
import { blogPosts, siteConfig } from "@/lib/data";
import { industries } from "@/lib/industries";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  // /about/story, /about/team, /about/careers and /about/talks-to-founders have
  // dedicated pages; the rest come from the [section] route (aboutSections).
  const aboutPaths = new Set([
    "/about/story",
    "/about/team",
    "/about/careers",
    "/about/talks-to-founders",
    ...aboutSections.map((s) => `/about/${s.slug}`),
  ]);

  const staticRoutes = [
    "",
    "/about",
    ...aboutPaths,
    "/services",
    "/industries",
    "/projects",
    "/our-products",
    "/hire-developers",
    "/careers",
    "/blog",
    "/contact",
    "/testimonials",
  ].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const posts = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const industryPages = industries.map((i) => ({
    url: `${base}/industries/${i.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const servicePages = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...posts, ...industryPages, ...servicePages];
}
