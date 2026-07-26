import { Send, Download } from "lucide-react";
import SpotlightButton from "./SpotlightButton";

export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-[var(--border)]">
      <div className="flex items-center gap-4 mb-10">
        <span className="font-mono text-sm text-[var(--accent)]">03</span>
        <span className="text-[var(--border)]">/</span>
        <h2 className="font-mono text-2xl sm:text-3xl font-bold text-[var(--text)]">Contact</h2>
        <div className="flex-1 h-px bg-[var(--border)]" />
      </div>

      <p className="text-[var(--text-muted)] mb-2">
        Terbuka untuk peluang kerja sebagai frontend / fullstack developer.
      </p>
      <p className="text-[var(--text)] font-medium mb-8">
        Punya project yang cocok? Hubungi saya via email atau GitHub.
      </p>

      <div className="flex flex-wrap gap-3 mb-8">
        <SpotlightButton href="mailto:ravhi.satria@gmail.com">
          <Send size={18} />
          Say Hello
        </SpotlightButton>
        <SpotlightButton href="/resume.pdf" download>
          <Download size={18} />
          Download CV
        </SpotlightButton>
      </div>


    </section>
  );
}