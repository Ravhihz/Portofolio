import { GithubRepo } from "@/types/github";

const GITHUB_USERNAME = "ravhihz";

export async function getGithubRepos(): Promise<GithubRepo[]> {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) throw new Error("Gagal fetch data GitHub");

  const repos: GithubRepo[] = await res.json();

  return repos.filter(
    (repo) => !repo.name.includes(".github.io") && repo.description
  );
}

function scoreRepo(repo: GithubRepo): number {
  let score = 0;
  if (repo.homepage) score += 3;        // ada live demo = nilai utama
  if (repo.stargazers_count > 0) score += repo.stargazers_count; // bintang
  if (repo.topics.length > 0) score += 1; // dikurasi (ada topics = diperhatiin)
  return score;
}

export async function getProjectRepos(): Promise<GithubRepo[]> {
  const repos = await getGithubRepos();

  return repos
    .filter((r) => !r.topics.includes("flagship")) // flagship sudah tampil sendiri
    .filter((r) => r.name.toLowerCase() !== "laporkui") // flagship, dobel proteksi selain topic
    .filter((r) => r.stargazers_count > 1) // minimal 2 bintang — sinyal ada orang lain yang pake
    .map((r) => ({ ...r, _score: scoreRepo(r) }))
    .sort((a, b) => b._score - a._score)
    .slice(0, 6);
}