"use client";

import { MessageCircle, Phone, Navigation } from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";

/**
 * Mobile Bottom Sticky Action Bar
 * High-conversion, touch-optimized bar visible exclusively on mobile (< sm screens).
 * Direct 1-tap triggers for WhatsApp, Calling, and Directions.
 */
export default function MobileActionBar() {
  return (
    <aside
      aria-label="Quick mobile contact actions"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#e2dcd2] bg-white/95 backdrop-blur-md shadow-2xl sm:hidden"
    >
      <div className="grid grid-cols-3 divide-x divide-gray-200">
        {/* WhatsApp Button */}
        <a
          href={BUSINESS_CONFIG.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2.5 px-1 text-center transition-colors hover:bg-emerald-50 active:bg-emerald-100"
          aria-label="WhatsApp Zenith Library"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
            <MessageCircle className="h-4 w-4 fill-emerald-600 text-emerald-600" />
          </div>
          <span className="mt-1 text-[11px] font-semibold tracking-tight text-gray-800">
            WhatsApp
          </span>
        </a>

        {/* Call Button */}
        <a
          href={BUSINESS_CONFIG.phone.url}
          className="flex flex-col items-center justify-center py-2.5 px-1 text-center transition-colors hover:bg-blue-50 active:bg-blue-100"
          aria-label="Call Zenith Library"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-700">
            <Phone className="h-4 w-4 text-blue-700" />
          </div>
          <span className="mt-1 text-[11px] font-semibold tracking-tight text-gray-800">
            Call
          </span>
        </a>

        {/* Directions Button */}
        <a
          href={BUSINESS_CONFIG.links.googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2.5 px-1 text-center transition-colors hover:bg-amber-50 active:bg-amber-100"
          aria-label="Get Directions to Zenith Library on Google Maps"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-amber-800">
            <Navigation className="h-4 w-4 text-amber-800" />
          </div>
          <span className="mt-1 text-[11px] font-semibold tracking-tight text-gray-800">
            Directions
          </span>
        </a>
      </div>
    </aside>
  );
}
