"use client";

import { useState } from "react";
import { GithubRepo } from "@/types/github";
import FlagshipCard from "./FlagshipCard";
import ProjectModal from "./ProjectModal";

const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Java: "#b07219",
  PHP: "#4F5D95",
};

// Projects sekarang terima repos sebagai prop — fetch tetap di server (page.tsx)
export default function Projects({ repos }: { repos: GithubRepo[] }) {
  const [selected, setSelected] = useState<GithubRepo | null>(null);

  const rest = repos
    .filter((r) => !r.topics.includes("flagship") && !r.name.includes(".github.io"))
    .slice(0, 6);

  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-[var(--border)]">
      <h2 className="font-mono text-2xl font-bold mb-8 text-[var(--text)]">Projects</h2>

      <FlagshipCard />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((repo) => (
          <button
            key={repo.id}
            onClick={() => setSelected(repo)}
            className="text-left border border-[var(--border)] bg-[var(--surface)] rounded-lg p-5 hover:border-[var(--accent)] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30 transition-all group"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-mono font-semibold text-sm text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                {repo.name}
              </h3>
              {repo.stargazers_count > 0 && (
                <span className="text-xs text-[var(--text-muted)] flex items-center gap-0.5 shrink-0 ml-2">
                  ★ {repo.stargazers_count}
                </span>
              )}
            </div>

            <p className="text-xs text-[var(--text-muted)] line-clamp-2 mb-4 leading-relaxed">
              {repo.description ?? "—"}
            </p>

            <div className="flex items-center justify-between">
              {repo.language ? (
                <span className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: LANGUAGE_COLORS[repo.language] ?? "#8b8f9b" }}
                  />
                  {repo.language}
                </span>
              ) : <span />}
              <span className="text-xs text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                lihat →
              </span>
            </div>
          </button>
        ))}
      </div>

      <ProjectModal repo={selected} onClose={() => setSelected(null)} />
    </section>
  );
}