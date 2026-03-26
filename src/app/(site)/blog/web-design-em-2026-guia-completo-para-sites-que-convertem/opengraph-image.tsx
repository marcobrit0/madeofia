import { blogOgContentType, blogOgImageSize, createBlogOgImage } from "../og";
import { firstBlogPost } from "../posts";

export const alt = `${firstBlogPost.seoTitle} — MadeofIA`;
export const size = blogOgImageSize;
export const contentType = blogOgContentType;

export default function OpenGraphImage() {
  return createBlogOgImage({
    badge: firstBlogPost.category,
    title: firstBlogPost.seoTitle,
    description: firstBlogPost.metaDescription,
    keyword: firstBlogPost.primaryKeyword,
  });
}
