"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [cursorType, setCursorType] = useState<string | null>(null);
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  // Smooth lerp positions
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only run on non-touch devices with fine pointers
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isFinePointer || prefersReducedMotion) {
      return;
    }

    setEnabled(true);

    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Inspect hovered target for custom cursor attributes
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactiveEl = target.closest(
          "a, button, [data-cursor], input, textarea, select, details, [role='button']"
        ) as HTMLElement | null;

        if (interactiveEl) {
          setHovered(true);
          const type = interactiveEl.getAttribute("data-cursor") || "pointer";
          const text = interactiveEl.getAttribute("data-cursor-text") || null;
          setCursorType(type);
          setCursorText(text);
        } else {
          setHovered(false);
          setCursorType(null);
          setCursorText(null);
        }
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave, { passive: true });
    document.addEventListener("mouseenter", onMouseEnter, { passive: true });

    // Spring/lerp loop for buttery fluid 120fps motion
    const loop = () => {
      // Lerp factor
      const ease = 0.18;
      ringPos.current.x += (pos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * ease;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-[99999] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* 1. Precision Center Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -ml-1.5 -mt-1.5 h-3 w-3 rounded-full transition-transform duration-75 ease-out ${
          isClicking
            ? "scale-50 bg-[#d4af37]"
            : hovered
            ? "scale-0 bg-[#0c182a]"
            : "scale-100 bg-[#d4af37] shadow-[0_0_8px_#d4af37]"
        }`}
        style={{ willChange: "transform" }}
      />

      {/* 2. Fluid Trailing Ring with Animated Arrow & Dynamic States */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 flex items-center justify-center rounded-full transition-[width,height,margin,background-color,border-color,box-shadow] duration-200 ease-out ${
          hovered
            ? cursorType === "view"
              ? "-ml-9 -mt-9 h-[72px] w-[72px] border-2 border-[#d4af37] bg-[#0c182a]/90 text-white backdrop-blur-xs shadow-[0_0_24px_rgba(212,175,55,0.45)]"
              : "-ml-6 -mt-6 h-12 w-12 border-2 border-[#d4af37] bg-[#d4af37]/15 backdrop-blur-xs shadow-[0_0_16px_rgba(212,175,55,0.35)]"
            : "-ml-4 -mt-4 h-8 w-8 border border-[#d4af37]/80 bg-transparent"
        } ${isClicking ? "scale-90" : "scale-100"}`}
        style={{ willChange: "transform" }}
      >
        {/* Animated Arrow Icon shown when hovering interactive buttons & links */}
        {hovered && cursorType !== "view" && (
          <svg
            className="h-4 w-4 text-[#0c182a] animate-pulse drop-shadow-sm"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        )}

        {/* Text badge when hovering media or viewable items */}
        {hovered && cursorType === "view" && (
          <span className="text-[10px] font-bold tracking-widest text-[#d4af37] uppercase">
            {cursorText || "VIEW"}
          </span>
        )}
      </div>
    </div>
  );
}
