import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://novara.com";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const DESCRIPTION =
  "Novara π is your extended revenue department for aesthetics clinics, IVF centres, and dental practices. Paid ads, SEO, AEO, and web — all under one roof.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Novara π — Your Revenue Department",
  description: DESCRIPTION,
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Novara π — Your Revenue Department",
    description: DESCRIPTION,
    type: "website",
    siteName: "Novara π",
  },
  twitter: {
    card: "summary_large_image",
    title: "Novara π — Your Revenue Department",
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Novara π",
    url: BASE_URL,
    email: "hello@novara.com",
    description: DESCRIPTION,
    foundingDate: "2024",
    areaServed: ["GB", "AE", "IN"],
    knowsAbout: [
      "Aesthetics clinic marketing",
      "IVF clinic marketing",
      "Dental practice marketing",
      "Private clinic marketing",
      "Paid advertising",
      "SEO",
      "AEO",
    ],
  };

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
