/**
 * ZENITH LIBRARY GORAKHPUR - STRUCTURED DATA (JSON-LD) GENERATOR
 * 
 * Generates verified schema.org structured data adhering strictly to Google Search guidelines:
 * - Library & LocalBusiness
 * - PostalAddress
 * - WebSite
 * - BreadcrumbList
 * - BlogPosting
 * - FAQPage
 * 
 * Adheres strictly to the rule:
 * NO fabricated ratings, NO fake opening hours, NO invented social profiles.
 */

import { BUSINESS_CONFIG } from "@/config/business";
import { BlogPost } from "@/config/blog";

const siteUrl = BUSINESS_CONFIG.links.siteUrl;

/**
 * Core Library / LocalBusiness Schema
 */
export function getLibrarySchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Library", "LocalBusiness"],
    "@id": `${siteUrl}/#organization`,
    name: BUSINESS_CONFIG.businessName,
    alternateName: [
      BUSINESS_CONFIG.fullName,
      "Zenith Study Library Gorakhpur",
      "Zenith Library Bilandpur"
    ],
    description: BUSINESS_CONFIG.subheading,
    url: siteUrl,
    telephone: BUSINESS_CONFIG.phone.display,
    priceRange: "Enquire Directly",
    image: `${siteUrl}${BUSINESS_CONFIG.assets.exterior}`,
    logo: `${siteUrl}${BUSINESS_CONFIG.assets.logo}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${BUSINESS_CONFIG.address.line1}, ${BUSINESS_CONFIG.address.line2}`,
      addressLocality: BUSINESS_CONFIG.address.locality,
      addressRegion: BUSINESS_CONFIG.address.state,
      postalCode: BUSINESS_CONFIG.address.postalCode,
      addressCountry: BUSINESS_CONFIG.address.countryCode,
    },
    hasMap: BUSINESS_CONFIG.links.googleMapsDirectionsUrl,
    sameAs: [
      BUSINESS_CONFIG.links.justdialUrl
    ],
    founder: {
      "@type": "Person",
      name: BUSINESS_CONFIG.legacy.founderName
    },
    employee: {
      "@type": "Person",
      name: BUSINESS_CONFIG.legacy.currentLeaderName,
      jobTitle: "Director / Administrator"
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Gorakhpur, Uttar Pradesh, India"
    }
  };
}

/**
 * WebSite Schema for Search Box & Brand Identity
 */
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: BUSINESS_CONFIG.businessName,
    description: BUSINESS_CONFIG.subheading,
    inLanguage: "en-IN"
  };
}

/**
 * BreadcrumbList Schema
 */
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteUrl}${item.url}`,
    })),
  };
}

/**
 * BlogPosting Schema for individual articles
 */
export function getBlogPostSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${post.slug}`,
    },
    headline: post.title,
    description: post.description,
    image: `${siteUrl}${post.image}`,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: {
      "@type": "Organization",
      name: post.author.name,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS_CONFIG.businessName,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}${BUSINESS_CONFIG.assets.logo}`,
      },
    },
    articleSection: post.category,
    keywords: post.keywords.join(", "),
  };
}

/**
 * FAQPage Schema
 */
export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
