"use client";

import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const ROLES = [
  "frontend-heavy fullstack developer",
  "clean, typed API builder",
  "scalable web solution shipper",
  "ships real products, not just demos",
];

const STATIC_LINES = [
  { prompt: "$ whoami", output: "ravhi" },
  { prompt: "$ cat shipping.txt", output: "captionin.varstory.my.id — live in production" },
];

// dipindah ke luar component — dibikin sekali, bukan tiap render, jadi useEffect di bawah gak butuh ini di dependency array
const INTRO_LINES = [
  STATIC_LINES[0],
  { prompt: "$ cat role.txt", output: ROLES[0] },
  STATIC_LINES[1],
];

export default function Hero() {
  const [introDone, setIntroDone] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);
  const [typedOutput, setTypedOutput] = useState("");

  useEffect(() => {
    if (visibleLines >= INTRO_LINES.length) {
      setIntroDone(true);
      return;
    }

    const current = INTRO_LINES[visibleLines].output;
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

  // Fase 2: setelah intro selesai, line role.txt loop terus — ketik, tahan, hapus, ganti kata
  const [roleText, setRoleText] = useState(ROLES[0]);

  useEffect(() => {
    if (!introDone) return;

    let index = 0;
    let charIndex = ROLES[0].length;
    let phase: "hold" | "deleting" | "typing" = "hold";
    let timeout: ReturnType<typeof setTimeout>;

    function tick() {
      const word = ROLES[index];

      if (phase === "hold") {
        timeout = setTimeout(() => {
          phase = "deleting";
          tick();
        }, 2000);
        return;
      }

      if (phase === "deleting") {
        charIndex--;
        setRoleText(word.slice(0, charIndex));
        if (charIndex <= 0) {
          index = (index + 1) % ROLES.length;
          phase = "typing";
        }
        timeout = setTimeout(tick, 25);
        return;
      }

      // phase === "typing"
      const nextWord = ROLES[index];
      charIndex++;
      setRoleText(nextWord.slice(0, charIndex));
      if (charIndex >= nextWord.length) phase = "hold";
      timeout = setTimeout(tick, 35);
    }

    tick();
    return () => clearTimeout(timeout);
  }, [introDone]);

  return (
    <section id="hero" className="max-w-4xl mx-auto px-6 pt-16 pb-16">
      <h1 className="font-mono text-3xl sm:text-4xl font-bold text-[var(--text)] mb-2">
        Ravhi Haris Wibowo
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
          {!introDone ? (
            <>
              {INTRO_LINES.slice(0, visibleLines).map((line, idx) => (
                <div key={idx}>
                  <p className="text-[var(--accent)]">{line.prompt}</p>
                  <p className="text-[var(--text)]">{line.output}</p>
                </div>
              ))}

              {visibleLines < INTRO_LINES.length && (
                <div>
                  <p className="text-[var(--accent)]">{INTRO_LINES[visibleLines].prompt}</p>
                  <p className="text-[var(--text)]">
                    {typedOutput}
                    <span className="animate-pulse">▊</span>
                  </p>
                </div>
              )}
            </>
          ) : (
            <>
              <div>
                <p className="text-[var(--accent)]">{STATIC_LINES[0].prompt}</p>
                <p className="text-[var(--text)]">{STATIC_LINES[0].output}</p>
              </div>
              <div>
                <p className="text-[var(--accent)]">$ cat role.txt</p>
                <p className="text-[var(--text)]">
                  {roleText}
                  <span className="animate-pulse">▊</span>
                </p>
              </div>
              <div>
                <p className="text-[var(--accent)]">{STATIC_LINES[1].prompt}</p>
                <p className="text-[var(--text)]">{STATIC_LINES[1].output}</p>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <a href="#featured"
          className="flex items-center gap-2 bg-[var(--accent)] text-[var(--bg)] font-medium rounded-lg px-4 py-2 hover:bg-[var(--accent-dim)] transition-colors"
        >
          View Projects
        </a>
        <a href="https://github.com/ravhihz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-[var(--border)] rounded-lg px-4 py-2 hover:border-[var(--accent)] transition-colors"
        >
          <GithubIcon size={18} />
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/ravhihariswibowo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-[var(--border)] rounded-lg px-4 py-2 hover:border-[var(--accent)] transition-colors"
        >
          <LinkedinIcon size={18} />
          LinkedIn
        </a>
        <a href="mailto:ravhi.wibowo97@gmail.com"
          className="flex items-center gap-2 border border-[var(--border)] rounded-lg px-4 py-2 hover:border-[var(--accent)] transition-colors"
        >
          <Mail size={18} />
          Email
        </a>
      </div>
    </section>
  );
}