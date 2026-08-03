export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-16 border-t border-[var(--border)]">
      <div className="flex items-center gap-4 mb-10">
        <span className="font-mono text-sm text-[var(--accent)]">04</span>
        <span className="text-[var(--border)]">/</span>
        <h2 className="font-mono text-2xl sm:text-3xl font-bold text-[var(--text)]">About Me</h2>
        <div className="flex-1 h-px bg-[var(--border)]" />
      </div>

      <div className="space-y-4 max-w-2xl">
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
    </section>
  );
}