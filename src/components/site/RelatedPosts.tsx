import { getRelatedPosts } from "@/data/blogPosts";
import { BlogCard } from "./BlogCard";

export function RelatedPosts({ slug }: { slug: string }) {
  const related = getRelatedPosts(slug);

  if (related.length === 0) return null;

  return (
    <section className="px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl text-teal-deep">More From 340B Matters</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {related.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
