import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/app/_components/site-footer";
import { SiteHeader } from "@/app/_components/site-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "LinSol Ltd | Linux, DevOps and Cloud Infrastructure Consultancy",
    template: "%s | LinSol Ltd",
  },
  description:
    "LinSol Ltd is a UK consultancy specialising in Linux, DevOps, cloud infrastructure and AI-ready infrastructure foundations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-canvas font-sans text-foreground">
        <div className="relative flex min-h-screen flex-col overflow-x-clip">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top,rgba(83,168,255,0.18),transparent_42%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-48 -z-10 h-[42rem] bg-[radial-gradient(circle_at_top_right,rgba(83,168,255,0.08),transparent_38%)]" />
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
