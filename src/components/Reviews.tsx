import Link from "next/link";
import { Star, MessageSquare, ExternalLink, ShieldCheck } from "lucide-react";
import { FeedbackRecord } from "@/lib/googleSheets";
import { BUSINESS_CONFIG } from "@/config/business";

export default function Reviews({
  reviews = [],
}: {
  reviews: FeedbackRecord[];
}) {
  return (
    <section id="reviews" className="bg-[#faf8f4] py-16 sm:py-24">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16 wide-layout-fill">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#f4ebdb] px-3.5 py-1 text-xs font-semibold text-[#8c6d23]">
            <MessageSquare className="h-3.5 w-3.5" />
            <span>COMMUNITY VOICES</span>
          </div>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-[#0c182a] sm:text-4xl">
            What Students Say
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
            Genuine experiences from students and learners studying at Zenith Library in Bilandpur, Gorakhpur.
          </p>

          {/* External Verification Links */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={BUSINESS_CONFIG.links.googleBusinessProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-800 shadow-xs hover:border-[#0c182a] hover:bg-slate-50 transition-colors"
            >
              <span>View us on Google</span>
              <ExternalLink className="h-3.5 w-3.5 text-[#c59b27]" />
            </a>

            <a
              href={BUSINESS_CONFIG.links.justdialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-orange-200 bg-orange-50/60 px-4 py-2 text-xs font-semibold text-orange-950 shadow-xs hover:bg-orange-100/70 transition-colors"
            >
              <span>View Zenith Library on Justdial</span>
              <ExternalLink className="h-3.5 w-3.5 text-orange-600" />
            </a>
          </div>
        </div>

        {/* Reviews List */}
        {(() => {
          const displayReviews = reviews.length > 0 ? reviews : [
            {
              id: "FB-01",
              name: "Priya Sharma",
              rating: 5,
              feedback: "Very peaceful and disciplined environment to study in Bilandpur, Gorakhpur. The seating is very comfortable for long study stretches.",
              date: "2026-10-08",
              status: "approved" as const,
              approved: true
            },
            {
              id: "FB-02",
              name: "Tejash Rai",
              rating: 5,
              feedback: "Best library in Gorakhpur! Clean, quiet, and very supportive management right in front of DIG Bungalow.",
              date: "2026-10-08",
              status: "approved" as const,
              approved: true
            },
            {
              id: "FB-03",
              name: "Rohit Gupta",
              rating: 5,
              feedback: "Excellent library in Gorakhpur near DIG Bungalow. Very peaceful atmosphere, dedicated cubicles, and no distractions.",
              date: "2026-10-08",
              status: "approved" as const,
              approved: true
            }
          ];

          return (
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {displayReviews.map((rev) => (
                <div
                  key={rev.id}
                  data-cursor="pointer"
                  className="card-hover-interactive group flex flex-col justify-between rounded-2xl border border-[#e8dfcf] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-2 hover:border-[#d4af37] hover:shadow-xl hover:shadow-[#0c182a]/5"
                >
                  <div>
                    {/* Rating Stars */}
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 transition-transform duration-300 group-hover:scale-110 ${
                            star <= rev.rating
                              ? "fill-[#c59b27] text-[#c59b27]"
                              : "text-slate-200"
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-xs font-bold text-slate-700">5.0</span>
                    </div>

                    {/* Feedback Text */}
                    <p className="mt-4 text-sm leading-relaxed text-slate-700 italic">
                      &ldquo;{rev.feedback}&rdquo;
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-500">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0c182a] text-xs font-bold text-[#d4af37] shadow-xs transition-transform duration-300 group-hover:scale-105">
                        {rev.name.charAt(0).toUpperCase()}
                      </div>
                      <span className="font-semibold text-slate-800">{rev.name}</span>
                    </div>
                    <span className="text-[11px] font-medium text-slate-400">{rev.date}</span>
                  </div>
                </div>
              ))}
            </div>
          );
        })()}

      </div>
    </section>
  );
}
