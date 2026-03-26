import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

const fontPath = path.join(process.cwd(), "src/app/fonts/inter-tight-400.woff2");

export default async function Icon() {
  const fontData = await readFile(fontPath);

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#080807",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "baseline",
            color: "#ffffff",
            display: "flex",
            fontFamily: "Inter Tight",
            fontSize: 30,
            fontWeight: 400,
            letterSpacing: "-0.07em",
            lineHeight: 1,
            transform: "translateY(-1px)",
          }}
        >
          <span>m/IA</span>
          <span
            style={{
              color: "#d3ffca",
              marginLeft: 1,
            }}
          >
            _
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          data: fontData,
          name: "Inter Tight",
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
