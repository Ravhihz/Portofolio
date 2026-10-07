import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import Nav from "@/components/Nav";
import { LangProvider } from "@/context/LangContext";
import "./globals.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "700"],
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Ravhi Haris Wibowo — Fullstack Developer",
  description:
    "Portfolio of Ravhi Haris Wibowo, a frontend-heavy fullstack developer building production-ready web products.",
  verification: {
    google: "q19zb7eRZxM4vJkpAAbkL9aA80-UIEkxTwuWoRXBJhQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className="bg-background">
      <body className={`${mono.variable} ${inter.variable} font-sans antialiased`}>
        <LangProvider>
          <Nav />
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
