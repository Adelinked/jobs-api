import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adelinked Jobs API",
  description: "Adelinked Jobs API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/devchallenges.png" sizes="any" />

      <body>{children}</body>
    </html>
  );
}
