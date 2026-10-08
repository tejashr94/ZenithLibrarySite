"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MessageCircle,
  Phone,
  Navigation,
  MapPin,
  Sparkles,
  Shield,
  Target,
  BookOpen,
  Zap,
  Award,
  ArrowRight
} from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"hall" | "banner">("hall");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8f6f0] via-[#fcfbf9] to-[#ffffff] py-12 sm:py-20 lg:py-24">
      {/* Dynamic ambient background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-35">
        <div className="absolute -top-40 right-[-10%] h-[600px] w-[600px] rounded-full bg-[#f2e6cb] blur-3xl animate-pulse-gold"></div>
        <div className="absolute -bottom-32 left-[-10%] h-[500px] w-[500px] rounded-full bg-[#e8eef8] blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-[1840px] px-4 sm:px-6 lg:px-12 xl:px-16 wide-layout-fill">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          
          {/* Left Column: Core Value Proposition */}
          <div className="space-y-6 lg:col-span-7">
            
            {/* Authentic Brand Badge */}
            <div
              data-cursor="pointer"
              className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/50 bg-[#fdf9ee] px-4 py-1.5 shadow-xs transition-all duration-300 hover:scale-105 hover:border-[#d4af37] hover:shadow-md"
            >
              <span className="h-2 w-2 rounded-full bg-[#c59b27] animate-ping"></span>
              <p className="text-xs font-bold tracking-wider text-[#8c6d23] uppercase">
                ZENITH LIBRARY • BILANDPUR • GORAKHPUR
              </p>
            </div>

            {/* H1 Heading */}
            <h1 className="font-serif text-3xl font-extrabold tracking-tight text-[#0c182a] sm:text-5xl lg:text-5xl xl:text-6xl leading-[1.15]">
              A Place to Study, <br className="hidden sm:inline" />
              <span className="text-[#8c6d23] relative inline-block">
                A Path to Success.
                <span className="absolute left-0 bottom-1 w-full h-[3px] bg-gradient-to-r from-[#d4af37] to-transparent rounded-full"></span>
              </span>
            </h1>

            {/* Subheading & Slogan from Official Poster */}
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-slate-600 font-medium max-w-2xl">
              <strong className="text-[#0c182a]">Your Focus. Our Environment. Success Tomorrow.</strong> Dedicated silent study sanctuary opposite DIG Bungalow in Bilandpur, Gorakhpur.
            </p>

            {/* Official 4 Pillars from the Banner with Interactive Hover */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 pt-1">
              <div
                data-cursor="pointer"
                className="group rounded-xl border border-[#ece4d4] bg-white/80 p-3 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af37] hover:bg-[#fffdf9] hover:shadow-md"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fcf6e8] text-[#8c6d23] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Target className="h-4 w-4" />
                </div>
                <h4 className="mt-2 text-xs font-bold text-[#0c182a]">Achieve Goals</h4>
                <p className="text-[10px] text-slate-500">Unbroken focus</p>
              </div>

              <div
                data-cursor="pointer"
                className="group rounded-xl border border-[#ece4d4] bg-white/80 p-3 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af37] hover:bg-[#fffdf9] hover:shadow-md"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fcf6e8] text-[#8c6d23] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <BookOpen className="h-4 w-4" />
                </div>
                <h4 className="mt-2 text-xs font-bold text-[#0c182a]">For All Aspirants</h4>
                <p className="text-[10px] text-slate-500">UPSC, NEET, SSC</p>
              </div>

              <div
                data-cursor="pointer"
                className="group rounded-xl border border-[#ece4d4] bg-white/80 p-3 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af37] hover:bg-[#fffdf9] hover:shadow-md"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fcf6e8] text-[#8c6d23] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Zap className="h-4 w-4" />
                </div>
                <h4 className="mt-2 text-xs font-bold text-[#0c182a]">Focused Ambience</h4>
                <p className="text-[10px] text-slate-500">Silent red cubicles</p>
              </div>

              <div
                data-cursor="pointer"
                className="group rounded-xl border border-[#ece4d4] bg-white/80 p-3 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af37] hover:bg-[#fffdf9] hover:shadow-md"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fcf6e8] text-[#8c6d23] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Award className="h-4 w-4" />
                </div>
                <h4 className="mt-2 text-xs font-bold text-[#0c182a]">Discipline First</h4>
                <p className="text-[10px] text-slate-500">Strict decorum</p>
              </div>
            </div>

            {/* Location & Guidance Highlights */}
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 pt-1 text-sm text-slate-700">
              <div className="flex items-center gap-2.5 rounded-lg border border-[#ece6d9] bg-white/70 p-2.5 shadow-xs transition-all hover:border-[#c59b27]">
                <MapPin className="h-4 w-4 text-[#c59b27] shrink-0" />
                <span className="font-medium text-xs sm:text-sm">In Front Of DIG Bungalow, Bilandpur</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-lg border border-[#ece6d9] bg-white/70 p-2.5 shadow-xs transition-all hover:border-[#c59b27]">
                <Shield className="h-4 w-4 text-[#c59b27] shrink-0" />
                <span className="font-medium text-xs sm:text-sm">Family-run, personalized student care</span>
              </div>
            </div>

            {/* Action Buttons with Gliding Arrows */}
            <div className="flex flex-wrap items-center gap-3 pt-3 sm:gap-4 hero-btn-group">
              <a
                href={BUSINESS_CONFIG.links.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="pointer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#0c182a] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#162a47] hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#0c182a]"
              >
                <Navigation className="h-4 w-4 text-[#d4af37] transition-transform duration-300 group-hover:rotate-45" />
                <span>Get Directions</span>
                <ArrowRight className="h-4 w-4 text-[#d4af37] transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>

              <a
                href={BUSINESS_CONFIG.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="pointer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-emerald-600 bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-emerald-700 hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={BUSINESS_CONFIG.phone.url}
                data-cursor="pointer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:bg-slate-50 hover:border-slate-400 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                <Phone className="h-4 w-4 text-[#0c182a] transition-transform duration-300 group-hover:rotate-12" />
                <span>Call {BUSINESS_CONFIG.phone.display}</span>
              </a>
            </div>

            <p className="text-xs text-slate-500 pt-1">
              Direct official contact: <a href="tel:+917068420664" className="font-bold text-[#0c182a] hover:underline">7068420664</a> &bull; WhatsApp ({BUSINESS_CONFIG.whatsapp.display}).
            </p>
          </div>

          {/* Right Column: Interactive Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Visual Mode Selector Tabs */}
              <div className="mb-3 flex items-center justify-center sm:justify-start gap-2">
                <button
                  type="button"
                  data-cursor="pointer"
                  onClick={() => setActiveTab("hall")}
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                    activeTab === "hall"
                      ? "bg-[#0c182a] text-[#d4af37] shadow-sm"
                      : "bg-white/80 text-slate-600 hover:bg-white"
                  }`}
                >
                  Reading Hall &amp; Aspirants
                </button>
                <button
                  type="button"
                  data-cursor="pointer"
                  onClick={() => setActiveTab("banner")}
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                    activeTab === "banner"
                      ? "bg-[#0c182a] text-[#d4af37] shadow-sm"
                      : "bg-white/80 text-slate-600 hover:bg-white"
                  }`}
                >
                  Official Poster
                </button>
              </div>

              {/* Outer decorative card frame with interactive tilt & shadow */}
              <div
                data-cursor="view"
                data-cursor-text="STUDY"
                className="group relative overflow-hidden rounded-3xl border-2 border-[#d4af37]/40 bg-white p-2.5 shadow-2xl transition-all duration-500 hover:-translate-y-1.5 hover:border-[#d4af37] hover:shadow-[0_25px_50px_-12px_rgba(12,24,42,0.25)]"
              >
                
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-900">
                  <Image
                    src={
                      activeTab === "hall"
                        ? "/images/zenith-students-studying.png"
                        : "/images/zenith-banner-official.png"
                    }
                    alt={
                      activeTab === "hall"
                        ? "Active students studying silently at Zenith Library Gorakhpur"
                        : "Official Zenith Library poster banner"
                    }
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    priority
                  />
                  
                  {/* Subtle overlay badge */}
                  <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-black/80 px-3.5 py-2.5 backdrop-blur-md text-white transition-transform duration-300 group-hover:translate-y-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-[#d4af37]" />
                        <span className="text-xs font-bold tracking-wide">
                          {activeTab === "hall" ? "Authentic Study Ambience" : "Official Zenith Library Mission"}
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold text-[#d4af37]">
                        {activeTab === "hall" ? "Bilandpur, Gorakhpur" : "7068420664"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Micro info strip */}
                <div className="mt-3 flex items-center justify-between px-2 py-1 text-xs text-slate-600">
                  <span className="font-semibold text-[#0c182a]">
                    {activeTab === "hall" ? "Individual Red Cubicles & Chairs" : "A Place to Study, A Path to Success"}
                  </span>
                  <span className="font-bold text-[#8c6d23]">In Front Of DIG Bungalow</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
