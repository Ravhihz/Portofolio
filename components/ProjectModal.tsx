"use client";

import { useEffect } from "react";
import { X, SquareArrowOutUpRight, Star } from "lucide-react";
import { GithubIcon } from "./icons";
import { GithubRepo } from "@/types/github";

const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Java: "#b07219",
  PHP: "#4F5D95",
};

export default function ProjectModal({
  repo,
  onClose,
}: {
  repo: GithubRepo | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!repo) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [repo, onClose]);

  if (!repo) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      onClick={onClose}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* modal */}
      <div
        className="relative z-10 w-full sm:max-w-lg bg-[var(--surface)] border border-[var(--border)] sm:rounded-lg rounded-t-lg shadow-2xl shadow-black/60 animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* header */}
        <div className="flex items-start justify-between p-6 border-b border-[var(--border)]">
          <div>
            <p className="font-mono text-xs text-[var(--accent)] uppercase tracking-wide mb-1">
              Project
            </p>
            <h3 className="font-mono font-bold text-lg text-[var(--text)]">
              {repo.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors p-1 -mr-1 -mt-1"
            aria-label="Tutup"
          >
            <X size={20} />
          </button>
        </div>

        {/* body */}
        <div className="p-6 space-y-5">
          {repo.description && (
            <p className="text-[var(--text-muted)] leading-relaxed text-sm">
              {repo.description}
            </p>
          )}

          {/* meta row */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
            {repo.language && (
              <span className="flex items-center gap-1.5">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{
                    backgroundColor:
                      LANGUAGE_COLORS[repo.language] ?? "#8b8f9b",
                  }}
                />
                {repo.language}
              </span>
            )}
            {repo.stargazers_count > 0 && (
              <span className="flex items-center gap-1">
                <Star size={13} />
                {repo.stargazers_count}
              </span>
            )}
            <span className="text-xs">
              Updated{" "}
              {new Date(repo.updated_at).toLocaleDateString("id-ID", {
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>

          {/* topics */}
          {repo.topics.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {repo.topics.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs border border-[var(--border)] px-2 py-0.5 text-[var(--text-muted)]"
                >
                  #{t}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* footer actions */}
        <div className="flex gap-3 px-6 pb-6">
          
            <a href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-[var(--border)] rounded px-4 py-2 text-sm hover:border-[var(--accent)] hover:text-[var(--text)] text-[var(--text-muted)] transition-colors"
          >
            <GithubIcon size={15} />
            Source
          </a>
          {repo.homepage && (
            
              <a href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[var(--accent)] text-[var(--bg)] rounded px-4 py-2 text-sm font-medium hover:bg-[var(--accent-dim)] transition-colors"
            >
              <SquareArrowOutUpRight size={15} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}