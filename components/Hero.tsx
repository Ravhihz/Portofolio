"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowDownRight, ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import TechText from "./bits/TechText";
import { useLang } from "@/context/LangContext";
import t from "@/lib/translations";

export default function Hero() {
  const { lang } = useLang();
  const tr = t.hero[lang];

  const ROLES = tr.roles;
  const INTRO_LINES = [
    { prompt: "$ whoami", output: tr.whoami_output },
    { prompt: "$ cat role.txt", output: ROLES[0] },
    { prompt: "$ cat shipping.txt", output: tr.shipping_output },
  ];

  const [introDone, setIntroDone] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);
  const [typedOutput, setTypedOutput] = useState("");
  const [roleText, setRoleText] = useState<string>(ROLES[0]);
  const introPlayedRef = useRef(false);

  // Intro typewriter — run once on mount
  useEffect(() => {
    if (introPlayedRef.current) return;
    introPlayedRef.current = true;
    setVisibleLines(0);
    setTypedOutput("");
    setIntroDone(false);
  }, []);

  useEffect(() => {
    if (visibleLines >= INTRO_LINES.length) return;
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
          if (visibleLines === INTRO_LINES.length - 1) setIntroDone(true);
        }, 280);
      }
    }, 22);
    return () => clearInterval(typing);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleLines]);

  // Role cycling typewriter
  useEffect(() => {
    if (!introDone) return;
    let index = 0;
    let charIndex = ROLES[0].length;
    let phase: "hold" | "deleting" | "typing" = "hold";
    let timeout: ReturnType<typeof setTimeout>;
    const tick = () => {
      const word = ROLES[index];
      if (phase === "hold") {
        timeout = setTimeout(() => { phase = "deleting"; tick(); }, 1800);
        return;
      }
      if (phase === "deleting") {
        charIndex--;
        setRoleText(word.slice(0, charIndex));
        if (charIndex <= 0) { index = (index + 1) % ROLES.length; phase = "typing"; }
        timeout = setTimeout(tick, 22);
        return;
      }
      charIndex++;
      setRoleText(ROLES[index].slice(0, charIndex));
      if (charIndex >= ROLES[index].length) phase = "hold";
      timeout = setTimeout(tick, 32);
    };
    tick();
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [introDone]);

  return (
    <section
      id="hero"
      className="section-shell flex min-h-[92vh] flex-col justify-center gap-12 py-24 lg:flex-row lg:items-center lg:gap-20"
    >
      {/* ── Left col ── */}
      <div className="flex-1">
        {/* Available badge */}
        <div className="mb-7 flex items-center gap-3">
          <span className="size-2 rounded-full bg-primary shadow-[0_0_14px_var(--accent)]" />
          <span className="section-kicker">{tr.available}</span>
        </div>

        {/* Heading with TechText on second line */}
        <h1 className="display-type max-w-4xl text-6xl font-bold leading-[.9] sm:text-8xl">
          {tr.heading1}
          <br />
          <TechText
            text={tr.heading2}
            className="text-primary text-6xl sm:text-8xl font-bold display-type leading-[.9]"
            duration={800}
          />
        </h1>

        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {tr.subtitle}
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#featured"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            {tr.cta_work}
            <ArrowDownRight className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
          </a>
          <a
            href="mailto:ravhi.wibowo97@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm text-foreground transition-colors hover:border-primary"
          >
            <Mail data-icon="inline-start" /> {tr.cta_talk}
          </a>
        </div>

        {/* Stats */}
        <div className="mt-12 flex gap-8 border-t border-border pt-5">
          <div>
            <p className="font-mono text-2xl font-bold text-foreground">{tr.stat1_num}</p>
            <p className="text-xs text-muted-foreground">{tr.stat1_label}</p>
          </div>
          <div>
            <p className="font-mono text-2xl font-bold text-foreground">{tr.stat2_num}</p>
            <p className="text-xs text-muted-foreground">{tr.stat2_label}</p>
          </div>
          <div className="flex items-center gap-3">
            <a aria-label="GitHub" href="https://github.com/ravhihz" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <GithubIcon />
            </a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/ravhihariswibowo" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>

      {/* ── Terminal widget ── */}
      <div className="w-full max-w-md rotate-1 rounded-2xl border border-border bg-card p-2 shadow-2xl shadow-black/40 lg:rotate-2">
        <div className="rounded-xl border border-border bg-background">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <span className="font-mono text-xs text-muted-foreground">{tr.terminal_title}</span>
            <span className="font-mono text-[10px] text-primary">LIVE</span>
          </div>
          <div className="min-h-64 p-5 font-mono text-xs leading-7 sm:text-sm">
            {!introDone ? (
              <>
                {INTRO_LINES.slice(0, visibleLines).map((line, idx) => (
                  <div key={idx} className="mb-3">
                    <p className="text-primary">{line.prompt}</p>
                    <p className="text-foreground">{line.output}</p>
                  </div>
                ))}
                {visibleLines < INTRO_LINES.length && (
                  <div>
                    <p className="text-primary">{INTRO_LINES[visibleLines].prompt}</p>
                    <p className="text-foreground">
                      {typedOutput}
                      <span className="animate-pulse">▋</span>
                    </p>
                  </div>
                )}
              </>
            ) : (
              <>
                <p className="text-primary">$ whoami</p>
                <p className="mb-3 text-foreground">{tr.whoami_output}</p>
                <p className="text-primary">$ cat role.txt</p>
                <p className="mb-3 text-foreground">
                  {roleText}
                  <span className="animate-pulse">▋</span>
                </p>
                <p className="text-primary">$ cat shipping.txt</p>
                <p className="text-foreground">captionin.varstory.my.id</p>
              </>
            )}
          </div>
          <div className="flex items-center justify-between px-4 py-3 font-mono text-[10px] text-muted-foreground">
            <span>{tr.terminal_footer}</span>
            <ArrowUpRight className="size-4 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}
