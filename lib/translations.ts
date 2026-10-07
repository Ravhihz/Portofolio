export type Lang = "id" | "en";

const t = {
  // ── Nav ──────────────────────────────────────────────────────────────────
  nav: {
    id: {
      home: "Home", work: "Kerja", projects: "Proyek", stack: "Stack",
      about: "Tentang", experience: "Pengalaman", certs: "Sertifikasi", contact: "Kontak",
    },
    en: {
      home: "Home", work: "Work", projects: "Projects", stack: "Stack",
      about: "About", experience: "Experience", certs: "Certs", contact: "Contact",
    },
  },

  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    id: {
      available: "Tersedia untuk peluang · Jakarta / Remote",
      heading1: "Membangun hal digital",
      heading2: "yang bermakna.",
      subtitle: "Saya Ravhi, developer yang suka mengubah problem rumit menjadi produk web yang cepat, terukur, dan enak dipakai.",
      cta_work: "Lihat karya pilihan",
      cta_talk: "Ayo bicara",
      stat1_num: "01",
      stat1_label: "produk di production",
      stat2_num: "3+",
      stat2_label: "tahun membangun produk",
      terminal_title: "ravhi@portfolio ~",
      terminal_footer: "01 / 08 seksi",
      roles: [
        "frontend-heavy fullstack developer",
        "pembangun API yang bersih & bertipe",
        "shipper solusi web yang skalabel",
        "kirim produk nyata, bukan demo saja",
      ],
      whoami_output: "ravhi",
      shipping_output: "captionin.varstory.my.id — live in production",
    },
    en: {
      available: "Available for opportunities · Jakarta / Remote",
      heading1: "Building digital",
      heading2: "things that matter.",
      subtitle: "I'm Ravhi, a developer who turns complex problems into fast, scalable, and enjoyable web products.",
      cta_work: "See selected work",
      cta_talk: "Let's talk",
      stat1_num: "01",
      stat1_label: "product in production",
      stat2_num: "3+",
      stat2_label: "years building things",
      terminal_title: "ravhi@portfolio ~",
      terminal_footer: "01 / 08 sections",
      roles: [
        "frontend-heavy fullstack developer",
        "clean, typed API builder",
        "scalable web solution shipper",
        "ships real products, not just demos",
      ],
      whoami_output: "ravhi",
      shipping_output: "captionin.varstory.my.id — live in production",
    },
  },

  // ── Featured ─────────────────────────────────────────────────────────────
  featured: {
    id: {
      kicker: "01 / Karya pilihan",
      heading1: "Satu proyek.",
      heading2: "Banyak bagian bergerak.",
      sub: "Pandangan lebih dekat pada produk yang dibangun dari nol hingga production.",
      badge: "Studi kasus utama",
      meta: "2025 / MAGANG",
      tech: "Laravel · React · MySQL · Pusher",
      flagship_desc: "Platform pengaduan berbasis web untuk mahasiswa & masyarakat umum — submission lampiran, tracking status real-time, sistem balasan admin, QR code per laporan, dan RBAC terpisah untuk role user/admin.",
    },
    en: {
      kicker: "01 / Selected work",
      heading1: "One project.",
      heading2: "Many moving parts.",
      sub: "A closer look at a product built from zero to production.",
      badge: "Flagship case study",
      meta: "2025 / INTERNSHIP",
      tech: "Laravel · React · MySQL · Pusher",
      flagship_desc: "A web-based complaint platform for students & the public — attachment submission, real-time status tracking, admin reply system, QR code per report, and separate RBAC for user/admin roles.",
    },
  },

  // ── Projects ─────────────────────────────────────────────────────────────
  projects: {
    id: {
      kicker: "02 / Eksperimen lainnya",
      heading1: "Dibangun, dikirim,",
      heading2: "lalu dipelajari.",
      repositories: "repositori",
      fallback_desc: "Sebuah proyek dari arsip GitHub.",
      modal_kicker: "Proyek",
      modal_close: "Tutup",
      modal_updated: "Diperbarui",
      modal_source: "Sumber",
      modal_demo: "Demo Langsung",
    },
    en: {
      kicker: "02 / More experiments",
      heading1: "Built, shipped,",
      heading2: "then learned from.",
      repositories: "repositories",
      fallback_desc: "A project from the GitHub archive.",
      modal_kicker: "Project",
      modal_close: "Close",
      modal_updated: "Updated",
      modal_source: "Source",
      modal_demo: "Live Demo",
    },
  },

  // ── TechStack ────────────────────────────────────────────────────────────
  techStack: {
    id: {
      kicker: "03 / Toolkit",
      heading1: "Alat untuk mengubah ide",
      heading2: "menjadi antarmuka.",
      sub: "Stack praktis yang dibentuk oleh produk nyata, bukan ikut tren.",
    },
    en: {
      kicker: "03 / Toolkit",
      heading1: "Tools for turning ideas",
      heading2: "into interfaces.",
      sub: "A practical stack shaped by real products, not trend chasing.",
    },
  },

  // ── About ────────────────────────────────────────────────────────────────
  about: {
    id: {
      kicker: "04 / Orang di balik kode",
      heading1: "Kode dengan konteks.",
      heading2: "Produk dengan empati.",
      p1: "Saya suka project yang mengharuskan saya mengambil keputusan trade-off, bukan cuma menyusun UI. Saat membangun sistem rate limiting di Captionin, saya menemukan perbedaan timezone yang memengaruhi jam operasional UMKM lokal — lalu memperbaikinya di layer yang tepat.",
      p1_bold1: "Captionin",
      p2: "Latar belakang sebelum coding — sempat menjalankan coffee shop dan bekerja di OOH branding — membuat saya terbiasa memikirkan siapa yang benar-benar memakai produk.",
      p2_bold1: "coffee shop",
      p2_bold2: "OOH branding",
    },
    en: {
      kicker: "04 / The person behind the code",
      heading1: "Code with context.",
      heading2: "Products with empathy.",
      p1: "I enjoy projects that force real trade-off decisions, not just assembling UIs. While building the rate-limiting system in Captionin, I discovered a timezone mismatch affecting local UMKM operating hours — and fixed it at the right layer.",
      p1_bold1: "Captionin",
      p2: "Before coding, I ran a coffee shop and worked in OOH branding — experiences that trained me to think about who actually uses a product.",
      p2_bold1: "coffee shop",
      p2_bold2: "OOH branding",
    },
  },

  // ── Experience ───────────────────────────────────────────────────────────
  experience: {
    id: {
      kicker: "05 / Pengalaman",
      heading1: "Di mana saya",
      heading2: "benar-benar bekerja.",
      jobs: [
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
      ],
    },
    en: {
      kicker: "05 / Experience",
      heading1: "Where I've",
      heading2: "done the work.",
      jobs: [
        {
          role: "Fullstack Developer Intern",
          company: "Directorate of Strategic Cooperation & International Affairs — Universitas Budi Luhur",
          period: "Jul 2025 — Dec 2025",
          bullets: [
            "Designed and built the LaporKUI application (Web Admin & Mobile App) to digitise student complaint services across 4 international programmes of DKSKUI UBL.",
            "Developed 5 core REST API endpoints using Laravel 12 and MySQL, covering Laravel Sanctum authentication, Role-Based Access Control (RBAC), and an 8-table database schema.",
            "Integrated the web frontend (React.js, Inertia.js, Tailwind CSS) and mobile client (Flutter) with the Central API Backend, achieving 100% valid API test results (Response 200 OK & 201 Created).",
            "Implemented an admin analytics dashboard with complaint statistics visualisation, interactive reply features, and 4-stage real-time report tracking — earning an A- grade on evaluation.",
          ],
        },
        {
          role: "Implementation Staff",
          company: "AIO Media",
          period: "Jan 2023 — Jan 2024",
          bullets: [
            "Designed proposal materials for Out-of-Home (OOH) advertising services across various media lines (Commuterline, Transjakarta, LED Building Videotron, and Cinema).",
            "Managed and marketed OOH campaign implementation documentation for well-known brands (including Bank Syariah Indonesia, UNAS, Nespresso, TUMI, Zara, and Converse).",
            "Compiled rate cards, media specifications, and installation evidence reports to ensure project execution aligned with client timelines and SLAs.",
            "Coordinated with local vendors across Indonesia, enterprise clients, and internal teams to maintain data consistency and smooth installation operations.",
          ],
        },
      ],
    },
  },

  // ── Certifications ───────────────────────────────────────────────────────
  certifications: {
    id: {
      kicker: "06 / Kredensial",
      heading1: "Bukti dari",
      heading2: "pembelajaran berkelanjutan.",
      id_prefix: "ID /",
      items: [
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
      ],
    },
    en: {
      kicker: "06 / Credentials",
      heading1: "Proof of",
      heading2: "continuous learning.",
      id_prefix: "ID /",
      items: [
        {
          title: "Basic Computer Algorithm Competency",
          issuer: "Universitas Budi Luhur",
          date: "July 2025",
          credentialId: "F/UBL/FTI/000/029/07/25",
          competencies: "Arithmetic & data types, conditional logic, iteration, 1D arrays, function blocks, and problem-solving using C.",
        },
        {
          title: "AI Tools Usage for Work & Career Readiness",
          issuer: "BBPVP Serang",
          date: "May 2026",
          credentialId: "260512DF736997",
          competencies: "Defining AI solution business objectives and integrating Artificial Intelligence (AI) solution components.",
        },
        {
          title: "Intro to Software Engineering",
          issuer: "RevoU Coding Camp",
          date: "Aug 2026",
          credentialId: "CCSE-100826-01-1-00004",
          competencies: "Fundamentals of software engineering, application development methodologies, and introduction to software engineering workflows.",
        },
        {
          title: "EF SET English Certificate — C2 Proficient",
          issuer: "EF SET",
          date: "Sep 2026",
          credentialId: "prg45T",
          competencies: "Reading & Listening C2 Proficient (score 74/100 on EF SET scale). Note: result from a 50-minute Quick Check, not the full 120-minute test.",
        },
      ],
    },
  },

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    id: {
      kicker: "07 / Mulai percakapan",
      heading: "Punya masalah yang\nlayak diselesaikan?",
      sub: "Terbuka untuk peluang kerja sebagai frontend / fullstack developer. Kalau ada produk yang perlu dibangun dengan serius, let's talk.",
      cta_hello: "Sapa Saya",
      cta_cv: "Unduh CV",
      footer: "Ravhi Haris Wibowo · 2026",
    },
    en: {
      kicker: "07 / Start a conversation",
      heading: "Have a problem\nworth solving?",
      sub: "Open to frontend / fullstack developer opportunities. If you have a product that needs to be built seriously, let's talk.",
      cta_hello: "Say Hello",
      cta_cv: "Download CV",
      footer: "Ravhi Haris Wibowo · 2026",
    },
  },
} as const;

export default t;
