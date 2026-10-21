"use client";

import { animate, inView } from "motion/react";
import { useEffect, useRef } from "react";
import { site, type Stat } from "@/data/site";
import { inViewAmount, shouldAnimateIn } from "@/lib/motion";
import { container } from "./ui";

const columns = ["", "sm:grid-cols-1", "sm:grid-cols-2", "sm:grid-cols-3", "sm:grid-cols-2 md:grid-cols-4"];

/** Renders the final number in the HTML; counts up from 0 only when the animation can actually run. */
function CountUp({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null);
  const suffix = stat.suffix ?? "";
  const final = `${stat.value}${suffix}`;

  useEffect(() => {
    const el = ref.current;
    if (!el || !shouldAnimateIn(el)) return;

    // The final number stays on screen until the count actually starts.
    let controls: ReturnType<typeof animate> | undefined;
    const stop = inView(
      el,
      () => {
        stop();
        controls = animate(0, stat.value, {
          duration: 1.6,
          ease: "easeOut",
          onUpdate: (v) => (el.textContent = `${Math.round(v)}${suffix}`),
        });
      },
      { amount: inViewAmount },
    );
    return () => {
      stop();
      controls?.stop();
      el.textContent = final;
    };
  }, [stat.value, suffix, final]);

  return (
    <span ref={ref} aria-hidden>
      {final}
    </span>
  );
}

export function Stats() {
  const stats = site.stats.filter((s) => s.value > 0);
  if (stats.length === 0) return null;

  return (
    <section aria-label="Stats" className={`${container} py-12 md:py-16`}>
      <dl className={`grid gap-px overflow-hidden rounded-2xl border border-line bg-line ${columns[stats.length]}`}>
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse gap-2 bg-surface p-6 text-center md:p-8">
            <dt className="text-sm text-muted">{stat.label}</dt>
            <dd className="text-[clamp(2.25rem,9vw,3rem)] leading-none font-semibold tracking-tight text-accent-strong">
              <CountUp stat={stat} />
              <span className="sr-only">
                {stat.value}
                {stat.suffix}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
