import type { Metadata, Viewport } from "next";
import "@fontsource/young-serif";
import "@fontsource-variable/hanken-grotesk";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Shahul Hameed Ali M — Data Scientist",
  description:
    "Portfolio of Shahul Hameed Ali M, Data Scientist & Machine Learning Engineer based in Madurai, India.",
};

export const viewport: Viewport = {
  themeColor: "#3A0F34",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-gold focus:px-4 focus:py-2 focus:font-medium focus:text-plum-800"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
