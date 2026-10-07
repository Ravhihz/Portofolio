"use client";

/**
 * React Bits — LineSidebar
 * Animated vertical accent line beside section kickers.
 * Inspired by reactbits.dev line-sidebar pattern.
 */

import { useRef, useEffect, useState, ReactNode } from "react";

interface LineSidebarProps {
  children: ReactNode;
  className?: string;
}

export default function LineSidebar({ children, className = "" }: LineSidebarProps) {
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
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`relative flex gap-4 ${className}`}>
      {/* Animated vertical line */}
      <div
        className="shrink-0 w-[2px] rounded-full bg-primary origin-top transition-all duration-700 ease-out"
        style={{
          transform: visible ? "scaleY(1)" : "scaleY(0)",
          opacity: visible ? 1 : 0,
          height: "100%",
        }}
      />
      {/* Content */}
      <div
        className="transition-all duration-700 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateX(0)" : "translateX(-8px)",
          transitionDelay: "120ms",
        }}
      >
        {children}
      </div>
    </div>
  );
}
