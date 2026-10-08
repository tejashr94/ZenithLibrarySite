import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Phone, Navigation, BookOpen, CheckCircle, Shield } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { getBreadcrumbSchema, getFAQSchema } from "@/lib/structuredData";
import { BUSINESS_CONFIG } from "@/config/business";

export const metadata: Metadata = buildMetadata({
  title: "Study Library Gorakhpur | Self-Study & Silent Reading Space",
  description:
    "Looking for a dedicated study library in Gorakhpur? Zenith Library in Bilandpur is designed specifically for long study hours, competitive exam preparation, and complete focus.",
  path: "/study-library-gorakhpur",
  keywords: [
    "study library gorakhpur",
    "self study library gorakhpur",
    "study space gorakhpur",
    "reading hall gorakhpur",
    "zenith study library",
  ],
});

const FAQS = [
  {
    question: "What makes a study library different from a general library in Gorakhpur?",
    answer:
      "A study library is specialized for long-duration self-study, revision, and exam preparation. Rather than casual browsing or borrowing, every seat is optimized for undisturbed individual concentration with supportive seating and strict silence.",
  },
  {
    question: "Can I bring my own textbooks, study notes, and laptops to Zenith Library?",
    answer:
      "Yes, students bring their own preparation materials, standard books, and study devices to focus on their personal syllabus without distraction.",
  },
  {
    question: "How do I choose the right study shift at Zenith Library?",
    answer:
      "We offer flexible study slots to match morning, afternoon, and evening routines. Please contact us on WhatsApp (+91 95010 39134) or call (+91 81157 51248) to confirm available slots.",
  },
];

export default function StudyLibraryGorakhpurPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Study Library Gorakhpur", url: "/study-library-gorakhpur" },
  ];

  return (
    <div className="bg-[#fcfbf9] py-12 sm:py-20">
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />
      <JsonLd data={getFAQSchema(FAQS)} />

      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16 wide-layout-fill">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-[#0c182a]">Home</Link>
          <span>/</span>
          <span className="font-semibold text-slate-800">Study Library Gorakhpur</span>
        </nav>

        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#f6eee0] px-3.5 py-1 text-xs font-semibold text-[#8c6d23]">
            <BookOpen className="h-3.5 w-3.5" />
            <span>DEDICATED SELF-STUDY SPACE</span>
          </div>
          <h1 className="mt-3 font-serif text-3xl font-bold tracking-tight text-[#0c182a] sm:text-5xl">
            Study Library in Gorakhpur: Built for Deep Work &amp; Daily Consistency
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Success in competitive examinations requires hours of sustained focus. Discover how Zenith Library in Bilandpur provides the ideal study environment for Gorakhpur&apos;s serious students.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          <div className="space-y-8 lg:col-span-8 text-slate-700 leading-relaxed text-base sm:text-lg">
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#0c182a]">
                Why Serious Aspirants Need a Dedicated Study Space
              </h2>
              <p>
                The modern student faces unprecedented friction: notifications, household bustle, and irregular routines. In high-stakes examinations like UPSC, NEET, JEE, or state services, even a 10% dip in daily retention over months leads to significant syllabus gaps.
              </p>
              <p>
                A dedicated study library provides the structure that sheer motivation often fails to sustain. When you arrive at Zenith Library in Bilandpur, your brain understands immediately that you are entering a zone of focus and deep cognitive effort.
              </p>
            </div>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#e5decb] bg-slate-900 shadow-md">
              <Image
                src={BUSINESS_CONFIG.assets.studyArea}
                alt="Individual study cubicles at Zenith Library Gorakhpur"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#0c182a]">
                What Defines the Study Atmosphere at Zenith Library
              </h2>
              <ul className="space-y-3 pt-2 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-[#8c6d23] shrink-0 mt-0.5" />
                  <span><strong>Zero Distraction Protocol:</strong> A quiet reading environment where every student respects the shared discipline.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#8c6d23] shrink-0 mt-0.5" />
                  <span><strong>Posture-Friendly Seating:</strong> Ergonomic chairs designed to support long hours of revision without back strain.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#8c6d23] shrink-0 mt-0.5" />
                  <span><strong>Convenient Refreshment Space:</strong> Canteen and break area to refresh your mind without having to leave the premises.</span>
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

          {/* Sidebar */}
          <div className="space-y-6 lg:col-span-4">
            <div className="rounded-2xl border-2 border-[#e6decb] bg-white p-6 shadow-sm sticky top-24">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8c6d23]">
                RESERVE YOUR STUDY DESK
              </span>
              <h3 className="mt-2 font-serif text-xl font-bold text-[#0c182a]">
                Zenith Study Library
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
                  <span>Enquire via WhatsApp</span>
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
                  <span>Directions on Google Maps</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
