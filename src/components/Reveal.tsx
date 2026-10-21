"use client";

import { animate, inView } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";
import { inViewAmount, shouldAnimateIn } from "@/lib/motion";

/**
 * Fades content up as it scrolls into view (once, at 10% visible).
 * Rendered fully visible on the server and without JS; reduced-motion users,
 * browsers without IntersectionObserver and content already on screen are never hidden.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !shouldAnimateIn(el)) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    const show = () => {
      el.style.opacity = "";
      el.style.transform = "";
    };
    const stop = inView(
      el,
      () => {
        stop();
        animate(
          el,
          { opacity: [0, 1], transform: ["translateY(24px)", "translateY(0px)"] },
          { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
        ).then(show, show);
      },
      { amount: inViewAmount },
    );
    return () => {
      stop();
      show();
    };
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
