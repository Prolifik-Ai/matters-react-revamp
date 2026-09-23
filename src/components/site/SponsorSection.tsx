import { ArrowRight } from "lucide-react";

export function SponsorSection() {
  return (
    <section className="px-5 py-16">
      <div className="mx-auto max-w-4xl rounded-4xl border border-border bg-card px-8 py-12 text-center shadow-card sm:px-14">
        <p className="eyebrow">Sponsor</p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Proudly sponsored by The Craneware Group, 340B Matters is committed to advancing the 340B
          Drug Discount Program&apos;s mission, ensuring healthcare resources reach those who need
          them most.
        </p>
        <a
          href="https://www.thecranewaregroup.com/"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold tracking-[0.14em] text-accent uppercase hover:gap-3"
        >
          The Craneware Group <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}
