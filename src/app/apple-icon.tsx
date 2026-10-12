import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen icon for iPhone/iPad. */
export default async function AppleIcon() {
  const italic = await readFile(join(process.cwd(), "assets/Fraunces-Italic.ttf"));
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#b4613f",
          color: "#fbf8f3",
          fontFamily: "Fraunces",
          fontStyle: "italic",
          fontSize: 104,
          letterSpacing: -3,
          paddingBottom: 10,
        }}
      >
        Ro
      </div>
    ),
    { ...size, fonts: [{ name: "Fraunces", data: italic, style: "italic", weight: 400 }] }
  );
}
