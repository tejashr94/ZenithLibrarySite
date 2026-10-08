import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, User, ArrowLeft, MessageCircle, Phone } from "lucide-react";
import { BLOG_POSTS, getBlogPostBySlug } from "@/config/blog";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { getBlogPostSchema, getBreadcrumbSchema } from "@/lib/structuredData";
import { BUSINESS_CONFIG } from "@/config/business";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Article Not Found | Zenith Library" };
  }

  return buildMetadata({
    title: `${post.title} | Zenith Library Gorakhpur`,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    image: post.image,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ];

  return (
    <article className="bg-[#fcfbf9] py-12 sm:py-20">
      <JsonLd data={getBlogPostSchema(post)} />
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb nav */}
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-[#0c182a]">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#0c182a]">Blog</Link>
          <span>/</span>
          <span className="font-semibold text-slate-800 line-clamp-1">{post.title}</span>
        </nav>

        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#8c6d23] hover:underline mb-4"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to All Articles</span>
        </Link>

        {/* Category Badge */}
        <div className="mt-2">
          <span className="rounded-full bg-[#f6eee0] px-3.5 py-1 text-xs font-semibold text-[#8c6d23]">
            {post.category}
          </span>
        </div>

        {/* H1 Title */}
        <h1 className="mt-4 font-serif text-3xl font-bold tracking-tight text-[#0c182a] sm:text-5xl leading-[1.2]">
          {post.title}
        </h1>

        {/* Article Meta */}
        <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-6 border-b border-slate-200 pb-6 text-xs text-slate-500">
          <div className="flex items-center gap-1.5 font-medium text-slate-700">
            <User className="h-4 w-4 text-[#8c6d23]" />
            <span>{post.author.name}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-slate-400" />
            <span>Published: {post.datePublished}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-slate-400" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-3xl border border-[#e8dfcf] bg-slate-900 shadow-md">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Body Content */}
        <div className="mt-10 space-y-6 text-slate-800 leading-relaxed text-base sm:text-lg">
          {post.content.map((paragraph, index) => {
            if (paragraph.startsWith("### ")) {
              return (
                <h2
                  key={index}
                  className="font-serif text-2xl font-bold text-[#0c182a] pt-4 border-t border-slate-100"
                >
                  {paragraph.replace("### ", "")}
                </h2>
              );
            }
            if (paragraph.startsWith("- ")) {
              return (
                <div key={index} className="flex items-start gap-3 pl-2 text-base text-slate-700">
                  <span className="text-[#8c6d23] font-bold mt-0.5">•</span>
                  <p>{paragraph.replace("- ", "")}</p>
                </div>
              );
            }
            return (
              <p key={index} className="text-slate-700 leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Internal Links & Contextual Hubs */}
        <div className="mt-14 rounded-2xl border border-[#e5decb] bg-white p-6 sm:p-8 shadow-xs">
          <h3 className="font-serif text-lg font-bold text-[#0c182a]">
            Explore Zenith Library Locations &amp; Facilities
          </h3>
          <p className="mt-1 text-xs text-slate-600">
            Learn more about our quiet reading rooms and visit us in Bilandpur:
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <Link
              href="/library-in-gorakhpur"
              className="rounded-lg bg-slate-100 px-3 py-1.5 font-medium text-slate-800 hover:bg-[#0c182a] hover:text-[#d4af37] transition-colors"
            >
              Library in Gorakhpur
            </Link>
            <Link
              href="/library-in-bilandpur"
              className="rounded-lg bg-slate-100 px-3 py-1.5 font-medium text-slate-800 hover:bg-[#0c182a] hover:text-[#d4af37] transition-colors"
            >
              Library in Bilandpur
            </Link>
            <Link
              href="/facilities"
              className="rounded-lg bg-slate-100 px-3 py-1.5 font-medium text-slate-800 hover:bg-[#0c182a] hover:text-[#d4af37] transition-colors"
            >
              Confirmed Facilities
            </Link>
            <Link
              href="/location"
              className="rounded-lg bg-slate-100 px-3 py-1.5 font-medium text-slate-800 hover:bg-[#0c182a] hover:text-[#d4af37] transition-colors"
            >
              Find Us (In Front Of DIG Bungalow)
            </Link>
          </div>
        </div>

        {/* Direct Contact Bar */}
        <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-serif text-base font-bold text-emerald-950">
              Ready to focus at Zenith Library?
            </h4>
            <p className="text-xs text-emerald-800 mt-0.5">
              Enquire directly on WhatsApp or call our management for shift details.
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            <a
              href={BUSINESS_CONFIG.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-700"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp Us</span>
            </a>
            <a
              href={BUSINESS_CONFIG.phone.url}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#0c182a] px-4 py-2 text-xs font-semibold text-[#d4af37] hover:bg-[#162a47]"
            >
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
          </div>
        </div>

      </div>
    </article>
  );
}
