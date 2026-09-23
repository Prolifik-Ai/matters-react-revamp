import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SignupSection } from "@/components/site/SignupSection";
import { PageHeader } from "@/components/site/PageHeader";
import { SponsorSection } from "@/components/site/SponsorSection";

const title = "About 340B Matters | 340B Matters";
const description =
  "340B Matters seeks to protect the 340B Drug Discount Program for nonprofit healthcare facilities from those who would severely restrict access to it.";

const aboutNav = [
  { label: "Who Are We", href: "/who-are-we" },
  { label: "Our Principles", href: "/our-principles" },
  { label: "FAQs", href: "/faqs" },
];

export const Route = createFileRoute("/who-are-we")({
  component: WhoAreWe,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/who-are-we" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/who-are-we" }],
  }),
});

function WhoAreWe() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHeader eyebrow="About 340B Matters" title="About 340B Matters" nav={aboutNav} />

        <section className="px-5 py-16">
          <div className="mx-auto max-w-4xl space-y-10">
            <div>
              <h2 className="text-3xl text-teal-deep">Mission</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                340B Matters seeks to protect this vital program for nonprofit healthcare facilities
                from those that would severely restrict access to the 340B program. We support
                patients over profits.
              </p>
            </div>

            <div>
              <h2 className="text-3xl text-teal-deep">About 340B</h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Congress enacted the 340B program in 1992 in reaction to the rapidly-increasing
                  costs of pharmaceutical drugs. This steep increase in drug prices created extreme
                  pressure on safety-net hospitals that provided care to our most vulnerable
                  populations as well as other nonprofit healthcare facilities. Drug companies are
                  not required to join the 340B program, but in order to participate in Medicaid and
                  Medicare markets, they must agree to provide discounted outpatient drug rates to
                  safety-net providers through the 340B program.
                </p>
                <p>
                  The purpose of the 340B program is to have drug manufacturers provide valuable
                  savings from the normal market price to help safety-net hospitals offset
                  operational costs that would normally be absorbed by the federal, state, and local
                  governments so they do not have to increase taxes beyond their current levels of
                  funding. Hospitals, as well as other nonprofit healthcare facilities, use 340B
                  savings as an integral part of their required community benefit by funding a
                  variety of programs in their communities that improve access to care for their
                  citizens. The program helps fund critical services including patient counseling
                  and education, transportation to care facilities, neonatal services, emergency
                  care, language translation services, etc.
                </p>
                <p>
                  Other 340B programs include free and discounted medicines, immunizations,
                  medication therapy management for HIV/AIDS and cancer, offsetting hospitals&apos;
                  uncompensated care, and a host of other programs that improve quality of care for
                  our nation&apos;s most vulnerable members.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SponsorSection />
        <SignupSection />
      </main>
      <SiteFooter />
    </div>
  );
}
