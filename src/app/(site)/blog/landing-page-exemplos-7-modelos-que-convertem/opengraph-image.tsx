import { blogOgContentType, blogOgImageSize, createBlogOgImage } from "../og";
import { secondBlogPost } from "../posts";

export const alt = `${secondBlogPost.seoTitle} — MadeofIA`;
export const size = blogOgImageSize;
export const contentType = blogOgContentType;

export default function OpenGraphImage() {
  return createBlogOgImage({
    badge: secondBlogPost.category,
    title: secondBlogPost.seoTitle,
    description: secondBlogPost.metaDescription,
    keyword: secondBlogPost.primaryKeyword,
  });
}
