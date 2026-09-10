import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiClock,
  FiFacebook,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";

import { siteConfig } from "@/lib/data";
import {
  formatDate,
  getAdjacentPosts,
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/blog";
import { PageShell } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerChildren } from "@/components/ui/StaggerChildren";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BlogCard } from "@/components/blog/BlogCard";
import { ArticleContent } from "@/components/blog/ArticleContent";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Blog" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      images: [{ url: post.image.src, alt: post.image.alt }],
      url: `${siteConfig.url}/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image.src],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { prev, next } = getAdjacentPosts(slug);
  const relatedPosts = getRelatedPosts(post, 3);
  const shareUrl = `${siteConfig.url}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: post.image.src,
    author: { "@type": "Person", name: post.author.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: shareUrl,
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="relative overflow-hidden mesh-bg pb-10 pt-32 md:pb-10 md:pt-32">
        <div className="grid-overlay pointer-events-none absolute inset-0" />
        <div className=" container-max relative">

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wider text-muted">
            <span className="rounded-full bg-accent/10 px-3 py-1 text-accent-deep">
              {post.category}
            </span>
            <span>{formatDate(post.date, "long")}</span>
            <span className="inline-flex items-center gap-1">
              <FiClock className="h-3.5 w-3.5" />
              {post.readTime} read
            </span>
          </div>

          <h1 className="font-display mt-5 max-w-4xl text-3xl leading-[1.05] tracking-tight text-ink md:text-4xl">
            {post.title}
          </h1>

          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted md:text-sm">
            {post.excerpt}
          </p>

          <div className="mt-8 flex items-center gap-3">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-border">
              <Image
                src={post.authorAvatar.src}
                alt={post.author.name}
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">{post.author.name}</p>
              <p className="text-xs text-muted">{post.author.role}</p>
            </div>
          </div>
        </div>
      </article>

      <div className="container-max mt-10">
        <Reveal>
          <div className="relative aspect-[18/9] w-full overflow-hidden border border-border md:aspect-[25/9]">
            <Image
              src={post.image.src}
              alt={post.image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 900px, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>

      <section className="section-pad pt-10 pb-14 md:pb-20">
        <div className="container-max grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
          <Reveal className="min-w-0 max-w-[68ch]">
            <ArticleContent blocks={post.content} />

            <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-border pt-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                Share this article
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on X (Twitter)"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition hover:border-accent/40 hover:text-accent-deep"
                >
                  <FiTwitter className="h-4 w-4" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition hover:border-accent/40 hover:text-accent-deep"
                >
                  <FiLinkedin className="h-4 w-4" />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition hover:border-accent/40 hover:text-accent-deep"
                >
                  <FiFacebook className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* End-of-article */}
            <div className="mt-5 overflow-hidden bg-ink p-8 text-white md:p-10">
              <p className="font-display text-2xl md:text-3xl">
                Have a project like this in mind?
              </p>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-white/60">
                Let&apos;s map your challenge and outline a practical delivery
                plan — no obligation, just a clear next step.
              </p>
              <div className="mt-6">
                <MagneticButton href="/contact" className="!bg-accent !text-ink">
                  Discuss your project
                  <FiArrowRight className="h-4 w-4" />
                </MagneticButton>
              </div>
            </div>

            {/* Back to blog */}
            <div className="mt-10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent-deep transition hover:text-accent"
              >
                <FiArrowLeft className="h-4 w-4" />
                Back to all articles
              </Link>
            </div>
          </Reveal>

          {/* Sticky share */}
          <Reveal
            delay={0.1}
            className="hidden lg:sticky lg:top-28 lg:block lg:w-72"
          >
            <div className="rounded-lg border border-border bg-surface p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                Written by
              </p>
              <div className="mt-3 flex items-center gap-3">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-border">
                  <Image
                    src={post.authorAvatar.src}
                    alt={post.author.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{post.author.name}</p>
                  <p className="text-xs text-muted">{post.author.role}</p>
                </div>
              </div>

              <div className="mt-3 h-px bg-border" />

              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                Published
              </p>
              <p className="mt-2 text-sm text-ink">{formatDate(post.date, "long")}</p>

              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                Reading time
              </p>
              <p className="mt-2 text-sm text-ink">{post.readTime}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RELATED ARTICLES  */}
      {relatedPosts.length > 0 && (
        <section className="section-pad border-t border-border py-16 md:py-24">
          <div className="container-wide">
            <Reveal>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-deep">
                    Keep reading
                  </p>
                  <h2 className="font-display mt-2 text-2xl text-ink sm:text-3xl">
                    Related articles
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="hidden shrink-0 items-center gap-2 text-sm font-semibold text-accent-deep transition hover:text-accent sm:inline-flex"
                >
                  View all
                  <FiArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <StaggerChildren className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <div key={related.slug} data-stagger-item>
                  <BlogCard post={related} variant="compact" />
                </div>
              ))}
            </StaggerChildren>
          </div>
        </section>
      )}
    </PageShell>
  );
}
