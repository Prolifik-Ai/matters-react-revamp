import { ArrowRight } from "lucide-react";
import stakeCommunities from "@/assets/stake-communities.jpg";
import stakeFunding from "@/assets/stake-funding.jpg";
import stakeHospitals from "@/assets/stake-hospitals.jpg";

const items = [
  {
    title: "Lost Health Care Funding",
    body: "As the healthcare landscape is changing, 340B is at risk. The total direct and indirect funding hospitals will lose if the discounts are reduced is unknown.",
    href: "https://340bmatters.org/lost-funding/",
    image: stakeFunding,
    alt: "Pharmacist counting pills beside prescription bottles and a calculator",
  },
  {
    title: "Fewer Hospitals",
    body: "Dozens of hospitals and clinics will close without the 340B drug discount program, especially in rural areas. Safety-net hospitals will have to reduce services.",
    href: "https://340bmatters.org/fewer-hospitals/",
    image: stakeHospitals,
    alt: "Rural community health clinic building",
  },
  {
    title: "Impacted Communities",
    body: "Virtually all communities in the U.S. benefit from providers that participate in 340B, from big-city safety-net hospitals to small-town clinics.",
    href: "https://340bmatters.org/impacted-communities/",
    image: stakeCommunities,
    alt: "Community members gathered outside a neighborhood clinic",
  },
];

export function WhatsAtStake() {
  return (
    <section id="stake" className="bg-secondary/50 px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="eyebrow">The consequences</p>
          <h2 className="mt-3 text-4xl text-teal-deep sm:text-5xl">What&apos;s at Stake?</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-3xl bg-card shadow-card transition-transform hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.alt}
                width={1200}
                height={800}
                loading="lazy"
                className="h-48 w-full object-cover"
              />
              <div className="p-8">
                <h3 className="text-xl text-teal-deep">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                <a
                  href={item.href}
                  className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold text-accent hover:gap-3"
                >
                  Learn More <ArrowRight className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
