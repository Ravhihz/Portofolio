"use client";

import LineSidebar from "./bits/LineSidebar";
import { useLang } from "@/context/LangContext";
import t from "@/lib/translations";

export default function Experience() {
  const { lang } = useLang();
  const tr = t.experience[lang];

  return (
    <section id="experience" className="section-shell border-t border-border py-24">
      <LineSidebar className="mb-4 w-fit">
        <p className="section-kicker">{tr.kicker}</p>
      </LineSidebar>

      <h2 className="section-title mb-12 font-bold">
        {tr.heading1}
        <br />
        <span className="text-muted-foreground">{tr.heading2}</span>
      </h2>

      <div className="flex flex-col gap-4">
        {tr.jobs.map((job) => (
          <article
            key={job.role + job.period}
            className="grid gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary sm:grid-cols-[1fr_2fr] sm:p-8"
          >
            <div>
              <p className="font-mono text-xs text-primary">{job.period}</p>
              <h3 className="mt-3 text-xl font-bold text-foreground">{job.role}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{job.company}</p>
            </div>

            <ul className="max-w-xl self-start list-none flex flex-col gap-2">
              {job.bullets.map((b, i) => (
                <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  {b}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
