import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Big Pharma's Newest Target: The Community Health Center Down the Road",
    excerpt:
      "You have probably driven past one without knowing it: a storefront clinic in a strip mall, a converted house on a rural two-lane road, or a mobile van parked outside a church.",
    href: "https://340bmatters.org/big-pharmas-newest-target-the-community-health-center-down-the-road",
  },
  {
    title: "RFK Jr. Bends the Knee to Big Pharma. Trump Country Will Pay the Price.",
    excerpt:
      "Buried in the Federal Register, Robert F. Kennedy Jr.'s health agency handed Big Pharma the prize it has chased for years: a revived and expanded 340B rebate scheme.",
    href: "https://340bmatters.org/rfk-jr-bends-the-knee-to-big-pharma-trump-country-will-pay-the-price",
  },
  {
    title: "Healthcare Safety Net Needs Champions Like Arkansas AG Tim Griffin",
    excerpt:
      "Thirteen of the most powerful drug companies on Earth got served with a lawsuit that could cost them billions of dollars. The complaint was filed on behalf of patients.",
    href: "https://340bmatters.org/healthcare-safety-net-needs-champions-like-arkansas-ag-tim-griffin",
  },
];

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
            <article
              key={post.title}
              className="flex flex-col rounded-3xl border border-border bg-card p-8 shadow-card transition-transform hover:-translate-y-1"
            >
              <h3 className="text-xl leading-snug text-teal-deep">{post.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <a
                href={post.href}
                className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold text-accent hover:gap-3"
              >
                Read More <ArrowRight className="size-4" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://340bmatters.org/blog/"
            className="inline-flex items-center rounded-full border-2 border-primary px-8 py-3 font-display text-sm font-bold tracking-[0.14em] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
}
