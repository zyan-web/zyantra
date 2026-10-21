import { Sparkle } from "lucide-react";
import { site } from "@/data/site";

export function SkillsMarquee() {
  const renderList = (duplicate: boolean) =>
    site.skills.map((skill) => (
      <li
        key={`${skill}-${duplicate}`}
        data-duplicate={duplicate || undefined}
        aria-hidden={duplicate || undefined}
        className="flex shrink-0 items-center gap-3 px-4 py-2 text-base text-muted sm:text-lg"
      >
        <Sparkle size={14} className="text-accent" aria-hidden />
        {skill}
      </li>
    ));

  return (
    <section aria-label="Skills and tools" className="border-y border-line bg-surface/50 py-5">
      <div className="marquee overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <ul className="marquee-track flex w-max">
          {renderList(false)}
          {renderList(true)}
        </ul>
      </div>
    </section>
  );
}
