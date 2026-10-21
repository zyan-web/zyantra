import { Bot, Check, SendHorizontal, Sparkles, TrendingUp, Zap } from "lucide-react";
import { site } from "@/data/site";

const chipIcons = [TrendingUp, Bot, Zap];
// Chips never cover the chat text: on phones they sit on the card's top/bottom edges (inside the
// viewport); from sm up the middle chip moves fully outside the card's left edge.
const chipPlacement = [
  "-top-4 right-2 sm:-right-4",
  "-bottom-4 left-3 sm:top-[42%] sm:bottom-auto sm:-left-28 [animation-delay:1.6s]",
  "-bottom-4 right-6 max-sm:hidden sm:right-10 [animation-delay:3.2s]",
];

/** Illustrative AI assistant card with floating chips (text from site.hero.visual). */
export function HeroVisual() {
  const v = site.hero.visual;
  return (
    <div
      role="img"
      aria-label={`Illustration: ${v.assistant} answering "${v.userMessage}"`}
      className="relative mx-auto w-full max-w-[21rem] sm:max-w-md lg:mr-0"
    >
      <div className="rounded-2xl border border-line bg-card p-4 shadow-[0_24px_48px_-16px_rgba(30,27,75,0.22)] sm:p-5">
        <div className="flex items-center gap-3 border-b border-line pb-3">
          <span className="grid size-9 place-items-center rounded-xl bg-accent text-white">
            <Bot size={18} aria-hidden />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold">{v.assistant}</p>
            <p className="flex items-center gap-1.5 text-xs text-emerald-700">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              {v.status}
            </p>
          </div>
          <Sparkles size={16} className="text-muted" aria-hidden />
        </div>

        <div className="space-y-3 py-4 text-left">
          <p className="ml-auto w-fit max-w-[85%] rounded-xl rounded-br-sm bg-accent px-3.5 py-2.5 text-sm leading-snug text-white">
            {v.userMessage}
          </p>
          <p className="w-fit max-w-[90%] rounded-xl rounded-bl-sm bg-surface px-3.5 py-2.5 text-sm leading-snug">
            {v.reply}
          </p>
          <ul className="space-y-2 rounded-xl border border-line p-3 max-sm:hidden">
            {v.tasks.map((task) => (
              <li key={task} className="flex items-center gap-2 text-[13px] font-medium">
                <span className="grid size-4 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                  <Check size={11} strokeWidth={3} aria-hidden />
                </span>
                {task}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-line px-3 py-2">
          <span className="flex-1 text-left text-sm text-muted">{v.inputPlaceholder}</span>
          <span className="grid size-7 place-items-center rounded-lg bg-accent text-white">
            <SendHorizontal size={14} aria-hidden />
          </span>
        </div>
      </div>

      {v.chips.map((chip, i) => {
        const Icon = chipIcons[i % chipIcons.length];
        return (
          <span
            key={chip}
            className={`float absolute inline-flex items-center gap-1.5 rounded-xl border border-line bg-card px-3 py-2 text-xs font-semibold whitespace-nowrap shadow-[0_8px_24px_-8px_rgba(11,13,18,0.2)] ${chipPlacement[i % chipPlacement.length]}`}
          >
            <Icon size={14} className="text-accent" aria-hidden />
            {chip}
          </span>
        );
      })}
    </div>
  );
}
