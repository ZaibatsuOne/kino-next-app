import "./globals.css";

import { Header } from "@/widgets/header";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Disney - movie app",
  description: "Streaming movie app service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("container", font.className)}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
