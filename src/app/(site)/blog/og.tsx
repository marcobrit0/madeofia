import { ImageResponse } from "next/og";

export const blogOgImageSize = {
  width: 1200,
  height: 630,
};

export const blogOgContentType = "image/png";

type BlogOgImageOptions = {
  badge: string;
  title: string;
  description: string;
  keyword: string;
};

export function createBlogOgImage({
  badge,
  title,
  description,
  keyword,
}: BlogOgImageOptions) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background:
            "radial-gradient(circle at top left, #1f3f2f 0%, #090909 45%, #030303 100%)",
          color: "#f5f5f5",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "22px",
            border: "1px solid rgba(255,255,255,0.14)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "#4ade80",
            }}
          >
            {badge}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid rgba(255,255,255,0.14)",
              padding: "12px 18px",
              fontSize: 20,
              color: "rgba(255,255,255,0.75)",
            }}
          >
            {keyword}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            maxWidth: "920px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 70,
              fontWeight: 700,
              lineHeight: 1.03,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              lineHeight: 1.35,
              color: "rgba(255,255,255,0.74)",
            }}
          >
            {description}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            MadeofIA
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.55)",
            }}
          >
            Web design • SEO • Produto digital
          </div>
        </div>
      </div>
    ),
    blogOgImageSize,
  );
}
