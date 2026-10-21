import { Building2, Handshake, Rocket } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { container } from "./ui";

const icons = [Rocket, Building2, Handshake];

export function Audience() {
  return (
    <section aria-labelledby="audience-title" className={`${container} py-20 md:py-28`}>
      <SectionHeading id="audience-title" eyebrow="Who we build for" title="Built for businesses ready to" accent="grow smarter." />
      <div className="grid gap-4 md:grid-cols-3 md:gap-6">
        {site.audiences.map((audience, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={audience.title} delay={i * 0.08} className="h-full">
              <article className="group h-full rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/50 md:p-8">
                <span className="grid size-11 place-items-center rounded-xl bg-accent-soft text-accent-strong">
                  <Icon size={22} aria-hidden />
                </span>
                <h3 className="mt-6 text-xl font-semibold">{audience.title}</h3>
                <p className="mt-3 text-muted">{audience.description}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
