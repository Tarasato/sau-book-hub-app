"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBarMain from "@/components/NavBarMain";
import { usePathname } from "next/navigation";
import NavBarHome from "@/components/NavBarHome";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {pathname === "/" ? <NavBarHome /> : <NavBarMain />}
        <hr />
        <br />
        <br />
        {children}
        <h3 className="fixed bottom-0 left-0 w-full bg-white border-t flex justify-around p-3 z-50 text-center">
          Created by Kanchai Singkhot 6552410005 AKA Tarasato
          <br />
          Copyright © 2025 ☝️🤓
        </h3>
      </body>
    </html>
  );
}