// components/FlagshipCard.tsx
"use client";

import { SquareArrowOutUpRight } from "lucide-react";
import { GithubIcon } from "./icons";

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
};

const PINNED_PROJECT = {
  name: "Captionin",
  description:
    "SaaS AI caption generator untuk UMKM Indonesia — sistem kredit prabayar, autentikasi Google OAuth, rate limiting berbasis Redis, generation lewat Groq API. Live di production, bukan sekadar demo.",
  homepage: "https://captionin.varstory.my.id",
  html_url: "https://github.com/ravhihz/captionin",
  language: "TypeScript",
};

const previewUrl = `https://api.microlink.io/?url=${encodeURIComponent(
  PINNED_PROJECT.homepage
)}&screenshot=true&meta=false&waitUntil=networkidle2&embed=screenshot.url`;

export default function FlagshipCard() {
  return (
    <div
      role="link"
      tabIndex={0}
      onClick={() => window.open(PINNED_PROJECT.homepage, "_blank", "noopener,noreferrer")}
      onKeyDown={(e) => {
        if (e.key === "Enter") window.open(PINNED_PROJECT.homepage, "_blank", "noopener,noreferrer");
      }}
      className="group cursor-pointer block border border-[var(--accent)] bg-[var(--surface)] rounded-lg overflow-hidden mb-4 shadow-lg shadow-black/25 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-black/40 transition-all"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={previewUrl}
        alt={`Screenshot ${PINNED_PROJECT.name}`}
        className="w-full h-48 object-cover object-top border-b border-[var(--border)]"
        loading="lazy"
      />

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-xs text-[var(--accent)] uppercase tracking-wide">
            Flagship — Live in Production
          </span>
          <SquareArrowOutUpRight size={16} className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors" />
        </div>
        <h3 className="font-mono font-semibold text-lg mb-2">{PINNED_PROJECT.name}</h3>
        <p className="text-sm text-[var(--text-muted)] mb-3">{PINNED_PROJECT.description}</p>
        <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: LANGUAGE_COLORS[PINNED_PROJECT.language] }} />
            {PINNED_PROJECT.language}
          </span>
          <a href={PINNED_PROJECT.html_url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 hover:text-[var(--accent)] transition-colors"
          >
            <GithubIcon size={14} />
            Code
          </a>
        </div>
      </div>
    </div>
  );
}