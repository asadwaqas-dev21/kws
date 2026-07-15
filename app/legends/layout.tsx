import type { Metadata } from "next";
import { Noto_Nastaliq_Urdu } from "next/font/google";

export const metadata: Metadata = {
  title: "Legends & Community Heroes | Khurram Welfare Society",
  description: "Read about community heroes, inspiring stories, and legacy initiatives connected with Khurram Welfare Society.",
  alternates: {
    canonical: "/legends",
  },
};

const nastaliq = Noto_Nastaliq_Urdu({
  weight: ["400", "500", "600", "700"],
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-nastaliq",
});

export default function LegendsLayout({ children }: { children: React.ReactNode }) {
  return <div className={nastaliq.variable}>{children}</div>;
}
