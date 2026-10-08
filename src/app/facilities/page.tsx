import { Metadata } from "next";
import Link from "next/link";
import Facilities from "@/components/Facilities";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/lib/structuredData";
import { BUSINESS_CONFIG } from "@/config/business";
import { MessageCircle, Phone, Navigation } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Confirmed Facilities | Zenith Library Bilandpur, Gorakhpur",
  description:
    "Explore verified study amenities at Zenith Library Gorakhpur: focused study environment, comfortable seating, dedicated study desks, parking, canteen, and staff assistance.",
  path: "/facilities",
  keywords: [
    "zenith library facilities",
    "study space facilities gorakhpur",
    "reading room amenities gorakhpur",
    "study desks bilandpur",
  ],
});

export default function FacilitiesPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Facilities", url: "/facilities" },
  ];

  return (
    <div className="bg-[#fcfbf9] py-12 sm:py-20">
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />

      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16 wide-layout-fill">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-[#0c182a]">Home</Link>
          <span>/</span>
          <span className="font-semibold text-slate-800">Facilities</span>
        </nav>

        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8c6d23]">
            VERIFIED AMENITIES
          </span>
          <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#0c182a] sm:text-5xl">
            Study Facilities at Zenith Library
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Purposefully maintained facilities in Bilandpur, Gorakhpur to protect your intellectual focus throughout your preparation.
          </p>
        </div>

        {/* Facilities Component */}
        <div className="mt-8">
          <Facilities />
        </div>

        {/* Administration Transparency Note */}
        <div className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h3 className="font-serif text-lg font-bold text-[#0c182a]">
            Our Commitment to Authentic Information
          </h3>
          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
            Zenith Library only lists confirmed facilities on this website. We respect students and parents too much to publish misleading claims or unconfirmed amenities. If you have specific infrastructure requirements, shift timing questions, or wish to inspect our study halls, please reach out directly:
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={BUSINESS_CONFIG.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="pointer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-emerald-700 transition-all hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp: {BUSINESS_CONFIG.whatsapp.display}</span>
            </a>
            <a
              href={BUSINESS_CONFIG.phone.url}
              data-cursor="pointer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0c182a] px-4 py-2.5 text-xs font-semibold text-[#d4af37] shadow-xs hover:bg-[#162a47] transition-all hover:scale-105"
            >
              <Phone className="h-4 w-4" />
              <span>Call: {BUSINESS_CONFIG.phone.display}</span>
            </a>
            <a
              href={BUSINESS_CONFIG.links.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="pointer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-800 hover:bg-slate-50 transition-all hover:scale-105"
            >
              <Navigation className="h-4 w-4 text-[#8c6d23]" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
