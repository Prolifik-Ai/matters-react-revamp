import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Facebook, Linkedin, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Logo } from "./Logo";

const nav = [
  {
    label: "About 340B Matters",
    items: [
      { label: "Who Are We", href: "/who-are-we" },
      { label: "Our Principles", href: "/our-principles" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  {
    label: "What's at Stake",
    items: [
      { label: "Lost Health Care Funding", href: "/lost-funding" },
      { label: "Fewer Hospitals", href: "/fewer-hospitals" },
      { label: "Impacted Communities", href: "/impacted-communities" },
    ],
  },
];

const socials = [
  { label: "Facebook", href: "https://facebook.com", Icon: Facebook },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <DropdownMenu key={item.label}>
              <DropdownMenuTrigger className="flex items-center gap-1 font-display text-[0.95rem] font-semibold text-secondary-foreground transition-colors outline-none hover:text-accent">
                {item.label}
                <ChevronDown className="size-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                {item.items.map((sub) => (
                  <DropdownMenuItem key={sub.href} asChild>
                    <Link to={sub.href}>{sub.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
          <Link
            to="/blog"
            className="font-display text-[0.95rem] font-semibold text-secondary-foreground transition-colors hover:text-accent"
          >
            Latest News
          </Link>
          <div className="flex items-center gap-2">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-accent"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex size-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 py-4 md:hidden">
          {nav.map((item) => (
            <div key={item.label} className="py-2">
              <p className="font-display text-base font-semibold text-secondary-foreground">
                {item.label}
              </p>
              <div className="mt-1 flex flex-col pl-3">
                {item.items.map((sub) => (
                  <Link
                    key={sub.href}
                    to={sub.href}
                    onClick={() => setOpen(false)}
                    className="py-2 font-display text-sm text-muted-foreground hover:text-accent"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Link
            to="/blog"
            onClick={() => setOpen(false)}
            className="block py-3 font-display text-base font-semibold text-secondary-foreground"
          >
            Latest News
          </Link>
        </nav>
      )}
    </header>
  );
}
