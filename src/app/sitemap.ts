import type { MetadataRoute } from "next";
import { blogPosts, siteConfig } from "@/lib/data";
import { industries } from "@/lib/industries";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticRoutes = [
    "",
    "/about",
    "/about/mission",
    "/about/story",
    "/about/industry-expertise",
    "/about/culture",
    "/about/community",
    "/about/our-work",
    "/about/work-with-developers",
    "/about/team",
    "/about/careers",
    "/about/talks-to-founders",
    "/services",
    "/projects",
    "/careers",
    "/blog",
    "/contact",
    "/testimonials",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
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
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const servicePages = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...posts, ...industryPages, ...servicePages];
}
