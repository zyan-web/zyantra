import { site } from "@/data/site";

// The list repeats so each half of the track is wider than a desktop screen; the track scrolls by half.
const COPIES = 4;

export function TechMarquee() {
  return (
    <section aria-labelledby="tech-title" className="border-y border-line bg-surface py-8 md:py-10">
      <p id="tech-title" className="mb-5 text-center text-sm font-semibold text-muted">
        Tech we work with
      </p>
      <div className="marquee overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <ul className="marquee-track flex w-max">
          {Array.from({ length: COPIES }, (_, copy) =>
            site.techStack.map((tech) => (
              <li
                key={`${tech}-${copy}`}
                data-duplicate={copy > 0 || undefined}
                aria-hidden={copy > 0 || undefined}
                className="shrink-0 pr-3"
              >
                <span className="inline-flex items-center gap-2 rounded-xl border border-line bg-card px-4 py-2 text-sm font-semibold text-foreground shadow-card">
                  <span aria-hidden className="size-1.5 rounded-full bg-accent" />
                  {tech}
                </span>
              </li>
            )),
          )}
        </ul>
      </div>
    </section>
  );
}
