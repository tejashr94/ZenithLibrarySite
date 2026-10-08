# Zenith Library — Official Website & Google Sheets CMS

> **Gorakhpur’s Premier Silent Study Sanctuary**  
> Located in Bansgaon Colony, opposite DIG Bungalow, Bilandpur, Gorakhpur, Uttar Pradesh.  
> Founded in memory of Late **Shri Jyoti Prakash Rai**, guided and managed by **Shri Prem Prakash Rai**.

---

## 🌟 Overview

**Zenith Library** is a dedicated academic sanctuary engineered to help competitive exam aspirants (UPSC, UPPCS, SSC, Banking, Railways, CTET, NEET, JEE) study in uninterrupted silence.

This repository powers the official, production-grade website for Zenith Library. It is built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**, featuring an intuitive **Google Sheets-backed CMS** that allows the library administration to manage student reviews, ratings, and preparation stories without needing a complex database.

---

## ✨ Key Features

### 1. 🎓 Premium Academic Experience & Design
- **Curated Color Palette**: Deep Academic Navy (`#0c182a`), Royal Gold (`#d4af37`), and Warm Ivory (`#faf8f4`).
- **Fully Responsive**: Mobile-first architecture with custom drawer navigation, micro-interactions, and accessible UI.
- **Facilities Showcase**: Dedicated sections detailing ergonomic seating, sound isolation, high-speed dual-band Wi-Fi, 100% power backup, RO drinking water, and CCTV security.
- **Legacy & Vision**: Honoring the founding vision of Late Shri Jyoti Prakash Rai and the guidance of Shri Prem Prakash Rai.

### 2. 📊 Live Google Sheets CMS & Moderation Engine
- **Zero-Database Architecture**: Student reviews and success stories are saved directly into your Google Spreadsheet.
- **Direct Real-Time GViz Sync**: Uses Google’s high-speed GViz CSV API (~150ms latency) with automatic cache revalidation.
- **One-Click Approval**: Toggle the **`approved`** checkbox in Google Sheets to instantly publish or hide any review or story on the live site.
- **Live Content Customization**: Edit student names, ratings, or feedback text directly in Google Sheets—the website reflects edits automatically.
- **Spam & Abuse Protection**: In-memory rate limiting and invisible bot honeypots on all submission endpoints.

### 3. 🔍 Comprehensive Local SEO & Structured Data
- **Schema.org JSON-LD**:
  - `Library` / `LocalBusiness` schema with exact coordinates (26.7538° N, 83.3742° E).
  - `FAQPage` schema on the homepage.
  - `BreadcrumbList` schema on all inner pages.
  - `Article` schema for all editorial blog posts.
- **Dynamic SEO**: Auto-generated `sitemap.xml`, `robots.txt`, OpenGraph cards, and Twitter summary metadata.
- **Directory Links**: Direct integration with verified listings on **Google Business Profile** and **Justdial**.

### 4. 📝 Academic Blog & Guides
- In-depth study habit guides, exam preparation tips, and library selection criteria tailored for students in Gorakhpur.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack, Server & Client Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **CMS Backend**: Google Sheets + Google Apps Script Web App
- **Schema / SEO**: Structured Data (JSON-LD), OpenGraph, dynamic metadata

---

## 📁 Project Structure

```
zenithlibrary/
├── google-apps-script/
│   └── Code.gs               # Apps Script code for Google Sheets CMS & automation
├── public/
│   ├── images/               # Facility, study cubicle, and legacy images
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── about/            # Legacy, mission, and leadership page
│   │   ├── api/
│   │   │   ├── feedback/     # Submit & read approved reviews
│   │   │   └── stories/      # Submit & read approved student stories
│   │   ├── blog/             # Study guides and academic articles
│   │   ├── facilities/       # Seating, Wi-Fi, power, and amenity details
│   │   ├── reviews/          # Verified student reviews & submission form
│   │   ├── stories/          # Student preparation journeys & story form
│   │   ├── layout.tsx        # Global shell, font definitions, and navigation
│   │   ├── page.tsx          # Comprehensive homepage
│   │   ├── robots.ts         # Automated search engine robots.txt
│   │   └── sitemap.ts        # Dynamic sitemap index
│   ├── components/           # Reusable UI components (Hero, Reviews, Forms, FAQ, etc.)
│   ├── config/
│   │   └── business.ts       # Central business information, phone, address, coordinates
│   └── lib/
│       ├── googleSheets.ts   # Dual-mode Google Sheets fetch & submit engine
│       ├── seo.ts            # Canonical metadata generator
│       └── structuredData.ts # Schema.org JSON-LD generators
├── .env.example              # Environment variable documentation
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18+ or Node.js 20+
- npm or pnpm or yarn

### 1. Clone the Repository
```bash
git clone https://github.com/tejashr94/ZenithLibrarySite.git
cd ZenithLibrarySite
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env.local` file in the root directory (refer to `.env.example`):
```env
# Website URL
NEXT_PUBLIC_SITE_URL=https://zenithlibrary.in

# Google Sheets Integration
GOOGLE_SHEETS_ID=1F2iVnO-9f5lXM5ze5fu5oHg6X7fOhFT7dNR4GQW368U
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbzxT4oAwfIUA04xGSnkVpEMchNaRz-y_4AsM3IpRWrOE05hDJi1U2mz1eYbti8NI-_8/exec
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbzxT4oAwfIUA04xGSnkVpEMchNaRz-y_4AsM3IpRWrOE05hDJi1U2mz1eYbti8NI-_8/exec
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## ⚡ Google Sheets CMS Guide

The website connects to your Google Sheet:
`https://docs.google.com/spreadsheets/d/1F2iVnO-9f5lXM5ze5fu5oHg6X7fOhFT7dNR4GQW368U/edit`

### Moderation Workflow:
| To do this... | In Google Sheets: |
| :--- | :--- |
| **Publish a review** | Check the box in **Column I** (`approved`) of the **Feedback** tab |
| **Hide a review** | Uncheck the box in **Column I** (`approved`) |
| **Edit text / fix typos** | Click the cell in **Column E** (`feedback`) and edit directly |
| **Publish a story** | Check the box in **Column H** (`approved`) of the **Stories** tab |
| **Clean / move rows to top** | Click menu **⚡ Zenith Library CMS** $\rightarrow$ **Format & Fix Sheets (Move Data to Top)** |

---

## 🚢 Production Deployment

### Recommended: Deploying on Vercel
1. Push this repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import the `ZenithLibrarySite` repository.
4. Add the environment variables from `.env.local`:
   - `NEXT_PUBLIC_SITE_URL`
   - `GOOGLE_SHEETS_ID`
   - `GOOGLE_SCRIPT_URL`
   - `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`
5. Click **Deploy**. Vercel will build and assign your production domain.

---

## 📍 Location & Contact

- **Address**: Bansgaon Colony, Infront of DIG Bungalow, Bilandpur, Gorakhpur, UP 273001
- **Landmark**: Facing DIG Bungalow, Bilandpur
- **Phone**: +91 95066 06385 / +91 99368 47413
- **Google Maps**: [View on Google Maps](https://maps.app.goo.gl/9Qd8zSgEreZzK1iU6)
- **Justdial**: [View on Justdial](https://www.justdial.com/Gorakhpur/Zenith-Library-Infront-Of-Dig-Bunglow-Bilandpur/9999PX551-X551-240212002347-L8N6_BZDET)

---

## 📄 License

Private repository for Zenith Library Gorakhpur. All rights reserved.
