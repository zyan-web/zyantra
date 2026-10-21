import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { WhatsappIcon } from "./BrandIcons";
import { WhatsAppLink } from "./WhatsAppLink";
import { Reveal } from "./Reveal";
import { buttonBase, container, heading2, sectionYJoined } from "./ui";

export function CallToAction() {
  const { cta } = site;
  return (
    <section aria-labelledby="cta-title" className={`${container} ${sectionYJoined}`}>
      <Reveal>
        {/* Solid bg-accent-hover under the gradient keeps white text measurable/readable everywhere */}
        <div className="relative isolate overflow-hidden rounded-2xl bg-accent-hover bg-linear-to-br from-accent via-accent-hover to-band px-6 py-14 text-center text-white shadow-[0_24px_48px_-16px_rgba(30,27,75,0.45)] sm:px-12 md:py-20">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(rgb(255_255_255/0.14)_1px,transparent_1px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
          />
          <h2 id="cta-title" className={`mx-auto max-w-3xl text-white ${heading2}`}>
            {cta.heading} {cta.accent}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-indigo-100 sm:text-lg">{cta.subtext}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <WhatsAppLink className={`${buttonBase} border border-white/30 bg-white/10 text-white hover:bg-white/20`}>
              <WhatsappIcon width={18} height={18} /> {cta.whatsappLabel}
              <span className="sr-only"> on WhatsApp (opens in new tab)</span>
            </WhatsAppLink>
            <a href={site.primaryCta.href} className={`${buttonBase} bg-white text-accent shadow-card hover:bg-indigo-50`}>
              {site.primaryCta.label} <ArrowRight size={16} aria-hidden />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
