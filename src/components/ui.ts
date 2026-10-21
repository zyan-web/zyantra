// Shared Tailwind class strings. One radius (rounded-xl, --radius) and one shadow (shadow-card) site-wide.

const buttonBase =
  "inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-xl px-5 text-[15px] font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60";

export const buttonPrimary = `${buttonBase} bg-accent text-white shadow-card hover:bg-accent-hover`;

export const buttonSecondary = `${buttonBase} border border-line bg-card text-foreground shadow-card hover:border-foreground/25 hover:bg-surface`;

/** Square icon-only button (social links, carousel arrows, menu). */
export const iconButton =
  "grid size-11 shrink-0 place-items-center rounded-xl border border-line bg-card text-muted transition-colors hover:border-foreground/25 hover:text-foreground";

/** Tinted square that holds a feature icon (use 20px icons). */
export const iconTile = "grid size-11 shrink-0 place-items-center rounded-xl bg-accent-tint text-accent";

export const card = "rounded-xl border border-line bg-card shadow-card";

export const cardLift =
  "transition duration-200 hover:-translate-y-0.5 hover:shadow-card-hover motion-reduce:transition-none motion-reduce:hover:translate-y-0";

export const container = "mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8";

/** Vertical rhythm for every section: 64px mobile, 96px desktop. */
export const sectionY = "py-16 md:py-24";

/** For a section that directly follows another on the same background, so the gap isn't doubled. */
export const sectionYJoined = "pb-16 md:pb-24";

export const eyebrow = "mb-3 text-sm font-semibold text-accent";

export const heading2 = "text-[clamp(1.75rem,5.5vw,2.75rem)] leading-[1.15] font-bold tracking-[-0.02em] text-balance";

export const lead = "text-base leading-relaxed text-muted sm:text-lg";
