import { Quote } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { card, cardLift, container, sectionYJoined } from "./ui";

/** Only renders when site.reviews has real entries. */
export function Reviews() {
  if (site.reviews.length === 0) return null;

  return (
    <section id="reviews" aria-labelledby="reviews-title" className={`${container} ${sectionYJoined}`}>
      <SectionHeading id="reviews-title" eyebrow="Reviews" title="What clients say" />
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {site.reviews.map((review, i) => (
          <li key={`${review.name}-${i}`}>
            <Reveal delay={(i % 3) * 0.08} className="h-full">
              <figure className={`flex h-full flex-col p-6 md:p-8 ${card} ${cardLift}`}>
                <Quote size={20} className="text-muted" aria-hidden />
                <blockquote className="mt-4 flex-1 leading-relaxed text-foreground">“{review.quote}”</blockquote>
                <figcaption className="mt-6 border-t border-line pt-4">
                  <p className="font-semibold">{review.name}</p>
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
