"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/context/LangContext";
import t from "@/lib/translations";

const SECTION_IDS = [
  "hero", "featured", "projects", "tech-stack",
  "about", "experience", "certifications", "contact",
] as const;

export default function Nav() {
  const { lang, toggle } = useLang();
  const tr = t.nav[lang];

  const tabs = [
    { id: "hero",          label: tr.home },
    { id: "featured",      label: tr.work },
    { id: "projects",      label: tr.projects },
    { id: "tech-stack",    label: tr.stack },
    { id: "about",         label: tr.about },
    { id: "experience",    label: tr.experience },
    { id: "certifications",label: tr.certs },
    { id: "contact",       label: tr.contact },
  ];

  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      let current: string = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2)
        current = SECTION_IDS[SECTION_IDS.length - 1];
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Primary navigation"
      className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-max -translate-x-1/2"
    >
      {/* Card Nav — glass pill */}
      <div className="flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-border bg-card/90 p-1.5 shadow-2xl shadow-black/40 backdrop-blur-xl">

        {/* Nav tabs */}
        {tabs.map((tab) => (
          <a
            key={tab.id}
            href={`#${tab.id}`}
            className={`
              relative whitespace-nowrap rounded-full px-3 py-2 font-mono text-[10px] transition-all duration-200 sm:text-xs
              ${active === tab.id
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-border/40"
              }
            `}
          >
            {tab.label}
            {/* Active indicator dot */}
            {active === tab.id && (
              <span className="absolute -top-0.5 -right-0.5 size-1.5 rounded-full bg-primary-foreground/60" />
            )}
          </a>
        ))}

        {/* Divider */}
        <span className="mx-1 h-4 w-px shrink-0 bg-border" aria-hidden />

        {/* Language toggle */}
        <button
          onClick={toggle}
          aria-label={lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
          className="
            flex shrink-0 items-center gap-0.5 rounded-full border border-border
            px-2.5 py-1.5 font-mono text-[10px] sm:text-xs
            transition-all duration-200 hover:border-primary hover:text-primary
            text-muted-foreground
          "
        >
          <span className={lang === "id" ? "text-primary font-bold" : "opacity-50"}>ID</span>
          <span className="opacity-30 mx-0.5">/</span>
          <span className={lang === "en" ? "text-primary font-bold" : "opacity-50"}>EN</span>
        </button>
      </div>
    </nav>
  );
}
