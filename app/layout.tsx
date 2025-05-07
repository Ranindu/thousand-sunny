import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Thousand Sunny",
  description: "A modern Next.js ecommerce platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
