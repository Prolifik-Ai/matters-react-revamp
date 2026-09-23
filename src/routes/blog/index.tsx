import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SignupSection } from "@/components/site/SignupSection";
import { BlogCard } from "@/components/site/BlogCard";
import { blogPosts } from "@/data/blogPosts";

const title = "Latest News | 340B Matters";
const description = "The latest news and commentary from the 340B Matters campaign.";

export const Route = createFileRoute("/blog/")({
  component: BlogIndex,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
});

function BlogIndex() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <div className="surface-teal px-5 pt-16 pb-20 sm:pt-20 sm:pb-24">
          <div className="mx-auto max-w-6xl text-center">
            <p className="eyebrow text-primary-foreground/80">From the front lines</p>
            <h1 className="mt-3 text-4xl text-primary-foreground sm:text-5xl">Latest News</h1>
          </div>
        </div>

        <section className="px-5 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-3">
              {blogPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>

        <SignupSection />
      </main>
      <SiteFooter />
    </div>
  );
}
