# Ravhi Hz — Portfolio

Portfolio pribadi, dibangun buat nunjukin project nyata, bukan sekadar CV digital.

## Fitur

- Section Projects fetch data langsung dari GitHub REST API (repo asli, bukan data statis) — cache 1 jam via Next.js `revalidate`
- Project andalan (Captionin) di-highlight terpisah sebagai flagship card
- Terminal-style intro di Hero dengan efek typing
- Scroll-reveal animation per section
- Tab navigation ala code editor, sinkron sama section yang lagi keliatan di layar (IntersectionObserver)

## Tech Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- lucide-react buat icon

## Cara Run