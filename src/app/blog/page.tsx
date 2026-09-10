import type { Metadata } from "next";

import { siteConfig } from "@/lib/data";
import { getAllPosts } from "@/lib/blog";
import { PageHero, PageShell } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerChildren } from "@/components/ui/StaggerChildren";
import { BlogCard } from "@/components/blog/BlogCard";

export const metadata: Metadata = {
  title: "Blog",
  description: `Insights on engineering, product, design, and growth from the ${siteConfig.name} team.`,
  openGraph: {
    title: `Blog · ${siteConfig.name}`,
    description: "Insights on engineering, product, design, and growth.",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <PageShell>
      <PageHero
        eyebrow="Blog"
        title="Notes on building better digital products"
        description="Practical thinking on architecture, retention, SEO, and design systems — written for founders and product teams."
      />

      <section className="section-pad relative overflow-hidden py-20 md:py-16">
        
        <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 top-72 h-[460px] w-[460px] rounded-full bg-accent-bright/10 blur-3xl" />

        <div className="container-wide relative">
          {featured && (
            <Reveal>
              <BlogCard post={featured} variant="featured" />
            </Reveal>
          )}

          {rest.length > 0 && (
            <StaggerChildren className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
              {rest.map((post) => (
                <BlogCard key={post.slug} post={post} variant="grid" />
              ))}
            </StaggerChildren>
          )}
        </div>
      </section>
    </PageShell>
  );
}
