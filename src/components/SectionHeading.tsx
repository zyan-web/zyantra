import { Reveal } from "./Reveal";

export function SectionHeading({
  id,
  eyebrow,
  title,
  accent,
  description,
}: {
  id: string;
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-10 max-w-2xl md:mb-14">
      <p className="mb-3 text-sm font-medium tracking-wide text-accent-strong uppercase">
        {eyebrow}
      </p>
      <h2 id={id} className="text-[clamp(1.75rem,6.5vw,3rem)] leading-tight font-semibold tracking-tight text-balance">
        {title} {accent && <span className="accent-word">{accent}</span>}
      </h2>
      {description && <p className="mt-4 text-base text-muted sm:text-lg">{description}</p>}
    </Reveal>
  );
}
