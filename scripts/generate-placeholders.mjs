import fs from "fs";
import path from "path";
import sharp from "sharp";

const outputDir = path.resolve(process.cwd(), "public/images");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function escapeXml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function createPortraitSvg(name, title, subtitle, isMemorial = false) {
  const bgGradientStart = isMemorial ? "#0F172A" : "#0B1329";
  const bgGradientEnd = isMemorial ? "#1E293B" : "#1E2238";
  const accentGold = "#E2B857";

  return `
  <svg width="800" height="1000" viewBox="0 0 800 1000" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${bgGradientStart}"/>
        <stop offset="100%" stop-color="${bgGradientEnd}"/>
      </linearGradient>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#F5E0A3"/>
        <stop offset="50%" stop-color="${accentGold}"/>
        <stop offset="100%" stop-color="#996515"/>
      </linearGradient>
    </defs>
    
    <!-- Background -->
    <rect width="800" height="1000" fill="url(#bg)"/>
    
    <!-- Outer Ornamental Frame -->
    <rect x="30" y="30" width="740" height="940" rx="12" fill="none" stroke="url(#goldGrad)" stroke-width="3" opacity="0.8"/>
    <rect x="42" y="42" width="716" height="916" rx="8" fill="none" stroke="#E2B857" stroke-width="1" opacity="0.3"/>
    
    <!-- Corner Ornaments -->
    <circle cx="42" cy="42" r="6" fill="${accentGold}"/>
    <circle cx="758" cy="42" r="6" fill="${accentGold}"/>
    <circle cx="42" cy="958" r="6" fill="${accentGold}"/>
    <circle cx="758" cy="958" r="6" fill="${accentGold}"/>

    <!-- Dignified Monogram / Cameo Circle -->
    <circle cx="400" cy="380" r="180" fill="#141E33" stroke="url(#goldGrad)" stroke-width="4"/>
    <circle cx="400" cy="380" r="168" fill="none" stroke="#E2B857" stroke-width="1" stroke-dasharray="6,6" opacity="0.6"/>

    <!-- Emblem Silhouette -->
    <g transform="translate(350, 310) scale(1.6)" fill="${accentGold}" opacity="0.9">
      <!-- Classical Torch / Book Icon -->
      <path d="M15 2L18 8H12L15 2ZM8 10H22L20 22H10L8 10ZM12 22V28H18V22H12Z" fill="url(#goldGrad)"/>
    </g>

    <!-- Subtitle Banner -->
    <text x="400" y="630" font-family="Georgia, serif" font-size="20" font-style="italic" letter-spacing="3" fill="#D4AF37" text-anchor="middle">
      ${isMemorial ? "✦ IN REVERENCE &amp; GRATITUDE ✦" : "✦ LEADERSHIP &amp; GUIDANCE ✦"}
    </text>

    <!-- Name -->
    <text x="400" y="680" font-family="Georgia, 'Times New Roman', serif" font-size="34" font-weight="bold" fill="#FFFFFF" text-anchor="middle">
      ${escapeXml(name)}
    </text>

    <!-- Role / Title -->
    <text x="400" y="720" font-family="'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="500" fill="#E2B857" letter-spacing="2" text-anchor="middle">
      ${escapeXml(title)}
    </text>

    <text x="400" y="755" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" fill="#94A3B8" text-anchor="middle">
      ${escapeXml(subtitle)}
    </text>

    <!-- Respectful Note to Owner -->
    <rect x="120" y="820" width="560" height="70" rx="8" fill="#1E293B" opacity="0.9" stroke="#334155" stroke-width="1"/>
    <text x="400" y="850" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" fill="#E2E8F0" text-anchor="middle">
      Official Portrait Slot — Zenith Library Gorakhpur
    </text>
    <text x="400" y="872" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-style="italic" fill="#94A3B8" text-anchor="middle">
      Provide real photograph at /public/images/${isMemorial ? "shri-jyoti-prakash-rai.jpg" : "shri-prem-prakash-rai.jpg"}
    </text>
  </svg>`;
}

