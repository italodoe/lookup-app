import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn, defaultTheme } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });
const theme = defaultTheme();

export const metadata: Metadata = {
  title: "Lookup - Connect in Real-Time",
  description: "Lookup provides an intuitive platform for meetings and live streaming.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, `bg-${theme}-2`)}  >{children}</body>
    </html>
  );
}
 