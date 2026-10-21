"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { site, type Stat } from "@/data/site";
import { container } from "./ui";

const columns = ["", "sm:grid-cols-1", "sm:grid-cols-2", "sm:grid-cols-3", "sm:grid-cols-2 md:grid-cols-4"];

function CountUp({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, stat.value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, stat.value]);

  return (
    <span ref={ref} aria-hidden>
      {reduce ? stat.value : value}
      {stat.suffix}
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
            <dd className="text-4xl font-semibold tracking-tight text-accent-strong md:text-5xl">
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
