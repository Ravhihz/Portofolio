"use client";

import { Award } from "lucide-react";
import LineSidebar from "./bits/LineSidebar";
import { useLang } from "@/context/LangContext";
import t from "@/lib/translations";

export default function Certifications() {
  const { lang } = useLang();
  const tr = t.certifications[lang];

  return (
    <section id="certifications" className="section-shell border-t border-border py-24">
      <LineSidebar className="mb-4 w-fit">
        <p className="section-kicker">{tr.kicker}</p>
      </LineSidebar>

      <h2 className="section-title mb-10 font-bold">
        {tr.heading1}
        <br />
        <span className="text-muted-foreground">{tr.heading2}</span>
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {tr.items.map((cert) => (
          <div
            key={cert.credentialId}
            className="flex gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary"
          >
            <Award className="mt-1 size-5 shrink-0 text-primary" />
            <div>
              <h3 className="font-mono text-sm font-bold text-foreground">{cert.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{cert.issuer} · {cert.date}</p>
              <p className="mt-3 text-xs text-muted-foreground">{cert.competencies}</p>
              <p className="mt-4 font-mono text-[10px] text-muted-foreground">{tr.id_prefix} {cert.credentialId}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
