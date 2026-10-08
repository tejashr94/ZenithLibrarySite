import { MessageCircle, Phone, Navigation, MapPin, Clock } from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#faf8f4] py-16 sm:py-24">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16 wide-layout-fill">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8c6d23]">
            GET IN TOUCH
          </span>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#0c182a] sm:text-4xl">
            Enquire About Zenith Library
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Have questions about seat availability, study shifts, or visiting the premises? Connect with us directly on WhatsApp or over a quick phone call.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          
          {/* Card 1: WhatsApp Support */}
          <div
            data-cursor="pointer"
            className="card-hover-interactive flex flex-col justify-between rounded-2xl border border-emerald-200 bg-white p-7 shadow-xs hover:border-emerald-400 hover:shadow-xl transition-all duration-300"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 transition-transform duration-300 hover:scale-110">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-bold text-[#0c182a]">
                WhatsApp Support
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Send us a direct message on WhatsApp for instant replies regarding library shifts, desk allotment, and queries.
              </p>
              <p className="mt-4 text-base font-bold text-emerald-700">
                {BUSINESS_CONFIG.whatsapp.display}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href={BUSINESS_CONFIG.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-xs font-semibold text-white shadow-xs hover:bg-emerald-700 transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Card 2: Phone Call */}
          <div
            data-cursor="pointer"
            className="card-hover-interactive flex flex-col justify-between rounded-2xl border border-[#e6decb] bg-white p-7 shadow-xs hover:border-[#0c182a] hover:shadow-xl transition-all duration-300"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-[#0c182a] border border-slate-200 transition-transform duration-300 hover:scale-110">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-bold text-[#0c182a]">
                Direct Calling
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Speak directly with the library manager to discuss study routines, rules, and to reserve your study desk.
              </p>
              <div className="mt-4 space-y-1">
                <p className="text-base font-bold text-[#0c182a]">
                  Primary: {BUSINESS_CONFIG.phone.display}
                </p>
                <p className="text-xs text-slate-500">
                  Alternate: {BUSINESS_CONFIG.phone.secondaryDisplay}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href={BUSINESS_CONFIG.phone.url}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0c182a] py-3 text-xs font-semibold text-[#d4af37] shadow-xs hover:bg-[#162a47] transition-all hover:scale-[1.02]"
              >
                <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                <span>Call {BUSINESS_CONFIG.phone.display}</span>
              </a>
            </div>
          </div>

          {/* Card 3: Visit in Person */}
          <div
            data-cursor="pointer"
            className="card-hover-interactive flex flex-col justify-between rounded-2xl border border-[#e6decb] bg-white p-7 shadow-xs hover:border-[#c59b27] hover:shadow-xl transition-all duration-300"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fcf6e8] text-[#8c6d23] border border-[#f3e6c9] transition-transform duration-300 hover:scale-110">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-bold text-[#0c182a]">
                Visit Premises
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                {BUSINESS_CONFIG.fullName}, {BUSINESS_CONFIG.address.line1}, {BUSINESS_CONFIG.address.line2}, {BUSINESS_CONFIG.address.locality}, {BUSINESS_CONFIG.address.city} - {BUSINESS_CONFIG.address.postalCode}
              </p>
              <p className="mt-4 text-xs font-semibold text-[#8c6d23]">
                Landmark: In Front Of DIG Bungalow
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href={BUSINESS_CONFIG.links.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#f4ecdb] py-3 text-xs font-bold text-[#0c182a] shadow-xs hover:bg-[#ebd9bc] transition-all hover:scale-[1.02]"
              >
                <Navigation className="h-4 w-4 text-[#8c6d23] transition-transform duration-300 group-hover:rotate-45" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

        </div>

        {/* Operating Timing Note */}
        <div className="mt-12 rounded-2xl border border-[#e8ded0] bg-white p-6 sm:p-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8c6d23]">
            <Clock className="h-4 w-4" />
            <span>ENQUIRY &amp; SHIFT TIMINGS</span>
          </div>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
            {BUSINESS_CONFIG.enquiryNote} We welcome visits and walkthroughs during normal working hours.
          </p>
        </div>

      </div>
    </section>
  );
}
