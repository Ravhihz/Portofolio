"use client";

import { useEffect, useState } from "react";

const tabs = [
  { id: "hero", label: "Hero.tsx" },
  { id: "about", label: "About.tsx" },
  { id: "projects", label: "Projects.tsx" },
  { id: "skills", label: "Skills.tsx" },
  { id: "contact", label: "Contact.tsx" },
];

export default function Nav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" } // trigger pas section ada di tengah viewport
    );

    tabs.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-[var(--bg)]/90 backdrop-blur border-b border-[var(--border)]">
      <div className="max-w-4xl mx-auto px-6 flex items-center gap-1 overflow-x-auto">
        {tabs.map((tab) => (
          
            <a key={tab.id}
            href={`#${tab.id}`}
            className={`font-mono text-sm px-4 py-3 border-b-2 whitespace-nowrap transition-colors ${
              active === tab.id
                ? "border-[var(--accent)] text-[var(--text)]"
                : "border-transparent text-[var(--text-muted)] hover:text-[var(--text)]"
            }`}
          >
            {tab.label}
          </a>
        ))}
      </div>
    </nav>
  );
}