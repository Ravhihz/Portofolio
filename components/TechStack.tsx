"use client";

import { Braces, FileCode2, Atom, Triangle, Wind, GitBranch, Globe, Server, Database, Lock, Zap } from "lucide-react";
import LineSidebar from "./bits/LineSidebar";
import { useLang } from "@/context/LangContext";
import t from "@/lib/translations";

const SKILLS = [
  { label: "JavaScript",  icon: Braces },
  { label: "TypeScript",  icon: FileCode2 },
  { label: "React",       icon: Atom },
  { label: "Next.js",     icon: Triangle },
  { label: "Tailwind CSS",icon: Wind },
  { label: "Laravel",     icon: Server },
  { label: "MySQL",       icon: Database },
  { label: "REST API",    icon: Globe },
  { label: "Auth & RBAC", icon: Lock },
  { label: "Redis",       icon: Zap },
  { label: "Git",         icon: GitBranch },
];

export default function TechStack() {
  const { lang } = useLang();
  const tr = t.techStack[lang];

  return (
    <section id="tech-stack" className="section-shell border-t border-border py-24">
      <LineSidebar className="mb-4 w-fit">
        <p className="section-kicker">{tr.kicker}</p>
      </LineSidebar>

      <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <h2 className="section-title font-bold">
          {tr.heading1}
          <br />
          <span className="text-muted-foreground">{tr.heading2}</span>
        </h2>
        <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">{tr.sub}</p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {SKILLS.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-4 transition-colors hover:border-primary"
          >
            <Icon className="size-4 text-primary" />
            <span className="font-mono text-xs text-foreground">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
