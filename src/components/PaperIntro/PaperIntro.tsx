"use client";

import { AnimatePresence, motion } from "motion/react";

import { NewspaperButton } from "@/components/NewspaperButton/NewspaperButton";
import type { UiStrings } from "@/content/types";

type PaperIntroProps = {
  isOpen: boolean;
  prefersReducedMotion: boolean;
  title: string;
  subtitle: string;
  tagline: string;
  ui: UiStrings;
  onOpen: () => void;
  onSkip: () => void;
};

export function PaperIntro({
  isOpen,
  prefersReducedMotion,
  title,
  subtitle,
  tagline,
  ui,
  onOpen,
  onSkip,
}: PaperIntroProps) {
  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-newsprint px-4"
          initial={prefersReducedMotion ? false : { opacity: 1 }}
          exit={
            prefersReducedMotion
              ? { opacity: 0 }
              : { opacity: 0, scale: 1.02, rotateY: -8 }
          }
          transition={{ duration: prefersReducedMotion ? 0.2 : 0.8, ease: "easeInOut" }}
        >
          <div className="paper-grain edition-frame mx-auto w-full max-w-2xl p-8 text-center">
            <motion.div
              className="relative mx-auto mb-8 h-48 w-full max-w-md"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-x-4 top-0 h-40 border border-ink bg-newsprint shadow-[4px_4px_0_0_rgba(26,26,26,0.15)]" />
              <div className="absolute inset-x-8 top-4 h-36 border border-ink bg-newsprint shadow-[4px_4px_0_0_rgba(26,26,26,0.1)]" />
              <div className="absolute inset-x-12 top-8 flex h-32 flex-col items-center justify-center border-2 border-ink bg-newsprint px-4">
                <p className="text-[10px] uppercase tracking-[0.25em] text-ink-muted">
                  {tagline}
                </p>
                <p className="mt-2 font-display text-2xl font-bold text-ink">{title}</p>
                <p className="font-display text-sm italic text-ink-muted">{subtitle}</p>
              </div>
            </motion.div>

            <motion.p
              className="mb-8 text-sm uppercase tracking-[0.2em] text-ink-muted"
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {ui.specialEditionAwaits}
            </motion.p>

            <motion.div
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <NewspaperButton onClick={onOpen}>{ui.openEdition}</NewspaperButton>
              <NewspaperButton variant="secondary" onClick={onSkip}>
                {ui.skip}
              </NewspaperButton>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
