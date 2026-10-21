import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import {
  AudioLines,
  BookOpen,
  Brain,
  ClipboardCheck,
  ExternalLink,
  FileSearch,
  Gauge,
  MessageCircle,
  Stethoscope,
} from "lucide-react";
import { site, type Project } from "@/data/site";
import { hues } from "@/lib/hues";
import { GithubIcon } from "./BrandIcons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { buttonSecondary, card, cardLift, container, sectionY } from "./ui";

const icons: Record<Project["icon"], typeof Brain> = {
  "file-search": FileSearch,
  "audio-lines": AudioLines,
  "clipboard-check": ClipboardCheck,
  gauge: Gauge,
  "message-circle": MessageCircle,
  "book-open": BookOpen,
  brain: Brain,
  stethoscope: Stethoscope,
};

// Checked at build time: a real screenshot in /public replaces the designed cover.
function hasImage(src: string) {
  return Boolean(src) && existsSync(join(process.cwd(), "public", src));
}

/** Real screenshot inside a phone frame (apps) or a browser window (everything else). */
function ScreenshotMockup({ project }: { project: Project }) {
  const alt = `Screenshot of ${project.title}`;
  if (project.category === "App") {
    return (
      <div className="absolute top-6 -bottom-6 left-1/2 w-[32%] -translate-x-1/2 overflow-hidden rounded-[1.25rem] border-4 border-foreground bg-foreground shadow-xl">
        <Image src={project.image} alt={alt} fill sizes="200px" className="object-cover object-top" />
      </div>
    );
  }
  return (
    <div className="absolute inset-x-6 top-8 -bottom-2 overflow-hidden rounded-t-lg border border-white bg-white shadow-xl">
      <div aria-hidden className="flex h-5 items-center gap-1 border-b border-line bg-surface px-2">
        <span className="size-1.5 rounded-full bg-rose-400" />
        <span className="size-1.5 rounded-full bg-amber-400" />
        <span className="size-1.5 rounded-full bg-emerald-400" />
      </div>
      <div className="relative h-full">
        <Image src={project.image} alt={alt} fill sizes="(min-width: 1024px) 33vw, 80vw" className="object-cover object-top" />
      </div>
    </div>
  );
}

function ProjectCover({ project }: { project: Project }) {
  const hue = hues[project.hue];
  const Icon = icons[project.icon];
  return (
    <div
      className={`relative isolate flex aspect-[16/10] max-h-[180px] w-full items-center justify-center overflow-hidden border-b border-line bg-linear-to-br sm:max-h-none ${hue.cover}`}
    >
      <div aria-hidden className="dot-pattern absolute inset-0 -z-10" />
      {hasImage(project.image) ? (
        <ScreenshotMockup project={project} />
      ) : (
        <span
          aria-hidden
          className="grid size-[4.5rem] place-items-center rounded-2xl bg-white/70 shadow-[0_8px_24px_-8px_rgba(11,13,18,0.18)] ring-1 ring-white backdrop-blur-md transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none sm:size-20"
        >
          <Icon size={34} strokeWidth={1.75} className={hue.icon} />
        </span>
      )}
      <span className="absolute top-3 left-3 rounded-lg bg-white/90 px-2.5 py-1 text-xs font-semibold text-foreground shadow-card backdrop-blur">
        {project.category}
      </span>
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
      <Reveal>
        {/* Phones: swipeable row with a peek of the next card. sm+: grid. */}
        <ul
          tabIndex={0}
          aria-label="Projects"
          className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pt-1 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:p-0 lg:grid-cols-3"
        >
          {site.projects.map((project) => (
            <li key={project.title} className="flex w-[82%] max-w-[20rem] shrink-0 snap-start sm:w-auto sm:max-w-none">
              <article className={`group flex w-full flex-col overflow-hidden ${card} ${cardLift}`}>
                <ProjectCover project={project} />
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <h3 className="text-lg leading-snug font-semibold tracking-[-0.01em]">{project.title}</h3>
                  {/* Capped at 3 lines on phones so carousel cards stay compact; full text stays in the HTML */}
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted max-sm:line-clamp-3">{project.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
                    {project.tags.map((tag) => (
                      <li key={tag} className="rounded-lg border border-line bg-surface px-2 py-0.5 text-xs font-medium text-muted">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  {(project.github || project.live) && (
                    <div className="mt-5 flex gap-2">
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
            </li>
          ))}
        </ul>
        <p className="mt-2 text-center text-sm text-muted sm:hidden" aria-hidden>
          Swipe to see more →
        </p>
      </Reveal>
    </section>
  );
}
