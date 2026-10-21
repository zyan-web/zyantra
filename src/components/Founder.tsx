import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { site } from "@/data/site";
import { LinkedinIcon } from "./BrandIcons";
import { Reveal } from "./Reveal";
import { buttonSecondary, container } from "./ui";

// Checked at build time: shows the photo if it exists in /public, otherwise a styled placeholder.
const hasPhoto = existsSync(join(process.cwd(), "public", site.founder.photo));

export function Founder() {
  const { founder } = site;
  return (
    <section id="founder" aria-labelledby="founder-title" className={`${container} py-14 md:py-28`}>
      <div className="grid items-center gap-10 rounded-3xl border border-line bg-surface p-6 sm:p-10 md:grid-cols-[minmax(0,20rem)_1fr] md:gap-14 md:p-14">
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl border border-line bg-surface-2">
            {hasPhoto ? (
              <Image
                src={founder.photo}
                alt={`Portrait of ${founder.name}, ${founder.title}`}
                fill
                sizes="(min-width: 768px) 20rem, 80vw"
                className="object-cover"
              />
            ) : (
              <div
                role="img"
                aria-label={`${founder.name} photo placeholder`}
                className="grid size-full place-items-center bg-[radial-gradient(circle_at_50%_30%,var(--accent-soft),transparent_70%)]"
              >
                <span className="accent-word text-8xl">{founder.name.charAt(0)}</span>
              </div>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mb-3 text-sm font-medium tracking-wide text-accent-strong uppercase">Meet the founder</p>
          <h2 id="founder-title" className="text-[clamp(1.75rem,6.5vw,3rem)] leading-tight font-semibold tracking-tight text-balance">
            {founder.name}, <span className="accent-word">{founder.title}</span>
          </h2>
          <div className="mt-6 space-y-4 text-muted sm:text-lg">
            {founder.bio.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          {site.links.linkedin && (
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonSecondary} mt-8`}
            >
              <LinkedinIcon width={18} height={18} /> Connect on LinkedIn
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          )}
        </Reveal>
      </div>
    </section>
  );
}
