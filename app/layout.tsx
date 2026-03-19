import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KAJARIA SANITARY MART",
  description:
    "Luxury bath fixtures, tiles, paint finishes, and sink solutions with catalogue viewing, branch information, and WhatsApp-first assistance.",
  keywords: [
    "Kajaria tiles dealer",
    "Jaquar dealer",
    "Artize showroom",
    "Simpolo tiles",
    "Berger paints",
    "Futura sinks"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
