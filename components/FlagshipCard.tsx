"use client";

import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";
import { useLang } from "@/context/LangContext";
import t from "@/lib/translations";

const REPO_URL = "https://github.com/ravhihz/LaporKUI";
const LIVE_URL = "https://laporkui.vercel.app/";
// Screenshot of the live site via thum.io (no API key needed, falls back to GitHub OG on error)
const PREVIEW_URL = "https://image.thum.io/get/width/1280/crop/720/https://laporkui.vercel.app/";

export default function FlagshipCard() {
  const { lang } = useLang();
  const tr = t.featured[lang];

  return (
    <div className="group grid overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary lg:grid-cols-[1.15fr_.85fr]">
      {/* Preview image — links to live site */}
      <a
        href={LIVE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative min-h-72 overflow-hidden bg-surface-elevated"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={PREVIEW_URL}
          alt="Preview LaporKUI"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "https://opengraph.githubassets.com/1/ravhihz/LaporKUI";
          }}
          className="h-full w-full object-cover object-top opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
          loading="lazy"
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
              aria-label="Open LaporKUI live site"
            >
              <ArrowUpRight className="text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
          <h3 className="display-type text-4xl font-bold text-foreground sm:text-5xl">LaporKUI</h3>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{tr.flagship_desc}</p>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-border pt-5">
          <span className="font-mono text-xs text-muted-foreground">{tr.tech}</span>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View LaporKUI on GitHub"
            onClick={(e) => e.stopPropagation()}
          >
            <GithubIcon className="text-muted-foreground transition-colors hover:text-primary" />
          </a>
        </div>
      </div>
    </div>
  );
}
