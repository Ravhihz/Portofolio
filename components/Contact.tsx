"use client";

import { ArrowUpRight, Download, Send } from "lucide-react";
import SpotlightButton from "./SpotlightButton";
import { useLang } from "@/context/LangContext";
import t from "@/lib/translations";

export default function Contact() {
  const { lang } = useLang();
  const tr = t.contact[lang];

  return (
    <section id="contact" className="section-shell border-t border-border py-24">
      <div className="rounded-2xl border border-primary/50 bg-primary p-7 text-primary-foreground sm:p-12">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[.16em]">{tr.kicker}</p>
            <h2 className="display-type max-w-3xl text-5xl font-bold leading-[.9] sm:text-7xl">
              {tr.heading.split("\n").map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </h2>
          </div>
          <ArrowUpRight className="hidden size-16 lg:block" />
        </div>

        <p className="mt-8 max-w-lg text-sm leading-relaxed opacity-80">{tr.sub}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <SpotlightButton href="mailto:ravhi.wibowo97@gmail.com">
            <Send /> {tr.cta_hello}
          </SpotlightButton>
          <SpotlightButton href="/resume.pdf" download>
            <Download /> {tr.cta_cv}
          </SpotlightButton>
        </div>
      </div>

      <p className="mt-8 font-mono text-xs text-muted-foreground">{tr.footer}</p>
    </section>
  );
}
