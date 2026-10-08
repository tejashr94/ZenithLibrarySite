import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Phone, Navigation, MapPin, Shield, CheckCircle } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { getBreadcrumbSchema, getFAQSchema } from "@/lib/structuredData";
import { BUSINESS_CONFIG } from "@/config/business";

export const metadata: Metadata = buildMetadata({
  title: "Library Near DIG Bungalow Gorakhpur | Zenith Library",
  description:
    "Looking for a study library near DIG Bungalow in Gorakhpur? Zenith Library in Bansgaon Colony, Kalepur, Bilandpur provides an undisturbed, secure study space.",
  path: "/library-near-dig-bungalow-gorakhpur",
  keywords: [
    "library near dig bungalow gorakhpur",
    "reading room near dig bungalow",
    "zenith library dig bungalow gorakhpur",
    "study library bansgaon colony kalepur",
  ],
});

const FAQS = [
  {
    question: "How close is Zenith Library to the DIG Bungalow in Gorakhpur?",
    answer:
      "Zenith Library is situated directly in front of the DIG Bungalow in Bansgaon Colony, Kalepur, Bilandpur, Gorakhpur - 273001.",
  },
  {
    question: "Can parents feel comfortable about safety for evening study shifts?",
    answer:
      "Yes. The DIG Bungalow vicinity is exceptionally safe, quiet, and well-maintained. Zenith Library maintains strict decorum and on-ground staff assistance.",
  },
  {
    question: "What is the best way to navigate to Zenith Library near DIG Bungalow?",
    answer:
      "You can click 'Get Directions' to open Google Maps navigation directly to Zenith Library in front of the DIG Bungalow, or call our team for landmark guidance.",
  },
];

export default function LibraryNearDIGBungalowPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Library Near DIG Bungalow", url: "/library-near-dig-bungalow-gorakhpur" },
  ];

  return (
    <div className="bg-[#fcfbf9] py-12 sm:py-20">
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />
      <JsonLd data={getFAQSchema(FAQS)} />

      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16 wide-layout-fill">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-[#0c182a]">Home</Link>
          <span>/</span>
          <span className="font-semibold text-slate-800">Near DIG Bungalow</span>
        </nav>

        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#f6eee0] px-3.5 py-1 text-xs font-semibold text-[#8c6d23]">
            <MapPin className="h-3.5 w-3.5" />
            <span>KEY LANDMARK: DIG BUNGALOW GORAKHPUR</span>
          </div>
          <h1 className="mt-3 font-serif text-3xl font-bold tracking-tight text-[#0c182a] sm:text-5xl">
            Zenith Library: Study Space Located in Front of DIG Bungalow
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            A peaceful, disciplined reading room situated at Gorakhpur’s most recognizable and secure Bilandpur landmark.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          <div className="space-y-8 lg:col-span-8 text-slate-700 leading-relaxed text-base sm:text-lg">
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#0c182a]">
                Why Location Around the DIG Bungalow Makes a Difference
              </h2>
              <p>
                When searching for a study space in Gorakhpur, convenience of location must be matched with personal safety and peace of mind. The DIG Bungalow area in Bilandpur, Bansgaon Colony, is recognized across Gorakhpur for its orderly streets, security, and quiet residential character.
              </p>
              <p>
                Unlike libraries located above busy retail plazas or adjacent to chaotic bus corridors, Zenith Library gives you an environment where you hear your thoughts, not honking horns or marketplace shouts.
              </p>
            </div>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#e5decb] bg-slate-900 shadow-md">
              <Image
                src={BUSINESS_CONFIG.assets.entrance}
                alt="Zenith Library entrance in front of DIG Bungalow Gorakhpur"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#0c182a]">
                Key Amenities Near the DIG Bungalow Premises
              </h2>
              <ul className="space-y-3 pt-2 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-[#8c6d23] shrink-0 mt-0.5" />
                  <span><strong>High-Security Neighborhood:</strong> Peace of mind for both students and parents during morning and evening study hours.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#8c6d23] shrink-0 mt-0.5" />
                  <span><strong>Direct Landmark Recognition:</strong> Easily identifiable by auto-rickshaws, cabs, and delivery drivers without complex navigation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#8c6d23] shrink-0 mt-0.5" />
                  <span><strong>Quiet Bansgaon Colony Setting:</strong> Tucked into Kalepur&apos;s calm residential pockets away from commercial noise.</span>
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
                LANDMARK LOCATION
              </span>
              <h3 className="mt-2 font-serif text-xl font-bold text-[#0c182a]">
                In Front Of DIG Bungalow
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
