import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { WhatsappIcon } from "./BrandIcons";
import { Reveal } from "./Reveal";
import { buttonPrimary, buttonSecondary, container } from "./ui";

export function CallToAction() {
  const { cta } = site;
  return (
    <section aria-labelledby="cta-title" className={`${container} py-12 md:py-16`}>
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-3xl border border-accent/30 bg-[radial-gradient(ellipse_80%_80%_at_50%_120%,var(--accent-soft),transparent_70%)] px-6 py-14 text-center sm:px-12 md:py-20">
          <h2 id="cta-title" className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
            {cta.heading} <span className="accent-word">{cta.accent}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted sm:text-lg">{cta.subtext}</p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            {site.links.whatsapp && (
              <a href={site.links.whatsapp} target="_blank" rel="noopener noreferrer" className={buttonSecondary}>
                <WhatsappIcon width={18} height={18} /> {cta.whatsappLabel}
                <span className="sr-only"> on WhatsApp (opens in new tab)</span>
              </a>
            )}
            <a href={site.primaryCta.href} className={buttonPrimary}>
              {site.primaryCta.label} <ArrowRight size={16} aria-hidden />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
