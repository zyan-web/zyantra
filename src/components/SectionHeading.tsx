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
      <h2 id={id} className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
        {title} {accent && <span className="accent-word">{accent}</span>}
      </h2>
      {description && <p className="mt-4 text-base text-muted sm:text-lg">{description}</p>}
    </Reveal>
  );
}
