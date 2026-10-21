import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { ExternalLink, ImageIcon } from "lucide-react";
import { site, type Project } from "@/data/site";
import { GithubIcon } from "./BrandIcons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { buttonSecondary, card, cardLift, container, sectionY } from "./ui";

// Checked at build time: shows the screenshot if it exists in /public, otherwise a styled placeholder.
function hasImage(src: string) {
  return Boolean(src) && existsSync(join(process.cwd(), "public", src));
}

function ProjectImage({ project }: { project: Project }) {
  if (hasImage(project.image)) {
    return (
      <Image
        src={project.image}
        alt={`Screenshot of ${project.title}`}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={`${project.title} preview placeholder`}
      className="flex size-full flex-col items-center justify-center gap-3 bg-surface text-muted"
    >
      <ImageIcon size={24} aria-hidden />
      <span className="px-6 text-center font-semibold text-foreground">{project.title}</span>
    </div>
  );
}


export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className={`${container} ${sectionY}`}>
      <SectionHeading
        id="projects-title"
        eyebrow="Selected work"
        title="Work that ships"
        description="A selection of what we've built across AI, automation, web and mobile."
      />
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {site.projects.map((project, i) => (
          <li key={project.title} className="flex">
            <Reveal delay={(i % 3) * 0.08} className="flex w-full">
              <article className={`group flex w-full flex-col overflow-hidden ${card} ${cardLift}`}>
                <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-surface">
                  <ProjectImage project={project} />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold tracking-[-0.01em]">{project.title}</h3>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{project.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                    {project.tags.map((tag) => (
                      <li key={tag} className="rounded-xl border border-line bg-surface px-2.5 py-1 text-xs font-medium text-muted">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  {(project.github || project.live) && (
                    <div className="mt-6 flex gap-2">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className={`${buttonSecondary} flex-1`}>
                          <GithubIcon width={16} height={16} /> GitHub
                          <span className="sr-only"> repository for {project.title} (opens in new tab)</span>
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className={`${buttonSecondary} flex-1`}>
                          <ExternalLink size={16} aria-hidden /> Live
                          <span className="sr-only"> demo of {project.title} (opens in new tab)</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
