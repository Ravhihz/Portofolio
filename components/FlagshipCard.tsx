// components/FlagshipCard.tsx
"use client";

import { GithubIcon } from "./icons";

const LANGUAGE_COLORS: Record<string, string> = {
  PHP: "#4F5D95",
};

const PINNED_PROJECT = {
  name: "LaporKUI",
  description:
    "Platform pengaduan berbasis web untuk mahasiswa & masyarakat umum — submission lampiran, tracking status real-time, sistem balasan admin, QR code per laporan, dan RBAC terpisah untuk role user/admin. Notifikasi real-time via Pusher, email via SendGrid. Dibangun saat internship di Universitas Budi Luhur.",
  html_url: "https://github.com/ravhihz/LaporKUI",
  language: "PHP",
};

// pakai GitHub's OpenGraph image — bukan screenshot live demo karena project ini
// pakai FastText yang butuh environment khusus, gak bisa di-deploy ke hosting biasa
const previewUrl = `https://opengraph.githubassets.com/1/ravhihz/LaporKUI`;

export default function FlagshipCard() {
  return (
    
      <a href={PINNED_PROJECT.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-[var(--accent)] bg-[var(--surface)] rounded-lg overflow-hidden shadow-lg shadow-black/25 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-black/40 transition-all"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={previewUrl}
        alt={`Preview ${PINNED_PROJECT.name}`}
        className="w-full h-48 object-cover object-top border-b border-[var(--border)]"
        loading="lazy"
      />

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-xs text-[var(--accent)] uppercase tracking-wide">
            Flagship — Internship Project
          </span>
          <span className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
            <GithubIcon size={14} className="group-hover:text-[var(--accent)] transition-colors" />
            Code
          </span>
        </div>
        <h3 className="font-mono font-semibold text-lg mb-2">{PINNED_PROJECT.name}</h3>
        <p className="text-sm text-[var(--text-muted)] mb-3">{PINNED_PROJECT.description}</p>
        <div className="flex items-center gap-1.5 text-sm text-[var(--text-muted)]">
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: LANGUAGE_COLORS[PINNED_PROJECT.language] }} />
          {PINNED_PROJECT.language}
        </div>
      </div>
    </a>
  );
}