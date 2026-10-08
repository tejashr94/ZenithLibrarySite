import { getActiveFacilities, FacilityItem } from "@/config/facilities";
import { Brain, Armchair, BookOpen, Car, Coffee, Users, MapPin, CheckCircle, MessageCircle, Phone } from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";

function getFacilityIcon(iconName: FacilityItem["iconName"]) {
  const iconProps = { className: "h-6 w-6 text-[#c59b27]" };
  switch (iconName) {
    case "Brain":
      return <Brain {...iconProps} />;
    case "Armchair":
      return <Armchair {...iconProps} />;
    case "BookOpen":
      return <BookOpen {...iconProps} />;
    case "Car":
      return <Car {...iconProps} />;
    case "Coffee":
      return <Coffee {...iconProps} />;
    case "Users":
      return <Users {...iconProps} />;
    case "MapPin":
      return <MapPin {...iconProps} />;
    default:
      return <CheckCircle {...iconProps} />;
  }
}

export default function Facilities() {
  const facilities = getActiveFacilities();

  return (
    <section id="facilities" className="bg-[#faf8f4] py-16 sm:py-24">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16 wide-layout-fill">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8c6d23]">
            STUDY CONVENIENCES
          </span>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#0c182a] sm:text-4xl">
            Confirmed Facilities at Zenith Library
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Every feature at Zenith Library is curated to protect your focus and support your academic routine in Bilandpur, Gorakhpur.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
          {facilities.map((item) => (
            <div
              key={item.id}
              data-cursor="pointer"
              className="card-hover-interactive group relative flex flex-col justify-between rounded-2xl border border-[#e8e2d5] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-2 hover:border-[#d4af37] hover:shadow-xl hover:shadow-[#0c182a]/5"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fdf8ed] border border-[#f1e6ce] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    {getFacilityIcon(item.iconName)}
                  </div>
                  {item.badge && (
                    <span className="rounded-full bg-[#fdf6e6] px-3 py-1 text-[11px] font-semibold text-[#8c6d23] border border-[#f0dfb6] transition-transform duration-300 group-hover:scale-105">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="mt-5 font-serif text-xl font-bold text-[#0c182a] group-hover:text-[#8c6d23] transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm font-medium text-slate-700">
                  {item.shortDescription}
                </p>

                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-1.5 border-t border-slate-100 pt-3 text-xs font-semibold text-[#8c6d23] transition-transform duration-300 group-hover:translate-x-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-600" />
                <span>Verified On-Premise Facility</span>
              </div>
            </div>
          ))}
        </div>

        {/* Facilities Enquiry Callout (NO PRICING TABLE) */}
        <div className="mt-14 rounded-2xl border border-[#e8dfcf] bg-white p-8 text-center shadow-sm">
          <h3 className="font-serif text-2xl font-bold text-[#0c182a]">
            Enquire About Zenith Library Facilities &amp; Shifts
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
            {BUSINESS_CONFIG.enquiryNote}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={BUSINESS_CONFIG.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-emerald-700 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp Us: {BUSINESS_CONFIG.whatsapp.display}</span>
            </a>
            <a
              href={BUSINESS_CONFIG.phone.url}
              className="inline-flex items-center gap-2 rounded-xl bg-[#0c182a] px-5 py-2.5 text-xs font-semibold text-[#d4af37] shadow-sm hover:bg-[#162a47] transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Call: {BUSINESS_CONFIG.phone.display}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
