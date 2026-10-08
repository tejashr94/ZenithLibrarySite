import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Phone, Navigation, MapPin, CheckCircle, ShieldCheck } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { getBreadcrumbSchema, getFAQSchema } from "@/lib/structuredData";
import { BUSINESS_CONFIG } from "@/config/business";

export const metadata: Metadata = buildMetadata({
  title: "Library in Bilandpur Gorakhpur | Zenith Library Bansgaon Colony",
  description:
    "Looking for a quiet library in Bilandpur, Gorakhpur? Zenith Library in front of DIG Bungalow, Bansgaon Colony, Kalepur offers an undisturbed study environment.",
  path: "/library-in-bilandpur",
  keywords: [
    "library in bilandpur",
    "library in bilandpur gorakhpur",
    "zenith library bilandpur",
    "bansgaon colony kalepur library",
    "reading room bilandpur gorakhpur",
  ],
});

const FAQS = [
  {
    question: "Where exactly is Zenith Library located in Bilandpur?",
    answer:
      "Zenith Library is prominently located in front of the DIG Bungalow, Bansgaon Colony, Kalepur, Bilandpur, Gorakhpur - 273001.",
  },
  {
    question: "Is Bilandpur a safe and quiet area for students studying late hours?",
    answer:
      "Yes. Bilandpur, especially near the DIG Bungalow and Bansgaon Colony, is one of Gorakhpur's most secure and peaceful residential localities with well-patrolled surroundings and quiet streets.",
  },
  {
    question: "How do I reach Zenith Library in Bilandpur from nearby areas like Mohaddipur?",
    answer:
      "From Mohaddipur, Bilandpur is easily accessible in about 5 to 7 minutes via straightforward local roads. Ample parking is available for two-wheelers on-premise.",
  },
];

export default function LibraryInBilandpurPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Library in Bilandpur", url: "/library-in-bilandpur" },
  ];

  return (
    <div className="bg-[#fcfbf9] py-12 sm:py-20">
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />
      <JsonLd data={getFAQSchema(FAQS)} />

      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16 wide-layout-fill">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-[#0c182a]">Home</Link>
          <span>/</span>
          <span className="font-semibold text-slate-800">Library in Bilandpur</span>
        </nav>

        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#f6eee0] px-3.5 py-1 text-xs font-semibold text-[#8c6d23]">
            <MapPin className="h-3.5 w-3.5" />
            <span>BILANDPUR LOCALITY FOCUS</span>
          </div>
          <h1 className="mt-3 font-serif text-3xl font-bold tracking-tight text-[#0c182a] sm:text-5xl">
            Zenith Library: Your Peaceful Study Sanctuary in Bilandpur, Gorakhpur
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Nestled in the calm of Bansgaon Colony in Kalepur, opposite the landmark DIG Bungalow — where students find real peace and productive study hours.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          <div className="space-y-8 lg:col-span-8 text-slate-700 leading-relaxed text-base sm:text-lg">
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#0c182a]">
                Why Bilandpur is Gorakhpur’s Premier Neighborhood for Studying
              </h2>
              <p>
                Unlike noisy commercial hubs packed with market bustle and bumper-to-bumper traffic, Bilandpur offers the rare gift of quiet dignity. For students in Gorakhpur who must read for eight to ten hours straight, the difference in cognitive stamina between a commercial crossroads and a serene residential quarter is night and day.
              </p>
              <p>
                Situated in Bansgaon Colony, Kalepur, Zenith Library benefits from clean streets, natural calm, and a distinguished neighborhood atmosphere.
              </p>
            </div>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#e5decb] bg-slate-900 shadow-md">
              <Image
                src="/images/zenith-students-studying.png"
                alt="Active students studying inside Zenith Library in Bilandpur Gorakhpur"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#0c182a]">
                Location Benefits of Zenith Library Bilandpur
              </h2>
              <ul className="space-y-3 pt-2 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-[#8c6d23] shrink-0 mt-0.5" />
                  <span><strong>Security and Repute:</strong> Located in front of the DIG Bungalow, one of Gorakhpur’s most well-known, safe, and prestigious administrative landmarks.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#8c6d23] shrink-0 mt-0.5" />
                  <span><strong>Convenient Two-Wheeler Parking:</strong> Dedicated parking space inside the premises ensures your bike or scooter is secure while you study.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#8c6d23] shrink-0 mt-0.5" />
                  <span><strong>Smooth City Connectivity:</strong> Centrally positioned between Mohaddipur, Golghar, and University roads, making daily commutes effortless.</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-slate-200 pt-8">
              <h2 className="font-serif text-2xl font-bold text-[#0c182a] mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {FAQS.map((faq, i) => (
                  <div key={i} data-cursor="pointer" className="rounded-xl border border-slate-200 bg-white p-5 transition-all hover:border-[#d4af37] hover:shadow-md">
                    <h3 className="font-serif font-bold text-[#0c182a] text-base">{faq.question}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-4">
            <div className="rounded-2xl border-2 border-[#e6decb] bg-white p-6 shadow-sm sticky top-24">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8c6d23]">
                VISIT IN BILANDPUR
              </span>
              <h3 className="mt-2 font-serif text-xl font-bold text-[#0c182a]">
                Zenith Library Bilandpur
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                In Front Of DIG Bungalow, Bansgaon Colony, Kalepur, Gorakhpur - 273001.
              </p>

              <div className="mt-6 flex flex-col gap-2.5">
                <a
                  href={BUSINESS_CONFIG.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="pointer"
                  className="group flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-xs font-semibold text-white hover:bg-emerald-700 transition-all hover:scale-105"
                >
                  <MessageCircle className="h-4 w-4 transition-transform group-hover:scale-110" />
                  <span>WhatsApp Enquiries</span>
                </a>
                <a
                  href={BUSINESS_CONFIG.phone.url}
                  data-cursor="pointer"
                  className="group flex items-center justify-center gap-2 rounded-xl bg-[#0c182a] py-3 text-xs font-semibold text-[#d4af37] hover:bg-[#162a47] transition-all hover:scale-105"
                >
                  <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" />
                  <span>Call: {BUSINESS_CONFIG.phone.display}</span>
                </a>
                <a
                  href={BUSINESS_CONFIG.links.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="pointer"
                  className="group flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-slate-50 py-3 text-xs font-semibold text-slate-800 hover:bg-slate-100 transition-all hover:scale-105"
                >
                  <Navigation className="h-4 w-4 text-[#8c6d23] transition-transform group-hover:rotate-45" />
                  <span>Get Directions to Bilandpur</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
