/**
 * ZENITH LIBRARY GORAKHPUR - CENTRAL BUSINESS CONFIGURATION
 * 
 * IMPORTANT:
 * This is the ONLY place where official business NAP (Name, Address, Phone),
 * contacts, URLs, and management details are configured for the entire website.
 * Never hard-code these details in components or pages.
 */

export const BUSINESS_CONFIG = {
  businessName: "Zenith Library",
  fullName: "Zenith Library Bilandpur",
  tagline: "A Place to Focus, Learn & Grow",
  subheading: "A peaceful and focused study environment in Bilandpur, Gorakhpur.",
  
  // Exact NAP (Name, Address, Phone) - Consistent across all pages and schemas
  address: {
    line1: "In Front Of DIG Bungalow",
    line2: "Bansgaon Colony, Kalepur",
    locality: "Bilandpur",
    landmark: "In Front Of DIG Bungalow",
    city: "Gorakhpur",
    state: "Uttar Pradesh",
    postalCode: "273001",
    country: "India",
    countryCode: "IN",
    // Complete single-string NAP representation
    formatted: "Zenith Library Bilandpur, In Front Of DIG Bungalow, Bansgaon Colony, Kalepur, Gorakhpur - 273001, Uttar Pradesh, India"
  },

  // Contact Numbers
  phone: {
    display: "+91 70684 20664",
    raw: "+917068420664",
    url: "tel:+917068420664",
    secondaryDisplay: "+91 81157 51248",
    secondaryRaw: "+918115751248",
    secondaryUrl: "tel:+918115751248"
  },
  
  whatsapp: {
    display: "+91 95010 39134",
    number: "9501039134",
    defaultMessage: "Hello, I would like to know more about Zenith Library in Gorakhpur.",
    get url() {
      return `https://wa.me/919501039134?text=${encodeURIComponent(this.defaultMessage)}`;
    }
  },

  // External Verification & Directory Links
  links: {
    justdialUrl: "https://www.justdial.com/Gorakhpur/Zenith-Library-Ligency-Apartment-Bilandpur/9999PX551-X551-221110125448-R1Q4_BZDET",
    googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Zenith+Library+Bilandpur+Gorakhpur+In+Front+Of+DIG+Bungalow",
    googleBusinessProfileUrl: "https://www.google.com/maps/search/?api=1&query=Zenith+Library+Bilandpur+Gorakhpur",
    // Default site URL fallback (overridable via NEXT_PUBLIC_SITE_URL)
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://zenithlibrary.in"
  },

  // Family Leadership & Legacy Information
  legacy: {
    founderName: "Shri Jyoti Prakash Rai",
    founderRole: "Founder",
    founderMemory: "In Loving Memory of Shri Jyoti Prakash Rai",
    founderText: "Zenith Library carries a story that goes beyond a place to study. It was opened by Shri Jyoti Prakash Rai, whose vision became the foundation of this library.",
    founderPhoto: "/images/shri-jyoti-prakash-rai.jpg",
    
    currentLeaderName: "Shri Prem Prakash Rai",
    currentLeaderRole: "Continuing Guidance",
    currentLeaderSectionTitle: "Continuing the Journey",
    currentLeaderText: "Today, Zenith Library continues its journey under the care and guidance of Shri Prem Prakash Rai.",
    currentLeaderPhoto: "/images/shri-prem-prakash-rai.jpg"
  },

  // Library Visual Assets (Including Authentic Google Business & Premise Photos)
  assets: {
    logo: "/images/zenith-logo.png",
    banner: "/images/zenith-banner-official.png",
    interior: "/images/zenith-students-studying.png",
    studyArea: "/images/zenith-cubicles-hall.png",
    entrance: "/images/zenith-room2-entrance.png",
    seating: "/images/zenith-cubicles-hall.png",
    facilities: "/images/zenith-students-studying.png",
    exterior: "/images/library-exterior.jpg",
    parking: "/images/library-parking.jpg"
  },

  // Confirmed Operating Info Note
  // Note: Strict requirement — Do not invent opening hours or shift times; invite students to enquire directly.
  enquiryNote: "For current shift timings, slot availability, and library walkthroughs, please enquire directly via WhatsApp or Phone call."
} as const;

export type BusinessConfig = typeof BUSINESS_CONFIG;
