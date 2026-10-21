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
    <footer className="border-t border-line">
      <div className={`${container} grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr]`}>
        <div>
          <p className="flex items-center gap-2.5 font-semibold">
            <Image src={site.logo} alt="" width={32} height={32} unoptimized className="size-8" />
            {site.name}
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted">{site.footerLine}</p>
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
          <p className="mb-3 text-sm font-medium">Find us online</p>
          <SocialLinks />
        </div>
      </div>

      <div className={`${container} flex items-center justify-between gap-4 border-t border-line pt-6 pb-24 md:pb-6`}>
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
