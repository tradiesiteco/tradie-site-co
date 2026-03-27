import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title:
    "Tradie Site Co | Elite Websites for Melbourne Trades — Built in Hours",
  description:
    "Agency-quality, SEO-optimized websites for plumbers, electricians, roofers & landscapers in Melbourne. $150/mo flat subscription. No lock-in contracts. Built with AI speed.",
  keywords: [
    "tradie web design Melbourne",
    "websites for plumbers",
    "electrician website builder",
    "local SEO for trades Ringwood",
    "trade business website",
    "Melbourne web design",
  ],
  openGraph: {
    title: "Tradie Site Co | Elite Websites for Melbourne Trades",
    description:
      "Stop losing $10k jobs to competitors with better websites. Get a bespoke, SEO-optimized digital storefront for a flat monthly subscription.",
    type: "website",
    locale: "en_AU",
    siteName: "Tradie Site Co",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Tradie Site Co",
    description:
      "Agency-quality, SiteInspire-level websites for Melbourne tradies. Built with AI speed.",
    url: "https://tradiesiteco.com.au",
    email: "tradiesiteco@gmail.com",
    telephone: "",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ringwood",
      addressRegion: "VIC",
      addressCountry: "AU",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: -37.8136,
        longitude: 145.2292,
      },
      geoRadius: "50000",
    },
    serviceType: ["Web Design", "SEO", "Website Hosting", "Digital Marketing"],
    priceRange: "$150/mo",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    sameAs: [],
  };

  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="font-sans overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
