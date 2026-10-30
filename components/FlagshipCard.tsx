"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";
import { useLang } from "@/context/LangContext";
import t from "@/lib/translations";

const REPO_URL = "https://github.com/Ravhihz/Varion";
const LIVE_URL = "https://varion.varlabs.my.id";

export default function FlagshipCard() {
  const { lang } = useLang();
  const tr = t.featured[lang];

  return (
    <div className="group grid overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary lg:grid-cols-[1.15fr_.85fr]">
      <a
        href={LIVE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative min-h-72 overflow-hidden bg-surface-elevated"
      >
        <Image
          src="/varion-preview.png"
          alt={tr.preview_alt}
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover object-top opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <span className="absolute bottom-5 left-5 rounded-full border border-primary/40 bg-background/80 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-primary">
          {tr.badge}
        </span>
      </a>

      {/* Info */}
      <div className="flex flex-col justify-between p-7 sm:p-10">
        <div>
          <div className="mb-12 flex items-center justify-between">
            <span className="font-mono text-xs text-muted-foreground">{tr.meta}</span>
            <a
              href={LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={tr.open_live}
            >
              <ArrowUpRight className="text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
          <h3 className="display-type text-4xl font-bold text-foreground sm:text-5xl">Varion AI</h3>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{tr.flagship_desc}</p>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-border pt-5">
          <span className="font-mono text-xs text-muted-foreground">{tr.tech}</span>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={tr.view_source}
            onClick={(e) => e.stopPropagation()}
          >
            <GithubIcon className="text-muted-foreground transition-colors hover:text-primary" />
          </a>
        </div>
      </div>
    </div>
  );
}
