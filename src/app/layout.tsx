import type { Metadata } from "next";

import { cn } from "@/shared/lib/utils";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { Rubik } from "next/font/google";

import "./globals.css";

const font = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "Стриминговая платформа для просмотра фильма и сериалов",
  title: "KinoNext - Фильмы и сериалы",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("", font.className)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
