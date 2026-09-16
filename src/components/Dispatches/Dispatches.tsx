"use client";

import { AnimatePresence, motion } from "motion/react";

import { NewspaperButton } from "@/components/NewspaperButton/NewspaperButton";
import type { Dispatch } from "@/content/types";

type DispatchesProps = {
  dispatches: Dispatch[];
  expandedId: string;
  onOpen: (id: string) => void;
  onToggle: (id: string) => void;
  onNext: () => void;
  onPrev: () => void;
  onGoToLetter: () => void;
};

function isBreaking(dispatch: Dispatch) {
  return dispatch.kicker === "Breaking";
}

function DispatchItem({
  dispatch,
  index,
  isExpanded,
  hasNext,
  hasPrev,
  onToggle,
  onNext,
  onPrev,
}: {
  dispatch: Dispatch;
  index: number;
  isExpanded: boolean;
  hasNext: boolean;
  hasPrev: boolean;
  onToggle: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  const breaking = isBreaking(dispatch);

  return (
    <article
      id={dispatch.id}
      className={`scroll-mt-28 border newspaper-rule p-4 transition-colors lg:scroll-mt-8 ${
        isExpanded ? "bg-white/40 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mb-2 flex flex-wrap items-center gap-2">
        {dispatch.kicker && (
          <span
            className={`kicker px-2 py-0.5 text-[10px] font-semibold ${
              breaking ? "breaking-kicker" : ""
            }`}
          >
            {dispatch.kicker}
          </span>
        )}
        <time className="text-xs uppercase tracking-widest text-ink-muted">
          {dispatch.date}
        </time>
        <span className="text-xs text-ink-muted">#{index + 1}</span>
      </div>
      <h3 className="font-display text-xl font-bold text-ink md:text-2xl">
        {dispatch.headline}
      </h3>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-base leading-relaxed text-ink">{dispatch.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <NewspaperButton variant="secondary" onClick={onToggle}>
                Close filing
              </NewspaperButton>
              {hasPrev && (
                <NewspaperButton variant="secondary" onClick={onPrev}>
                  Previous dispatch
                </NewspaperButton>
              )}
              {hasNext && (
                <NewspaperButton onClick={onNext}>Next dispatch</NewspaperButton>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isExpanded && (
        <div className="mt-4">
          <NewspaperButton onClick={onToggle}>Read filing →</NewspaperButton>
        </div>
      )}
    </article>
  );
}

export function Dispatches({
  dispatches,
  expandedId,
  onOpen,
  onToggle,
  onNext,
  onPrev,
  onGoToLetter,
}: DispatchesProps) {
  return (
    <section id="dispatches" className="border-b newspaper-rule py-8">
      <div className="mb-6 flex items-baseline justify-between border-b newspaper-rule pb-2">
        <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-ink">
          Dispatches
        </h2>
        <span className="text-xs uppercase tracking-widest text-ink-muted">
          Field Reports
        </span>
      </div>
      <div className="space-y-4">
        {dispatches.map((dispatch, index) => (
          <DispatchItem
            key={dispatch.id}
            dispatch={dispatch}
            index={index}
            isExpanded={expandedId === dispatch.id}
            hasNext={expandedId === dispatch.id && index < dispatches.length - 1}
            hasPrev={expandedId === dispatch.id && index > 0}
            onToggle={() => {
              if (expandedId === dispatch.id) {
                onToggle(dispatch.id);
              } else {
                onOpen(dispatch.id);
              }
            }}
            onNext={onNext}
            onPrev={onPrev}
          />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <NewspaperButton onClick={onGoToLetter}>
          Letter from the editor →
        </NewspaperButton>
      </div>
    </section>
  );
}
