"use client";

import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { useId, useState } from "react";
import { site } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { container, sectionY } from "./ui";

export function Problems() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" aria-labelledby="faq-title" className={`${container} ${sectionY}`}>
      <div className="grid lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <SectionHeading
          id="faq-title"
          eyebrow="Sound familiar?"
          title="Problems we solve every week"
          description="If any of these sound like your business, we should talk."
        />
        <ul className="divide-y divide-line border-y border-line">
          {site.faq.map((item, i) => {
            const isOpen = openIndex === i;
            const buttonId = `${baseId}-btn-${i}`;
            const panelId = `${baseId}-panel-${i}`;
            return (
              <li key={item.question}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-semibold tracking-[-0.01em]"
                  >
                    {item.question}
                    <Plus
                      size={22}
                      aria-hidden
                      className={`shrink-0 text-muted transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 leading-relaxed text-muted">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
