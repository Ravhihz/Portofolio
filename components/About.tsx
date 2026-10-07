"use client";

import LineSidebar from "./bits/LineSidebar";
import { useLang } from "@/context/LangContext";

export default function About() {
  const { lang } = useLang();

  const content = {
    id: {
      kicker: "04 / Orang di balik kode",
      h1: "Kode dengan konteks.",
      h2: "Produk dengan empati.",
      p1a: "Saya suka project yang mengharuskan saya mengambil keputusan trade-off, bukan cuma menyusun UI. Saat membangun sistem rate limiting di ",
      p1b: "Captionin",
      p1c: ", saya menemukan perbedaan timezone yang memengaruhi jam operasional UMKM lokal — lalu memperbaikinya di layer yang tepat.",
      p2a: "Latar belakang sebelum coding — sempat menjalankan ",
      p2b: "coffee shop",
      p2c: " dan bekerja di ",
      p2d: "OOH branding",
      p2e: " — membuat saya terbiasa memikirkan siapa yang benar-benar memakai produk.",
    },
    en: {
      kicker: "04 / The person behind the code",
      h1: "Code with context.",
      h2: "Products with empathy.",
      p1a: "I enjoy projects that force real trade-off decisions, not just assembling UIs. While building the rate-limiting system in ",
      p1b: "Captionin",
      p1c: ", I discovered a timezone mismatch affecting local UMKM operating hours — and fixed it at the right layer.",
      p2a: "Before coding, I ran a ",
      p2b: "coffee shop",
      p2c: " and worked in ",
      p2d: "OOH branding",
      p2e: " — experiences that trained me to think about who actually uses a product.",
    },
  } as const;

  const tr = content[lang];

  return (
    <section id="about" className="section-shell border-t border-border py-24">
      <LineSidebar className="mb-4 w-fit">
        <p className="section-kicker">{tr.kicker}</p>
      </LineSidebar>

      <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <h2 className="section-title font-bold">
          {tr.h1}
          <br />
          <span className="text-muted-foreground">{tr.h2}</span>
        </h2>

        <div className="flex max-w-xl flex-col gap-5 text-base leading-relaxed text-muted-foreground">
          <p>
            {tr.p1a}
            <strong className="font-semibold text-foreground">{tr.p1b}</strong>
            {tr.p1c}
          </p>
          <p>
            {tr.p2a}
            <strong className="font-semibold text-foreground">{tr.p2b}</strong>
            {tr.p2c}
            <strong className="font-semibold text-foreground">{tr.p2d}</strong>
            {tr.p2e}
          </p>
        </div>
      </div>
    </section>
  );
}
