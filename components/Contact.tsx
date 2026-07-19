import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-[var(--border)]">
      <h2 className="font-mono text-2xl font-bold mb-4 text-[var(--text)]">Contact</h2>
      <p className="text-[var(--text-muted)] mb-2">
        Terbuka untuk peluang kerja sebagai frontend / fullstack developer.
      </p>
      <p className="text-[var(--text)] font-medium mb-8">
        Punya role yang cocok? Hubungi saya — biasanya respons dalam 24 jam.
      </p>

      <div className="flex flex-col gap-3 max-w-sm">
        <a href="mailto:ravhi.satria@gmail.com"
          className="flex items-center gap-3 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
        >
          <Mail size={18} />
          ravhi.satria@gmail.com
        </a>
        <a href="https://wa.me/6282210520690"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
        >
          <Phone size={18} />
          WhatsApp
        </a>
        <a href="https://github.com/ravhihz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
        >
          <GithubIcon size={18} />
          github.com/ravhihz
        </a>
        <a href="https://linkedin.com/in/ravhihz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
        >
          <LinkedinIcon size={18} />
          LinkedIn
        </a>
      </div>
    </section>
  );
}