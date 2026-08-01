import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Munkhnasan Otgonbold — Statement of Professional Standing",
  description:
    "Data analytics & business intelligence portfolio of Munkhnasan (Mason) Otgonbold.",
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
