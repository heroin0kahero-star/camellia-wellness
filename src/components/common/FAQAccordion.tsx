import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '../../data/treatments';

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="divide-y divide-[#25221F]/12 border-y border-[#25221F]/12">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={item.question} className="py-1">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              aria-expanded={isOpen}
              className="flex min-h-[52px] w-full items-center justify-between gap-6 py-4 text-left transition-colors hover:text-[#3B252B]"
            >
              <span className="flex items-baseline gap-4">
                <span className="font-mono-index text-xs text-[#737C67]">
                  0{idx + 1}
                </span>
                <span className="font-display text-xl font-medium text-[#25221F] sm:text-2xl">
                  {item.question}
                </span>
              </span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-[#3B252B] transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={prefersReducedMotion ? false : { opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-6 pl-8 text-[0.95rem] leading-relaxed text-[#5C554E]">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
