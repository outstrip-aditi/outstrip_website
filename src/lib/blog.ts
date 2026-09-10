import { blogPosts, type BlogPost } from "@/lib/data";
import { blogImages, images, teamPhotos, type ImageAsset } from "@/lib/images";

export type EnrichedBlogPost = BlogPost & {
  image: ImageAsset;
  authorAvatar: ImageAsset;
};

const FALLBACK_IMAGE: ImageAsset = images.services;

function enrich(post: BlogPost, index: number): EnrichedBlogPost {
  return {
    ...post,
    image: blogImages[post.slug] ?? FALLBACK_IMAGE,
    authorAvatar: teamPhotos[index % teamPhotos.length],
  };
}

export function getAllPosts(): EnrichedBlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(enrich);
}

export function getFeaturedPost(): EnrichedBlogPost {
  return getAllPosts()[0];
}

export function getPostBySlug(slug: string): EnrichedBlogPost | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getAdjacentPosts(slug: string): {
  prev: EnrichedBlogPost | null;
  next: EnrichedBlogPost | null;
} {
  const all = getAllPosts();
  const index = all.findIndex((post) => post.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? all[index - 1] : null,
    next: index < all.length - 1 ? all[index + 1] : null,
  };
}

export function getRelatedPosts(post: EnrichedBlogPost, limit = 3): EnrichedBlogPost[] {
  const others = getAllPosts().filter((p) => p.slug !== post.slug);
  const sameCategory = others.filter((p) => p.category === post.category);
  const rest = others.filter((p) => p.category !== post.category);
  return [...sameCategory, ...rest].slice(0, limit);
}

export function formatDate(iso: string, month: "short" | "long" = "short") {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month,
    day: "numeric",
  });
}
