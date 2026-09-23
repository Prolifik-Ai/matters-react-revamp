import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SignupSection } from "@/components/site/SignupSection";
import { PageHeader } from "@/components/site/PageHeader";
import { FaqAccordion } from "@/components/site/FaqAccordion";

const title = "FAQs | 340B Matters";
const description = "Frequently asked questions about the 340B Drug Discount Program.";

const aboutNav = [
  { label: "Who Are We", href: "/who-are-we" },
  { label: "Our Principles", href: "/our-principles" },
  { label: "FAQs", href: "/faqs" },
];

export const Route = createFileRoute("/faqs")({
  component: Faqs,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/faqs" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/faqs" }],
  }),
});

function Faqs() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHeader
          eyebrow="About 340B Matters"
          title="Frequently Asked Questions"
          nav={aboutNav}
        />

        <section className="px-5 py-16">
          <FaqAccordion />
        </section>

        <SignupSection />
      </main>
      <SiteFooter />
    </div>
  );
}
