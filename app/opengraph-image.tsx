import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Khurram Welfare Society";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #14523c 0%, #2f8f63 100%)",
          color: "white",
          fontFamily: "sans-serif",
          padding: 60,
        }}
      >
        <div style={{ fontSize: 54, fontWeight: 700, marginBottom: 20 }}>
          Khurram Welfare Society
        </div>
        <div style={{ fontSize: 28, opacity: 0.95 }}>
          Serving humanity with clean water, education, health, and welfare.
        </div>
      </div>
    ),
    size,
  );
}
