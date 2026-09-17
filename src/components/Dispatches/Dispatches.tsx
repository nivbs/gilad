"use client";

import { AnimatePresence, motion } from "motion/react";

import { DispatchGagStrip } from "@/components/DispatchGag/DispatchGagStrip";
import { NewspaperButton } from "@/components/NewspaperButton/NewspaperButton";
import { PhotoSlider } from "@/components/PhotoSlider/PhotoSlider";
import { TmiGate } from "@/components/Tmi/TmiGate";
import type { Dispatch, UiStrings } from "@/content/types";

type DispatchesProps = {
  dispatches: Dispatch[];
  expandedId: string;
  ui: UiStrings;
  isRtl: boolean;
  prefersReducedMotion: boolean;
  onOpen: (id: string) => void;
  onToggle: (id: string) => void;
  onNext: () => void;
  onPrev: () => void;
  onGoToLetter: () => void;
};

function DispatchItem({
  dispatch,
  index,
  isExpanded,
  hasNext,
  hasPrev,
  ui,
  isRtl,
  prefersReducedMotion,
  onToggle,
  onNext,
  onPrev,
}: {
  dispatch: Dispatch;
  index: number;
  isExpanded: boolean;
  hasNext: boolean;
  hasPrev: boolean;
  ui: UiStrings;
  isRtl: boolean;
  prefersReducedMotion: boolean;
  onToggle: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  const breaking = dispatch.breaking === true;

  return (
    <article
      id={dispatch.id}
      className={`scroll-mt-36 border newspaper-rule p-4 transition-colors lg:scroll-mt-8 ${
        isExpanded ? "dispatch-expanded bg-white/40 shadow-sm" : "bg-transparent"
      } ${isRtl ? "font-hebrew text-right" : ""}`}
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
            <div
              className={`mt-4 flex flex-col gap-4 ${
                isRtl ? "md:flex-row-reverse" : "md:flex-row"
              } md:items-start md:gap-6`}
            >
              {dispatch.gags && dispatch.gags.length > 0 && (
                <DispatchGagStrip
                  gags={dispatch.gags}
                  isRtl={isRtl}
                  prefersReducedMotion={prefersReducedMotion}
                />
              )}
              <p className="order-2 min-w-0 flex-1 text-base leading-relaxed text-ink md:order-1">
                {dispatch.body.map((segment, segmentIndex) => {
                  const segmentKey = `${dispatch.id}-segment-${segmentIndex}`;
                  const prefix = segmentIndex > 0 ? " " : "";

                  if (segment.tmi) {
                    return (
                      <TmiGate
                        key={segmentKey}
                        variant="inline"
                        label={ui.tmiVersion}
                        lockedLabel={ui.tmiLocked}
                        className="tmi-gate--inline-segment"
                      >
                        {prefix}
                        {segment.text}
                      </TmiGate>
                    );
                  }

                  return (
                    <span key={segmentKey}>
                      {prefix}
                      {segment.text}
                    </span>
                  );
                })}
              </p>
            </div>
            {dispatch.photos && dispatch.photos.length > 0 && (
              <div className="mt-6">
                <PhotoSlider
                  photos={dispatch.photos}
                  size="dispatch"
                  ariaLabel={dispatch.headline}
                  isRtl={isRtl}
                  prefersReducedMotion={prefersReducedMotion}
                />
              </div>
            )}
            <div className="mt-6 flex flex-wrap gap-3">
              <NewspaperButton variant="secondary" onClick={onToggle}>
                {ui.closeFiling}
              </NewspaperButton>
              {hasPrev && (
                <NewspaperButton variant="secondary" onClick={onPrev}>
                  {ui.previousDispatch}
                </NewspaperButton>
              )}
              {hasNext && (
                <NewspaperButton onClick={onNext}>{ui.nextDispatch}</NewspaperButton>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isExpanded && (
        <div className="mt-4">
          <NewspaperButton onClick={onToggle}>{ui.readFiling}</NewspaperButton>
        </div>
      )}
    </article>
  );
}

export function Dispatches({
  dispatches,
  expandedId,
  ui,
  isRtl,
  prefersReducedMotion,
  onOpen,
  onToggle,
  onNext,
  onPrev,
  onGoToLetter,
}: DispatchesProps) {
  return (
    <section id="dispatches" className="section-divider border-b newspaper-rule py-8">
      <div className="mb-6 flex items-baseline justify-between border-b newspaper-rule pb-2">
        <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-ink">
          {ui.dispatches}
        </h2>
        <span className="text-xs uppercase tracking-widest text-ink-muted">
          {ui.fieldReports}
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
            ui={ui}
            isRtl={isRtl}
            prefersReducedMotion={prefersReducedMotion}
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
        <NewspaperButton onClick={onGoToLetter}>{ui.letterFromEditor}</NewspaperButton>
      </div>
    </section>
  );
}
