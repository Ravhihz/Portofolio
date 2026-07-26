import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Ravhi | Web Developer",
  description: "Portfolio Ravhi Haris Wibowo, fresh graduate Teknik Informatika",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${mono.variable} ${inter.variable} font-sans antialiased`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}