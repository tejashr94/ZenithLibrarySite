"use client";

import { useState } from "react";
import { BookOpen, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function StoryForm() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [date, setDate] = useState("");
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !title.trim() || !content.trim()) {
      setErrorMessage("Please complete your name, story title, and experience.");
      setStatus("error");
      return;
    }

    if (!consent) {
      setErrorMessage("Please confirm consent to share your story on Zenith Library.");
      setStatus("error");
      return;
    }

    if (honeypot) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/stories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          title: title.trim(),
          content: content.trim(),
          email: email.trim(),
          photo: photo.trim(),
          date,
          honeypot,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setName("");
        setTitle("");
        setContent("");
        setEmail("");
        setPhoto("");
        setConsent(false);
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Failed to submit story. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Network error. Please try again later.");
    }
  };

  return (
    <div className="rounded-2xl border border-[#e5dfd4] bg-white p-6 sm:p-8 shadow-sm">
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8c6d23]">
          <BookOpen className="h-4 w-4" />
          <span>STUDENT VOICES</span>
        </div>
        <h3 className="mt-1 font-serif text-2xl font-bold text-[#0c182a]">
          Share Your Zenith Experience
        </h3>
        <p className="mt-1 text-sm text-slate-600">
          How did studying at Zenith Library in Bilandpur impact your preparation? Share your journey to inspire fellow aspirants across Gorakhpur.
        </p>
      </div>

      {status === "success" ? (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center animate-in fade-in">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <h4 className="mt-3 font-serif text-lg font-bold text-emerald-900">
            Thank you!
          </h4>
          <p className="mt-2 text-sm text-emerald-800">
            Your story has been submitted and will be reviewed by Zenith Library before appearing on our Community Stories section.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-5 inline-flex items-center rounded-lg bg-emerald-700 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-800"
          >
            Submit Another Story
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="website_hp"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="st-name" className="block text-xs font-semibold text-slate-700">
                Your Name *
              </label>
              <input
                id="st-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Priya Pandey"
                className="mt-1 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-[#0c182a] focus:outline-none focus:ring-1 focus:ring-[#0c182a]"
              />
            </div>

            <div>
              <label htmlFor="st-email" className="block text-xs font-semibold text-slate-700">
                Email Address <span className="font-normal text-slate-400">(Optional)</span>
              </label>
              <input
                id="st-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="priya@example.com"
                className="mt-1 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-[#0c182a] focus:outline-none focus:ring-1 focus:ring-[#0c182a]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="st-title" className="block text-xs font-semibold text-slate-700">
              Story Headline / Exam Target *
            </label>
            <input
              id="st-title"
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. My 10-Month UPSC Preparation at Zenith Library"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-[#0c182a] focus:outline-none focus:ring-1 focus:ring-[#0c182a]"
            />
          </div>

          <div>
            <label htmlFor="st-content" className="block text-xs font-semibold text-slate-700">
              Your Experience / Story *
            </label>
            <textarea
              id="st-content"
              required
              rows={6}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Share how the environment, daily routine, and staff assistance helped your concentration..."
              className="mt-1 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-[#0c182a] focus:outline-none focus:ring-1 focus:ring-[#0c182a]"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="st-photo" className="block text-xs font-semibold text-slate-700">
                Optional Photo URL
              </label>
              <input
                id="st-photo"
                type="url"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                placeholder="https://..."
                className="mt-1 w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-[#0c182a] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="st-date" className="block text-xs font-semibold text-slate-700">
                Submission Date
              </label>
              <input
                id="st-date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm text-slate-900 focus:border-[#0c182a] focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-start gap-2 pt-1">
            <input
              id="st-consent"
              type="checkbox"
              required
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-[#0c182a] focus:ring-[#0c182a]"
            />
            <label htmlFor="st-consent" className="text-xs leading-relaxed text-slate-600">
              I consent to Zenith Library publishing my story on the website upon administrative review.
            </label>
          </div>

          {status === "error" && (
            <div className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-xs text-red-700">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0c182a] px-6 py-3.5 text-sm font-semibold text-[#d4af37] shadow-sm transition-all hover:bg-[#162a47] disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
            <span>{status === "submitting" ? "Submitting Your Story..." : "Submit Your Story"}</span>
          </button>
        </form>
      )}
    </div>
  );
}
