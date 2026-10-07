"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { Lang } from "@/lib/translations";

interface LangContextValue {
  lang: Lang;
  toggle: () => void;
}

const LangContext = createContext<LangContextValue>({ lang: "id", toggle: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("id");

  // Persist preference
  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored === "id" || stored === "en") setLang(stored);
  }, []);

  const toggle = () =>
    setLang((prev) => {
      const next: Lang = prev === "id" ? "en" : "id";
      localStorage.setItem("lang", next);
      // Update html lang attribute dynamically
      document.documentElement.lang = next;
      return next;
    });

  return <LangContext.Provider value={{ lang, toggle }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
