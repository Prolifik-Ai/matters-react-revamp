import { Link } from "@tanstack/react-router";

type PageHeaderNavItem = {
  label: string;
  href: string;
};

export function PageHeader({
  eyebrow,
  title,
  nav,
}: {
  eyebrow: string;
  title: string;
  nav: PageHeaderNavItem[];
}) {
  return (
    <div className="surface-teal px-5 pt-16 pb-20 sm:pt-20 sm:pb-24">
      <div className="mx-auto max-w-6xl text-center">
        <p className="eyebrow text-primary-foreground/80">{eyebrow}</p>
        <h1 className="mt-3 text-4xl text-primary-foreground sm:text-5xl">{title}</h1>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="rounded-full bg-primary-foreground/10 px-6 py-2.5 font-display text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent"
              activeProps={{ className: "bg-accent" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
