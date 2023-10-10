import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  display: "swap",
  preload: true,
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Adelinked Jobs",
  description: "Adelinked Jobs challenge unsing Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable}`}>
      <body>{children}</body>
    </html>
  );
}
