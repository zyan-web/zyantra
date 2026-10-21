import { Quote } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { container } from "./ui";

/** Only renders when site.reviews has real entries. */
export function Reviews() {
  if (site.reviews.length === 0) return null;

  return (
    <section id="reviews" aria-labelledby="reviews-title" className={`${container} py-14 md:py-28`}>
      <SectionHeading id="reviews-title" eyebrow="Reviews" title="What clients" accent="say" />
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {site.reviews.map((review, i) => (
          <li key={`${review.name}-${i}`}>
            <Reveal delay={(i % 3) * 0.08} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 md:p-8">
                <Quote size={24} className="text-accent-strong" aria-hidden />
                <blockquote className="mt-4 flex-1 text-foreground/90">“{review.quote}”</blockquote>
                <figcaption className="mt-6 border-t border-line pt-4">
                  <p className="font-medium">{review.name}</p>
                  <p className="text-sm text-muted">{review.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
