import { Reveal } from "./Reveal";
import { eyebrow as eyebrowClass, heading2, lead } from "./ui";

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-10 max-w-2xl md:mb-14">
      <p className={eyebrowClass}>{eyebrow}</p>
      <h2 id={id} className={heading2}>
        {title}
      </h2>
      {description && <p className={`mt-4 ${lead}`}>{description}</p>}
    </Reveal>
  );
}
