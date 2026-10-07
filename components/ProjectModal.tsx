"use client";

import { useEffect } from "react";
import { X, SquareArrowOutUpRight, Star } from "lucide-react";
import { GithubIcon } from "./icons";
import { GithubRepo } from "@/types/github";
import { useLang } from "@/context/LangContext";
import t from "@/lib/translations";

const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: "#f1e05a", TypeScript: "#3178c6", Python: "#3572A5",
  HTML: "#e34c26", CSS: "#563d7c", Java: "#b07219", PHP: "#4F5D95",
};

const DATE_LOCALE: Record<string, string> = { id: "id-ID", en: "en-US" };

export default function ProjectModal({
  repo,
  onClose,
}: {
  repo: GithubRepo | null;
  onClose: () => void;
}) {
  const { lang } = useLang();
  const tr = t.projects[lang];

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
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative z-10 w-full sm:max-w-lg bg-[var(--surface)] border border-[var(--border)] sm:rounded-lg rounded-t-lg shadow-2xl shadow-black/60 animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-[var(--border)]">
          <div>
            <p className="font-mono text-xs text-[var(--accent)] uppercase tracking-wide mb-1">
              {tr.modal_kicker}
            </p>
            <h3 className="font-mono font-bold text-lg text-foreground">{repo.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors p-1 -mr-1 -mt-1"
            aria-label={tr.modal_close}
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          {repo.description && (
            <p className="text-muted-foreground leading-relaxed text-sm">{repo.description}</p>
          )}

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            {repo.language && (
              <span className="flex items-center gap-1.5">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: LANGUAGE_COLORS[repo.language] ?? "#8b8f9b" }}
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
              {tr.modal_updated}{" "}
              {new Date(repo.updated_at).toLocaleDateString(DATE_LOCALE[lang], {
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>

          {/* Topics */}
          {repo.topics.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {repo.topics.map((topic) => (
                <span
                  key={topic}
                  className="font-mono text-xs border border-border px-2 py-0.5 text-muted-foreground"
                >
                  #{topic}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="flex gap-3 px-6 pb-6">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-border rounded px-4 py-2 text-sm hover:border-primary hover:text-foreground text-muted-foreground transition-colors"
          >
            <GithubIcon size={15} />
            {tr.modal_source}
          </a>
          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary text-primary-foreground rounded px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <SquareArrowOutUpRight size={15} />
              {tr.modal_demo}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
