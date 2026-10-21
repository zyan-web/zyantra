import { ArrowRight, MapPin } from "lucide-react";
import { site } from "@/data/site";
import { SocialLinks } from "./SocialLinks";
import { buttonPrimary, buttonSecondary, container, lead } from "./ui";

export function Hero() {
  const { hero } = site;
  return (
    <section aria-labelledby="hero-title">
      {/* CSS entrance (not Motion) so the hero is visible before JS loads */}
      <div className={`${container} flex flex-col items-center pt-14 pb-16 text-center sm:pt-24 md:pt-32 md:pb-24`}>
        <div className="hero-in">
          <p className="inline-flex items-center gap-2 rounded-xl bg-accent-tint px-3.5 py-1.5 text-xs font-semibold text-accent sm:text-sm">
            <span aria-hidden className="size-1.5 rounded-full bg-accent" />
            {hero.eyebrow}
          </p>
        </div>

        <div className="hero-in [animation-delay:80ms]">
          <h1
            id="hero-title"
            className="mt-6 max-w-4xl text-[clamp(2.125rem,7.5vw,4.25rem)] leading-[1.08] font-bold tracking-[-0.03em] text-balance"
          >
            {hero.headlineStart} <span className="accent-word">{hero.accent}</span> {hero.headlineEnd}
          </h1>
        </div>

        <div className="hero-in [animation-delay:160ms]">
          <p className={`mt-6 max-w-2xl ${lead}`}>{hero.subtext}</p>
          <p className="mt-4 text-sm text-muted">
            <MapPin size={14} aria-hidden className="mr-1 inline-block align-[-2px]" />
            {site.location}
          </p>
        </div>

        <div className="hero-in [animation-delay:240ms] mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <a href={site.primaryCta.href} className={buttonPrimary}>
            {site.primaryCta.label} <ArrowRight size={16} aria-hidden />
          </a>
          <a href={hero.secondaryCta.href} className={buttonSecondary}>
            {hero.secondaryCta.label}
          </a>
        </div>

        <nav aria-label="Social links" className="hero-in mt-8 [animation-delay:320ms]">
          {/* Max 4 icons per row on phones keeps them clear of the floating WhatsApp button */}
          <SocialLinks className="mx-auto max-w-[13rem] justify-center md:max-w-none" whatsapp={false} />
        </nav>
      </div>
    </section>
  );
}
