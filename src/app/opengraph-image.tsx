import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/content/site";

export const alt = `${site.name} — yoga, Pilates and sound bath in Abuja`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** The preview image shown when the site is shared on WhatsApp, Instagram, X, etc. */
export default async function OpengraphImage() {
  const root = process.cwd();
  const [regular, italic, body, photo] = await Promise.all([
    readFile(join(root, "assets/Fraunces-Regular.ttf")),
    readFile(join(root, "assets/Fraunces-Italic.ttf")),
    readFile(join(root, "assets/Manrope-Medium.ttf")),
    readFile(join(root, "public/images/ro/sound-bath.jpg")),
  ]);
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#f5efe6" }}>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 56px 56px 72px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "Manrope",
              fontSize: 20,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#b4613f",
            }}
          >
            Yoga · Pilates · Sound bath — Abuja
          </div>
          <div style={{ display: "flex", flexDirection: "column", color: "#221c17" }}>
            <div style={{ fontFamily: "Fraunces", fontSize: 104, lineHeight: 1, letterSpacing: -3 }}>
              Wellbeing
            </div>
            <div
              style={{
                fontFamily: "Fraunces",
                fontStyle: "italic",
                fontSize: 104,
                lineHeight: 1.05,
                letterSpacing: -3,
                color: "#b4613f",
              }}
            >
              with Ro
            </div>
            <div style={{ marginTop: 28, fontFamily: "Manrope", fontSize: 26, color: "#6e6359" }}>
              {site.tagline}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Manrope",
              fontSize: 18,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#221c17",
            }}
          >
            By {site.founder}
          </div>
        </div>
        <img src={photoSrc} alt="" width={420} height={630} style={{ objectFit: "cover" }} />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: regular, style: "normal", weight: 400 },
        { name: "Fraunces", data: italic, style: "italic", weight: 400 },
        { name: "Manrope", data: body, style: "normal", weight: 500 },
      ],
    }
  );
}
