import { Link } from "@tanstack/react-router";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-2" aria-label="340B Matters home">
      <svg viewBox="0 0 32 28" className="h-7 w-8 shrink-0" aria-hidden="true">
        <path
          d="M16 26S3 18.4 3 10.4A7.2 7.2 0 0 1 16 6.1 7.2 7.2 0 0 1 29 10.4C29 18.4 16 26 16 26Z"
          fill="currentColor"
          className="text-accent"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-2xl font-bold tracking-tight">
          <span className={inverted ? "text-primary-foreground" : "text-primary"}>340B</span>
          <span className={inverted ? "text-primary-foreground/80" : "text-teal-deep"}>matters.</span>
        </span>
        <span
          className={`mt-1 font-display text-[0.55rem] font-bold uppercase tracking-[0.22em] ${
            inverted ? "text-primary-foreground/70" : "text-accent"
          }`}
        >
          Truth over pharma fiction
        </span>
      </span>
    </Link>
  );
}
