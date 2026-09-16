"use client";

import type { Dispatch, UiStrings } from "@/content/types";

type TimelineRailProps = {
  dispatches: Dispatch[];
  activeId: string;
  ui: UiStrings;
  isRtl: boolean;
  onSelect: (id: string) => void;
};

function formatShortDate(date: string) {
  const parts = date.split(" ");
  if (parts.length >= 2) {
    return `${parts[0]} ${parts[1]}`;
  }
  return date;
}

export function TimelineRail({
  dispatches,
  activeId,
  ui,
  isRtl,
  onSelect,
}: TimelineRailProps) {
  const railBorder = isRtl ? "border-r-2" : "border-l-2";
  const railPadding = isRtl ? "pr-4" : "pl-4";
  const tickPosition = isRtl ? "-right-[21px]" : "-left-[21px]";
  const textAlign = isRtl ? "text-right" : "text-left";

  return (
    <>
      <nav
        className={`sticky top-16 hidden w-44 shrink-0 self-start lg:block ${textAlign}`}
        aria-label={ui.timeline}
      >
        <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-ink-muted">
          {ui.index}
        </p>
        <div className={`relative ${railBorder} border-ink ${railPadding}`}>
          {dispatches.map((dispatch) => {
            const isActive = dispatch.id === activeId;
            const breaking = dispatch.breaking === true;

            return (
              <button
                key={dispatch.id}
                type="button"
                onClick={() => onSelect(dispatch.id)}
                className={`group mb-6 block w-full last:mb-0 ${textAlign}`}
              >
                <div className="relative flex items-start gap-3">
                  <span
                    className={`absolute ${tickPosition} top-1 h-3 w-3 border border-ink ${
                      isActive ? "bg-ink" : "bg-newsprint group-hover:bg-ink-muted"
                    } ${breaking ? "border-feyenoord" : ""}`}
                  />
                  {isActive && breaking && (
                    <span
                      className={`absolute ${tickPosition} top-5 h-4 w-0.5 bg-feyenoord`}
                    />
                  )}
                  <div className={isRtl ? "font-hebrew" : ""}>
                    <p
                      className={`text-[10px] uppercase tracking-wider ${
                        isActive ? "font-semibold text-ink" : "text-ink-muted"
                      }`}
                    >
                      {formatShortDate(dispatch.date)}
                    </p>
                    <p
                      className={`mt-1 text-xs leading-snug ${
                        isActive ? "font-semibold text-ink" : "text-ink-muted"
                      }`}
                    >
                      {dispatch.headline}
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
        aria-label={ui.timeline}
      >
        <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-ink-muted">
          {ui.timeline}
        </p>
        <div
          className={`flex gap-2 overflow-x-auto pb-1 ${isRtl ? "flex-row-reverse" : ""}`}
        >
          {dispatches.map((dispatch) => {
            const isActive = dispatch.id === activeId;
            const breaking = dispatch.breaking === true;

            return (
              <button
                key={dispatch.id}
                type="button"
                onClick={() => onSelect(dispatch.id)}
                className={`shrink-0 border px-3 py-2 text-[10px] uppercase tracking-wider transition-colors ${
                  isActive
                    ? "border-ink bg-ink text-newsprint"
                    : "border-ink bg-newsprint text-ink hover:bg-ink hover:text-newsprint"
                } ${breaking && isActive ? "border-feyenoord bg-feyenoord" : ""}`}
              >
                {formatShortDate(dispatch.date)}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
