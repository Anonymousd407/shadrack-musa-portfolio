import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shadrack Musa — Cyber Security Engineer & Full-Stack Developer",
  description:
    "Portfolio ya Shadrack Musa: Cyber Security Engineer, Full-Stack Developer na AI Enthusiast. Miradi, ujuzi, na vyeti.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