function createFacilitySvg(title, category, hint) {
  return `
  <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0c192c"/>
        <stop offset="50%" stop-color="#142642"/>
        <stop offset="100%" stop-color="#091321"/>
      </linearGradient>
      <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f7dfa5"/>
        <stop offset="100%" stop-color="#c59b27"/>
      </linearGradient>
    </defs>
    
    <rect width="1200" height="800" fill="url(#bg)"/>
    
    <!-- Architectural grid accents -->
    <g opacity="0.08" stroke="#ffffff" stroke-width="1">
      <line x1="100" y1="0" x2="100" y2="800"/>
      <line x1="300" y1="0" x2="300" y2="800"/>
      <line x1="500" y1="0" x2="500" y2="800"/>
      <line x1="700" y1="0" x2="700" y2="800"/>
      <line x1="900" y1="0" x2="900" y2="800"/>
      <line x1="1100" y1="0" x2="1100" y2="800"/>
      <line x1="0" y1="150" x2="1200" y2="150"/>
      <line x1="0" y1="350" x2="1200" y2="350"/>
      <line x1="0" y1="550" x2="1200" y2="550"/>
      <line x1="0" y1="750" x2="1200" y2="750"/>
    </g>

    <!-- Frame -->
    <rect x="40" y="40" width="1120" height="720" rx="16" fill="none" stroke="url(#gold)" stroke-width="2" opacity="0.6"/>

    <!-- Central Card -->
    <rect x="250" y="220" width="700" height="360" rx="20" fill="#101F38" opacity="0.95" stroke="#1E3A5F" stroke-width="2"/>

    <!-- Category -->
    <text x="600" y="290" font-family="'Segoe UI', sans-serif" font-size="18" font-weight="600" fill="#C59B27" letter-spacing="4" text-anchor="middle">
      ${escapeXml(category.toUpperCase())}
    </text>

    <!-- Title -->
    <text x="600" y="360" font-family="Georgia, serif" font-size="40" font-weight="bold" fill="#FFFFFF" text-anchor="middle">
      ${escapeXml(title)}
    </text>

    <!-- Location subtitle -->
    <text x="600" y="410" font-family="'Segoe UI', sans-serif" font-size="20" fill="#94A3B8" text-anchor="middle">
      Zenith Library Bilandpur • Gorakhpur
    </text>

    <line x1="450" y1="440" x2="750" y2="440" stroke="#C59B27" stroke-width="2" opacity="0.5"/>

    <!-- Guidance Note -->
    <text x="600" y="490" font-family="'Segoe UI', sans-serif" font-size="16" fill="#CBD5E1" text-anchor="middle">
      ${escapeXml(hint)}
    </text>
    <text x="600" y="525" font-family="'Segoe UI', sans-serif" font-size="14" font-style="italic" fill="#64748B" text-anchor="middle">
      Replaceable with actual library photo in /public/images/
    </text>
  </svg>`;
}

function createLogoSvg() {
  return `
  <svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0a1424"/>
        <stop offset="100%" stop-color="#142644"/>
      </linearGradient>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FCE7B0"/>
        <stop offset="50%" stop-color="#D4AF37"/>
        <stop offset="100%" stop-color="#996515"/>
      </linearGradient>
    </defs>
    
    <!-- Shield / Crest Background -->
    <path d="M300 40 L500 120 V340 C500 460 300 540 300 540 C300 540 100 460 100 340 V120 Z" 
          fill="url(#shieldGrad)" stroke="url(#goldGrad)" stroke-width="12"/>
    
    <!-- Inner Border -->
    <path d="M300 60 L480 132 V330 C480 435 300 510 300 510 C300 510 120 435 120 330 V132 Z" 
          fill="none" stroke="url(#goldGrad)" stroke-width="3" opacity="0.4"/>

    <!-- Zenith Symbol: Stylized Z with Open Book & Rising Star -->
    <polygon points="300,140 308,162 331,162 312,176 319,198 300,184 281,198 288,176 269,162 292,162" fill="url(#goldGrad)"/>

    <!-- Open Book Crest -->
    <path d="M300 320 C270 290 210 290 170 300 V390 C210 380 270 380 300 410 C330 380 390 380 430 390 V300 C390 290 330 290 300 320 Z" 
          fill="none" stroke="url(#goldGrad)" stroke-width="8" stroke-linejoin="round"/>
    <line x1="300" y1="320" x2="300" y2="410" stroke="url(#goldGrad)" stroke-width="6"/>

    <!-- Prominent 'Z' Monogram in center -->
    <text x="300" y="275" font-family="Georgia, serif" font-size="110" font-weight="bold" fill="url(#goldGrad)" text-anchor="middle">
      Z
    </text>

    <!-- Typography underneath -->
    <text x="300" y="455" font-family="Georgia, serif" font-size="28" font-weight="bold" letter-spacing="6" fill="#FFFFFF" text-anchor="middle">
      ZENITH
    </text>
    <text x="300" y="485" font-family="'Segoe UI', sans-serif" font-size="15" font-weight="600" letter-spacing="4" fill="#D4AF37" text-anchor="middle">
      LIBRARY • GORAKHPUR
    </text>
  </svg>`;
}

