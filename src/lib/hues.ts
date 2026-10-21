import type { Hue } from "@/data/site";

/** Static Tailwind classes per hue (kept literal so Tailwind can see them). */
export const hues: Record<Hue, { cover: string; icon: string; tile: string }> = {
  indigo: { cover: "from-indigo-100 via-indigo-50 to-white", icon: "text-indigo-600", tile: "bg-indigo-50 text-indigo-600" },
  teal: { cover: "from-teal-100 via-teal-50 to-white", icon: "text-teal-600", tile: "bg-teal-50 text-teal-700" },
  amber: { cover: "from-amber-100 via-amber-50 to-white", icon: "text-amber-600", tile: "bg-amber-50 text-amber-700" },
  rose: { cover: "from-rose-100 via-rose-50 to-white", icon: "text-rose-600", tile: "bg-rose-50 text-rose-600" },
  sky: { cover: "from-sky-100 via-sky-50 to-white", icon: "text-sky-600", tile: "bg-sky-50 text-sky-700" },
  emerald: { cover: "from-emerald-100 via-emerald-50 to-white", icon: "text-emerald-600", tile: "bg-emerald-50 text-emerald-700" },
  violet: { cover: "from-violet-100 via-violet-50 to-white", icon: "text-violet-600", tile: "bg-violet-50 text-violet-600" },
  orange: { cover: "from-orange-100 via-orange-50 to-white", icon: "text-orange-600", tile: "bg-orange-50 text-orange-700" },
};
