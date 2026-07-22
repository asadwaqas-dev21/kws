import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "70vh",
        display: "grid",
        placeItems: "center",
        padding: "48px 20px",
        background: "var(--cream-2, #f7f3ea)",
        textAlign: "center",
      }}
    >
      <div>
        <p style={{ color: "var(--amber, #ce8a1f)", fontWeight: 700, letterSpacing: 2 }}>404</p>
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--pine-deep, #0e3b2c)", margin: "12px 0" }}>
          Page not found
        </h1>
        <p style={{ color: "var(--muted, #5c6b63)", maxWidth: 420, margin: "0 auto 28px" }}>
          The page may have moved, or the link is incorrect. Return home to continue exploring our work.
        </p>
        <Link
          href="/"
          style={{
            display: "inline-block",
            background: "var(--pine, #14523c)",
            color: "#fff",
            padding: "12px 22px",
            borderRadius: 999,
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
