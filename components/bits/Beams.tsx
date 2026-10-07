"use client";

/**
 * React Bits — Beams
 * Diagonal animated light beams, intended for use inside the Hero section.
 * Inspired by reactbits.dev/backgrounds/beams
 */

import { useEffect, useRef } from "react";

interface BeamsProps {
  opacity?: number;
  /** Number of beams */
  count?: number;
}

export default function Beams({ opacity = 0.07, count = 5 }: BeamsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let t = 0;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Each beam: start fraction along top, width, speed, phase offset
    const beams = Array.from({ length: count }, (_, i) => ({
      xFrac: 0.05 + (i / count) * 0.9,
      width: 60 + i * 30,
      speed: 0.0003 + i * 0.0001,
      phase: (i / count) * Math.PI * 2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      beams.forEach((beam) => {
        const drift = Math.sin(t * beam.speed + beam.phase) * 0.06;
        const x = (beam.xFrac + drift) * canvas.width;

        // Beam goes from top-left to bottom-right at ~70° angle
        const x1 = x - canvas.height * 0.4;
        const y1 = 0;
        const x2 = x + canvas.height * 0.4;
        const y2 = canvas.height;

        const grad = ctx.createLinearGradient(x1, y1, x2, y2);
        grad.addColorStop(0,   `rgba(200,241,105,0)`);
        grad.addColorStop(0.3, `rgba(200,241,105,${opacity})`);
        grad.addColorStop(0.7, `rgba(200,241,105,${opacity})`);
        grad.addColorStop(1,   `rgba(200,241,105,0)`);

        ctx.save();
        ctx.translate(x, canvas.height / 2);
        ctx.rotate(-0.45); // ~25° tilt
        ctx.translate(-x, -canvas.height / 2);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.rect(x - beam.width / 2, -canvas.height, beam.width, canvas.height * 3);
        ctx.fill();
        ctx.restore();
      });

      t++;
      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [opacity, count]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 w-full h-full"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
