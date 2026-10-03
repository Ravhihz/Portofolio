import { Award } from "lucide-react";
const CERTIFICATIONS = [
  {
    title: "Basic Computer Algorithm Competency",
    issuer: "Universitas Budi Luhur",
    date: "Juli 2025",
    credentialId: "F/UBL/FTI/000/029/07/25",
    competencies: "Aritmatika & tipe data, logika kondisional, iterasi, array 1D, blok fungsi, dan pemecahan masalah menggunakan bahasa C.",
  },
  {
    title: "Penggunaan Tools Artificial Intelligence untuk Kesiapan Kerja dan Karir",
    issuer: "BBPVP Serang",
    date: "Mei 2026",
    credentialId: "260512DF736997",
    competencies: "Menentukan sasaran bisnis solusi AI dan mengintegrasikan komponen solusi Artificial Intelligence (AI).",
  },
  {
    title: "Intro to Software Engineering",
    issuer: "RevoU Coding Camp",
    date: "Agt 2026",
    credentialId: "CCSE-100826-01-1-00004",
    competencies: "Pemahaman dasar rekayasa perangkat lunak, metodologi pengembangan aplikasi, dan pengenalan alur kerja software engineering.",
  },
  {
    title: "EF SET English Certificate — C2 Proficient",
    issuer: "EF SET",
    date: "Sep 2026",
    credentialId: "prg45T",
    competencies: "Reading & Listening C2 Proficient (skor 74/100 skala EF SET). Catatan: hasil 50-menit Quick Check, bukan full test 120 menit.",
  },
];
export default function Certifications() { return <section id="certifications" className="section-shell border-t border-border py-24"><p className="section-kicker mb-4">06 / Credentials</p><h2 className="section-title mb-10 font-bold">Proof of<br /><span className="text-muted-foreground">continuous learning.</span></h2><div className="grid gap-4 sm:grid-cols-2">{CERTIFICATIONS.map((cert) => <div key={cert.credentialId} className="flex gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary"><Award className="mt-1 size-5 shrink-0 text-primary" /><div><h3 className="font-mono text-sm font-bold text-foreground">{cert.title}</h3><p className="mt-2 text-sm text-muted-foreground">{cert.issuer} · {cert.date}</p><p className="mt-3 text-xs text-muted-foreground">{cert.competencies}</p><p className="mt-4 font-mono text-[10px] text-muted-foreground">ID / {cert.credentialId}</p></div></div>)}</div></section>; }
