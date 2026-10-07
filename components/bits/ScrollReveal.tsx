"use client";

/**
 * React Bits — ScrollReveal
 * Words animate in as the element enters the viewport.
 * Inspired by reactbits.dev/text-animations/scroll-reveal
 */

import { useRef, useEffect, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  /** Tailwind text size class, e.g. "text-sm" */
  textSize?: string;
  /** Extra classes on the wrapper */
  className?: string;
  /** Intersection threshold 0–1 */
  threshold?: number;
}

export default function ScrollReveal({
  children,
  textSize = "text-sm",
  className = "",
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  // Split text content into words while preserving non-string children
  const content = typeof children === "string" ? children : null;

  if (!content) {
    // Non-string children — simple fade+slide reveal
    return (
      <div
        ref={ref}
        className={`transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        } ${className}`}
      >
        {children}
      </div>
    );
  }

  const words = content.split(" ");

  return (
    <div ref={ref} className={`${textSize} ${className}`} aria-label={content}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block mr-[0.28em] transition-all duration-500 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(1.2em)",
            transitionDelay: visible ? `${i * 35}ms` : "0ms",
          }}
          aria-hidden="true"
        >
          {word}
        </span>
      ))}
    </div>
  );
}
