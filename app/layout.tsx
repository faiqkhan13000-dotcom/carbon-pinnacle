import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Carbon Pinnacle | UK Carbon Reporting & Compliance Consultancy",
    template: "%s | Carbon Pinnacle",
  },
  description:
    "Expert UK carbon reporting consultancy specialising in PPN 006 Carbon Reduction Plans, SECR reporting, business carbon footprints and ongoing carbon management.",
  keywords: [
    "carbon reporting UK",
    "PPN 006",
    "carbon reduction plan",
    "SECR reporting",
    "carbon footprint",
    "net zero consultancy",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Carbon Pinnacle",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased bg-white text-slate-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
