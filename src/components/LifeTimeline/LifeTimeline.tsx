"use client";

import { LifeTimelineRail } from "@/components/LifeTimeline/LifeTimelineRail";
import { LifeYearChapter } from "@/components/LifeTimeline/LifeYearChapter";
import type { LifeTimelineProps } from "@/components/LifeTimeline/types";
import { NewspaperButton } from "@/components/NewspaperButton/NewspaperButton";
import { useLifeTimeline } from "@/hooks/useLifeTimeline";

export function LifeTimeline({
  lifeTimeline,
  ui,
  isRtl,
  prefersReducedMotion,
  onContinueToLoveStory,
}: LifeTimelineProps) {
  const { activeId, scrollToChapter } = useLifeTimeline({
    chapters: lifeTimeline.chapters,
    defaultActiveId: lifeTimeline.chapters[0]?.id,
  });

  return (
    <section
      id="life-timeline"
      className="section-divider border-b newspaper-rule py-8"
    >
      <div className="mb-6 flex items-baseline justify-between border-b newspaper-rule pb-2">
        <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-ink md:text-3xl">
          {ui.lifeChronicle}
        </h2>
        <span className="text-xs uppercase tracking-widest text-ink-muted">
          {ui.lifeChronicleSubtitle}
        </span>
      </div>

      <div className={`mb-6 ${isRtl ? "font-hebrew text-right" : ""}`}>
        <span className="kicker mb-3 inline-block px-2 py-0.5 text-[10px] font-semibold">
          {lifeTimeline.kicker}
        </span>
        <h3 className="font-display text-2xl font-bold text-ink md:text-3xl">
          {lifeTimeline.headline}
        </h3>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink-muted">
          {lifeTimeline.dek}
        </p>
      </div>

      <div
        className={`flex flex-col gap-8 lg:flex-row ${isRtl ? "lg:flex-row-reverse" : ""}`}
      >
        <LifeTimelineRail
          chapters={lifeTimeline.chapters}
          activeId={activeId}
          ui={ui}
          isRtl={isRtl}
          prefersReducedMotion={prefersReducedMotion}
          onSelect={scrollToChapter}
        />
        <div className="min-w-0 flex-1 space-y-4">
          {lifeTimeline.chapters.map((chapter) => (
            <LifeYearChapter
              key={chapter.id}
              chapter={chapter}
              ui={ui}
              isRtl={isRtl}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <NewspaperButton onClick={onContinueToLoveStory}>
          {ui.continueToLoveStory}
        </NewspaperButton>
      </div>
    </section>
  );
}
