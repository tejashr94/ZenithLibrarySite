/**
 * ZENITH LIBRARY GORAKHPUR - SEO METADATA BUILDER
 * 
 * Provides consistent Open Graph, Twitter, Canonical, and Robot directives
 * across all pages of Zenith Library.
 */

import { Metadata } from "next";
import { BUSINESS_CONFIG } from "@/config/business";

interface SeoOptions {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path = "",
  keywords = [],
  image,
  noIndex = false,
}: SeoOptions): Metadata {
  const siteUrl = BUSINESS_CONFIG.links.siteUrl;
  const canonicalUrl = `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
  const ogImage = image
    ? image.startsWith("http")
      ? image
      : `${siteUrl}${image}`
    : `${siteUrl}/images/library-interior.jpg`;

  const defaultKeywords = [
    "Zenith Library",
    "Zenith Library Gorakhpur",
    "library in Gorakhpur",
    "study library in Gorakhpur",
    "library in Bilandpur",
    "best library in Gorakhpur",
    "library near DIG Bungalow Gorakhpur",
    "study space Gorakhpur",
    "reading room Gorakhpur",
  ];

  const allKeywords = Array.from(new Set([...defaultKeywords, ...keywords]));

  return {
    title,
    description,
    keywords: allKeywords,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: BUSINESS_CONFIG.businessName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${BUSINESS_CONFIG.businessName} - ${BUSINESS_CONFIG.address.locality}, Gorakhpur`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
