import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroDoctor from "@/assets/hero-doctor.jpg";
import stakeCommunities from "@/assets/stake-communities.jpg";
import stakeHospitals from "@/assets/stake-hospitals.jpg";

const slides = [
  {
    title: "RFK Jr. Bends the Knee to Big Pharma. Trump Country Will Pay the Price",
    href: "https://340bmatters.org/rfk-jr-bends-the-knee-to-big-pharma-trump-country-will-pay-the-price",
    image: heroDoctor,
    alt: "Clinician holding a stethoscope in a hospital corridor",
  },
  {
    title: "Big Pharma's Newest Target: The Community Health Center Down the Road",
    href: "https://340bmatters.org/big-pharmas-newest-target-the-community-health-center-down-the-road",
    image: stakeHospitals,
    alt: "Small rural community health clinic beside a two-lane road",
  },
  {
    title: "Healthcare Safety Net Needs Champions Like Arkansas AG Tim Griffin",
    href: "https://340bmatters.org/healthcare-safety-net-needs-champions-like-arkansas-ag-tim-griffin",
    image: stakeCommunities,
    alt: "Neighbors talking with a nurse outside a community clinic",
  },
];

export function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), 7000);
    return () => window.clearInterval(timer);
  }, []);

  const go = (step: number) => setIndex((i) => (i + step + slides.length) % slides.length);

  return (
    <section aria-label="Featured stories" className="px-5 pt-6 pb-14">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-4xl shadow-lift">
        <div className="relative aspect-4/5 sm:aspect-16/9">
          {slides.map((slide, i) => (
            <div
              key={slide.title}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === index ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              aria-hidden={i !== index}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                width={1600}
                height={1000}
                loading={i === 0 ? "eager" : "lazy"}
                className="size-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-teal-deep/90 via-teal-deep/55 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-2xl px-8 sm:px-14">
                  <p className="eyebrow text-primary-foreground/80">Featured</p>
                  <h1 className="mt-4 font-display text-3xl leading-tight font-semibold text-primary-foreground sm:text-5xl">
                    {slide.title}
                  </h1>
                  <a
                    href={slide.href}
                    className="mt-8 inline-flex items-center rounded-full bg-accent px-8 py-3.5 font-display text-sm font-bold tracking-[0.14em] text-accent-foreground uppercase transition-transform hover:scale-[1.03]"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous story"
          className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full p-2 text-primary-foreground/80 transition-colors hover:text-primary-foreground"
        >
          <ChevronLeft className="size-8" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next story"
          className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full p-2 text-primary-foreground/80 transition-colors hover:text-primary-foreground"
        >
          <ChevronRight className="size-8" />
        </button>

        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show story ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-8 bg-accent" : "w-2 bg-primary-foreground/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
