"use client";

import { useState } from "react";
import { Star, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [photo, setPhoto] = useState("");
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState(""); // Spam protection

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !feedback.trim()) {
      setErrorMessage("Please enter both your name and your feedback.");
      setStatus("error");
      return;
    }

    if (!consent) {
      setErrorMessage("Please confirm consent to display your feedback upon review.");
      setStatus("error");
      return;
    }

    // Bot honeypot caught
    if (honeypot) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          rating,
          feedback: feedback.trim(),
          photo: photo.trim(),
          honeypot,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setFeedback("");
        setPhoto("");
        setRating(5);
        setConsent(false);
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Failed to submit feedback. Please try again.");
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
        <h3 className="font-serif text-2xl font-bold text-[#0c182a]">
          Submit Your Feedback
        </h3>
        <p className="mt-1 text-sm text-slate-600">
          We value genuine student experiences. All submitted feedback is reviewed by the Zenith Library administration before being published.
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
            Your feedback has been submitted and will be reviewed by Zenith Library.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-5 inline-flex items-center rounded-lg bg-emerald-700 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-800"
          >
            Submit Another Feedback
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot hidden input */}
          <input
            type="text"
            name="website_hp"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          {/* Rating Selection */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
              Your Rating (1–5 Stars) *
            </label>
            <div className="mt-1.5 flex items-center gap-1.5" role="radiogroup" aria-label="Rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="rounded p-1 focus:outline-none focus:ring-2 focus:ring-[#c59b27]"
                  aria-label={`${star} star`}
                >
                  <Star
                    className={`h-6 w-6 transition-colors ${
                      (hoverRating || rating) >= star
                        ? "fill-[#c59b27] text-[#c59b27]"
                        : "text-slate-300"
                    }`}
                  />
                </button>
              ))}
              <span className="ml-2 text-xs font-bold text-slate-700">
                {rating} out of 5
              </span>
            </div>
          </div>

          {/* Name & Email Fields */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="fb-name" className="block text-xs font-semibold text-slate-700">
                Full Name *
              </label>
              <input
                id="fb-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rahul Verma"
                className="mt-1 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-[#0c182a] focus:outline-none focus:ring-1 focus:ring-[#0c182a]"
              />
            </div>

            <div>
              <label htmlFor="fb-email" className="block text-xs font-semibold text-slate-700">
                Email Address <span className="font-normal text-slate-400">(Optional)</span>
              </label>
              <input
                id="fb-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="rahul@example.com"
                className="mt-1 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-[#0c182a] focus:outline-none focus:ring-1 focus:ring-[#0c182a]"
              />
            </div>
          </div>

          {/* Feedback Textarea */}
          <div>
            <label htmlFor="fb-text" className="block text-xs font-semibold text-slate-700">
              Your Feedback &amp; Study Experience *
            </label>
            <textarea
              id="fb-text"
              required
              rows={4}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Tell us about the study atmosphere, seating comfort, silence, and your preparation journey at Zenith Library..."
              className="mt-1 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-[#0c182a] focus:outline-none focus:ring-1 focus:ring-[#0c182a]"
            />
          </div>

          {/* Optional Photo URL */}
          <div>
            <label htmlFor="fb-photo" className="block text-xs font-semibold text-slate-700">
              Photo URL <span className="font-normal text-slate-400">(Optional avatar or study desk link)</span>
            </label>
            <input
              id="fb-photo"
              type="url"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              placeholder="https://..."
              className="mt-1 w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-[#0c182a] focus:outline-none focus:ring-1 focus:ring-[#0c182a]"
            />
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start gap-2 pt-1">
            <input
              id="fb-consent"
              type="checkbox"
              required
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-[#0c182a] focus:ring-[#0c182a]"
            />
            <label htmlFor="fb-consent" className="text-xs leading-relaxed text-slate-600">
              I consent to Zenith Library publishing my feedback and first name on the website upon administrative review.
            </label>
          </div>

          {status === "error" && (
            <div className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-xs text-red-700">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0c182a] px-6 py-3 text-sm font-semibold text-[#d4af37] shadow-sm transition-all hover:bg-[#162a47] disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
            <span>{status === "submitting" ? "Submitting Feedback..." : "Submit Feedback"}</span>
          </button>
        </form>
      )}
    </div>
  );
}
