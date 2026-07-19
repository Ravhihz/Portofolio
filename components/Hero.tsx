"use client";

import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const LINES = [
  { prompt: "$ whoami", output: "ravhi hz" },
  { prompt: "$ cat role.txt", output: "frontend-heavy fullstack developer" },
  { prompt: "$ cat shipping.txt", output: "captionin.varstory.my.id — live in production" },
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [typedOutput, setTypedOutput] = useState("");

  useEffect(() => {
    if (visibleLines >= LINES.length) return;

    const current = LINES[visibleLines].output;
    let i = 0;

    const typing = setInterval(() => {
      i++;
      setTypedOutput(current.slice(0, i));
      if (i >= current.length) {
        clearInterval(typing);
        setTimeout(() => {
          setVisibleLines((v) => v + 1);
          setTypedOutput("");
        }, 300);
      }
    }, 25);

    return () => clearInterval(typing);
  }, [visibleLines]);

  return (
    <section id="hero" className="max-w-4xl mx-auto px-6 pt-16 pb-16">
      <h1 className="font-mono text-3xl sm:text-4xl font-bold text-[var(--text)] mb-2">
        Ravhi Hz
      </h1>
      <p className="text-[var(--text)] text-lg sm:text-xl font-semibold mb-3 leading-snug">
        Frontend-Heavy Fullstack Developer <span className="text-[var(--text-muted)] font-normal">— Fresh Graduate S.Kom Teknik Informatika</span>
      </p>
      <p className="text-[var(--accent)] mb-8 text-sm font-medium">
        Membangun & merilis Captionin — SaaS AI caption generator untuk UMKM, live in production.
      </p>

      <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] overflow-hidden mb-8 shadow-xl shadow-black/40">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[var(--border)]">
          <span className="w-3 h-3 rounded-full bg-red-500/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <span className="w-3 h-3 rounded-full bg-green-500/70" />
          <span className="ml-3 font-mono text-xs text-[var(--text-muted)]">zsh</span>
        </div>

        <div className="p-6 font-mono text-sm space-y-2 min-h-[200px]">
          {LINES.slice(0, visibleLines).map((line, idx) => (
            <div key={idx}>
              <p className="text-[var(--accent)]">{line.prompt}</p>
              <p className="text-[var(--text)]">{line.output}</p>
            </div>
          ))}

          {visibleLines < LINES.length && (
            <div>
              <p className="text-[var(--accent)]">{LINES[visibleLines].prompt}</p>
              <p className="text-[var(--text)]">
                {typedOutput}
                <span className="animate-pulse">▊</span>
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <a href="https://github.com/ravhihz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-[var(--border)] rounded-lg px-4 py-2 hover:border-[var(--accent)] transition-colors"
        >
          <GithubIcon size={18} />
          GitHub
        </a>
        <a href="https://linkedin.com/in/ravhihz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-[var(--border)] rounded-lg px-4 py-2 hover:border-[var(--accent)] transition-colors"
        >
          <LinkedinIcon size={18} />
          LinkedIn
        </a>
        <a href="mailto:ravhi.satria@gmail.com"
          className="flex items-center gap-2 border border-[var(--border)] rounded-lg px-4 py-2 hover:border-[var(--accent)] transition-colors"
        >
          <Mail size={18} />
          Email
        </a>
      </div>
    </section>
  );
}