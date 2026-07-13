import type { Metadata } from "next";
import "./globals.css";

import AOSProvider from "@/components/AOSProvider";

export const metadata: Metadata = {
  title: "Shadrack Musa | Cyber Security Engineer",
  description:
    "Cyber Security Engineer, Full Stack Developer and AI Enthusiast Portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="antialiased">
        <AOSProvider>
          {children}
        </AOSProvider>
      </body>
    </html>
  );
}
