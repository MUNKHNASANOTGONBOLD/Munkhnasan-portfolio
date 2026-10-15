import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://munkhnasan-portfolio.vercel.app";
const title = "MASON | Finance, Data Analytics & Business Intelligence";
const description = "Meet Mason (Munkhnasan Otgonbold). Explore interactive projects in financial analytics, SQL, Python, Power BI, Tableau, automation, and business intelligence.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "MASON Portfolio",
  authors: [{ name: "Munkhnasan Otgonbold", url: siteUrl }],
  creator: "Munkhnasan Otgonbold",
  keywords: ["Mason", "Munkhnasan Otgonbold", "Data Analyst", "Business Intelligence", "Financial Analyst", "SQL", "Python", "Power BI", "Tableau", "Finance", "Portfolio"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "MASON Portfolio",
    locale: "en_US",
    title,
    description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "MASON — Finance meets data. Munkhnasan Otgonbold portfolio." }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-paper text-ink antialiased">{children}</body>
    </html>
  );
}
