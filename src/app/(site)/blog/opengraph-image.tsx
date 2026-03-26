import { blogOgContentType, blogOgImageSize, createBlogOgImage } from "./og";

export const alt = "Blog MadeofIA";
export const size = blogOgImageSize;
export const contentType = blogOgContentType;

export default function OpenGraphImage() {
  return createBlogOgImage({
    badge: "Blog",
    title: "Artigos que conectam SEO, web design e conversão.",
    description:
      "Conteúdo editorial da MadeofIA para atrair tráfego orgânico e transformar visitas em negócio.",
    keyword: "Blog MadeofIA",
  });
}
