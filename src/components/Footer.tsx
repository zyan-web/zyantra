"use client";

import { ArrowUp, Mail } from "lucide-react";
import { useSyncExternalStore } from "react";
import { footerLinks, site } from "@/data/site";
import { FiverrIcon, GithubIcon, InstagramIcon, LinkedinIcon, UpworkIcon, WhatsappIcon } from "./BrandIcons";
import { container } from "./ui";

const socials = [
  { label: "LinkedIn", href: site.links.linkedin, Icon: LinkedinIcon },
  { label: "GitHub", href: site.links.github, Icon: GithubIcon },
  { label: "Instagram", href: site.links.instagram, Icon: InstagramIcon },
  { label: "Fiverr", href: site.links.fiverr, Icon: FiverrIcon },
  { label: "Upwork", href: site.links.upwork, Icon: UpworkIcon },
  { label: "WhatsApp", href: site.links.whatsapp, Icon: WhatsappIcon },
];

const noopSubscribe = () => () => {};

export function Footer() {
  // Set on the client so the static page always shows the visitor's current year.
  const year = useSyncExternalStore(
    noopSubscribe,
    () => new Date().getFullYear(),
    () => null,
  );

  const backToTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    document.getElementById("top")?.focus({ preventScroll: true });
  };

  return (
    <footer className="border-t border-line">
      <div className={`${container} grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr]`}>
        <div>
          <p className="flex items-center gap-2.5 font-semibold">
            <span aria-hidden className="grid size-8 place-items-center rounded-lg bg-accent text-xs font-bold text-white">
              {site.initials}
            </span>
            {site.name}
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted">{site.role}. {site.location}.</p>
        </div>

        <nav aria-label="Footer">
          <p className="mb-3 text-sm font-medium">Quick links</p>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-muted hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-3 text-sm font-medium">Find me online</p>
          <ul className="flex flex-wrap gap-2">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} (opens in new tab)`}
                  className="grid size-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-foreground"
                >
                  <Icon width={18} height={18} />
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${site.links.email}`}
                aria-label="Email"
                className="grid size-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-foreground"
              >
                <Mail size={18} aria-hidden />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`${container} flex items-center justify-between gap-4 border-t border-line py-6`}>
        <p className="text-sm text-muted">
          © {year ?? ""} {site.name}. All rights reserved.
        </p>
        <button
          type="button"
          onClick={backToTop}
          className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-muted hover:border-accent hover:text-foreground"
        >
          <ArrowUp size={16} aria-hidden /> Back to top
        </button>
      </div>
    </footer>
  );
}
