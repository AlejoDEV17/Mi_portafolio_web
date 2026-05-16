import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap"
});

const siteUrl = "https://alejodev17.github.io/Mi_portafolio_web";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Alejandro Lozano Restrepo | Backend Developer",
  description:
    "Portafolio premium de Alejandro Lozano Restrepo, Backend & Automation Developer enfocado en Python, RPA, APIs, bases de datos y automatizacion empresarial.",
  authors: [{ name: "Alejandro Lozano Restrepo" }],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Alejandro Lozano Restrepo | Backend Developer",
    description: "Backend & Automation Developer enfocado en Python, RPA y automatizacion empresarial.",
    images: [
      {
        url: "/assets/preview.png",
        width: 1200,
        height: 630,
        alt: "Alejandro Lozano Restrepo portfolio preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Alejandro Lozano Restrepo | Backend Developer",
    description: "Backend & Automation Developer enfocado en Python, RPA y automatizacion empresarial.",
    images: ["/assets/preview.png"]
  },
  icons: {
    icon: "/assets/favicon.svg"
  }
};

export const viewport: Viewport = {
  themeColor: "#03040a",
  colorScheme: "dark"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${space.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
