import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Sparkles,
  MapPin,
  Compass,
  ArrowRight,
  HelpCircle,
  ExternalLink,
  BookOpen
} from "lucide-react";
import Hero from "@/components/Hero";
import Facilities from "@/components/Facilities";
import Legacy from "@/components/Legacy";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import BlogCard from "@/components/BlogCard";
import { JsonLd } from "@/components/JsonLd";
import { getApprovedFeedback } from "@/lib/googleSheets";
import { BLOG_POSTS } from "@/config/blog";
import { BUSINESS_CONFIG } from "@/config/business";
import { getFAQSchema } from "@/lib/structuredData";

const HOMEPAGE_FAQS = [
  {
    question: "Where is Zenith Library located in Gorakhpur?",
    answer:
      "Zenith Library is located at Bilandpur, in front of the DIG Bungalow, Bansgaon Colony, Kalepur, Gorakhpur - 273001, Uttar Pradesh. It is a quiet, highly accessible, and secure neighborhood.",
  },
  {
    question: "How can I enquire about library shifts and desk availability?",
    answer:
      "You can directly enquire about current shift timings and available seats by messaging us on WhatsApp (+91 95010 39134) or calling us directly (+91 81157 51248).",
  },
  {
    question: "Is there vehicle parking available at Zenith Library?",
    answer:
      "Yes, Zenith Library provides dedicated parking space for two-wheelers and student vehicles within the premises.",
  },
  {
    question: "Can I visit the library for a walkthrough before joining?",
    answer:
      "Yes, students and parents are always welcome to visit during working hours to experience the quiet study ambience, review the seating arrangements, and speak with our staff.",
  },
  {
    question: "Who manages and oversees Zenith Library?",
    answer:
      "Zenith Library was founded by the late Shri Jyoti Prakash Rai and is currently guided and managed with care by Shri Prem Prakash Rai.",
  },
];

