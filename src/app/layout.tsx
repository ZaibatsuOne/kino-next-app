import type { Metadata } from "next";

import { cn } from "@/shared/lib/utils";
import { Header } from "@/widgets/header";
import { Work_Sans } from "next/font/google";

import "./globals.css";

const font = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "Стриминговая платформа для просмотра фильма и сериалов",
  title: "Disney - Фильмы и сериалы",
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
      </body>
    </html>
  );
}
