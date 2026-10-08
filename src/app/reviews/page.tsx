import { Metadata } from "next";
import Link from "next/link";
import Reviews from "@/components/Reviews";
import FeedbackForm from "@/components/FeedbackForm";
import { getApprovedFeedback } from "@/lib/googleSheets";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/lib/structuredData";
import { BUSINESS_CONFIG } from "@/config/business";
import { ExternalLink, ShieldCheck } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Student Feedback & Reviews | Zenith Library Gorakhpur",
  description:
    "Read verified student feedback and reviews for Zenith Library in Bilandpur, Gorakhpur. Submit your own study experience and view us on Google and Justdial.",
  path: "/reviews",
  keywords: [
    "zenith library reviews",
    "gorakhpur library student feedback",
    "zenith library ratings",
    "best library reviews gorakhpur",
  ],
});

export default async function ReviewsPage() {
  const approvedFeedback = await getApprovedFeedback();

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Reviews & Feedback", url: "/reviews" },
  ];

  return (
    <div className="bg-[#fcfbf9] py-12 sm:py-20">
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />

      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16 wide-layout-fill">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-[#0c182a]">Home</Link>
          <span>/</span>
          <span className="font-semibold text-slate-800">Reviews &amp; Feedback</span>
        </nav>

        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#f6eee0] px-3.5 py-1 text-xs font-semibold text-[#8c6d23]">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>AUTHENTIC EXPERIENCES</span>
          </div>
          <h1 className="mt-3 font-serif text-3xl font-bold tracking-tight text-[#0c182a] sm:text-5xl">
            Student Reviews &amp; Feedback
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            We value genuine words from students preparing for competitive exams and academic goals at Zenith Library in Bilandpur, Gorakhpur.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={BUSINESS_CONFIG.links.googleBusinessProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0c182a] px-4 py-2 text-xs font-bold text-[#d4af37] shadow-xs hover:bg-[#162a47]"
            >
              <span>View us on Google</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a
              href={BUSINESS_CONFIG.links.justdialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-orange-300 bg-white px-4 py-2 text-xs font-bold text-orange-950 shadow-xs hover:bg-orange-50"
            >
              <span>View on Justdial</span>
              <ExternalLink className="h-3.5 w-3.5 text-orange-600" />
            </a>
          </div>
        </div>

        {/* Display Approved Feedback */}
        <div className="mt-10">
          <Reviews reviews={approvedFeedback} />
        </div>

        {/* Feedback Submission Form */}
        <div className="mt-16 mx-auto max-w-2xl">
          <FeedbackForm />
        </div>

      </div>
    </div>
  );
}