export default async function HomePage() {
  const approvedFeedback = await getApprovedFeedback();
  const recentPosts = BLOG_POSTS.slice(0, 3);

  return (
    <div className="flex flex-col">
      <JsonLd data={getFAQSchema(HOMEPAGE_FAQS)} />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Zenith Section */}
      <section id="about" className="bg-white py-16 sm:py-24 border-b border-[#eee8dd]">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16 wide-layout-fill">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
            
            <div className="space-y-6 lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#f6eee0] px-3.5 py-1 text-xs font-semibold text-[#8c6d23]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>ABOUT ZENITH LIBRARY</span>
              </div>

              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#0c182a] sm:text-4xl">
                A Study Sanctuary Dedicated to Your Aspirations
              </h2>

              <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                Zenith Library was born out of a heartfelt commitment: to give students in Gorakhpur a truly undisturbed, dignified, and comfortable academic haven where they can concentrate without everyday domestic interruptions.
              </p>

              <div className="space-y-3.5 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#fdf6e6] text-[#8c6d23]">
                    ✓
                  </div>
                  <p>
                    <strong className="text-[#0c182a]">Academic Serenity:</strong> Strict decorum and zero noise tolerance create an environment where six to ten hours of study feel natural and focused.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#fdf6e6] text-[#8c6d23]">
                    ✓
                  </div>
                  <p>
                    <strong className="text-[#0c182a]">Family Roots &amp; Trust:</strong> Operating with personal care and accountability rather than corporate commercialism.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#fdf6e6] text-[#8c6d23]">
                    ✓
                  </div>
                  <p>
                    <strong className="text-[#0c182a]">Prime Bilandpur Location:</strong> Directly opposite DIG Bungalow in Bansgaon Colony, Kalepur — a peaceful, secure area for daily study.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0c182a] px-5 py-2.5 text-xs font-bold text-[#d4af37] shadow-sm hover:bg-[#162a47] transition-colors"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/legacy"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
                >
                  <span>Read Our Family Legacy</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-[#e5decb] bg-white p-3 shadow-xl">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src={BUSINESS_CONFIG.assets.studyArea}
                    alt="Spacious study desk arrangement at Zenith Library Gorakhpur"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="font-serif text-base font-bold text-[#0c182a]">
                    Peaceful &amp; Disciplined Reading Space
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Bilandpur, Gorakhpur (In Front Of DIG Bungalow)
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Why Zenith Section */}
      <section className="bg-[#faf8f4] py-16 sm:py-24 border-b border-[#eee8dd]">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16 wide-layout-fill">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8c6d23]">
              THE ZENITH ADVANTAGE
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#0c182a] sm:text-4xl">
              Why Students Choose Zenith Library
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
              Engineered for sustained learning routines, academic comfort, and zero distractions.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div
              data-cursor="pointer"
              className="card-hover-interactive group rounded-2xl border border-[#e6decc] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-2 hover:border-[#d4af37] hover:shadow-xl hover:shadow-[#0c182a]/5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fcf6e8] text-[#8c6d23] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold text-[#0c182a] group-hover:text-[#8c6d23] transition-colors">
                Acoustic Discipline
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Silence is actively maintained so you never break your train of thought while reading standard textbooks or notes.
              </p>
            </div>

            <div
              data-cursor="pointer"
              className="card-hover-interactive group rounded-2xl border border-[#e6decc] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-2 hover:border-[#d4af37] hover:shadow-xl hover:shadow-[#0c182a]/5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fcf6e8] text-[#8c6d23] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <BookOpen className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold text-[#0c182a] group-hover:text-[#8c6d23] transition-colors">
                Ergonomic Desks
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Comfortable chairs and spacious desks designed to prevent physical fatigue during prolonged study sessions.
              </p>
            </div>

            <div
              data-cursor="pointer"
              className="card-hover-interactive group rounded-2xl border border-[#e6decc] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-2 hover:border-[#d4af37] hover:shadow-xl hover:shadow-[#0c182a]/5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fcf6e8] text-[#8c6d23] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold text-[#0c182a] group-hover:text-[#8c6d23] transition-colors">
                Secure Neighborhood
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Located in calm Bansgaon Colony facing the DIG Bungalow, ensuring safety, quiet streets, and convenience.
              </p>
            </div>

            <div
              data-cursor="pointer"
              className="card-hover-interactive group rounded-2xl border border-[#e6decc] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-2 hover:border-[#d4af37] hover:shadow-xl hover:shadow-[#0c182a]/5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fcf6e8] text-[#8c6d23] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <Compass className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold text-[#0c182a] group-hover:text-[#8c6d23] transition-colors">
                Personal Care &amp; Support
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Staff on ground to assist you with desk allocation, maintaining discipline, and prompt support whenever needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Confirmed Facilities Section */}
      <Facilities />

      {/* 5. Our Environment Highlights */}
      <section className="bg-white py-16 sm:py-24 border-b border-[#eee8dd]">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16 wide-layout-fill">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[#e5decb] bg-slate-900 shadow-xl">
                <Image
                  src={BUSINESS_CONFIG.assets.seating}
                  alt="Silent study seating at Zenith Library Gorakhpur"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-6 lg:col-span-7 order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8c6d23]">
                OUR ENVIRONMENT
              </span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#0c182a] sm:text-4xl">
                Designed to Cultivate Unshakable Focus
              </h2>
              <p className="text-base leading-relaxed text-slate-600">
                A serious student’s mind requires stillness. At Zenith Library, our physical layout eliminates unnecessary motion, chatter, and interruptions. 
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="rounded-xl border border-slate-200 bg-[#faf8f4] p-4">
                  <h4 className="font-serif font-bold text-[#0c182a] text-sm">Quiet Reading Zones</h4>
                  <p className="mt-1 text-xs text-slate-600">Individual reading partitions that foster personal study bubbles.</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-[#faf8f4] p-4">
                  <h4 className="font-serif font-bold text-[#0c182a] text-sm">Dedicated Break Spot</h4>
                  <p className="mt-1 text-xs text-slate-600">Refreshment space to recharge without taking disturbances inside the study hall.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Family Legacy Section */}
      <Legacy />

      {/* 7. Gallery Section */}
      <Gallery />

      {/* 8. Student Experiences / What Students Say */}
      <Reviews reviews={approvedFeedback} />

      {/* 9. Feedback & Story Submission CTA Card */}
      <section className="bg-white py-14 border-b border-[#eee8dd]">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16 wide-layout-fill">
          <div className="rounded-3xl border border-[#e4dcce] bg-gradient-to-r from-[#fcfbf9] via-[#f8f5ee] to-[#f4eee2] p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
              <div className="space-y-3 md:col-span-8">
                <span className="text-xs font-bold uppercase tracking-widest text-[#8c6d23]">
                  COMMUNITY CONTRIBUTION
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0c182a]">
                  Studied at Zenith Library? Share Your Journey
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 max-w-2xl">
                  Help prospective learners in Gorakhpur understand what makes Zenith Library special. Submit your review or full preparation story for our community wall.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:col-span-4 md:justify-end">
                <Link
                  href="/reviews"
                  data-cursor="pointer"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0c182a] px-5 py-3 text-xs font-bold text-[#d4af37] shadow-sm transition-all duration-300 hover:bg-[#162a47] hover:scale-[1.02]"
                >
                  <span>Submit Feedback</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
                <Link
                  href="/stories"
                  data-cursor="pointer"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-xs font-semibold text-slate-800 transition-all duration-300 hover:bg-slate-50 hover:border-slate-400 hover:scale-[1.02]"
                >
                  <span>Share Full Story</span>
                  <ArrowRight className="h-4 w-4 text-slate-500 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Editorial Blog Section */}
      <section id="blog" className="bg-[#faf8f4] py-16 sm:py-24 border-b border-[#eee8dd]">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16 wide-layout-fill">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#8c6d23]">
                ACADEMIC GUIDES &amp; ARTICLES
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#0c182a] sm:text-4xl">
                Insights for Gorakhpur’s Students
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 max-w-2xl">
                Practical advice on building daily focus, choosing the best library in Gorakhpur, and establishing high-output study habits.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0c182a] hover:text-[#8c6d23] transition-colors"
            >
              <span>View All Articles</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* 11. Location & Online Discovery */}
      <Location />

      {/* 12. Verified Directory Listing Overview (Google & Justdial) */}
      <section className="bg-white py-14 border-b border-[#eee8dd]">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16 wide-layout-fill">
          <div className="rounded-2xl border border-[#e6ded0] bg-[#fbf9f4] p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8c6d23]">
                VERIFIED BUSINESS PRESENCE
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0c182a]">
                Verified on Justdial &amp; Google Maps
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Check our official directory listings, review directions, or explore how to navigate to our Bilandpur premises from anywhere in Gorakhpur.
              </p>
            </div>
            <div className="mt-4 sm:mt-0 flex flex-wrap gap-3 shrink-0 justify-center">
              <a
                href={BUSINESS_CONFIG.links.justdialUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="pointer"
                className="group inline-flex items-center gap-2 rounded-xl border border-orange-300 bg-white px-4 py-2.5 text-xs font-bold text-orange-950 shadow-2xs transition-all duration-300 hover:bg-orange-50 hover:scale-[1.03] hover:shadow-md"
              >
                <span>Official Justdial Listing</span>
                <ExternalLink className="h-3.5 w-3.5 text-orange-600 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={BUSINESS_CONFIG.links.googleBusinessProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="pointer"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#0c182a] px-4 py-2.5 text-xs font-bold text-[#d4af37] shadow-2xs transition-all duration-300 hover:bg-[#162a47] hover:scale-[1.03] hover:shadow-md"
              >
                <span>View on Google</span>
                <ExternalLink className="h-3.5 w-3.5 text-[#d4af37] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 13. FAQ Section with Accordion Schema */}
      <section className="bg-[#faf8f4] py-16 sm:py-24 border-b border-[#eee8dd]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#f6eee0] px-3.5 py-1 text-xs font-semibold text-[#8c6d23]">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="mt-3 font-serif text-3xl font-bold text-[#0c182a] sm:text-4xl">
              Common Questions About Zenith Library
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Clear information for prospective students, parents, and scholars in Gorakhpur.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {HOMEPAGE_FAQS.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-2xl border border-[#e5dfd4] bg-white p-5 transition-all open:border-[#d4af37]/60 open:shadow-xs"
              >
                <summary className="flex cursor-pointer items-center justify-between font-serif text-base font-bold text-[#0c182a] list-none">
                  <span>{faq.question}</span>
                  <span className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 group-open:bg-[#0c182a] group-open:text-[#d4af37]">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-3">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Contact Section (Enquire About Zenith Library) */}
      <Contact />

    </div>
  );
}
