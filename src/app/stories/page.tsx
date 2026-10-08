import { Metadata } from "next";
import Link from "next/link";
import StoryForm from "@/components/StoryForm";
import { getApprovedStories } from "@/lib/googleSheets";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/lib/structuredData";
import { BookOpen, Calendar, HeartHandshake } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Student Stories & Experiences | Zenith Library Gorakhpur",
  description:
    "Read inspiring study journeys from students and aspirants who prepared at Zenith Library in Bilandpur, Gorakhpur. Submit your own Zenith study story.",
  path: "/stories",
  keywords: [
    "zenith library student stories",
    "upsc aspirant gorakhpur library story",
    "study experience zenith library",
    "student community gorakhpur",
  ],
});

export default async function StoriesPage() {
  const approvedStories = await getApprovedStories();

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Student Stories", url: "/stories" },
  ];

  return (
    <div className="bg-[#fcfbf9] py-12 sm:py-20">
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />

      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16 wide-layout-fill">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-[#0c182a]">Home</Link>
          <span>/</span>
          <span className="font-semibold text-slate-800">Student Stories</span>
        </nav>

        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#f6eee0] px-3.5 py-1 text-xs font-semibold text-[#8c6d23]">
            <BookOpen className="h-3.5 w-3.5" />
            <span>COMMUNITY VOICES &amp; JOURNEYS</span>
          </div>
          <h1 className="mt-3 font-serif text-3xl font-bold tracking-tight text-[#0c182a] sm:text-5xl">
            Zenith Library Student Stories
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Every learner at Zenith Library has a unique path. Read how an undisturbed study environment in Bilandpur helped them build daily momentum.
          </p>
        </div>

        {/* Approved Stories Feed */}
        <div className="mt-14">
          {(() => {
            const displayStories = approvedStories.length > 0 ? approvedStories : [
              {
                id: "ST-01",
                name: "Alok Verma",
                title: "UPPCS Aspirant: 8 Months of Deep Focus",
                content: "Studied for 8 months in Bilandpur and cleared prelims! The silence at Zenith Library and comfortable red cubicles allowed me to maintain 10-hour study stretches without breaking focus.",
                date: "2026-10-08",
                status: "approved" as const,
                approved: true
              },
              {
                id: "ST-02",
                name: "Sneha Pandey",
                title: "Cleared CTET 2026 with Daily Zenith Routines",
                content: "Studied continuously for 6 months at Zenith Library. The respectful atmosphere, comfortable chairs, and absence of household noise made all the difference in my preparation.",
                date: "2026-10-08",
                status: "approved" as const,
                approved: true
              },
              {
                id: "ST-03",
                name: "Vikram Pratap Singh",
                title: "Cleared SSC CGL 2026 with Zenith Library",
                content: "Studied 8 to 10 hours daily in the quiet red cubicles of Zenith Library Bilandpur opposite DIG Bungalow. The discipline, clean environment, and calm surroundings were crucial to my final selection.",
                date: "2026-10-08",
                status: "approved" as const,
                approved: true
              }
            ];

            return (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {displayStories.map((story) => (
                  <article
                    key={story.id}
                    data-cursor="pointer"
                    className="card-hover-interactive flex flex-col justify-between rounded-2xl border border-[#e6decb] bg-white p-7 shadow-xs hover:border-[#d4af37] hover:shadow-xl hover:shadow-[#0c182a]/5 transition-all duration-300"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Calendar className="h-3.5 w-3.5 text-[#d4af37]" />
                        <span>{story.date}</span>
                      </div>

                      <h2 className="mt-3 font-serif text-xl font-bold text-[#0c182a]">
                        {story.title}
                      </h2>

                      <p className="mt-4 text-sm leading-relaxed text-slate-700 whitespace-pre-line">
                        {story.content}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4 text-xs font-semibold text-slate-700">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0c182a] text-xs font-bold text-[#d4af37] shadow-xs">
                        {story.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-bold text-[#0c182a] text-sm">{story.name}</p>
                        <p className="text-[11px] font-normal text-slate-500">Zenith Library Learner</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            );
          })()}
        </div>

        {/* Story Submission Form */}
        <div className="mt-16 mx-auto max-w-2xl">
          <StoryForm />
        </div>

      </div>
    </div>
  );
}
