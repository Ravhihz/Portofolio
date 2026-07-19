import { getGithubRepos } from "@/lib/github";
import { Star, SquareArrowOutUpRight } from "lucide-react";
import { GithubIcon } from "./icons";
import FlagshipCard from "./FlagshipCard";

const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Java: "#b07219",
  PHP: "#4F5D95",
};

export default async function Projects() {
  const repos = await getGithubRepos();
  const rest = repos.filter((repo) => repo.name.toLowerCase() !== "captionin").slice(0, 4);

  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-[var(--border)]">
      <h2 className="font-mono text-2xl font-bold mb-8 text-[var(--text)]">Projects</h2>

      <FlagshipCard />

      <div className="grid gap-4 sm:grid-cols-2">
        {rest.map((repo) => (
          <div key={repo.id} className="border border-[var(--border)] bg-[var(--surface)] rounded-lg p-5 shadow-md shadow-black/20 hover:border-[var(--accent)] hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 transition-all">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-mono font-semibold">{repo.name}</h3>
              {repo.stargazers_count > 0 && (
                <span className="flex items-center gap-1 text-sm text-[var(--text-muted)]">
                  <Star size={14} />
                  {repo.stargazers_count}
                </span>
              )}
            </div>
            <p className="text-sm text-[var(--text-muted)] mb-4 line-clamp-2">{repo.description}</p>
            <div className="flex items-center gap-3 text-sm">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[var(--accent)] transition-colors">
                <GithubIcon size={14} />
                Code
              </a>
              {repo.homepage && (
                <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[var(--accent)] transition-colors">
                  <SquareArrowOutUpRight size={14} />
                  Live
                </a>
              )}
              {repo.language && (
                <span className="ml-auto flex items-center gap-1.5 text-[var(--text-muted)]">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: LANGUAGE_COLORS[repo.language] ?? "#8b8f9b" }} />
                  {repo.language}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}