import { Link } from "@tanstack/react-router";
import { blogPosts } from "@/data/blogPosts";
import { BlogCard } from "./BlogCard";

const posts = blogPosts.slice(0, 3);

export function LatestNews() {
  return (
    <section id="news" className="px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="eyebrow">From the front lines</p>
          <h2 className="mt-3 text-4xl text-teal-deep sm:text-5xl">Latest News</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center rounded-full border-2 border-primary px-8 py-3 font-display text-sm font-bold tracking-[0.14em] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}
