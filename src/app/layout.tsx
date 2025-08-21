import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";
import Link from "next/link";
import Footer from "@/app/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Projeto estudo Next.js",
  description: "Projeto de treino com Next.js, React e Tailwind CSS, com foco em boas práticas de desenvolvimento. Focando em aprimorar habilidades em Next.js, React e Tailwind CSS.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 text-gray-900">
        {/* NAVBAR FIXA */}
        <nav className="bg-blue-600 text-white px-6 py-4 flex gap-6">
          <Link href="/home" className="hover:underline">Inicio</Link>
          <Link href="/sobre" className="hover:underline">Sobre</Link>
          <Link href="/contato" className="hover:underline">Contato</Link>
        </nav>

        {/* CONTEÚDO DAS PÁGINAS */}
        <main className="p-6">{children}</main>
      <Footer />
      </body>
    </html>
  )
}
