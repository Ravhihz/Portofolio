const coreSkills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git",
  "REST API",
];

const learningSkills = ["Node.js"];

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-16 border-t border-[var(--border)]">
      <h2 className="font-mono text-2xl font-bold mb-6">Skills</h2>

      <div className="mb-8">
        <p className="font-mono text-xs text-[var(--accent)] uppercase tracking-wide mb-3 font-semibold">
          Core Stack
        </p>
        <div className="flex flex-wrap gap-2">
          {coreSkills.map((skill) => (
            <span
              key={skill}
              className="font-mono text-sm border-l-2 border-[var(--accent)] bg-[var(--surface)] px-4 py-1.5 text-[var(--text)] hover:bg-[var(--accent)]/10 transition-colors"
            >
              {"> "}{skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <p className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wide mb-3">
          Sedang Dipelajari
        </p>
        <div className="flex flex-wrap gap-2">
          {learningSkills.map((skill) => (
            <span
              key={skill}
              className="font-mono text-sm border-l-2 border-dashed border-[var(--border)] bg-transparent px-4 py-1.5 text-[var(--text-muted)]/60"
            >
              {"~ "}{skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}