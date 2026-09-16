"use client";

import { NewspaperButton } from "@/components/NewspaperButton/NewspaperButton";
import type { Edition, UiStrings } from "@/content/types";

type LeadStoryProps = {
  leadStory: Edition["leadStory"];
  ui: UiStrings;
  isRtl: boolean;
  onContinue: () => void;
};

export function LeadStory({ leadStory, ui, isRtl, onContinue }: LeadStoryProps) {
  return (
    <article className="section-divider border-b newspaper-rule py-8">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="kicker px-2 py-0.5 text-[10px] font-semibold">
          {leadStory.kicker}
        </span>
        <span className="text-xs uppercase tracking-widest text-ink-muted">
          {ui.leadStory}
        </span>
      </div>
      <h2
        className={`font-display text-3xl font-bold leading-tight text-ink md:text-5xl ${
          isRtl ? "font-hebrew text-right" : ""
        }`}
      >
        {leadStory.headline}
      </h2>
      <p className={`mt-3 text-sm italic text-ink-muted ${isRtl ? "text-right" : ""}`}>
        {leadStory.byline}
      </p>
      <div className="mt-6 grid gap-8 lg:grid-cols-12">
        <div className={`lg:col-span-8 ${isRtl ? "font-hebrew text-right" : ""}`}>
          <p
            className={`text-lg font-semibold leading-relaxed ${
              isRtl
                ? "first-letter:float-right first-letter:ml-2"
                : "first-letter:float-left first-letter:mr-2"
            } first-letter:font-display first-letter:text-6xl first-letter:font-bold first-letter:leading-none`}
          >
            {leadStory.lede}
          </p>
          {leadStory.body.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="mt-4 text-base leading-relaxed text-ink">
              {paragraph}
            </p>
          ))}
        </div>
        <aside className="lg:col-span-4">
          <div className="photo-well flex aspect-[4/5] items-end p-4">
            <p className="text-xs uppercase tracking-wider text-ink-muted">
              {leadStory.photoCaption}
            </p>
          </div>
        </aside>
      </div>
      <div className="mt-8 flex justify-center">
        <NewspaperButton onClick={onContinue}>{ui.continueToTimeline}</NewspaperButton>
      </div>
    </article>
  );
}
