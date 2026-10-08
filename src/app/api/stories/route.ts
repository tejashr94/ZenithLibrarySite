import { NextRequest, NextResponse } from "next/server";
import { submitVisitorStory, getApprovedStories } from "@/lib/googleSheets";

export async function GET() {
  const data = await getApprovedStories();
  return NextResponse.json({ success: true, count: data.length, data });
}

const ipRequests = new Map<string, { count: number; expires: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipRequests.get(ip);
  if (!entry || now > entry.expires) {
    ipRequests.set(ip, { count: 1, expires: now + 60 * 1000 });
    return false;
  }
  if (entry.count >= 5) {
    return true;
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
    const { name, title, content, email, photo, honeypot } = body;

    // Honeypot check for bots
    if (honeypot) {
      return NextResponse.json({
        success: true,
        message: "Thank you! Your story has been submitted and will be reviewed by Zenith Library.",
      });
    }

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid name." },
        { status: 400 }
      );
    }

    if (!title || typeof title !== "string" || title.trim().length < 3) {
      return NextResponse.json(
        { success: false, message: "Please provide a headline or target exam for your story." },
        { status: 400 }
      );
    }

    if (!content || typeof content !== "string" || content.trim().length < 15) {
      return NextResponse.json(
        { success: false, message: "Please share at least a few sentences describing your study experience." },
        { status: 400 }
      );
    }

    const cleanName = name.trim().slice(0, 100);
    const cleanTitle = title.trim().slice(0, 200);
    const cleanContent = content.trim().slice(0, 5000);
    const cleanEmail = typeof email === "string" ? email.trim().slice(0, 150) : "";
    const cleanPhoto = typeof photo === "string" ? photo.trim().slice(0, 500) : "";

    const result = await submitVisitorStory({
      name: cleanName,
      title: cleanTitle,
      content: cleanContent,
      email: cleanEmail,
      photo: cleanPhoto,
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("[API/Stories] Unexpected error:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
