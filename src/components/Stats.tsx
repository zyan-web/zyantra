"use client";

import { animate, inView } from "motion/react";
import { useEffect, useRef } from "react";
import { site, type Stat } from "@/data/site";
import { inViewAmount, shouldAnimateIn } from "@/lib/motion";
import { container } from "./ui";

// One row on every screen size (short numbers fit side by side even at 360px).
const columns = ["", "grid-cols-1", "grid-cols-2", "grid-cols-3", "grid-cols-4"];

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
    <section aria-label="Stats" className="bg-band text-white">
      <dl className={`${container} grid divide-x divide-white/10 py-10 md:py-20 ${columns[stats.length]}`}>
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse justify-end gap-2 px-2 text-center">
            <dt className="text-xs leading-snug font-medium text-indigo-200 sm:text-sm">{stat.label}</dt>
            <dd className="text-[clamp(2rem,9vw,4rem)] leading-none font-bold tracking-[-0.03em] text-white">
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
