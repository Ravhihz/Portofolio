import { Braces, FileCode2, Atom, Triangle, Wind, GitBranch, Globe, Server, Database, Lock, Zap } from "lucide-react";

const SKILLS = [
  { label: "JavaScript", icon: Braces },
  { label: "TypeScript", icon: FileCode2 },
  { label: "React", icon: Atom },
  { label: "Next.js", icon: Triangle },
  { label: "Tailwind CSS", icon: Wind },
  { label: "Laravel", icon: Server },
  { label: "MySQL", icon: Database },
  { label: "REST API", icon: Globe },
  { label: "Auth & RBAC", icon: Lock },
  { label: "Redis", icon: Zap },
  { label: "Git", icon: GitBranch },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="max-w-4xl mx-auto px-6 py-16 border-t border-[var(--border)]">
      <div className="flex items-center gap-4 mb-10">
        <span className="font-mono text-sm text-[var(--accent)]">03</span>
        <span className="text-[var(--border)]">/</span>
        <h2 className="font-mono text-2xl sm:text-3xl font-bold text-[var(--text)]">Tech Stack</h2>
        <div className="flex-1 h-px bg-[var(--border)]" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {SKILLS.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="flex items-center gap-2.5 border border-[var(--border)] bg-[var(--surface)] rounded-md px-4 py-3 hover:border-[var(--accent)] transition-colors"
          >
            <Icon size={16} className="text-[var(--accent)] shrink-0" />
            <span className="font-mono text-sm text-[var(--text)]">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}