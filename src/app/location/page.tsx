import { Metadata } from "next";
import Link from "next/link";
import Location from "@/components/Location";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/lib/structuredData";

export const metadata: Metadata = buildMetadata({
  title: "Location & Directions | Zenith Library Bilandpur, Gorakhpur",
  description:
    "Find Zenith Library in Bilandpur, Gorakhpur (In Front Of DIG Bungalow, Bansgaon Colony, Kalepur). Get Google Maps directions and view our verified Justdial profile.",
  path: "/location",
  keywords: [
    "zenith library location",
    "zenith library gorakhpur address",
    "library near dig bungalow gorakhpur",
    "bilandpur gorakhpur library directions",
    "bansgaon colony kalepur library",
  ],
});

export default function LocationPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Location & Directions", url: "/location" },
  ];

  return (
    <div className="bg-[#fcfbf9] py-12 sm:py-20">
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />

      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16 wide-layout-fill">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-[#0c182a]">Home</Link>
          <span>/</span>
          <span className="font-semibold text-slate-800">Location &amp; Directions</span>
        </nav>

        <div className="mx-auto max-w-3xl text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8c6d23]">
            MAPS &amp; DIRECTIONS
          </span>
          <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#0c182a] sm:text-5xl">
            How to Reach Zenith Library
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Located in front of the DIG Bungalow in Bansgaon Colony, Kalepur, Bilandpur, Gorakhpur.
          </p>
        </div>

        {/* Location Component */}
        <Location />

        {/* Commuting guide across Gorakhpur */}
        <div className="mt-16 rounded-3xl border border-[#e5decb] bg-white p-8 sm:p-10 shadow-sm">
          <h2 className="font-serif text-2xl font-bold text-[#0c182a]">
            Commuting to Bilandpur from Different Parts of Gorakhpur
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3 text-sm">
            <div className="rounded-xl border border-slate-100 bg-[#faf8f4] p-5">
              <h3 className="font-serif font-bold text-[#0c182a]">From Mohaddipur</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                A brief 5–7 minute commute via the main connectivity road. Highly accessible for students residing in coaching hostels and paying-guest accommodations around Mohaddipur.
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-[#faf8f4] p-5">
              <h3 className="font-serif font-bold text-[#0c182a]">From Golghar &amp; Civil Lines</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Conveniently reachable within 8–10 minutes. Avoid the congested central market chaos and reach peaceful Bilandpur for uninterrupted reading hours.
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-[#faf8f4] p-5">
              <h3 className="font-serif font-bold text-[#0c182a]">From University Chauraha</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Directly connected and straightforward to reach for DDU Gorakhpur University students preparing for masters, NET-JRF, or civil services examinations.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
