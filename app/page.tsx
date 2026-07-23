import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Reveal from "@/components/Reveal";
import { getProjectRepos } from "@/lib/github";

export default async function Home() {
  const repos = await getProjectRepos();

  return (
    <main>
      <Hero />
      <Reveal><About /></Reveal>
      <Reveal><Projects repos={repos} /></Reveal>
      <Reveal><Skills /></Reveal>
      <Reveal><Contact /></Reveal>
    </main>
  );
}