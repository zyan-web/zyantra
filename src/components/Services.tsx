"use client";

import { Bot, Check, ChevronLeft, ChevronRight, Cloud, CodeXml, Megaphone, Sparkles } from "lucide-react";
import { useRef, type PointerEvent } from "react";
import { site, type Service } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { container } from "./ui";

const icons: Record<Service["icon"], typeof Bot> = {
  bot: Bot,
  code: CodeXml,
  megaphone: Megaphone,
  sparkles: Sparkles,
  cloud: Cloud,
};

/**
 * Native horizontal scroller: swipe on touch, scroll/keys on keyboard,
 * plus click-and-drag with a mouse and prev/next buttons.
 */
export function Services() {
  const trackRef = useRef<HTMLUListElement>(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });

  const onPointerDown = (e: PointerEvent<HTMLUListElement>) => {
    if (e.pointerType !== "mouse" || !trackRef.current) return;
    drag.current = { active: true, startX: e.clientX, startScroll: trackRef.current.scrollLeft, moved: false };
    trackRef.current.style.scrollSnapType = "none";
  };

  const onPointerMove = (e: PointerEvent<HTMLUListElement>) => {
    const track = trackRef.current;
    if (!drag.current.active || !track) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) {
      drag.current.moved = true;
      track.setPointerCapture(e.pointerId);
    }
    track.scrollLeft = drag.current.startScroll - dx;
  };

  const endDrag = () => {
    if (!drag.current.active || !trackRef.current) return;
    drag.current.active = false;
    trackRef.current.style.scrollSnapType = "";
  };

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("li");
    const amount = card ? card.getBoundingClientRect().width + 24 : track.clientWidth * 0.8;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollBy({ left: dir * amount, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section id="services" aria-labelledby="services-title" className="py-20 md:py-28">
      <div className={`${container} flex flex-col gap-6 md:flex-row md:items-end md:justify-between`}>
        <SectionHeading
          id="services-title"
          eyebrow="Services"
          title="Everything you need to"
          accent="build and grow"
          description="Five services, one team. Drag or swipe through them, then pick what fits your goals."
        />
        <div className="mb-10 hidden gap-2 md:mb-14 md:flex">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Previous service"
            className="grid size-11 place-items-center rounded-full border border-line hover:border-accent hover:bg-accent-soft"
          >
            <ChevronLeft size={20} aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Next service"
            className="grid size-11 place-items-center rounded-full border border-line hover:border-accent hover:bg-accent-soft"
          >
            <ChevronRight size={20} aria-hidden />
          </button>
        </div>
      </div>

      <ul
        ref={trackRef}
        tabIndex={0}
        aria-label="Services, scroll horizontally"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onPointerCancel={endDrag}
        className="no-scrollbar flex cursor-grab snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-4 select-none active:cursor-grabbing sm:gap-6 sm:scroll-px-6 sm:px-6 lg:scroll-px-[max(2rem,calc((100vw-72rem)/2+2rem))] lg:px-[max(2rem,calc((100vw-72rem)/2+2rem))]"
      >
        {site.services.map((service, i) => {
          const Icon = icons[service.icon];
          return (
            <li
              key={service.title}
              className="w-[85%] max-w-[26rem] shrink-0 snap-start sm:w-[60%] lg:w-[24rem]"
            >
              <article className="flex h-full flex-col rounded-2xl border border-line bg-gradient-to-b from-surface-2 to-surface p-6 md:p-8">
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-xl bg-accent-soft text-accent-strong">
                    <Icon size={24} aria-hidden />
                  </span>
                  <span className="font-mono text-sm text-muted">0{i + 1}</span>
                </div>
                <h3 className="mt-8 text-2xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-muted">{service.description}</p>
                <ul className="mt-6 space-y-2 border-t border-line pt-6">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm">
                      <Check size={16} className="mt-0.5 shrink-0 text-accent-strong" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
