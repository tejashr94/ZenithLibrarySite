import { Metadata } from "next";
import Link from "next/link";
import Legacy from "@/components/Legacy";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/lib/structuredData";

export const metadata: Metadata = buildMetadata({
  title: "Our Legacy | In Loving Memory of Shri Jyoti Prakash Rai | Zenith Library",
  description:
    "The story and foundational vision behind Zenith Library Gorakhpur. Opened by Shri Jyoti Prakash Rai, continuing today under the guidance of Shri Prem Prakash Rai.",
  path: "/legacy",
  keywords: [
    "zenith library legacy",
    "shri jyoti prakash rai zenith library",
    "shri prem prakash rai",
    "family run library gorakhpur",
  ],
});

export default function LegacyPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Our Legacy", url: "/legacy" },
  ];

  return (
    <div className="bg-[#0c182a] py-12 sm:py-20 text-white min-h-[85vh]">
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />

      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16 wide-layout-fill">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <span className="font-semibold text-[#d4af37]">Our Legacy</span>
        </nav>

        {/* Legacy Component with Founder and Current Leadership */}
        <Legacy />

        {/* Closing Heritage Message */}
        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-slate-700/60 bg-white/5 p-8 text-center backdrop-blur-xs">
          <h3 className="font-serif text-xl font-bold text-white">
            Honoring A Vision Every Day
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            For us at Zenith Library, every student who quietly prepares for their life’s ambitions is a continuation of the vision that began with Shri Jyoti Prakash Rai. We take pride in preserving this space with the highest integrity, care, and family commitment.
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#d4af37] px-6 py-2.5 text-xs font-bold text-[#0c182a] hover:bg-[#e2bd4b] transition-colors"
            >
              Connect With Zenith Library
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
