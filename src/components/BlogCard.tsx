import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BlogPost } from "@/config/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-[#e8dfcf] bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af37]/60 hover:shadow-lg">
      {/* Blog Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <Image
          src={post.image}
          alt={post.imageAlt || post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 rounded-full bg-[#0c182a]/90 px-3 py-1 text-[11px] font-semibold text-[#d4af37] backdrop-blur-xs">
          {post.category}
        </div>
      </div>

      {/* Blog Content */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          {/* Metadata: Date and Read Time */}
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 text-slate-400" />
              {post.datePublished}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-slate-400" />
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h3 className="mt-3 font-serif text-xl font-bold leading-snug text-[#0c182a] group-hover:text-[#8c6d23] transition-colors">
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h3>

          {/* Short Excerpt */}
          <p className="mt-2.5 text-xs leading-relaxed text-slate-600 line-clamp-3">
            {post.excerpt}
          </p>
        </div>

        {/* Read More Link */}
        <div className="mt-6 border-t border-slate-100 pt-4">
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0c182a] group-hover:text-[#8c6d23] transition-colors"
          >
            <span>Read More</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
