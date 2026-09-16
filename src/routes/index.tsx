import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import { LatestNews } from "@/components/site/LatestNews";
import { AboutSection } from "@/components/site/AboutSection";
import { WhatsAtStake } from "@/components/site/WhatsAtStake";
import { SignupSection } from "@/components/site/SignupSection";
import { SiteFooter } from "@/components/site/SiteFooter";

const title = "340B Matters | Patients Over Profits";
const description =
  "340B Matters defends the 340B Drug Discount Program so safety-net hospitals and clinics can keep affordable medicine within reach for vulnerable patients.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "340B Matters",
          description,
          url: "/",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroCarousel />
        <LatestNews />
        <AboutSection />
        <WhatsAtStake />
        <SignupSection />
      </main>
      <SiteFooter />
    </div>
  );
}
