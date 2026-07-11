import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Khurram Welfare Society — Serving Humanity Without Difference",
  description: "Khurram Welfare Society (KWS) is a non-profit serving humanity through clean water, education, health, and social welfare — without difference of religion, creed, or caste.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jakarta.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
