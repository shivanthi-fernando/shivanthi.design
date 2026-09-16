import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

// Auto-wires into layout.tsx's metadata as both og:image and (absent a
// dedicated twitter-image file) twitter:image. Mirrors the Hero section's
// intro card + headline so link previews (iMessage, Slack, etc.) show
// on-brand content instead of an arbitrary auto-scraped page screenshot.
export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Shivanthi Fernando — Product & UI Designer for SaaS & AI startups";

export default async function Image() {
  const avatarPath = path.join(process.cwd(), "public/Imgs/shivanthi.png");
  const avatarSrc = `data:image/png;base64,${fs.readFileSync(avatarPath).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          backgroundColor: "#ffffff",
          backgroundImage: "linear-gradient(135deg, #ffffff 0%, #f3f0f9 100%)",
        }}
      >
        {/* Intro card — same avatar + name + role as the Hero section */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <img
            src={avatarSrc}
            width={72}
            height={72}
            style={{ borderRadius: 9999, objectFit: "cover", border: "1px solid #d8d1ea" }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 28, fontWeight: 600, color: "#1c1c1e" }}>
              Shivanthi Fernando
            </div>
            <div style={{ fontSize: 20, color: "#7a7a82" }}>UX Designer</div>
          </div>
        </div>

        {/* Headline — same copy + butter highlight as the Hero section */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: 56,
            fontSize: 64,
            fontWeight: 600,
            lineHeight: 1.25,
            letterSpacing: "-0.02em",
            color: "#1c1c1e",
            maxWidth: 980,
          }}
        >
          <span>Turning ideas into&nbsp;</span>
          <span style={{ backgroundColor: "#fbeab4" }}>experiences</span>
          <span>&nbsp;that feel natural to use.</span>
        </div>

        <div style={{ marginTop: 64, fontSize: 22, color: "#7a7a82" }}>shivanthi.design</div>
      </div>
    ),
    { ...size },
  );
}
