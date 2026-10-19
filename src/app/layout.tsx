import type { Metadata, Viewport } from "next";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s — ${site.name}` },
  description: site.description,
  applicationName: site.name,
  icons: { icon: "/icon.svg" },
  category: "technology",
  keywords: ["hackathon", "build sprint", "design", "technology", "prototype", "Flat Hack 604"],
  alternates: { canonical: "/" },
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    siteName: site.name,
    url: "/",
    images: [{ url: "/assets/flat-hack-hero-poster.webp", width: 1280, height: 720, alt: "Flat Hack 604 build sprint" }],
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description, images: ["/assets/flat-hack-hero-poster.webp"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#fbfaf6", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
  };

  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
