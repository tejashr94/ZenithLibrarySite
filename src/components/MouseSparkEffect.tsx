"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
  spin: number;
  angle: number;
  isBurst?: boolean;
}

const GOLD_PALETTE = [
  "#f59e0b", // Amber 500
  "#fbbf24", // Amber 400
  "#d4af37", // Royal Gold
  "#fef08a", // Light Stardust Yellow
  "#ffffff", // Core Diamond Bright White
  "#f5d77f", // Warm Metallic Gold
];

export default function MouseSparkEffect() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Check if motion is reduced or device is purely touch
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouchOnly =
      window.matchMedia("(pointer: coarse)").matches &&
      !window.matchMedia("(pointer: fine)").matches;

    if (prefersReducedMotion || isTouchOnly) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let lastMoveTime = 0;
    let lastX = -100;
    let lastY = -100;

    const setCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize, { passive: true });

    // Helper to spawn a spark
    const spawnSpark = (
      x: number,
      y: number,
      speedMult = 1,
      isBurst = false
    ) => {
      const angle = isBurst
        ? Math.random() * Math.PI * 2
        : Math.random() * Math.PI * 2;
      const speed = isBurst
        ? (Math.random() * 3.5 + 1.5) * speedMult
        : (Math.random() * 1.5 + 0.3) * speedMult;
      const color =
        GOLD_PALETTE[Math.floor(Math.random() * GOLD_PALETTE.length)];

      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed + (isBurst ? 0.3 : -0.2), // gentle rise on trail, drop on burst
        size: isBurst ? Math.random() * 3.5 + 1.8 : Math.random() * 2.5 + 1.2,
        color,
        alpha: 1,
        decay: isBurst ? Math.random() * 0.025 + 0.015 : Math.random() * 0.035 + 0.02,
        spin: (Math.random() - 0.5) * 0.1,
        angle: Math.random() * Math.PI * 2,
        isBurst,
      });
    };

    // Handle mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);

      // Spawn spark on motion (throttle slightly to maintain ultra-smooth 60fps)
      if (now - lastMoveTime > 30 || dist > 18) {
        lastMoveTime = now;
        lastX = e.clientX;
        lastY = e.clientY;

        // 1-2 trail sparks
        const count = dist > 40 ? 2 : 1;
        for (let i = 0; i < count; i++) {
          const offsetX = (Math.random() - 0.5) * 6;
          const offsetY = (Math.random() - 0.5) * 6;
          spawnSpark(e.clientX + offsetX, e.clientY + offsetY, 0.8, false);
        }
      }
    };

    // Handle click (burst effect!)
    const handleClick = (e: MouseEvent) => {
      const burstCount = 18;
      for (let i = 0; i < burstCount; i++) {
        spawnSpark(e.clientX, e.clientY, 1.2, true);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("click", handleClick, { passive: true });

    // Draw custom 4-point golden star sparkle
    const drawSparkle = (
      pCtx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      color: string,
      alpha: number,
      angle: number
    ) => {
      pCtx.save();
      pCtx.translate(x, y);
      pCtx.rotate(angle);
      pCtx.globalAlpha = Math.max(0, alpha);

      // Soft glow
      pCtx.shadowBlur = 6;
      pCtx.shadowColor = color;

      pCtx.fillStyle = color;

      // 4-point star path
      pCtx.beginPath();
      const spikes = 4;
      const outerRadius = size * 1.8;
      const innerRadius = size * 0.45;

      let rot = (Math.PI / 2) * 3;
      const step = Math.PI / spikes;

      pCtx.moveTo(0, -outerRadius);
      for (let i = 0; i < spikes; i++) {
        let px = Math.cos(rot) * outerRadius;
        let py = Math.sin(rot) * outerRadius;
        pCtx.lineTo(px, py);
        rot += step;

        px = Math.cos(rot) * innerRadius;
        py = Math.sin(rot) * innerRadius;
        pCtx.lineTo(px, py);
        rot += step;
      }
      pCtx.lineTo(0, -outerRadius);
      pCtx.closePath();
      pCtx.fill();

      // Center bright core
      pCtx.beginPath();
      pCtx.arc(0, 0, size * 0.4, 0, Math.PI * 2);
      pCtx.fillStyle = "#ffffff";
      pCtx.fill();

      pCtx.restore();
    };

    // Animation Loop
    let isRunning = true;
    const render = () => {
      if (!isRunning) return;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.angle += p.spin;
        p.alpha -= p.decay;

        // Slight friction
        p.vx *= 0.98;
        p.vy *= 0.98;

        if (p.isBurst) {
          // slight gravity on burst
          p.vy += 0.04;
        }

        if (p.alpha <= 0.01) {
          particles.splice(i, 1);
          continue;
        }

        drawSparkle(ctx, p.x, p.y, p.size, p.color, p.alpha, p.angle);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] h-full w-full select-none"
      style={{ pointerEvents: "none" }}
    />
  );
}
