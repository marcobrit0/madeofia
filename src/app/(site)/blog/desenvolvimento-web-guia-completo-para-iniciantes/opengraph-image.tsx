import { blogOgContentType, blogOgImageSize, createBlogOgImage } from "../og";
import { thirdBlogPost } from "../posts";

export const alt = `${thirdBlogPost.seoTitle} — MadeofIA`;
export const size = blogOgImageSize;
export const contentType = blogOgContentType;

export default function OpenGraphImage() {
  return createBlogOgImage({
    badge: thirdBlogPost.category,
    title: thirdBlogPost.seoTitle,
    description: thirdBlogPost.metaDescription,
    keyword: thirdBlogPost.primaryKeyword,
  });
}
