import { site } from "@/data/site";

export function SkillsMarquee() {
  const renderList = (duplicate: boolean) =>
    site.skills.map((skill) => (
      <li
        key={`${skill}-${duplicate}`}
        data-duplicate={duplicate || undefined}
        aria-hidden={duplicate || undefined}
        className="flex shrink-0 items-center gap-6 py-2 pr-6 text-[15px] font-medium text-muted sm:text-base"
      >
        {skill}
        <span aria-hidden className="size-1 rounded-full bg-muted/50" />
      </li>
    ));

  return (
    <section aria-label="Skills and tools" className="border-y border-line bg-surface py-5">
      <div className="marquee overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <ul className="marquee-track flex w-max">
          {renderList(false)}
          {renderList(true)}
        </ul>
      </div>
    </section>
  );
}
