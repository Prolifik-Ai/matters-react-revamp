import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SignupSection } from "@/components/site/SignupSection";
import { PageHeader } from "@/components/site/PageHeader";
import { StatCallout } from "@/components/site/StatCallout";
import { stakePages, type StakePage } from "@/data/stakePages";

const stakeNav = stakePages.map((page) => ({
  label: page.navLabel,
  href: `/${page.slug}`,
}));

export function StakeDetail({ page }: { page: StakePage }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHeader eyebrow="What's at Stake" title={page.title} nav={stakeNav} />

        <section className="px-5 py-16">
          <div className="mx-auto max-w-4xl">
            <img
              src={page.image}
              alt={page.alt}
              width={1200}
              height={700}
              className="mb-10 h-64 w-full rounded-4xl object-cover shadow-lift sm:h-80"
            />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              {page.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {page.stat && (
              <div className="mt-10">
                <StatCallout value={page.stat.value} label={page.stat.label} />
              </div>
            )}

            {page.sourceHref && (
              <a
                href={page.sourceHref}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 font-display text-sm font-bold text-accent hover:gap-3"
              >
                View source <ArrowRight className="size-4" />
              </a>
            )}
          </div>
        </section>

        <SignupSection />
      </main>
      <SiteFooter />
    </div>
  );
}
