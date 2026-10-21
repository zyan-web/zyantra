import { ArrowRight, MapPin } from "lucide-react";
import { site } from "@/data/site";
import { HeroVisual } from "./HeroVisual";
import { SocialLinks } from "./SocialLinks";
import { buttonPrimary, buttonSecondary, container, lead } from "./ui";

export function Hero() {
  const { hero } = site;
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      {/* Soft mesh gradient: very light blurred blobs behind high-contrast text */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-24 size-80 rounded-full bg-indigo-200/50 blur-3xl md:size-[34rem]" />
        <div className="absolute top-10 -right-24 size-72 rounded-full bg-teal-100/70 blur-3xl md:size-[30rem]" />
        <div className="absolute -bottom-24 left-1/3 size-72 rounded-full bg-orange-100/70 blur-3xl md:size-[28rem]" />
      </div>

      {/* CSS entrance (not Motion) so the hero is visible before JS loads */}
      <div
        className={`${container} grid items-center gap-14 pt-12 pb-16 sm:pt-20 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:pt-24 lg:pb-28`}
      >
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="hero-in">
            <p className="inline-flex items-center gap-2 rounded-xl bg-accent-tint px-3.5 py-1.5 text-xs font-semibold text-accent sm:text-sm">
              <span aria-hidden className="size-1.5 rounded-full bg-accent" />
              {hero.eyebrow}
            </p>
          </div>

          <div className="hero-in [animation-delay:80ms]">
            <h1
              id="hero-title"
              className="mt-6 max-w-4xl text-[clamp(2.125rem,7.5vw,4.25rem)] leading-[1.06] font-bold tracking-[-0.03em] text-balance lg:text-[3.75rem]"
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

          <div className="hero-in [animation-delay:240ms] mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row lg:justify-start">
            <a href={site.primaryCta.href} className={buttonPrimary}>
              {site.primaryCta.label} <ArrowRight size={16} aria-hidden />
            </a>
            <a href={hero.secondaryCta.href} className={buttonSecondary}>
              {hero.secondaryCta.label}
            </a>
          </div>

          <nav aria-label="Social links" className="hero-in mt-8 [animation-delay:320ms]">
            {/* Max 4 icons per row on phones keeps them clear of the floating WhatsApp button */}
            <SocialLinks className="mx-auto max-w-[13rem] justify-center md:max-w-none lg:justify-start" whatsapp={false} />
          </nav>
        </div>

        <div className="hero-in [animation-delay:200ms]">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
