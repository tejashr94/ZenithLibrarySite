import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Phone, Navigation, Award, CheckCircle } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { getBreadcrumbSchema, getFAQSchema } from "@/lib/structuredData";
import { BUSINESS_CONFIG } from "@/config/business";

export const metadata: Metadata = buildMetadata({
  title: "Best Library in Gorakhpur | What Students Should Look For",
  description:
    "Evaluating the best library in Gorakhpur? Discover how Zenith Library in Bilandpur prioritizes authentic silence, ergonomic seating, and student welfare.",
  path: "/best-library-in-gorakhpur",
  keywords: [
    "best library in gorakhpur",
    "top library in gorakhpur",
    "best study space gorakhpur",
    "zenith library gorakhpur",
    "reading room gorakhpur best",
  ],
});

const FAQS = [
  {
    question: "What criteria should I use to decide the best library in Gorakhpur?",
    answer:
      "Look for authentic silence, ergonomic seating that prevents fatigue, a safe neighborhood, supportive on-ground management, and transparent, honest communication rather than false marketing claims.",
  },
  {
    question: "Why do many students consider Zenith Library the best study space in Gorakhpur?",
    answer:
      "Zenith Library is family-run with personal accountability, located in safe Bilandpur in front of DIG Bungalow, and strictly protects acoustic discipline for long hours of deep revision.",
  },
  {
    question: "Can I inspect the study space before enrolling at Zenith Library?",
    answer:
      "Absolutely. We invite every student to visit our premises in person, inspect our desks and seating, and experience the quiet atmosphere before deciding.",
  },
];

export default function BestLibraryInGorakhpurPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Best Library in Gorakhpur", url: "/best-library-in-gorakhpur" },
  ];

  return (
    <div className="bg-[#fcfbf9] py-12 sm:py-20">
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />
      <JsonLd data={getFAQSchema(FAQS)} />

      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16 wide-layout-fill">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-[#0c182a]">Home</Link>
          <span>/</span>
          <span className="font-semibold text-slate-800">Best Library in Gorakhpur</span>
        </nav>

        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#f6eee0] px-3.5 py-1 text-xs font-semibold text-[#8c6d23]">
            <Award className="h-3.5 w-3.5" />
            <span>CRITICAL EVALUATION GUIDE</span>
          </div>
          <h1 className="mt-3 font-serif text-3xl font-bold tracking-tight text-[#0c182a] sm:text-5xl">
            Choosing the Best Library in Gorakhpur: An Objective Guide
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            What truly makes a library the &ldquo;best&rdquo; for competitive exam aspirants? Cut through the marketing noise and look at what impacts your daily productivity.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          <div className="space-y-8 lg:col-span-8 text-slate-700 leading-relaxed text-base sm:text-lg">
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#0c182a]">
                Beyond Marketing: What Really Determines a Great Study Space
              </h2>
              <p>
                In a city full of educational hoardings, every commercial study hall advertises itself as the &ldquo;number one&rdquo; library in Gorakhpur. However, serious students know that awards and inflated student counts do not help you retain formulas or complete mock tests.
              </p>
              <p>
                The genuine test of a great library is how you feel after sitting at your desk for six consecutive hours: Is your focus sharp? Is your back comfortable? Has the silence remained unbroken?
              </p>
            </div>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#e5decb] bg-slate-900 shadow-md">
              <Image
                src={BUSINESS_CONFIG.assets.seating}
                alt="Ergonomic and comfortable study seating at Zenith Library Gorakhpur"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#0c182a]">
                Four Non-Negotiable Factors to Check
              </h2>
              <ul className="space-y-3 pt-2 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#8c6d23] shrink-0 mt-0.5" />
                  <span><strong>1. Uncompromising Silence:</strong> If staff allow phone calls or casual group chatter inside the reading hall, your concentration is broken every few minutes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#8c6d23] shrink-0 mt-0.5" />
                  <span><strong>2. Desk Space and Ergonomics:</strong> Narrow desks with cramped spacing cause fatigue. A proper study library provides ample room for opened textbooks, notebooks, and reference materials.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#8c6d23] shrink-0 mt-0.5" />
                  <span><strong>3. Safety and Peaceful Neighborhood:</strong> Safe streets, good lighting, and dedicated parking allow you to commute without stress.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#8c6d23] shrink-0 mt-0.5" />
                  <span><strong>4. Accountable Leadership:</strong> A library run by dedicated individuals who are physically on premise ensures rules are upheld and students are respected.</span>
                </li>
              </ul>
            </div>

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

          <div className="space-y-6 lg:col-span-4">
            <div className="rounded-2xl border-2 border-[#e6decb] bg-white p-6 shadow-sm sticky top-24">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8c6d23]">
                EXPERIENCE THE DIFFERENCE
              </span>
              <h3 className="mt-2 font-serif text-xl font-bold text-[#0c182a]">
                Visit Zenith Library
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                In Front Of DIG Bungalow, Bansgaon Colony, Kalepur, Bilandpur, Gorakhpur - 273001.
              </p>

              <div className="mt-6 flex flex-col gap-2.5">
                <a
                  href={BUSINESS_CONFIG.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-xs font-semibold text-white hover:bg-emerald-700"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp Enquiries</span>
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
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
