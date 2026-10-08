import { MapPin, Navigation, ExternalLink, Phone, MessageCircle } from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";

export default function Location() {
  return (
    <section id="location" className="bg-[#fcfbf9] py-16 sm:py-24 border-t border-[#ece7dc]">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16 wide-layout-fill">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8c6d23]">
            FIND ZENITH LIBRARY ONLINE
          </span>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#0c182a] sm:text-4xl">
            Prime &amp; Peaceful Bilandpur Location
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Situated directly in front of the DIG Bungalow in Bansgaon Colony, Kalepur — peaceful, secure, and conveniently accessible from all parts of Gorakhpur.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          
          {/* Left Column: Official NAP Card */}
          <div className="flex flex-col justify-between rounded-3xl border-2 border-[#e6decb] bg-white p-8 shadow-sm lg:col-span-5">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0c182a] text-[#d4af37]">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#0c182a]">
                    Official Address (NAP)
                  </h3>
                  <p className="text-xs font-semibold text-[#8c6d23]">
                    Gorakhpur, Uttar Pradesh
                  </p>
                </div>
              </div>

              {/* Exact Address */}
              <div className="rounded-2xl border border-slate-100 bg-[#faf8f4] p-5 text-sm leading-relaxed text-slate-700">
                <p className="font-bold text-[#0c182a] text-base">{BUSINESS_CONFIG.fullName}</p>
                <p className="mt-1">{BUSINESS_CONFIG.address.line1}</p>
                <p>{BUSINESS_CONFIG.address.line2}</p>
                <p className="font-semibold text-slate-900 mt-1">
                  {BUSINESS_CONFIG.address.locality}, {BUSINESS_CONFIG.address.city} - {BUSINESS_CONFIG.address.postalCode}
                </p>
                <p>{BUSINESS_CONFIG.address.state}, {BUSINESS_CONFIG.address.country}</p>
              </div>

              {/* Verified Contact Details */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                  <span className="text-slate-500">Phone Calling:</span>
                  <a
                    href={BUSINESS_CONFIG.phone.url}
                    className="font-bold text-[#0c182a] hover:text-[#8c6d23] transition-colors"
                  >
                    {BUSINESS_CONFIG.phone.display}
                  </a>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                  <span className="text-slate-500">WhatsApp Support:</span>
                  <a
                    href={BUSINESS_CONFIG.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                  >
                    {BUSINESS_CONFIG.whatsapp.display}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Key Landmark:</span>
                  <span className="font-semibold text-slate-800">In Front Of DIG Bungalow</span>
                </div>
              </div>
            </div>

            {/* Direct Channel Buttons */}
            <div className="mt-8 grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
              <a
                href={BUSINESS_CONFIG.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-xs font-semibold text-white shadow-xs hover:bg-emerald-700 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href={BUSINESS_CONFIG.phone.url}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#0c182a] py-3 text-xs font-semibold text-[#d4af37] shadow-xs hover:bg-[#162a47] transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Right Column: Online Discovery & Directions */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#e5decb] bg-gradient-to-br from-[#101e33] to-[#0a1424] p-8 text-white shadow-xl lg:col-span-7">
            <div className="space-y-6">
              <span className="inline-block rounded-full border border-[#d4af37]/40 bg-white/5 px-3 py-1 text-xs font-semibold text-[#d4af37]">
                Online Verified Listings
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
                Locate Zenith Library via Google Maps &amp; Justdial
              </h3>

              <p className="text-sm leading-relaxed text-slate-300">
                Zenith Library is conveniently listed across trusted local directories. Whether you are navigating from Golghar, Mohaddipur, University Chauraha, or Civil Lines, navigate directly using official map links.
              </p>

              {/* Action buttons: Get Directions, View on Google, View on Justdial */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 pt-2">
                {/* Get Directions */}
                <a
                  href={BUSINESS_CONFIG.links.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#d4af37] px-6 py-3.5 text-xs sm:text-sm font-bold text-[#0c182a] shadow-md hover:bg-[#e2bd4b] transition-all"
                >
                  <Navigation className="h-4 w-4" />
                  <span>Get Directions</span>
                </a>

                {/* View on Google */}
                <a
                  href={BUSINESS_CONFIG.links.googleBusinessProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-500 bg-white/10 px-5 py-3.5 text-xs sm:text-sm font-semibold text-white hover:bg-white/20 transition-all backdrop-blur-xs"
                >
                  <span>View on Google</span>
                  <ExternalLink className="h-4 w-4 text-[#d4af37]" />
                </a>

                {/* View on Justdial */}
                <a
                  href={BUSINESS_CONFIG.links.justdialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-orange-400/50 bg-orange-950/40 px-5 py-3.5 text-xs sm:text-sm font-semibold text-orange-200 hover:bg-orange-900/60 transition-all"
                >
                  <span>View on Justdial</span>
                  <ExternalLink className="h-4 w-4 text-orange-400" />
                </a>
              </div>
            </div>

            {/* Commute proximity notes */}
            <div className="mt-8 rounded-2xl border border-slate-700/80 bg-black/30 p-5 backdrop-blur-xs">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
                Commute &amp; Accessibility Highlights
              </h4>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
                <div className="rounded-lg bg-white/5 p-2.5">
                  <p className="font-semibold text-white">Quiet Bansgaon Colony</p>
                  <p className="mt-1 text-slate-400">Zero traffic horn commotion</p>
                </div>
                <div className="rounded-lg bg-white/5 p-2.5">
                  <p className="font-semibold text-white">DIG Bungalow Front</p>
                  <p className="mt-1 text-slate-400">Safe, secure landmark</p>
                </div>
                <div className="rounded-lg bg-white/5 p-2.5">
                  <p className="font-semibold text-white">Ample Parking</p>
                  <p className="mt-1 text-slate-400">Hassle-free parking</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
