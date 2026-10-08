import Link from "next/link";
import { Home, Compass } from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-[#fcfbf9] px-4 py-16 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0c182a] text-[#d4af37]">
        <Compass className="h-8 w-8 animate-spin-slow" />
      </div>

      <span className="mt-6 text-xs font-bold uppercase tracking-widest text-[#8c6d23]">
        404 — PAGE NOT FOUND
      </span>

      <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#0c182a] sm:text-5xl">
        Page Not Found
      </h1>

      <p className="mx-auto mt-4 max-w-md text-sm text-slate-600 leading-relaxed">
        The page you are looking for doesn&apos;t exist or has moved. Explore our library details or return to the homepage.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-[#0c182a] px-5 py-2.5 text-xs font-bold text-[#d4af37] shadow-sm hover:bg-[#162a47]"
        >
          <Home className="h-4 w-4" />
          <span>Return Home</span>
        </Link>
        <Link
          href="/facilities"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold text-slate-800 hover:bg-slate-50"
        >
          <span>View Facilities</span>
        </Link>
        <Link
          href="/location"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold text-slate-800 hover:bg-slate-50"
        >
          <span>Location &amp; Directions</span>
        </Link>
      </div>

      <p className="mt-8 text-xs text-slate-400">
        {BUSINESS_CONFIG.fullName} • Bilandpur, Gorakhpur
      </p>
    </div>
  );
}
