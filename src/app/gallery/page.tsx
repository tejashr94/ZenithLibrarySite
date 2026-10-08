import { Metadata } from "next";
import Link from "next/link";
import Gallery from "@/components/Gallery";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/lib/structuredData";
import { Navigation, MessageCircle } from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";

export const metadata: Metadata = buildMetadata({
  title: "Photo Gallery | Inside Zenith Library Bilandpur, Gorakhpur",
  description:
    "View authentic photos of Zenith Library in Bilandpur, Gorakhpur: silent reading hall, ergonomic study seating, entrance, facilities, and parking area.",
  path: "/gallery",
  keywords: [
    "zenith library photos",
    "zenith library gallery",
    "gorakhpur library images",
    "study hall pictures gorakhpur",
  ],
});

export default function GalleryPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Gallery", url: "/gallery" },
  ];

  return (
    <div className="bg-[#fcfbf9] py-12 sm:py-20">
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />

      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16 wide-layout-fill">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-[#0c182a]">Home</Link>
          <span>/</span>
          <span className="font-semibold text-slate-800">Gallery</span>
        </nav>

        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8c6d23]">
            PHOTO GALLERY
          </span>
          <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#0c182a] sm:text-5xl">
            Inside Zenith Library Bilandpur
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Explore our silent reading halls, spacious study desks, comfortable seating arrangements, and premises in Bilandpur, Gorakhpur.
          </p>
        </div>

        <div className="mt-8">
          <Gallery />
        </div>

        {/* In-Person Inspection CTA */}
        <div className="mt-14 rounded-2xl border border-[#e8dfcf] bg-white p-8 text-center shadow-xs">
          <h3 className="font-serif text-xl font-bold text-[#0c182a]">
            Visit Us In Person For A Walkthrough
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-slate-600">
            Photographs can only capture a part of the calm experience. Feel the silence and inspect our seating in person at Bilandpur (In Front Of DIG Bungalow).
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={BUSINESS_CONFIG.links.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0c182a] px-5 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-[#162a47]"
            >
              <Navigation className="h-4 w-4 text-[#d4af37]" />
              <span>Get Directions</span>
            </a>
            <a
              href={BUSINESS_CONFIG.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-emerald-700"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
