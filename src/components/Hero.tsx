import { ArrowRight, MapPin } from "lucide-react";
import { site } from "@/data/site";
import { SocialLinks } from "./SocialLinks";
import { buttonPrimary, buttonSecondary, container } from "./ui";

export function Hero() {
  const { hero } = site;
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      {/* CSS entrance (not Motion) so the hero is visible before JS loads */}
      {/* Accent glow + grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,var(--accent-soft),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
      />

      <div className={`${container} flex flex-col items-center pt-14 pb-14 text-center sm:pt-28 md:pt-36 md:pb-24`}>
        <div className="hero-in">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-1.5 text-xs text-muted sm:text-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {hero.eyebrow}
          </p>
        </div>

        <div className="hero-in [animation-delay:80ms]">
          <h1
            id="hero-title"
            className="mt-6 max-w-4xl text-[clamp(2rem,8.5vw,4.5rem)] leading-[1.08] font-semibold tracking-tight text-balance"
          >
            {hero.headlineStart} <span className="accent-word">{hero.accent}</span> {hero.headlineEnd}
          </h1>
        </div>

        <div className="hero-in [animation-delay:160ms]">
          <p className="mt-6 max-w-2xl text-base text-muted sm:text-lg">{hero.subtext}</p>
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
