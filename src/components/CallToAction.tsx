import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { WhatsappIcon } from "./BrandIcons";
import { WhatsAppLink } from "./WhatsAppLink";
import { Reveal } from "./Reveal";
import { buttonPrimary, buttonSecondary, card, container, heading2, lead, sectionYJoined } from "./ui";

export function CallToAction() {
  const { cta } = site;
  return (
    <section aria-labelledby="cta-title" className={`${container} ${sectionYJoined}`}>
      <Reveal>
        <div className={`px-6 py-12 text-center sm:px-12 md:py-16 ${card}`}>
          <h2 id="cta-title" className={`mx-auto max-w-3xl ${heading2}`}>
            {cta.heading} {cta.accent}
          </h2>
          <p className={`mx-auto mt-4 max-w-xl ${lead}`}>{cta.subtext}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <WhatsAppLink className={buttonSecondary}>
              <WhatsappIcon width={18} height={18} /> {cta.whatsappLabel}
              <span className="sr-only"> on WhatsApp (opens in new tab)</span>
            </WhatsAppLink>
            <a href={site.primaryCta.href} className={buttonPrimary}>
              {site.primaryCta.label} <ArrowRight size={16} aria-hidden />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
