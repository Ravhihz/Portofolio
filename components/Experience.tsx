const EXPERIENCE = [
  {
    role: "Fullstack Developer Intern",
    company: "Direktorat Kerjasama Strategis & Kantor Urusan Internasional — Universitas Budi Luhur",
    period: "Jul 2025 — Des 2025",
    bullets: [
      "Merancang dan membangun aplikasi LaporKUI (Web Admin & Mobile App) untuk digitalisasi layanan pengaduan mahasiswa di 4 program internasional DKSKUI UBL.",
      "Mengembangkan 5 Endpoint REST API utama menggunakan Laravel 12 dan MySQL yang mencakup otentikasi Laravel Sanctum, Role-Based Access Control (RBAC), serta struktur basis data 8 tabel.",
      "Mengintegrasikan frontend web (React.js, Inertia.js, Tailwind CSS) dan mobile client (Flutter) ke Central API Backend dengan hasil pengujian API 100% valid (Response 200 OK & 201 Created).",
      "Mengimplementasikan dashboard analitik admin dengan visualisasi statistik aduan, fitur balasan interaktif, dan pelacakan status laporan 4 tahap secara real-time, meraih nilai A- pada evaluasi.",
    ],
  },
  {
    role: "Staff Implementasi",
    company: "AIO Media",
    period: "Jan 2023 — Jan 2024",
    bullets: [
      "Merancang materi proposal penawaran jasa media periklanan Out-of-Home (OOH) untuk berbagai lini media (Commuterline, Transjakarta, Videotron LED Building, dan Cinema).",
      "Memasarkan serta mengelola dokumentasi implementasi kampanye OOH untuk brand ternama (seperti Bank Syariah Indonesia, UNAS, Nespresso, TUMI, Zara, dan Converse).",
      "Menyusun rate card, spesifikasi media, serta laporan evidence pemasangan guna memastikan kesesuaian eksekusi proyek terhadap timeline dan SLA klien.",
      "Berkoordinasi dengan vendor lokal lintas wilayah Indonesia, klien enterprise, dan tim internal untuk menjaga konsistensi data dan kelancaran operasi pemasangan.",
    ],
  },
];
export default function Experience() { return <section id="experience" className="section-shell border-t border-border py-24"><p className="section-kicker mb-4">05 / Experience</p><h2 className="section-title mb-12 font-bold">Where I&apos;ve<br /><span className="text-muted-foreground">done the work.</span></h2><div className="flex flex-col gap-4">{EXPERIENCE.map((job) => <article key={job.role} className="grid gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary sm:grid-cols-[1fr_2fr] sm:p-8"><div><p className="font-mono text-xs text-primary">{job.period}</p><h3 className="mt-3 text-xl font-bold text-foreground">{job.role}</h3><p className="mt-2 text-sm text-muted-foreground">{job.company}</p></div><ul className="max-w-xl self-start list-none flex flex-col gap-2">{job.bullets.map((b, i) => <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted-foreground"><span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />{b}</li>)}</ul></article>)}</div></section>; }
