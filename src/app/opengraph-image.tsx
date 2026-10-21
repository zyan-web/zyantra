import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#ffffff",
          borderTop: `12px solid ${site.accent}`,
          color: "#0b0d12",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* Same "Z" mark as public/logo.svg */}
          <svg width="72" height="72" viewBox="0 0 64 64">
            <path fill={site.accent} d="M10 8h44v12L29 44h25v12H10V44l25-24H10z" />
          </svg>
          <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: -1 }}>{site.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.12, letterSpacing: -1.5, maxWidth: 1050 }}>
            {site.tagline}
          </div>
          <div style={{ fontSize: 28, color: "#5b6170" }}>
            AI Engineering · Web & Apps · Digital Marketing · Cloud
          </div>
        </div>
      </div>
    ),
    size,
  );
}
