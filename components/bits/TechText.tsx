"use client";

/**
 * React Bits — TechText
 * Characters scramble then resolve to the real text on mount / hover.
 * Inspired by reactbits.dev/text-animations/decrypted-text
 */

import { useRef, useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";

function scramble(target: string, progress: number): string {
  return target
    .split("")
    .map((char, i) => {
      if (char === " ") return " ";
      if (i < Math.floor(progress * target.length)) return char;
      return CHARS[Math.floor(Math.random() * CHARS.length)];
    })
    .join("");
}

interface TechTextProps {
  text: string;
  /** Play on mount automatically */
  autoPlay?: boolean;
  /** Extra wrapper classes */
  className?: string;
  /** Duration of reveal in ms */
  duration?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function TechText({
  text,
  autoPlay = true,
  className = "",
  duration = 900,
  as: Tag = "span",
}: TechTextProps) {
  const [displayed, setDisplayed] = useState(text);
  const [playing, setPlaying] = useState(false);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  const play = () => {
    if (playing) return;
    setPlaying(true);
    startRef.current = null;

    const animate = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      setDisplayed(scramble(text, progress));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayed(text);
        setPlaying(false);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (autoPlay) {
      // Small delay so it triggers after mount paint
      const timer = setTimeout(play, 200);
      return () => {
        clearTimeout(timer);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, text]);

  // Re-scramble when text changes (language toggle)
  const prevText = useRef(text);
  useEffect(() => {
    if (prevText.current !== text) {
      prevText.current = text;
      play();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <Tag
      className={`font-mono ${className}`}
      onMouseEnter={play}
      aria-label={text}
    >
      {displayed}
    </Tag>
  );
}
