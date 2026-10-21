/**
 * Scroll animations are an enhancement only: content is always rendered visible,
 * and is hidden-then-animated on the client only when this returns true.
 */
export function shouldAnimateIn(el: Element) {
  if (typeof IntersectionObserver === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  // Anything already on screen stays put, so nothing visible ever blinks out.
  return el.getBoundingClientRect().top > window.innerHeight;
}

/** Fraction of an element that must be on screen before it animates in. */
export const inViewAmount = 0.1;
