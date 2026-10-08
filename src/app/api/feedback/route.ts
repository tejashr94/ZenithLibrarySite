import { NextRequest, NextResponse } from "next/server";
import { submitVisitorFeedback, getApprovedFeedback } from "@/lib/googleSheets";

export async function GET() {
  const data = await getApprovedFeedback();
  return NextResponse.json({ success: true, count: data.length, data });
}

// Simple in-memory IP rate limiter for spam prevention
const ipRequests = new Map<string, { count: number; expires: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipRequests.get(ip);
  if (!entry || now > entry.expires) {
    ipRequests.set(ip, { count: 1, expires: now + 60 * 1000 }); // 1 min window
    return false;
  }
  if (entry.count >= 5) {
    return true; // Max 5 submissions per minute per IP
  }
  entry.count += 1;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "anonymous";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many submissions. Please wait a moment." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, rating, feedback, photo, honeypot } = body;

    // Honeypot check for bots
    if (honeypot) {
      return NextResponse.json({
        success: true,
        message: "Thank you! Your feedback has been submitted and will be reviewed by Zenith Library.",
      });
    }

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid name." },
        { status: 400 }
      );
    }

    if (!feedback || typeof feedback !== "string" || feedback.trim().length < 5) {
      return NextResponse.json(
        { success: false, message: "Please provide meaningful feedback (at least 5 characters)." },
        { status: 400 }
      );
    }

    const numericRating = Math.min(5, Math.max(1, Number(rating) || 5));

    // Basic sanitization
    const cleanName = name.trim().slice(0, 100);
    const cleanFeedback = feedback.trim().slice(0, 2000);
    const cleanEmail = typeof email === "string" ? email.trim().slice(0, 150) : "";
    const cleanPhoto = typeof photo === "string" ? photo.trim().slice(0, 500) : "";

    const result = await submitVisitorFeedback({
      name: cleanName,
      email: cleanEmail,
      rating: numericRating,
      feedback: cleanFeedback,
      photo: cleanPhoto,
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("[API/Feedback] Unexpected error:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
