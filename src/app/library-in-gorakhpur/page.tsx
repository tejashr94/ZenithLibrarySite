import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Phone, Navigation, MapPin, CheckCircle } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { getBreadcrumbSchema, getFAQSchema } from "@/lib/structuredData";
import { BUSINESS_CONFIG } from "@/config/business";

export const metadata: Metadata = buildMetadata({
  title: "Library in Gorakhpur | Peaceful Study Space at Zenith Library",
  description:
    "Looking for a quiet library in Gorakhpur? Zenith Library in Bilandpur provides an undisturbed, disciplined study environment with comfortable seating and on-premise parking.",
  path: "/library-in-gorakhpur",
  keywords: [
    "library in gorakhpur",
    "libraries in gorakhpur",
    "reading room gorakhpur",
    "study space gorakhpur",
    "zenith library gorakhpur",
  ],
});

const FAQS = [
  {
    question: "Why should students join a library in Gorakhpur instead of studying at home?",
    answer:
      "A dedicated library eliminates common household distractions, visitor commotion, and comfort-induced lethargy. Being surrounded by serious aspirants studying silently creates natural accountability and sustained focus.",
  },
  {
    question: "Where is Zenith Library situated in Gorakhpur?",
    answer:
      "Zenith Library is centrally located in Bilandpur, in front of DIG Bungalow, Bansgaon Colony, Kalepur, Gorakhpur - 273001.",
  },
  {
    question: "How do I enquire about shifts and seat allotment?",
    answer:
      "You can directly message Zenith Library on WhatsApp (+91 95010 39134) or call (+91 81157 51248) to confirm available shifts and reserve your desk.",
  },
];

export default function LibraryInGorakhpurPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Library in Gorakhpur", url: "/library-in-gorakhpur" },
  ];

  return (
    <div className="bg-[#fcfbf9] py-12 sm:py-20">
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />
      <JsonLd data={getFAQSchema(FAQS)} />

      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16 wide-layout-fill">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-[#0c182a]">Home</Link>
          <span>/</span>
          <span className="font-semibold text-slate-800">Library in Gorakhpur</span>
        </nav>

        {/* Hero Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#f6eee0] px-3.5 py-1 text-xs font-semibold text-[#8c6d23]">
            <MapPin className="h-3.5 w-3.5" />
            <span>GORAKHPUR ACADEMIC STUDY SPACES</span>
          </div>
          <h1 className="mt-3 font-serif text-3xl font-bold tracking-tight text-[#0c182a] sm:text-5xl">
            Finding the Right Library in Gorakhpur for Your Academic Journey
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Gorakhpur has evolved into eastern Uttar Pradesh&apos;s leading education hub. Discover how Zenith Library in Bilandpur provides the peaceful, disciplined sanctuary serious aspirants require.
          </p>
        </div>

        {/* Article Layout */}
        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Main Content */}
          <div className="space-y-8 lg:col-span-8 text-slate-700 leading-relaxed text-base sm:text-lg">
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#0c182a]">
                The Growing Need for Dedicated Study Libraries in Gorakhpur
              </h2>
              <p>
                From civil service aspirants targeting UPSC and UPPSC to medical aspirants preparing for NEET, students across Gorakhpur face fierce competition. In recent years, traditional home study has become increasingly challenging due to dense residential neighborhoods, street noise, and digital interruptions.
              </p>
              <p>
                A high-quality study library bridges the gap between ambition and execution. It establishes an intentional boundary where your daily target is the only priority.
              </p>
            </div>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#e5decb] bg-slate-900 shadow-md">
              <Image
                src={BUSINESS_CONFIG.assets.interior}
                alt="Silent reading hall at Zenith Library Gorakhpur"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#0c182a]">
                Why Zenith Library Stands Apart
              </h2>
              <p>
                Unlike commercial spaces that prioritize density over quietness, Zenith Library was established by <strong>{BUSINESS_CONFIG.legacy.founderName}</strong> on the foundational principle of student welfare and authentic silence. Today, under the guidance of <strong>{BUSINESS_CONFIG.legacy.currentLeaderName}</strong>, that dedication remains uncompromised:
              </p>
              <ul className="space-y-2.5 pt-2 text-sm sm:text-base">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="h-5 w-5 text-[#8c6d23] shrink-0 mt-0.5" />
                  <span><strong>Zero Whispering Tolerance:</strong> Our study halls are strictly reserved for silent, individual learning.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="h-5 w-5 text-[#8c6d23] shrink-0 mt-0.5" />
                  <span><strong>Ergonomic Comfort:</strong> Wide desks and supportive chairs prevent posture fatigue over long hours.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="h-5 w-5 text-[#8c6d23] shrink-0 mt-0.5" />
                  <span><strong>Peaceful Bilandpur Setting:</strong> Located in Bansgaon Colony, Kalepur, opposite the DIG Bungalow, combining safety with tranquility.</span>
                </li>
              </ul>
            </div>

            {/* FAQs */}
            <div className="border-t border-slate-200 pt-8">
              <h2 className="font-serif text-2xl font-bold text-[#0c182a] mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {FAQS.map((faq, i) => (
                  <div key={i} className="rounded-xl border border-slate-200 bg-white p-5">
                    <h3 className="font-serif font-bold text-[#0c182a] text-base">{faq.question}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sticky Sidebar */}
          <div className="space-y-6 lg:col-span-4">
            <div className="rounded-2xl border-2 border-[#e6decb] bg-white p-6 shadow-sm sticky top-24">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8c6d23]">
                VISIT ZENITH LIBRARY
              </span>
              <h3 className="mt-2 font-serif text-xl font-bold text-[#0c182a]">
                Bilandpur, Gorakhpur
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                {BUSINESS_CONFIG.address.formatted}
              </p>

              <div className="mt-6 flex flex-col gap-2.5">
                <a
                  href={BUSINESS_CONFIG.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-xs font-semibold text-white hover:bg-emerald-700"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp Enquiry</span>
                </a>
                <a
                  href={BUSINESS_CONFIG.phone.url}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#0c182a] py-3 text-xs font-semibold text-[#d4af37] hover:bg-[#162a47]"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call: {BUSINESS_CONFIG.phone.display}</span>
                </a>
                <a
                  href={BUSINESS_CONFIG.links.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-slate-50 py-3 text-xs font-semibold text-slate-800 hover:bg-slate-100"
                >
                  <Navigation className="h-4 w-4 text-[#8c6d23]" />
                  <span>Get Google Directions</span>
                </a>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-4 text-center">
                <Link
                  href="/facilities"
                  className="text-xs font-semibold text-[#8c6d23] hover:underline"
                >
                  View Confirmed Facilities &rarr;
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
