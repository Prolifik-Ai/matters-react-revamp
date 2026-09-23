import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { formatPostDate, type BlogPost } from "@/data/blogPosts";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-transform hover:-translate-y-1">
      <img
        src={post.image}
        alt={post.alt}
        width={1200}
        height={800}
        loading="lazy"
        className="h-48 w-full object-cover"
      />
      <div className="flex flex-1 flex-col p-8">
        <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
          {formatPostDate(post.date)}
        </p>
        <h3 className="mt-2 text-xl leading-snug text-teal-deep">{post.title}</h3>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <Link
          to="/blog/$slug"
          params={{ slug: post.slug }}
          className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold text-accent hover:gap-3"
        >
          Read More <ArrowRight className="size-4" />
        </Link>
      </div>
    </article>
  );
}
