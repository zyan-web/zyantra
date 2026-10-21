"use client";

import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { useSyncExternalStore } from "react";
import { footerLinks, site } from "@/data/site";
import { SocialLinks } from "./SocialLinks";
import { container } from "./ui";

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
    <footer className="theme-dark bg-background text-foreground">
      <div className={`${container} grid gap-10 py-16 md:grid-cols-[1.5fr_1fr_1fr]`}>
        <div>
          <p className="flex items-center gap-2.5 font-bold tracking-[-0.01em]">
            <Image src={site.logo} alt="" width={32} height={32} unoptimized className="size-8" />
            {site.name}
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted">{site.footerLine}</p>
        </div>

        <nav aria-label="Footer">
          <p className="mb-3 text-sm font-semibold">Quick links</p>
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
          <p className="mb-3 text-sm font-semibold">Find us online</p>
          <SocialLinks />
        </div>
      </div>

      <div className={container}>
        <div className="flex items-center justify-between gap-4 border-t border-line py-6">
          <p className="text-sm text-muted">
            © {year ?? ""} {site.name}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={backToTop}
            className="inline-flex h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-xl border border-line px-4 text-sm font-medium text-muted transition-colors hover:border-foreground/25 hover:text-foreground"
          >
            <ArrowUp size={16} aria-hidden /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
