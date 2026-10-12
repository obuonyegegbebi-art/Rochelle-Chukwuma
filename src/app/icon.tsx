import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Browser-tab icon: italic "Ro" monogram on terracotta. */
export default async function Icon() {
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
          borderRadius: "50%",
          color: "#fbf8f3",
          fontFamily: "Fraunces",
          fontStyle: "italic",
          fontSize: 38,
          letterSpacing: -1,
          paddingBottom: 4,
        }}
      >
        Ro
      </div>
    ),
    { ...size, fonts: [{ name: "Fraunces", data: italic, style: "italic", weight: 400 }] }
  );
}
