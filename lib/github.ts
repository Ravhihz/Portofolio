import { GithubRepo } from "@/types/github";

const GITHUB_USERNAME = "ravhihz";

export async function getGithubRepos(): Promise<GithubRepo[]> {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
    { next: { revalidate: 3600 } } // cache 1 jam, biar gak spam GitHub API tiap request
  );

  if (!res.ok) {
    throw new Error("Gagal fetch data GitHub");
  }

  const repos: GithubRepo[] = await res.json();

  // cuma tampilin repo asli (bukan .github.io) yang punya deskripsi, biar curated
  return repos.filter(
    (repo) => !repo.name.includes(".github.io") && repo.description
  );
}