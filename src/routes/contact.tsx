import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SignupSection } from "@/components/site/SignupSection";

const title = "Contact 340B Matters | 340B Matters";
const description = "Get in touch with the 340B Matters campaign.";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="px-5 pt-20 pb-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Get in touch</p>
            <h1 className="mt-3 text-4xl text-teal-deep sm:text-5xl">Contact 340B Matters</h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Thank you for your interest in the information and work of the 340B Matters campaign.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              For any 340B Matters inquiries, please contact{" "}
              <a href="mailto:info@340bmatters.org" className="font-semibold text-accent">
                info@340bmatters.org
              </a>
              .
            </p>
          </div>
        </section>

        <SignupSection />
      </main>
      <SiteFooter />
    </div>
  );
}
