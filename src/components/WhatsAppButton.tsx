"use client";

import { MessageCircle } from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";

/**
 * Floating WhatsApp CTA for Desktop & Tablet
 * Elegant gold-accented button fixed at the bottom right.
 * Hidden on mobile screens where the Fixed Mobile Action Bar is active.
 */
export default function WhatsAppButton() {
  return (
    <aside
      aria-label="Quick contact"
      className="fixed bottom-6 right-6 z-40 hidden sm:block"
    >
      <a
        href={BUSINESS_CONFIG.whatsapp.url}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="pointer"
        aria-label="Chat with Zenith Library on WhatsApp"
        className="group flex items-center gap-2.5 rounded-full bg-[#128C7E] px-4 py-3 text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#075E54] hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#128C7E] focus:ring-offset-2"
      >
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400"></span>
        </span>
        <MessageCircle className="h-5 w-5 fill-current" />
        <span className="text-sm font-semibold tracking-wide">WhatsApp Us</span>
      </a>
    </aside>
  );
}
