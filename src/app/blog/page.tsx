import { Metadata } from "next";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { BLOG_POSTS } from "@/config/blog";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/lib/structuredData";
import { BookOpen, Sparkles } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Study Guides & Blog | Zenith Library Gorakhpur",
  description:
    "Expert articles and guides for students preparing in Gorakhpur. Learn how to choose the best study library, create an 8-hour study routine, and cultivate focus.",
  path: "/blog",
  keywords: [
    "zenith library blog",
    "best library in gorakhpur guide",
    "study routine gorakhpur",
    "reading room advice bilandpur",
  ],
});

export default function BlogIndexPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blog & Study Guides", url: "/blog" },
  ];

  return (
    <div className="bg-[#fcfbf9] py-12 sm:py-20">
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />

      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16 wide-layout-fill">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-[#0c182a]">Home</Link>
          <span>/</span>
          <span className="font-semibold text-slate-800">Blog &amp; Guides</span>
        </nav>

        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#f6eee0] px-3.5 py-1 text-xs font-semibold text-[#8c6d23]">
            <BookOpen className="h-3.5 w-3.5" />
            <span>ACADEMIC EDITORIAL &amp; GUIDES</span>
          </div>
          <h1 className="mt-3 font-serif text-3xl font-bold tracking-tight text-[#0c182a] sm:text-5xl">
            Zenith Library Study Guides
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Practical strategies, locality insights, and advice from our academic team to help Gorakhpur’s students excel.
          </p>
        </div>

        {/* Blog Post Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}

          {/* Fifth Card: Student Community Experience Linking to Real User Submissions */}
          <article className="group flex flex-col justify-between rounded-2xl border-2 border-dashed border-[#d8cfbe] bg-[#faf6ee] p-7 transition-all hover:border-[#8c6d23]">
            <div>
              <div className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-[11px] font-bold text-[#8c6d23] border border-[#f0dfb6]">
                <Sparkles className="h-3 w-3" />
                <span>COMMUNITY VOICES</span>
              </div>
              <h2 className="mt-4 font-serif text-xl font-bold text-[#0c182a]">
                My Study Experience at Zenith Library
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Rather than publishing fictional student testimonials, all personal study experiences at Zenith Library are submitted directly by authentic students and reviewed by our administration.
              </p>
            </div>

            <div className="mt-6 border-t border-[#ede4d4] pt-4">
              <Link
                href="/stories"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0c182a] px-4 py-2.5 text-xs font-bold text-[#d4af37] shadow-xs hover:bg-[#162a47]"
              >
                <span>Read &amp; Share Student Stories</span>
              </Link>
            </div>
          </article>
        </div>

      </div>
    </div>
  );
}
