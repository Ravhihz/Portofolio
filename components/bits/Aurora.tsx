"use client";

/**
 * React Bits — Aurora
 * Animated radial gradient blobs that float in the background.
 * Inspired by reactbits.dev/backgrounds/aurora
 */

import { useEffect, useRef } from "react";

interface AuroraProps {
  /** Opacity of the aurora layer (0–1) */
  opacity?: number;
}

export default function Aurora({ opacity = 0.18 }: AuroraProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Aurora blobs — positions are defined as fractions of canvas size
    const blobs = [
      { xF: 0.15, yF: 0.25, r: 520, color: "rgba(200,241,105," },   // lime — accent
      { xF: 0.80, yF: 0.15, r: 440, color: "rgba(100,220,180," },   // teal
      { xF: 0.50, yF: 0.70, r: 480, color: "rgba(80,160,240,"  },   // blue
      { xF: 0.85, yF: 0.80, r: 360, color: "rgba(200,241,105," },   // lime again, bottom
    ];

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      blobs.forEach((blob, i) => {
        const speed = 0.00018 + i * 0.00006;
        const dx = Math.sin(t * speed + i * 1.4) * 0.08;
        const dy = Math.cos(t * speed + i * 0.9) * 0.06;

        const x = (blob.xF + dx) * canvas.width;
        const y = (blob.yF + dy) * canvas.height;

        const grad = ctx.createRadialGradient(x, y, 0, x, y, blob.r);
        grad.addColorStop(0,   `${blob.color}${opacity})`);
        grad.addColorStop(0.5, `${blob.color}${opacity * 0.35})`);
        grad.addColorStop(1,   `${blob.color}0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.ellipse(x, y, blob.r, blob.r * 0.65, i * 0.5, 0, Math.PI * 2);
        ctx.fill();
      });

      t++;
      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [opacity]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
