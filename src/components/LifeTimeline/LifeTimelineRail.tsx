"use client";

import type { LifeTimelineRailProps } from "@/components/LifeTimeline/types";

export function LifeTimelineRail({
  chapters,
  activeId,
  ui,
  isRtl,
  onSelect,
}: LifeTimelineRailProps) {
  const railBorder = isRtl ? "border-r-2" : "border-l-2";
  const railPadding = isRtl ? "pr-4" : "pl-4";
  const tickPosition = isRtl ? "-right-[21px]" : "-left-[21px]";
  const textAlign = isRtl ? "text-right" : "text-left";

  return (
    <>
      <nav
        className={`sticky top-16 hidden w-36 shrink-0 self-start lg:block ${textAlign}`}
        aria-label={ui.lifeChronicle}
      >
        <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-ink-muted">
          {ui.yearsOnRecord}
        </p>
        <div className={`relative ${railBorder} border-ink ${railPadding}`}>
          {chapters.map((chapter) => {
            const isActive = chapter.id === activeId;

            return (
              <button
                key={chapter.id}
                type="button"
                onClick={() => onSelect(chapter.id)}
                className={`group mb-6 block w-full last:mb-0 ${textAlign}`}
              >
                <div className="relative flex items-start gap-3">
                  <span
                    className={`absolute ${tickPosition} top-1 h-3 w-3 border border-ink transition-transform ${
                      isActive
                        ? "scale-110 bg-ink"
                        : "bg-newsprint group-hover:bg-ink-muted"
                    }`}
                  />
                  <div className={isRtl ? "font-hebrew" : ""}>
                    <p
                      className={`text-sm font-display font-bold ${
                        isActive ? "text-ink" : "text-ink-muted"
                      }`}
                    >
                      {chapter.year}
                    </p>
                    <p
                      className={`mt-1 text-[10px] leading-snug uppercase tracking-wider ${
                        isActive ? "font-semibold text-ink" : "text-ink-muted"
                      }`}
                    >
                      {chapter.headline}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </nav>

      <nav
        className="sticky top-16 z-10 -mx-4 border-b newspaper-rule bg-newsprint px-4 py-3 lg:hidden"
        aria-label={ui.lifeChronicle}
      >
        <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-ink-muted">
          {ui.yearsOnRecord}
        </p>
        <div
          className={`flex gap-2 overflow-x-auto pb-1 ${isRtl ? "flex-row-reverse" : ""}`}
        >
          {chapters.map((chapter) => {
            const isActive = chapter.id === activeId;

            return (
              <button
                key={chapter.id}
                type="button"
                onClick={() => onSelect(chapter.id)}
                className={`shrink-0 border px-3 py-2 text-[10px] uppercase tracking-wider transition-colors ${
                  isActive
                    ? "border-ink bg-ink text-newsprint"
                    : "border-ink bg-newsprint text-ink hover:bg-ink hover:text-newsprint"
                }`}
              >
                {chapter.year}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