async function run() {
  console.log("Generating high quality assets...");

  // 1. Founder Portrait Placeholder
  const founderSvg = createPortraitSvg(
    "Shri Jyoti Prakash Rai",
    "Founder",
    "Visionary behind Zenith Library, Gorakhpur",
    true
  );
  await sharp(Buffer.from(founderSvg))
    .jpeg({ quality: 92 })
    .toFile(path.join(outputDir, "shri-jyoti-prakash-rai.jpg"));
  console.log("✓ Created shri-jyoti-prakash-rai.jpg");

  // 2. Current Leader Portrait Placeholder
  const leaderSvg = createPortraitSvg(
    "Shri Prem Prakash Rai",
    "Continuing Guidance",
    "Preserving the legacy and student focus",
    false
  );
  await sharp(Buffer.from(leaderSvg))
    .jpeg({ quality: 92 })
    .toFile(path.join(outputDir, "shri-prem-prakash-rai.jpg"));
  console.log("✓ Created shri-prem-prakash-rai.jpg");

  // 3. Logo PNG
  const logoSvg = createLogoSvg();
  await sharp(Buffer.from(logoSvg))
    .png({ quality: 95 })
    .toFile(path.join(outputDir, "zenith-logo.png"));
  console.log("✓ Created zenith-logo.png");

  // 4. Facility Photos
  const facilityImages = [
    {
      file: "library-exterior.jpg",
      title: "Zenith Library Exterior",
      cat: "Library Premises",
      hint: "Peaceful neighborhood facing DIG Bungalow, Bilandpur",
    },
    {
      file: "library-entrance.jpg",
      title: "Library Entrance & Reception",
      cat: "Welcoming Ambience",
      hint: "Secure entry & administrative assistance desk",
    },
    {
      file: "library-interior.jpg",
      title: "Silent Reading Hall",
      cat: "Focused Environment",
      hint: "Acoustically calm study space for deep concentration",
    },
    {
      file: "library-study-area.jpg",
      title: "Spacious Study Desks",
      cat: "Study Area",
      hint: "Individual reading cubicles with personal study space",
    },
    {
      file: "library-seating.jpg",
      title: "Comfortable Seating",
      cat: "Ergonomics",
      hint: "Posture-supportive chairs for extended study sessions",
    },
    {
      file: "library-facilities.jpg",
      title: "Academic Facilities",
      cat: "Student Convenience",
      hint: "Dedicated study resources & organized amenities",
    },
    {
      file: "library-parking.jpg",
      title: "Dedicated Parking Area",
      cat: "Convenience & Safety",
      hint: "Safe on-premise parking for two-wheelers & student vehicles",
    },
  ];

  for (const item of facilityImages) {
    const svg = createFacilitySvg(item.title, item.cat, item.hint);
    await sharp(Buffer.from(svg))
      .jpeg({ quality: 90 })
      .toFile(path.join(outputDir, item.file));
    console.log(`✓ Created ${item.file}`);
  }

  console.log("All assets generated successfully in /public/images/");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
