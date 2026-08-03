import Hero from "@/components/Hero";
import FeaturedProject from "@/components/FeaturedProject";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Reveal from "@/components/Reveal";
import { getProjectRepos } from "@/lib/github";

export default async function Home() {
  const repos = await getProjectRepos();

  return (
    <main>
      <Hero />
      <Reveal><FeaturedProject /></Reveal>
      <Reveal><Projects repos={repos} /></Reveal>
      <Reveal><TechStack /></Reveal>
      <Reveal><About /></Reveal>
      <Reveal><Experience /></Reveal>
      <Reveal><Certifications /></Reveal>
      <Reveal><Contact /></Reveal>
    </main>
  );
}