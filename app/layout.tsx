import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DevAgentation from "@/components/DevAgentation";
import DevUIFork from "@/components/DevUIFork";

// Inter is the site-wide typeface — every section uses it except the navbar wordmark.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Handwritten script — used only for the "Shivanthi Fernando" wordmark in the nav
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://shivanthi.design";
const description =
  "Shivanthi Fernando is a UX Designer turning ideas into experiences that feel natural to use — thoughtful UI design, rapid prototyping, and Figma-to-code delivery for SaaS & AI products.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shivanthi Fernando — Product & UI Designer for SaaS & AI startups",
    template: "%s · Shivanthi Fernando",
  },
  description,
  keywords: [
    "product designer",
    "UI designer",
    "UX designer",
    "SaaS design",
    "AI product design",
    "Figma to code",
    "design systems",
    "Shivanthi Fernando",
  ],
  authors: [{ name: "Shivanthi Fernando", url: siteUrl }],
  creator: "Shivanthi Fernando",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Shivanthi Fernando — Product & UI Designer for SaaS & AI startups",
    description,
    siteName: "Shivanthi Fernando",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivanthi Fernando — Product & UI Designer",
    description,
    creator: "@shivanthi",
  },
  icons: {
    icon: [{ url: "/Imgs/favicon-round.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dancingScript.variable}`}
    >
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <DevAgentation />
        <DevUIFork />
      </body>
    </html>
  );
}
