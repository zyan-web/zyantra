import { Building2, Handshake, Rocket } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { card, cardLift, container, iconTile, sectionY } from "./ui";

const icons = [Rocket, Building2, Handshake];

export function Audience() {
  return (
    <section aria-labelledby="audience-title" className={`${container} ${sectionY}`}>
      <SectionHeading id="audience-title" eyebrow="Who we build for" title="Built for businesses ready to grow smarter." />
      <div className="grid gap-4 md:grid-cols-3 md:gap-6">
        {site.audiences.map((audience, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={audience.title} delay={i * 0.08} className="h-full">
              <article className={`h-full p-6 md:p-8 ${card} ${cardLift}`}>
                <span className={iconTile}>
                  <Icon size={20} aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-[-0.01em]">{audience.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{audience.description}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
