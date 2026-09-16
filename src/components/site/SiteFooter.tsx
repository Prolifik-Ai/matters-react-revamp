import { Facebook, Linkedin } from "lucide-react";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/50 px-5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
        <Logo />

        <nav className="flex flex-wrap justify-center gap-6">
          {[
            { label: "About", href: "#about" },
            { label: "What's at Stake", href: "#stake" },
            { label: "Latest News", href: "#news" },
            { label: "Sign Up", href: "#signup" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-display text-sm font-semibold text-secondary-foreground hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-accent"
          >
            <Facebook className="size-4" />
          </a>
          <a
            href="https://linkedin.com"
            aria-label="LinkedIn"
            className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-accent"
          >
            <Linkedin className="size-4" />
          </a>
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-6xl text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} 340B Matters. Truth over pharma fiction.
      </p>
    </footer>
  );
}
