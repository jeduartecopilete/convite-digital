import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const font = Inter({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Seu Evento começa aqui",
  description: "Aplicação Fullstack de eventos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={font.className}
      >
        {children}
      </body>
    </html>
  );
}
