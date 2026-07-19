export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-16 border-t border-[var(--border)]">
      <h2 className="font-mono text-2xl font-bold mb-6 text-[var(--text)]">About</h2>
      <p className="text-[var(--text-muted)] leading-relaxed max-w-xl text-justify hyphens-auto mb-4">
        Saya suka project yang mengharuskan saya mengambil keputusan trade-off,
        bukan cuma nyusun UI. Waktu bangun sistem rate limiting di Captionin,
        misalnya, saya sempat kejebak bug reset limit yang meleset dari jam
        operasional UMKM lokal — ternyata Upstash Redis default ke UTC,
        sementara target user saya beroperasi di WIB. Saya perbaiki dengan
        koreksi timezone eksplisit di layer rate limiter, bukan cuma nge-patch
        gejalanya.
      </p>
      <p className="text-[var(--text-muted)] leading-relaxed max-w-xl text-justify hyphens-auto">
        Latar belakang saya sebelum coding — sempat jalanin usaha coffee shop
        dan kerja di OOH branding — bikin saya terbiasa mikirin siapa yang
        benar-benar pakai produk saya, bukan cuma apakah kodenya jalan.
      </p>
    </section>
  );
}