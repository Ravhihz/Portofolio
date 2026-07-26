import { Braces, FileCode2, Atom, Triangle, Wind, GitBranch, Globe } from "lucide-react";

const SKILLS = [
  { label: "JavaScript", icon: Braces },
  { label: "TypeScript", icon: FileCode2 },
  { label: "React", icon: Atom },
  { label: "Next.js", icon: Triangle },
  { label: "Tailwind CSS", icon: Wind },
  { label: "Git", icon: GitBranch },
  { label: "REST API", icon: Globe },
];

export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-16 border-t border-[var(--border)]">
      <div className="flex items-center gap-4 mb-10">
        <span className="font-mono text-sm text-[var(--accent)]">01</span>
        <span className="text-[var(--border)]">/</span>
        <h2 className="font-mono text-2xl sm:text-3xl font-bold text-[var(--text)]">About</h2>
        <div className="flex-1 h-px bg-[var(--border)]" />
      </div>

      <div className="space-y-4 max-w-2xl mb-12">
        <p className="text-[var(--text-muted)] leading-relaxed">
          Saya suka project yang mengharuskan saya mengambil keputusan trade-off,
          bukan cuma nyusun UI. Waktu bangun sistem rate limiting di{" "}
          <strong className="text-[var(--text)] font-semibold">Captionin</strong>,
          misalnya, saya sempat kejebak bug reset limit yang meleset dari jam
          operasional UMKM lokal — ternyata Upstash Redis default ke UTC,
          sementara target user saya beroperasi di WIB. Saya perbaiki dengan
          koreksi timezone eksplisit di layer rate limiter, bukan cuma nge-patch
          gejalanya.
        </p>
        <p className="text-[var(--text-muted)] leading-relaxed">
          Latar belakang saya sebelum coding — sempat jalanin usaha{" "}
          <strong className="text-[var(--text)] font-semibold">coffee shop</strong>{" "}
          dan kerja di{" "}
          <strong className="text-[var(--text)] font-semibold">OOH branding</strong>{" "}
          — bikin saya terbiasa mikirin siapa yang benar-benar pakai produk saya,
          bukan cuma apakah kodenya jalan.
        </p>
      </div>

      <p className="font-mono text-xs text-[var(--accent)] tracking-widest mb-4">
        // TECH STACK
      </p>

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