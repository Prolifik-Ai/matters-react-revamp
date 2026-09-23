import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SignupSection } from "@/components/site/SignupSection";
import { PageHeader } from "@/components/site/PageHeader";
import { PrincipleList } from "@/components/site/PrincipleList";

const title = "Our Principles | 340B Matters";
const description =
  "340B Matters believes that 340B hospitals should unite behind a set of principles that will guide future efforts to improve the program.";

const aboutNav = [
  { label: "Who Are We", href: "/who-are-we" },
  { label: "Our Principles", href: "/our-principles" },
  { label: "FAQs", href: "/faqs" },
];

export const Route = createFileRoute("/our-principles")({
  component: OurPrinciples,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/our-principles" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/our-principles" }],
  }),
});

function OurPrinciples() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHeader eyebrow="For a stronger 340B program" title="Our Principles" nav={aboutNav} />

        <section className="px-5 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                The 340B Drug Discount Program has been a public policy success story from the
                beginning. It has been exceptionally successful in expanding access to health care
                in underserved areas, both rural and urban. Even the program&apos;s worst critics
                must acknowledge the incredible benefits 340B has provided for more than 30 years.
              </p>
              <p>
                Despite the tremendous effectiveness of the program, it&apos;s not perfect. We have
                documented how pharmaceutical companies consistently abuse 340B to pad their
                excessive profits. There are also steps that hospitals can take to enhance the
                long-term sustainability of the program.
              </p>
              <p>
                340B Matters believes that 340B hospitals should unite behind a set of principles
                that will guide future efforts to improve the program. Here are some that we offer
                for consideration by all 340B stakeholders:
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 pb-16">
          <PrincipleList />
        </section>

        <SignupSection />
      </main>
      <SiteFooter />
    </div>
  );
}
