/**
 * ZENITH LIBRARY GORAKHPUR - CONFIRMED FACILITIES CONFIGURATION
 * 
 * IMPORTANT:
 * Only facilities confirmed by the library administration are published here.
 * Features like AC, WiFi, CCTV, power backup, RO water, lockers, or 24h operation
 * are omitted until confirmed by the library owner.
 * Any new facility can be toggled by updating `isActive: true/false`.
 */

export interface FacilityItem {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  iconName: "Brain" | "Armchair" | "BookOpen" | "Car" | "Coffee" | "Users" | "MapPin";
  badge?: string;
  isActive: boolean;
}

export const CONFIRMED_FACILITIES: FacilityItem[] = [
  {
    id: "focused-study-environment",
    title: "Focused Study Environment",
    shortDescription: "A calm, disturbance-free atmosphere dedicated to deep learning and academic excellence.",
    description: "Designed specifically to minimize everyday distractions so students, competitive exam aspirants, and scholars can concentrate for long, productive study sessions.",
    iconName: "Brain",
    badge: "Core Feature",
    isActive: true
  },
  {
    id: "comfortable-seating",
    title: "Comfortable Seating",
    shortDescription: "Ergonomically planned seating arrangements tailored for long hours of reading and research.",
    description: "Study seats structured with adequate space and support to prevent fatigue, helping you stay comfortable throughout your revision routines.",
    iconName: "Armchair",
    badge: "Ergonomic",
    isActive: true
  },
  {
    id: "study-area",
    title: "Dedicated Study Area",
    shortDescription: "Organized individual and shared reading zones created for silent individual concentration.",
    description: "Spacious desks and planned partitions allowing each learner their own personal academic sanctuary without feeling crowded.",
    iconName: "BookOpen",
    badge: "Spacious",
    isActive: true
  },
  {
    id: "parking",
    title: "Parking Space",
    shortDescription: "Hassle-free parking accommodation for two-wheelers and student vehicles.",
    description: "Convenient on-premise parking so you do not have to worry about your vehicle while focusing on your studies inside the library.",
    iconName: "Car",
    isActive: true
  },
  {
    id: "canteen",
    title: "Canteen & Refreshment Facility",
    shortDescription: "Dedicated refreshment area for quick study breaks, snacks, and revitalization.",
    description: "An accessible spot to take disciplined breaks, hydrate, and grab light refreshments without having to leave the library premises completely.",
    iconName: "Coffee",
    isActive: true
  },
  {
    id: "staff-assistance",
    title: "Supportive Staff Assistance",
    shortDescription: "Courteous management and prompt staff support throughout library hours.",
    description: "Our on-ground staff ensures discipline, helps you with desk allocation, and maintains the peaceful decorum required for scholarly preparation.",
    iconName: "Users",
    isActive: true
  },
  {
    id: "convenient-location",
    title: "Convenient & Safe Bilandpur Location",
    shortDescription: "Prominently located in front of DIG Bungalow in peaceful Bansgaon Colony, Kalepur.",
    description: "Centrally accessible for students from across Gorakhpur while being tucked in a serene, secure, and peaceful residential neighborhood.",
    iconName: "MapPin",
    badge: "Prime Location",
    isActive: true
  }
];

export const getActiveFacilities = () => CONFIRMED_FACILITIES.filter(f => f.isActive);
