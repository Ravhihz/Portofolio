import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", weight: ["400", "500", "700"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Ravhi Haris Wibowo — Fullstack Developer",
  description: "Portfolio Ravhi Haris Wibowo, frontend-heavy fullstack developer yang membangun produk web yang siap dipakai.",
  verification: {
    google: "q19zb7eRZxM4vJkpAAbkL9aA80-UIEkxTwuWoRXBJhQ",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id" className="bg-background"><body className={`${mono.variable} ${inter.variable} font-sans antialiased`}><Nav />{children}</body></html>;
}
