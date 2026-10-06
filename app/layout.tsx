import type { Metadata } from "next";
import { Quicksand, Nunito } from "next/font/google";
import "./globals.css";
import ScrollThread from "@/components/layout/ScrollThread"; 

const quicksand = Quicksand({ 
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: 'swap',
});

const nunito = Nunito({ 
  subsets: ["latin"],
  variable: "--font-nunito",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "The Maker | Full-Stack & AI Developer",
  description: "Professional software engineering portfolio crafted with code and care. Specializing in Python, React, AI/Reinforcement Learning, and robust backend architectures.",
  openGraph: {
    title: "The Maker | Full-Stack & AI Developer",
    description: "Professional software engineering portfolio crafted with code and care.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${quicksand.variable} ${nunito.variable} scroll-smooth scroll-pt-32`}>
      <body className="bg-fabric min-h-screen flex flex-col">
        <ScrollThread /> 
        {children}
      </body>
    </html>
  );
}