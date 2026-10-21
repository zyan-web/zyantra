// Shared Tailwind class strings for buttons.
const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60";

export const buttonPrimary = `${buttonBase} bg-accent text-white shadow-[0_0_32px_-6px_var(--accent)] hover:bg-accent-strong hover:text-background`;

export const buttonSecondary = `${buttonBase} border border-line bg-white/[0.03] text-foreground hover:border-accent hover:bg-accent-soft`;

export const container = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";
