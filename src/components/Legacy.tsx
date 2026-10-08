import Image from "next/image";
import { Heart, Sparkles, Compass } from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";

export default function Legacy() {
  const { legacy } = BUSINESS_CONFIG;

  return (
    <section id="legacy" className="relative overflow-hidden bg-[#0c182a] py-20 sm:py-28 text-white">
      {/* Subtle decorative geometric background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-[#d4af37] blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-[#3b82f6] blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16 wide-layout-fill">
        
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-white/5 px-4 py-1.5 backdrop-blur-xs">
            <Sparkles className="h-3.5 w-3.5 text-[#d4af37]" />
            <span className="text-xs font-semibold tracking-widest text-[#d4af37] uppercase">
              OUR FAMILY LEGACY
            </span>
          </div>

          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-white sm:text-5xl">
            A Foundation Built on Vision and Devotion
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            Zenith Library is rooted in a family commitment to foster learning, quiet scholarship, and community upliftment in Gorakhpur.
          </p>
        </div>

        {/* Legacy Profiles Grid */}
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          
          {/* Card 1: Founder Memorial - In Loving Memory of Shri Jyoti Prakash Rai */}
          <div className="group relative rounded-3xl border-2 border-[#d4af37]/50 bg-gradient-to-b from-[#13233c] to-[#0a1424] p-8 shadow-2xl transition-all duration-300 hover:border-[#d4af37]">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
              <Heart className="h-4 w-4 fill-current text-[#d4af37]" />
              <span>{legacy.founderMemory}</span>
            </div>

            <div className="mt-6 flex flex-col items-center gap-6 sm:flex-row sm:items-start">
              {/* Founder Photo Slot */}
              <div className="relative aspect-[4/5] w-48 shrink-0 overflow-hidden rounded-2xl border-2 border-[#d4af37]/60 shadow-lg bg-[#070e1a]">
                <Image
                  src={legacy.founderPhoto}
                  alt={legacy.founderName}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Founder Text */}
              <div className="space-y-3 text-center sm:text-left">
                <h3 className="font-serif text-2xl font-bold text-white sm:text-3xl">
                  {legacy.founderName}
                </h3>
                <p className="text-xs font-medium uppercase tracking-widest text-[#d4af37]">
                  {legacy.founderRole}
                </p>
                <p className="text-sm leading-relaxed text-slate-300">
                  {legacy.founderText}
                </p>
                <div className="pt-2 text-xs text-slate-400 italic">
                  &ldquo;A vision that lives on in every student who walks through our doors.&rdquo;
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Continuing the Journey - Shri Prem Prakash Rai */}
          <div className="group relative rounded-3xl border border-slate-700 bg-gradient-to-b from-[#111f35] to-[#091220] p-8 shadow-2xl transition-all duration-300 hover:border-slate-500">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400">
              <Compass className="h-4 w-4 text-sky-400" />
              <span>{legacy.currentLeaderSectionTitle}</span>
            </div>

            <div className="mt-6 flex flex-col items-center gap-6 sm:flex-row sm:items-start">
              {/* Leader Photo Slot */}
              <div className="relative aspect-[4/5] w-48 shrink-0 overflow-hidden rounded-2xl border-2 border-slate-600 shadow-lg bg-[#070e1a]">
                <Image
                  src={legacy.currentLeaderPhoto}
                  alt={legacy.currentLeaderName}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Leader Text */}
              <div className="space-y-3 text-center sm:text-left">
                <h3 className="font-serif text-2xl font-bold text-white sm:text-3xl">
                  {legacy.currentLeaderName}
                </h3>
                <p className="text-xs font-medium uppercase tracking-widest text-sky-400">
                  {legacy.currentLeaderRole}
                </p>
                <p className="text-sm leading-relaxed text-slate-300">
                  {legacy.currentLeaderText}
                </p>
                <div className="pt-2 text-xs text-slate-400">
                  Ensuring that the peaceful study environment, family warmth, and student discipline are upheld every single day.
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Legacy Commitment Note */}
        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-slate-800 bg-white/5 p-6 text-center backdrop-blur-xs">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Zenith Library remains dedicated to providing Gorakhpur’s students with an undisturbed, trustworthy, and welcoming study sanctuary where academic ambition meets genuine family care.
          </p>
        </div>

      </div>
    </section>
  );
}
