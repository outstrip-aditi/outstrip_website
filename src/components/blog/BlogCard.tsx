import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiClock } from "react-icons/fi";

import type { EnrichedBlogPost } from "@/lib/blog";
import { formatDate } from "@/lib/blog";
import { TiltCard } from "@/components/ui/TiltCard";

type BlogCardProps = {
  post: EnrichedBlogPost;
  variant?: "featured" | "grid" | "compact";
};

export function BlogCard({ post, variant = "grid" }: BlogCardProps) {
  if (variant === "featured") {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group grid overflow-hidden rounded-lg border border-border bg-surface shadow-[0_20px_30px_-20px_rgba(7,17,31,0.35)] transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_40px_100px_-30px_rgba(13,159,138,0.28)] lg:grid-cols-2"
      >
        <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[360px]">
          <Image
            src={post.image.src}
            alt={post.image.alt}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent lg:bg-gradient-to-r" />
          <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-ink shadow-sm backdrop-blur-sm">
            Featured
          </span>
        </div>

        <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wider text-muted">
            <span className="rounded-full bg-accent/10 px-3 py-1 text-accent-deep">
              {post.category}
            </span>
            <span>{formatDate(post.date)}</span>
            <span className="inline-flex items-center gap-1">
              <FiClock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>

          <h2 className="font-display mt-5 text-3xl leading-[1.08] tracking-tight text-ink transition group-hover:text-accent-deep md:text-4xl">
            {post.title}
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted">{post.excerpt}</p>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-border">
                <Image
                  src={post.authorAvatar.src}
                  alt={post.author.name}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">{post.author.name}</p>
                <p className="text-xs text-muted">{post.author.role}</p>
              </div>
            </div>

            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-white transition-all duration-300 group-hover:bg-accent-deep">
              <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group flex h-full flex-col overflow-hidden max-w-7xl mx-auto rounded-lg border border-border bg-surface transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_24px_60px_-30px_rgba(13,159,138,0.28)]"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.image.src}
            alt={post.image.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-110"
          />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-muted">
            <span className="text-accent-deep">{post.category}</span>
            <span>·</span>
            <span>{formatDate(post.date)}</span>
          </div>
          <h3 className="font-display mt-2 text-lg leading-snug tracking-tight text-ink transition group-hover:text-accent-deep">
            {post.title}
          </h3>
          <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-xs font-semibold text-ink">
            Read article
            <FiArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <TiltCard data-stagger-item max={4} scale={1.01} className="h-full">
      <Link
        href={`/blog/${post.slug}`}
        className="group flex h-full flex-col overflow-hidden max-w-7xl mx-auto rounded-lg border border-border bg-surface shadow-[0_20px_50px_-32px_rgba(7,17,31,0.25)] transition-all duration-500 hover:border-accent/40 hover:shadow-[0_30px_70px_-24px_rgba(13,159,138,0.28)]"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.image.src}
            alt={post.image.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-ink shadow-sm backdrop-blur-sm">
            {post.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-wider text-muted">
            <span>{formatDate(post.date)}</span>
            <span className="h-1 w-1 rounded-full bg-muted/50" />
            <span className="inline-flex items-center gap-1">
              <FiClock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>

          <h3 className="font-display mt-3 text-xl leading-snug tracking-tight text-ink transition group-hover:text-accent-deep">
            {post.title}
          </h3>

          <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
            {post.excerpt}
          </p>

          <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
            <div className="flex items-center gap-2.5">
              <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border border-border">
                <Image
                  src={post.authorAvatar.src}
                  alt={post.author.name}
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <span className="text-xs font-medium text-ink">{post.author.name}</span>
            </div>

            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-soft text-ink transition-all duration-300 group-hover:bg-ink group-hover:text-white">
              <FiArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </TiltCard>
  );
}
