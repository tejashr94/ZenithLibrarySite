import Image from "next/image";
import { Camera, MapPin, Eye } from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";

const GALLERY_ITEMS = [
  {
    src: BUSINESS_CONFIG.assets.interior,
    alt: "Silent Reading Hall with Active Students - Zenith Library Gorakhpur",
    title: "Silent Reading Hall & Aspirants",
    category: "Real Study Ambience",
    span: "col-span-1 md:col-span-2",
    badge: "Authentic Atmosphere"
  },
  {
    src: BUSINESS_CONFIG.assets.studyArea,
    alt: "Dedicated Study Cubicles & Desks - Zenith Library Bilandpur",
    title: "Study Cubicles & Quiet Hall",
    category: "Ergonomics & Focus",
    span: "col-span-1",
    badge: "Spacious Desks"
  },
  {
    src: BUSINESS_CONFIG.assets.banner,
    alt: "Official Zenith Library Mission Banner with Contact 7068420664",
    title: "Official Academy Banner & Mission",
    category: "Core Philosophy",
    span: "col-span-1",
    badge: "Official Philosophy"
  },
  {
    src: BUSINESS_CONFIG.assets.entrance,
    alt: "Room No. 2 Reading Hall Door Entrance - Zenith Library Bilandpur",
    title: "Room No. 2 Quiet Study Room",
    category: "Premises Entry",
    span: "col-span-1 md:col-span-2",
    badge: "Dedicated Room"
  },
  {
    src: BUSINESS_CONFIG.assets.parking,
    alt: "Student Vehicle Parking Space - Zenith Library Gorakhpur",
    title: "Safe Vehicle Parking Space",
    category: "Safety & Access",
    span: "col-span-1",
    badge: "Convenience"
  },
  {
    src: BUSINESS_CONFIG.assets.exterior,
    alt: "Zenith Library Exterior in front of DIG Bungalow Gorakhpur",
    title: "Premises Exterior & Surroundings",
    category: "Bilandpur Prime Location",
    span: "col-span-1 md:col-span-2",
    badge: "Bansgaon Colony"
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#fcfbf9] py-16 sm:py-24 border-t border-[#ece6da]">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16 wide-layout-fill">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#f6eee0] px-3.5 py-1 text-xs font-semibold text-[#8c6d23]">
            <Camera className="h-3.5 w-3.5" />
            <span>AUTHENTIC LIBRARY GLIMPSE</span>
          </div>

          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-[#0c182a] sm:text-4xl">
            Inside Zenith Library Bilandpur
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
            A quiet sanctuary purposefully planned for serious academic pursuit. Take a visual walkthrough of our study halls and facilities.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={index}
              data-cursor="view"
              data-cursor-text="EXPLORE"
              className={`group relative overflow-hidden rounded-2xl border border-[#e8dfcf] bg-white shadow-xs transition-all duration-500 hover:-translate-y-2 hover:border-[#d4af37]/70 hover:shadow-2xl hover:shadow-[#0c182a]/10 ${item.span}`}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Badge top-right */}
                {item.badge && (
                  <div className="absolute top-3.5 right-3.5 z-10">
                    <span className="inline-flex items-center rounded-full bg-[#0c182a]/80 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-[#d4af37] backdrop-blur-md border border-[#d4af37]/30 transition-transform duration-300 group-hover:scale-105">
                      {item.badge}
                    </span>
                  </div>
                )}

                {/* Content caption */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white transition-transform duration-300 group-hover:translate-y-0">
                  <span className="text-[11px] font-semibold tracking-wider text-[#d4af37] uppercase">
                    {item.category}
                  </span>
                  <h3 className="mt-1 font-serif text-lg font-bold transition-colors group-hover:text-amber-200">
                    {item.title}
                  </h3>
                  <div className="mt-2 flex items-center justify-between text-xs text-slate-300">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-[#d4af37]" />
                      Bilandpur, Gorakhpur
                    </span>
                    <span className="flex items-center gap-1.5 font-semibold text-[#d4af37] transition-transform duration-300 group-hover:translate-x-1">
                      <Eye className="h-3.5 w-3.5" />
                      <span>Inspect</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visit in Person Callout */}
        <div className="mt-12 rounded-xl border border-dashed border-[#d8cfbe] bg-[#faf7ef] p-6 text-center">
          <p className="text-sm font-medium text-slate-700">
            Want to see the study atmosphere in person before enrolling?
          </p>
          <p className="mt-1 text-xs text-slate-500">
            You are welcome to visit our Bilandpur premises in front of DIG Bungalow for a personal walkthrough.
          </p>
        </div>

      </div>
    </section>
  );
}
