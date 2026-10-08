import { Metadata } from "next";
import Link from "next/link";
import Contact from "@/components/Contact";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/lib/structuredData";

export const metadata: Metadata = buildMetadata({
  title: "Contact & Enquiry | Zenith Library Bilandpur, Gorakhpur",
  description:
    "Enquire about Zenith Library in Bilandpur, Gorakhpur. Connect directly on WhatsApp (+91 95010 39134) or Call (+91 81157 51248) for shift timings and seat availability.",
  path: "/contact",
  keywords: [
    "contact zenith library",
    "zenith library gorakhpur phone number",
    "zenith library whatsapp",
    "enquire study library gorakhpur",
  ],
});

export default function ContactPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Contact & Enquiry", url: "/contact" },
  ];

  return (
    <div className="bg-[#fcfbf9] py-12 sm:py-20">
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />

      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16 wide-layout-fill">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-[#0c182a]">Home</Link>
          <span>/</span>
          <span className="font-semibold text-slate-800">Contact &amp; Enquiry</span>
        </nav>

        <div className="mx-auto max-w-3xl text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8c6d23]">
            CONNECT WITH ZENITH
          </span>
          <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#0c182a] sm:text-5xl">
            Enquire About Zenith Library
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Direct communication with our administration. No automated answering bots or intermediaries.
          </p>
        </div>

        {/* Contact Component */}
        <Contact />

      </div>
    </div>
  );
}
