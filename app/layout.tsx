import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: false,
});

const SITE_URL = "https://neazmorshed.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Neaz Morshed — MERN Stack Developer & Web Engineer",
  description:
    "Neaz Morshed is a MERN stack developer building fast, production-grade web apps with React, Next.js, Node.js, and MongoDB.",
  keywords: [
    "Neaz Morshed",
    "MERN Developer",
    "Next.js Developer",
    "React Developer",
    "Full Stack Developer Bangladesh",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Neaz Morshed" }],
  creator: "Neaz Morshed",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Neaz Morshed — MERN Stack Developer",
    description:
      "Portfolio of Neaz Morshed — building fast, reliable web apps with React, Next.js & Node.js.",
    images: [{ url: "/neaz.png", width: 1080, height: 1440, alt: "Neaz Morshed" }],
    siteName: "Neaz Morshed",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neaz Morshed — MERN Stack Developer",
    description: "Building fast, reliable web apps with React, Next.js & Node.js.",
    images: ["/neaz.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Neaz Morshed",
    url: SITE_URL,
    image: SITE_URL + "/neaz.png",
    jobTitle: "MERN Stack Developer",
    email: "mailto:neazmorshed666@gmail.com",
    address: { "@type": "PostalAddress", addressLocality: "Bogura", addressCountry: "BD" },
    sameAs: [
      "https://linkedin.com/in/neaz-morshed",
      "https://github.com/Neaz-mq",
      "https://fiverr.com/neaztech",
      "https://upwork.com/neazmorshed",
    ],
  };

  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}