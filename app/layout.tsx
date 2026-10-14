import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mugi | Finance & Data Analytics — Munkhnasan Otgonbold",
  description:
    "Explore Mugi's interactive portfolio: financial analytics, business intelligence, Python, SQL, Tableau, and data-driven project case studies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-paper text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
