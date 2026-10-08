import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, MapPin, ExternalLink, ShieldCheck } from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";

export default function Footer() {
  return (
    <footer className="border-t border-[#e5dfd4] bg-[#0c182a] text-slate-300">
      <div className="mx-auto max-w-[1840px] px-4 py-14 sm:px-6 lg:px-12 xl:px-16 wide-layout-fill">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Identity & Legacy */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-[#d4af37]/70 bg-white p-1 shadow-md">
                <Image
                  src={BUSINESS_CONFIG.assets.logo}
                  alt="Zenith Library Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-white">
                  ZENITH LIBRARY
                </span>
                <p className="text-xs font-medium text-[#d4af37]">
                  Bilandpur, Gorakhpur
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              {BUSINESS_CONFIG.tagline}. A serene, disciplined, and comfortable academic study space created for Gorakhpur’s students and competitive aspirants.
            </p>
            <div className="rounded-lg border border-slate-700/60 bg-slate-800/40 p-3 text-xs text-slate-400">
              <p className="font-semibold text-slate-300">Legacy of Dedication</p>
              <p className="mt-1">
                Founded by {BUSINESS_CONFIG.legacy.founderName}. Continued with care by {BUSINESS_CONFIG.legacy.currentLeaderName}.
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-serif text-base font-semibold text-white tracking-wide">
              Explore Zenith
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-[#d4af37] transition-colors">
                  About Our Library
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-[#d4af37] transition-colors">
                  Confirmed Facilities
                </Link>
              </li>
              <li>
                <Link href="/legacy" className="hover:text-[#d4af37] transition-colors">
                  Our Family Legacy
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#d4af37] transition-colors">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-[#d4af37] transition-colors">
                  Student Feedback &amp; Reviews
                </Link>
              </li>
              <li>
                <Link href="/stories" className="hover:text-[#d4af37] transition-colors">
                  Share Your Story
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#d4af37] transition-colors">
                  Study Guides &amp; Blog
                </Link>
              </li>
              <li>
                <Link href="/location" className="hover:text-[#d4af37] transition-colors">
                  Location &amp; Landmarks
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#d4af37] transition-colors">
                  Contact &amp; Enquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Local Area Guides / SEO Hubs */}
          <div>
            <h3 className="font-serif text-base font-semibold text-white tracking-wide">
              Gorakhpur Study Spaces
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/library-in-gorakhpur"
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Library in Gorakhpur
                </Link>
              </li>
              <li>
                <Link
                  href="/best-library-in-gorakhpur"
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Best Library in Gorakhpur
                </Link>
              </li>
              <li>
                <Link
                  href="/study-library-gorakhpur"
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Study Library Gorakhpur
                </Link>
              </li>
              <li>
                <Link
                  href="/library-in-bilandpur"
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Library in Bilandpur
                </Link>
              </li>
              <li>
                <Link
                  href="/library-near-dig-bungalow-gorakhpur"
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Library near DIG Bungalow
                </Link>
              </li>
            </ul>

            <div className="mt-6 border-t border-slate-700/60 pt-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Verified Listings
              </h4>
              <div className="mt-2.5 flex flex-col gap-2 text-xs">
                <a
                  href={BUSINESS_CONFIG.links.justdialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#d4af37] transition-colors"
                >
                  <ExternalLink className="h-3.5 w-3.5 text-[#d4af37]" />
                  <span>View on Justdial</span>
                </a>
                <a
                  href={BUSINESS_CONFIG.links.googleBusinessProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#d4af37] transition-colors"
                >
                  <ExternalLink className="h-3.5 w-3.5 text-[#d4af37]" />
                  <span>View on Google</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Official NAP (Consistent) */}
          <div className="space-y-4">
            <h3 className="font-serif text-base font-semibold text-white tracking-wide">
              Official Address (NAP)
            </h3>
            
            <address className="not-italic text-sm text-slate-400 leading-relaxed space-y-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-[#d4af37] mt-1" />
                <div>
                  <p className="font-medium text-slate-200">{BUSINESS_CONFIG.fullName}</p>
                  <p>{BUSINESS_CONFIG.address.line1}</p>
                  <p>{BUSINESS_CONFIG.address.line2}</p>
                  <p>
                    {BUSINESS_CONFIG.address.locality}, {BUSINESS_CONFIG.address.city} - {BUSINESS_CONFIG.address.postalCode}
                  </p>
                  <p>{BUSINESS_CONFIG.address.state}, {BUSINESS_CONFIG.address.country}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-2">
                <Phone className="h-4 w-4 shrink-0 text-[#d4af37]" />
                <a
                  href={BUSINESS_CONFIG.phone.url}
                  className="font-medium text-slate-200 hover:text-[#d4af37] transition-colors"
                >
                  {BUSINESS_CONFIG.phone.display}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="h-4 w-4 shrink-0 text-emerald-400" />
                <a
                  href={BUSINESS_CONFIG.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  WhatsApp: {BUSINESS_CONFIG.whatsapp.display}
                </a>
              </div>
            </address>

            <div className="pt-2">
              <a
                href={BUSINESS_CONFIG.links.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-800 px-3.5 py-2 text-xs font-semibold text-white hover:bg-slate-700 transition-colors border border-slate-700"
              >
                <span>Get Google Maps Directions</span>
                <ExternalLink className="h-3.5 w-3.5 text-[#d4af37]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-xs text-slate-500 sm:flex sm:justify-between sm:text-left">
          <p>
            &copy; 2026 {BUSINESS_CONFIG.businessName}. All rights reserved.
          </p>
          <div className="mt-2 flex items-center justify-center gap-2 sm:mt-0">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
            <span>Family-run study space in Bilandpur, Gorakhpur.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
