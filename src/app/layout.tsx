import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileActionBar from "@/components/MobileActionBar";
import CustomCursor from "@/components/CustomCursor";
import MouseSparkEffect from "@/components/MouseSparkEffect";
import { JsonLd } from "@/components/JsonLd";
import { getLibrarySchema, getWebSiteSchema } from "@/lib/structuredData";
import { BUSINESS_CONFIG } from "@/config/business";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0c182a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS_CONFIG.links.siteUrl),
  title: {
    default: "Zenith Library Gorakhpur | Study Library in Bilandpur",
    template: "%s | Zenith Library Gorakhpur",
  },
  description:
    "Zenith Library in Bilandpur, Gorakhpur is a focused study space for students and learners. Find our location, contact us on WhatsApp or call us directly.",
  applicationName: "Zenith Library",
  authors: [{ name: "Zenith Library Bilandpur" }],
  creator: "Zenith Library",
  publisher: "Zenith Library",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  icons: {
    icon: "/images/zenith-logo.png",
    apple: "/images/zenith-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BUSINESS_CONFIG.links.siteUrl,
    siteName: BUSINESS_CONFIG.businessName,
    title: "Zenith Library Gorakhpur | Study Library in Bilandpur",
    description:
      "A peaceful and focused study environment in Bilandpur, Gorakhpur. In front of DIG Bungalow.",
    images: [
      {
        url: "/images/zenith-students-studying.png",
        width: 1200,
        height: 630,
        alt: "Zenith Library Bilandpur Gorakhpur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenith Library Gorakhpur | Study Library in Bilandpur",
    description:
      "A peaceful and focused study environment in Bilandpur, Gorakhpur.",
    images: ["/images/zenith-students-studying.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <JsonLd data={getLibrarySchema()} />
        <JsonLd data={getWebSiteSchema()} />
      </head>
      <body className="flex min-h-screen flex-col font-sans bg-[#fcfbf9] text-slate-900 pb-16 sm:pb-0">
        <CustomCursor />
        <MouseSparkEffect />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileActionBar />
      </body>
    </html>
  );
}
