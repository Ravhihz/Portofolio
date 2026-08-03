const EXPERIENCE = [
  {
    role: "Fullstack Developer Intern",
    company: "Direktorat Kerjasama Strategis & Kantor Urusan Internasional, Universitas Budi Luhur",
    period: "Jul 2025 — Sep 2025",
    summary:
      "Membangun LaporKUI dari nol — RESTful API Laravel 12 + MySQL, autentikasi Sanctum, RBAC, notifikasi real-time via Pusher, dan frontend React + Inertia.js. Deploy ke live hosting.",
  },
  {
    role: "Staff Implementasi",
    company: "AIO Media",
    period: "Jan 2023 — Jan 2024",
    summary:
      "Mengelola dokumentasi implementasi proyek OOH branding, koordinasi dengan vendor & klien, dan memastikan data implementasi konsisten dengan timeline.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-[var(--border)]">
      <div className="flex items-center gap-4 mb-10">
        <span className="font-mono text-sm text-[var(--accent)]">05</span>
        <span className="text-[var(--border)]">/</span>
        <h2 className="font-mono text-2xl sm:text-3xl font-bold text-[var(--text)]">Experience</h2>
        <div className="flex-1 h-px bg-[var(--border)]" />
      </div>

      <div className="space-y-6">
        {EXPERIENCE.map((job) => (
          <div
            key={job.role + job.company}
            className="border border-[var(--border)] bg-[var(--surface)] rounded-lg px-5 py-4 hover:border-[var(--accent)] transition-colors"
          >
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
              <h3 className="font-mono text-base font-semibold text-[var(--text)]">{job.role}</h3>
              <span className="font-mono text-xs text-[var(--accent)]">{job.period}</span>
            </div>
            <p className="text-sm text-[var(--text-muted)] mb-2">{job.company}</p>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">{job.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}