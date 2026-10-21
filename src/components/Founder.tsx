import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { site } from "@/data/site";
import { LinkedinIcon } from "./BrandIcons";
import { Reveal } from "./Reveal";
import { buttonSecondary, card, container, eyebrow, heading2, sectionY } from "./ui";

// Checked at build time: shows the photo if it exists in /public, otherwise a styled placeholder.
const hasPhoto = existsSync(join(process.cwd(), "public", site.founder.photo));

export function Founder() {
  const { founder } = site;
  return (
    <section id="founder" aria-labelledby="founder-title" className={`${container} ${sectionY}`}>
      <div className={`grid items-center gap-8 p-5 sm:p-10 md:grid-cols-[minmax(0,18rem)_1fr] md:gap-14 md:p-12 ${card}`}>
        <Reveal>
          <div className="relative isolate mx-auto aspect-[4/5] w-full max-w-56 overflow-hidden rounded-xl border border-line bg-linear-to-br from-indigo-100 via-violet-50 to-teal-50 sm:max-w-xs">
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
                className="grid size-full place-items-center"
              >
                <div aria-hidden className="dot-pattern absolute inset-0 -z-10" />
                <span aria-hidden className="text-8xl font-bold tracking-[-0.03em] text-indigo-300">
                  {founder.name.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className={eyebrow}>Meet the founder</p>
          <h2 id="founder-title" className={heading2}>
            {founder.name}, {founder.title}
          </h2>
          <div className="mt-5 space-y-4 leading-relaxed text-muted sm:text-lg">
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
