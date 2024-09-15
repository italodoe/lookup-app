import { auth } from "@/auth";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "XatUp - Connect in Real-Time",
  description:
    "XatUp provides an intuitive platform for meetings and live streaming.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={cn(inter.className, `bg-default-1`)}>
          {children}
          <Toaster />
        </body>
      </html>
    </SessionProvider>
  );
}
