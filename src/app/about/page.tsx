import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Shield, Heart, MapPin, ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/lib/structuredData";
import { BUSINESS_CONFIG } from "@/config/business";

export const metadata: Metadata = buildMetadata({
  title: "About Us | Zenith Library Bilandpur, Gorakhpur",
  description:
    "Learn about the ethos, story, and student-first mission of Zenith Library in Bilandpur, Gorakhpur. A family-run, disciplined study space.",
  path: "/about",
  keywords: [
    "about zenith library",
    "zenith library gorakhpur",
    "study library in bilandpur",
    "reading space gorakhpur",
  ],
});

export default function AboutPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
  ];

  return (
    <div className="bg-[#fcfbf9] py-12 sm:py-20">
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />

      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16 wide-layout-fill">
        {/* Breadcrumb nav */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-[#0c182a]">Home</Link>
          <span>/</span>
          <span className="font-semibold text-slate-800">About Us</span>
        </nav>

        {/* Page Title */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#f6eee0] px-3.5 py-1 text-xs font-semibold text-[#8c6d23]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>OUR ESSENCE &amp; ETHOS</span>
          </div>
          <h1 className="mt-3 font-serif text-3xl font-bold tracking-tight text-[#0c182a] sm:text-5xl">
            About Zenith Library Gorakhpur
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            A serene, family-run academic study library in Bilandpur, Gorakhpur, dedicated to helping students develop unbreakable focus.
          </p>
        </div>

        {/* Story Section */}
        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <h2 className="font-serif text-2xl font-bold text-[#0c182a] sm:text-3xl">
              More Than A Study Hall — An Academic Sanctuary
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600">
              Gorakhpur is home to thousands of ambitious learners preparing for competitive examinations such as UPSC, UPPSC, NEET, IIT-JEE, CA, SSC, and university degrees. Yet, the single biggest challenge students repeatedly face is finding an environment that is genuinely quiet, respectful, and distraction-free.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600">
              Zenith Library was founded with a singular purpose: to fill this crucial need with complete sincerity. Opened by the visionary <strong>{BUSINESS_CONFIG.legacy.founderName}</strong>, the library was built on the conviction that physical space shapes intellectual momentum.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600">
              Today, the library continues its sacred journey under the personal care and guidance of <strong>{BUSINESS_CONFIG.legacy.currentLeaderName}</strong>, preserving the founding values of family accountability, academic discipline, and student well-being.
            </p>

            <div className="pt-2">
              <Link
                href="/legacy"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0c182a] px-5 py-2.5 text-xs font-bold text-[#d4af37] shadow-sm hover:bg-[#162a47]"
              >
                <span>Read Full Family Legacy</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[#e6decc] bg-slate-900 shadow-xl">
              <Image
                src={BUSINESS_CONFIG.assets.interior}
                alt="Inside Zenith Library Gorakhpur"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Pillars of Zenith Library */}
        <div className="mt-20">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-center text-[#0c182a]">
            Our Foundational Pillars
          </h2>
          
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div
              data-cursor="pointer"
              className="card-hover-interactive group rounded-2xl border border-[#e6decc] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-2 hover:border-[#d4af37] hover:shadow-xl hover:shadow-[#0c182a]/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fdf8ed] text-[#8c6d23] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-serif text-lg font-bold text-[#0c182a] group-hover:text-[#8c6d23] transition-colors">
                Acoustic Discipline
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                We believe that silence is not merely an absence of noise, but a space where intellectual breakthroughs occur. Our rules ensure an uninterrupted environment for every visitor.
              </p>
            </div>

            <div
              data-cursor="pointer"
              className="card-hover-interactive group rounded-2xl border border-[#e6decc] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-2 hover:border-[#d4af37] hover:shadow-xl hover:shadow-[#0c182a]/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fdf8ed] text-[#8c6d23] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-serif text-lg font-bold text-[#0c182a] group-hover:text-[#8c6d23] transition-colors">
                Family Warmth &amp; Integrity
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Zenith is family-run with deep Gorakhpur roots. Students and parents interact directly with administrators who care about the student’s success and personal comfort.
              </p>
            </div>

            <div
              data-cursor="pointer"
              className="card-hover-interactive group rounded-2xl border border-[#e6decc] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-2 hover:border-[#d4af37] hover:shadow-xl hover:shadow-[#0c182a]/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fdf8ed] text-[#8c6d23] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-serif text-lg font-bold text-[#0c182a] group-hover:text-[#8c6d23] transition-colors">
                Safe Bilandpur Setting
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Situated prominently in front of DIG Bungalow in Bansgaon Colony, Kalepur, offering safe commuting, fresh neighborhood surroundings, and on-premise parking.
              </p>
            </div>
          </div>
        </div>

        {/* NAP Callout */}
        <div className="mt-16 rounded-2xl border border-[#e8dfcf] bg-white p-8 text-center shadow-xs">
          <p className="font-serif text-xl font-bold text-[#0c182a]">
            {BUSINESS_CONFIG.fullName}
          </p>
          <p className="mt-1 text-sm text-slate-600">
            {BUSINESS_CONFIG.address.formatted}
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              data-cursor="pointer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0c182a] px-5 py-2.5 text-xs font-bold text-[#d4af37] shadow-sm hover:bg-[#162a47] transition-all hover:scale-105"
            >
              <span>Enquire About Library Shifts</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/facilities"
              data-cursor="pointer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold text-slate-800 hover:bg-slate-50 transition-all hover:scale-105"
            >
              <span>Explore Confirmed Facilities</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
