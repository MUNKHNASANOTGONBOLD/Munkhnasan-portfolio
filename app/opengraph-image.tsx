import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MUGI — Finance, Data Analytics & Business Intelligence | Munkhnasan Otgonbold";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", background: "#F7F5EE", color: "#292744", padding: "64px 80px", fontFamily: "Arial, sans-serif", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
          <div style={{ fontSize: 21, fontWeight: 700, letterSpacing: 5 }}>MUGI / PORTFOLIO</div>
          <div style={{ display: "flex", border: "2px solid #292744", borderRadius: 30, padding: "11px 20px", fontSize: 18 }}>ARLINGTON, VA · USA</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 34 }}>
          <div style={{ display: "flex", fontSize: 130, letterSpacing: -10, fontWeight: 800, lineHeight: 1 }}>MUGI<span style={{ color: "#B6A9DB" }}>.</span></div>
          <div style={{ display: "flex", fontSize: 39, fontWeight: 600, marginTop: 17 }}>Finance meets data.</div>
          <div style={{ display: "flex", fontSize: 27, color: "#625C79", marginTop: 13 }}>Analytics · Business Intelligence · Financial Strategy</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "2px solid #D9D3ED", paddingTop: 26, width: "100%" }}>
          <div style={{ fontSize: 23, fontWeight: 700 }}>MUNKHNASAN OTGONBOLD</div>
          <div style={{ fontSize: 18, color: "#625C79" }}>munkhnasan-portfolio.vercel.app ↗</div>
        </div>
      </div>
    ),
    size
  );
}
