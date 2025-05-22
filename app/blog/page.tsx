import Link from "next/link";
import { Metadata } from "next";
import { formatDate, getBlogPosts } from "app/lib/posts";
import AnimatedPageLayout from "app/components/AnimatedPageLayout";
import AnimatedListItem from "app/components/AnimatedListItem";

export const metadata: Metadata = {
  title: "Blog",
  description: "My blog posts",
};

export default function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <AnimatedPageLayout title="Blog">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) >
            new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <AnimatedListItem key={post.slug}>
            <Link
              className="flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80 block"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
                <h2 className="text-black dark:text-white">
                  {post.metadata.title}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
              </div>
            </Link>
          </AnimatedListItem>
        ))}
    </AnimatedPageLayout>
  );
}
