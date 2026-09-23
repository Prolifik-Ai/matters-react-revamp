import { Link } from "@tanstack/react-router";
import { HeartPulse, ShieldCheck, Users } from "lucide-react";

const pillars = [
  { Icon: HeartPulse, label: "Patients over profits" },
  { Icon: ShieldCheck, label: "Protect the safety net" },
  { Icon: Users, label: "Communities first" },
];

export function AboutSection() {
  return (
    <section id="about" className="px-5 py-16">
      <div className="surface-teal mx-auto max-w-6xl rounded-4xl px-8 py-14 shadow-lift sm:px-14">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-primary-foreground/80">Who we are</p>
            <h2 className="mt-3 text-4xl text-primary-foreground sm:text-5xl">
              About 340B Matters
            </h2>
            <p className="mt-6 text-base leading-relaxed text-primary-foreground/85">
              340B Matters advocates for patients over profits. We seek to protect the lifesaving
              340B Drug Discount Program, so this critical legislation can keep doing what it was
              intended to do: ensuring vulnerable patients and the hospitals and clinics that serve
              them can afford the medicine they need.
            </p>
            <Link
              to="/who-are-we"
              className="mt-8 inline-flex items-center rounded-full bg-accent px-8 py-3.5 font-display text-sm font-bold tracking-[0.14em] text-accent-foreground uppercase transition-transform hover:scale-[1.03]"
            >
              Learn More
            </Link>
          </div>

          <ul className="grid gap-4">
            {pillars.map(({ Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-4 rounded-3xl bg-primary-foreground/10 px-6 py-5"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Icon className="size-5" />
                </span>
                <span className="font-display text-lg font-semibold text-primary-foreground">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
