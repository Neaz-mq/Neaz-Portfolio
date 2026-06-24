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

const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="#1e3a5f"/>
  <path d="M10 10 L7 16 L10 22" fill="none" stroke="#38bdf8" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M22 10 L25 16 L22 22" fill="none" stroke="#38bdf8" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="16" cy="16" r="2" fill="#38bdf8"/>
</svg>`;

const faviconDataUrl = `data:image/svg+xml,${encodeURIComponent(faviconSvg)}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Neaz Morshed — MERN Stack Developer",
    template: "%s | Neaz Morshed",
  },
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
      "https://upwork.com/freelancers/~0122afc3d21e9fb211",
    ],
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href={faviconDataUrl} type="image/svg+xml" />
      </head>
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