import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Munkh-Erdene | Developer",
  description: "Portfolio of Munkh-Erdene - Developer building modern web applications",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-gray-100">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

