import "./globals.css";

import { Header } from "@/widgets/header";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { cn } from "@/shared/lib/utils";

const font = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Disney - Фильмы и сериалы",
  description: "Стриминговая платформа для просмотра фильма и сериалов",
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
