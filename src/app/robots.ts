import { MetadataRoute } from "next";
import { BUSINESS_CONFIG } from "@/config/business";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = BUSINESS_CONFIG.links.siteUrl;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
