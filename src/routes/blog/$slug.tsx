import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SignupSection } from "@/components/site/SignupSection";
import { RelatedPosts } from "@/components/site/RelatedPosts";
import { ShareWidget } from "@/components/site/ShareWidget";
import { formatPostDate, getPostBySlug } from "@/data/blogPosts";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPost,
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => {
    const post = loaderData;
    const title = `${post?.title ?? "Post"} | 340B Matters`;
    const description = post?.excerpt ?? "";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${post?.slug ?? ""}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/blog/${post?.slug ?? ""}` }],
    };
  },
});

function BlogPost() {
  const post = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="px-5 pt-16 pb-10 sm:pt-20">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow text-center">{formatPostDate(post.date)}</p>
            <h1 className="mt-3 text-center text-3xl text-teal-deep sm:text-5xl">{post.title}</h1>
            <div className="mt-6 flex justify-center">
              <ShareWidget title={post.title} path={`/${post.slug}`} />
            </div>
          </div>
        </section>

        <section className="px-5 pb-16">
          <div className="mx-auto max-w-3xl">
            <img
              src={post.image}
              alt={post.alt}
              width={1200}
              height={700}
              className="mb-10 h-64 w-full rounded-4xl object-cover shadow-lift sm:h-96"
            />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              {post.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <RelatedPosts slug={post.slug} />
        <SignupSection />
      </main>
      <SiteFooter />
    </div>
  );
}
