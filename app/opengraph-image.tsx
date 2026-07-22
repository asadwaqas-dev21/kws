import { ImageResponse } from "next/og";

export const alt = "Khurram Welfare Society — Non-profit welfare organization in Kasur, Pakistan";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(145deg, #0e3b2c 0%, #14523c 45%, #2f8f63 100%)",
          color: "white",
          fontFamily: "Georgia, 'Times New Roman', serif",
          padding: "56px 64px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            opacity: 0.85,
          }}
        >
          KWS · Since 2014
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1, maxWidth: 980 }}>
            Khurram Welfare Society
          </div>
          <div style={{ fontSize: 30, opacity: 0.95, maxWidth: 900, lineHeight: 1.35 }}>
            Clean water · Education · Health · Welfare for Kasur communities
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24, opacity: 0.8 }}>
          khurramwelfaresociety.org
        </div>
      </div>
    ),
    size,
  );
}
