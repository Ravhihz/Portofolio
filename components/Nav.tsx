"use client";

import { useEffect, useState } from "react";

const tabs = [
  { id: "hero",     label: "~" },
  { id: "about",    label: "about" },
  { id: "projects", label: "projects" },
  { id: "skills",   label: "skills" },
  { id: "contact",  label: "contact" },
];

export default function Nav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    tabs.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 bg-[var(--surface)]/90 backdrop-blur border border-[var(--border)] rounded-full px-2 py-1.5 shadow-xl shadow-black/40">
        {tabs.map((tab) => (
          <a
            key={tab.id}
            href={`#${tab.id}`}
            className={`font-mono text-xs px-3 py-1.5 rounded-full whitespace-nowrap transition-all ${
              active === tab.id
                ? "bg-[var(--accent)] text-[var(--bg)] font-medium"
                : "text-[var(--text-muted)] hover:text-[var(--text)]"
            }`}
          >
            {tab.label}
          </a>
        ))}
      </div>
    </nav>
  );
}