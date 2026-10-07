"use client";

import FlagshipCard from "./FlagshipCard";
import LineSidebar from "./bits/LineSidebar";
import { useLang } from "@/context/LangContext";
import t from "@/lib/translations";

export default function FeaturedProject() {
  const { lang } = useLang();
  const tr = t.featured[lang];

  return (
    <section id="featured" className="section-shell border-t border-border py-24">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <LineSidebar className="mb-4 w-fit">
            <p className="section-kicker">{tr.kicker}</p>
          </LineSidebar>
          <h2 className="section-title font-bold text-foreground">
            {tr.heading1}
            <br />
            <span className="text-muted-foreground">{tr.heading2}</span>
          </h2>
        </div>
        <p className="hidden max-w-xs text-right text-sm leading-relaxed text-muted-foreground sm:block">
          {tr.sub}
        </p>
      </div>
      <FlagshipCard />
    </section>
  );
}
