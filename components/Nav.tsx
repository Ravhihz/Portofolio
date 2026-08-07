"use client";

import { useEffect, useState } from "react";

const tabs = [
  { id: "hero", label: "Home" }, { id: "featured", label: "Work" }, { id: "projects", label: "Projects" },
  { id: "tech-stack", label: "Stack" }, { id: "about", label: "About" }, { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certs" }, { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("hero");
  useEffect(() => {
    const onScroll = () => {
      let current = tabs[0].id;
      for (const tab of tabs) { const el = document.getElementById(tab.id); if (el && el.getBoundingClientRect().top <= 140) current = tab.id; }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) current = tabs.at(-1)?.id ?? current;
      setActive(current);
    };
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <nav aria-label="Primary navigation" className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-max -translate-x-1/2"><div className="flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-border bg-card/90 p-1.5 shadow-2xl shadow-black/40 backdrop-blur-xl">{tabs.map((tab) => <a key={tab.id} href={`#${tab.id}`} className={`whitespace-nowrap rounded-full px-3 py-2 font-mono text-[10px] transition-colors sm:text-xs ${active === tab.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>{tab.label}</a>)}</div></nav>;
}
