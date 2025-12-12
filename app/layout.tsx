import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Sai Ranga M | AI/ML Software Engineer",
  description: "Portfolio of Sai Ranga M, a dedicated Software Engineer specialized in AI, Machine Learning, and large-scale distributed systems.",
  keywords: ["AI", "Machine Learning", "Software Engineer", "Portfolio", "LLM", "Distributed Systems"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} bg-background text-foreground antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}
