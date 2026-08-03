import { Award } from "lucide-react";

const CERTIFICATIONS = [
  {
    title: "Basic Computer Algorithm Competency",
    issuer: "Universitas Budi Luhur",
    date: "Juli 2025",
    credentialId: "F/UBL/FTI/000/029/07/25",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-4xl mx-auto px-6 py-16 border-t border-[var(--border)]">
      <div className="flex items-center gap-4 mb-10">
        <span className="font-mono text-sm text-[var(--accent)]">06</span>
        <span className="text-[var(--border)]">/</span>
        <h2 className="font-mono text-2xl sm:text-3xl font-bold text-[var(--text)]">Certifications</h2>
        <div className="flex-1 h-px bg-[var(--border)]" />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {CERTIFICATIONS.map((cert) => (
          <div
            key={cert.credentialId}
            className="flex gap-3 border border-[var(--border)] bg-[var(--surface)] rounded-lg px-5 py-4 hover:border-[var(--accent)] transition-colors"
          >
            <Award size={18} className="text-[var(--accent)] shrink-0 mt-0.5" />
            <div>
              <p className="font-mono text-sm font-semibold text-[var(--text)] mb-1">{cert.title}</p>
              <p className="text-sm text-[var(--text-muted)]">{cert.issuer} · {cert.date}</p>
              <p className="font-mono text-xs text-[var(--text-muted)]/70 mt-1">{cert.credentialId}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}