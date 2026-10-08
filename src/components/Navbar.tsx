"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageCircle, MapPin } from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Facilities", href: "/facilities" },
  { name: "Our Legacy", href: "/legacy" },
  { name: "Gallery", href: "/gallery" },
  { name: "Reviews", href: "/reviews" },
  { name: "Stories", href: "/stories" },
  { name: "Blog", href: "/blog" },
  { name: "Location", href: "/location" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer when clicking navigation links

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 shadow-md backdrop-blur-md border-b border-[#e9e3d8]"
          : "bg-[#fcfbf9]/90 border-b border-[#ece7dc]"
      }`}
    >
      {/* Top micro-bar with Location and Call */}
      <div className="hidden border-b border-[#f0ece3] bg-[#0c182a] py-1.5 px-4 text-xs text-slate-300 sm:block">
        <div className="mx-auto flex max-w-[1840px] items-center justify-between px-2 sm:px-6 lg:px-12 wide-layout-fill">
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-[#d4af37]" />
            <span>
              {BUSINESS_CONFIG.address.locality}, {BUSINESS_CONFIG.address.city} (In Front Of DIG Bungalow)
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={BUSINESS_CONFIG.phone.url}
              data-cursor="pointer"
              className="flex items-center gap-1.5 text-slate-200 transition-colors hover:text-[#d4af37]"
            >
              <Phone className="h-3 w-3 text-[#d4af37]" />
              <span>Call: {BUSINESS_CONFIG.phone.display}</span>
            </a>
            <a
              href={BUSINESS_CONFIG.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="pointer"
              className="flex items-center gap-1.5 text-emerald-400 transition-colors hover:text-emerald-300"
            >
              <MessageCircle className="h-3 w-3" />
              <span>WhatsApp: {BUSINESS_CONFIG.whatsapp.display}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav aria-label="Main Navigation" className="mx-auto flex max-w-[1840px] items-center justify-between px-4 py-2.5 sm:px-6 lg:px-10 xl:px-14 wide-layout-fill">
        {/* Brand / Logo */}
        <Link
          href="/"
          data-cursor="pointer"
          className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#c59b27] focus:ring-offset-2 rounded-xl"
          aria-label="Zenith Library - Bilandpur, Gorakhpur"
        >
          <div className="relative h-12 w-12 sm:h-13 sm:w-13 shrink-0 overflow-hidden rounded-full border-2 border-[#d4af37]/70 bg-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:border-[#d4af37] group-hover:shadow-amber-200/50">
            <Image
              src={BUSINESS_CONFIG.assets.logo}
              alt="Zenith Library Official Emblem Logo"
              fill
              className="object-contain p-0.5"
              priority
            />
          </div>
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#0c182a] group-hover:text-[#c59b27] transition-colors">
                ZENITH
              </span>
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-[#c59b27]">
                LIBRARY
              </span>
            </div>
            <p className="text-[11px] font-medium text-slate-500">
              Bilandpur, Gorakhpur
            </p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex lg:items-center lg:gap-1 xl:gap-2">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                data-cursor="pointer"
                className={`rounded-lg px-2.5 py-1.5 text-[13px] font-medium transition-all duration-200 hover:-translate-y-0.5 ${
                  isActive
                    ? "bg-[#0c182a] text-[#d4af37] font-semibold shadow-xs"
                    : "text-slate-700 hover:bg-[#f3ede1] hover:text-[#0c182a]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop Quick Actions */}
        <div className="hidden items-center gap-2 sm:flex">
          <a
            href={BUSINESS_CONFIG.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="pointer"
            className="group inline-flex items-center gap-1.5 rounded-full border border-emerald-600/40 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-800 transition-all duration-300 hover:bg-emerald-600 hover:text-white hover:scale-105"
          >
            <MessageCircle className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110" />
            <span>WhatsApp</span>
          </a>
          <a
            href={BUSINESS_CONFIG.phone.url}
            data-cursor="pointer"
            className="group inline-flex items-center gap-1.5 rounded-full bg-[#0c182a] px-3.5 py-1.5 text-xs font-semibold text-[#d4af37] shadow-sm transition-all duration-300 hover:bg-[#162a47] hover:scale-105 hover:shadow-md"
          >
            <Phone className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-12" />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#c59b27] lg:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close main navigation menu" : "Open main navigation menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="border-b border-gray-200 bg-white px-4 pt-2 pb-6 lg:hidden shadow-lg animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#0c182a] text-[#d4af37] font-semibold"
                      : "text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={BUSINESS_CONFIG.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-emerald-600 py-2.5 text-sm font-semibold text-white shadow-sm"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us ({BUSINESS_CONFIG.whatsapp.display})
            </a>
            <a
              href={BUSINESS_CONFIG.phone.url}
              className="flex items-center justify-center gap-2 rounded-lg bg-[#0c182a] py-2.5 text-sm font-semibold text-[#d4af37] shadow-sm"
            >
              <Phone className="h-4 w-4" />
              Call Directly ({BUSINESS_CONFIG.phone.display})
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
