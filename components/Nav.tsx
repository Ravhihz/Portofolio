"use client";

import { useEffect, useState } from "react";

const tabs = [
  { id: "hero",           label: "~" },
  { id: "featured",       label: "Featured" },
  { id: "projects",       label: "Projects" },
  { id: "tech-stack",     label: "Stack" },
  { id: "about",          label: "About" },
  { id: "experience",     label: "Experience" },
  { id: "certifications", label: "Certs" },
  { id: "contact",        label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    function onScroll() {
      const THRESHOLD = 120; // px dari atas viewport — garis pemicu section aktif
      let current = tabs[0].id;

      for (const tab of tabs) {
        const el = document.getElementById(tab.id);
        if (el && el.getBoundingClientRect().top <= THRESHOLD) current = tab.id;
      }

      // udah mentok di paling bawah halaman — paksa tab terakhir aktif.
      // perlu ini karena section terakhir (Contact) kadang gak cukup tinggi
      // buat ngedorong bagian atasnya lewatin THRESHOLD walau udah scroll max
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) current = tabs[tabs.length - 1].id;

      setActive(current);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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