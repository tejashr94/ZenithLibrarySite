import { MetadataRoute } from "next";
import { BUSINESS_CONFIG } from "@/config/business";
import { BLOG_POSTS } from "@/config/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = BUSINESS_CONFIG.links.siteUrl;
  const now = new Date("2026-10-08T00:00:00.000Z");

  // Core Pages
  const coreRoutes = [
    { url: "", changeFrequency: "weekly" as const, priority: 1.0 },
    { url: "/about", changeFrequency: "monthly" as const, priority: 0.9 },
    { url: "/facilities", changeFrequency: "weekly" as const, priority: 0.9 },
    { url: "/legacy", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "/gallery", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "/reviews", changeFrequency: "daily" as const, priority: 0.9 },
    { url: "/stories", changeFrequency: "daily" as const, priority: 0.8 },
    { url: "/blog", changeFrequency: "weekly" as const, priority: 0.9 },
    { url: "/location", changeFrequency: "monthly" as const, priority: 0.9 },
    { url: "/contact", changeFrequency: "monthly" as const, priority: 0.9 },
  ];

  // Dedicated Local SEO Landing Pages
  const seoRoutes = [
    { url: "/library-in-gorakhpur", changeFrequency: "weekly" as const, priority: 0.95 },
    { url: "/best-library-in-gorakhpur", changeFrequency: "weekly" as const, priority: 0.95 },
    { url: "/study-library-gorakhpur", changeFrequency: "weekly" as const, priority: 0.9 },
    { url: "/library-in-bilandpur", changeFrequency: "weekly" as const, priority: 0.9 },
    { url: "/library-near-dig-bungalow-gorakhpur", changeFrequency: "weekly" as const, priority: 0.9 },
  ];

  // Blog Articles
  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `/blog/${post.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const allRoutes = [...coreRoutes, ...seoRoutes, ...blogRoutes];

  return allRoutes.map((route) => ({
    url: `${siteUrl}${route.url}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
