import { Facebook, Linkedin, Share2, Twitter } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function ShareWidget({ title, path }: { title: string; path: string }) {
  const url = `https://340bmatters.org${path}`;

  const links = [
    {
      label: "Facebook",
      Icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      label: "LinkedIn",
      Icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
    {
      label: "X",
      Icon: Twitter,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    },
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="inline-flex items-center gap-2 font-display text-sm font-bold tracking-[0.14em] text-primary uppercase hover:text-accent"
        >
          <Share2 className="size-4" /> Share
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-3">
        <p className="mb-2 text-xs font-semibold text-muted-foreground">
          Share this article on socials
        </p>
        <div className="flex items-center gap-2">
          {links.map(({ label, Icon, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Share on ${label}`}
              className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-accent"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
