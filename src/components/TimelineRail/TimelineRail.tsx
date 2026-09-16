"use client";

import type { Dispatch } from "@/content/types";

type TimelineRailProps = {
  dispatches: Dispatch[];
  activeId: string;
  onSelect: (id: string) => void;
};

function isBreaking(dispatch: Dispatch) {
  return dispatch.kicker === "Breaking";
}

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
  onSelect,
}: TimelineRailProps) {
  return (
    <>
      <nav
        className="sticky top-4 hidden w-44 shrink-0 self-start lg:block"
        aria-label="Story timeline"
      >
        <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-ink-muted">
          Index
        </p>
        <div className="relative border-l-2 border-ink pl-4">
          {dispatches.map((dispatch) => {
            const isActive = dispatch.id === activeId;
            const breaking = isBreaking(dispatch);

            return (
              <button
                key={dispatch.id}
                type="button"
                onClick={() => onSelect(dispatch.id)}
                className="group mb-6 block w-full text-left last:mb-0"
              >
                <div className="relative flex items-start gap-3">
                  <span
                    className={`absolute -left-[21px] top-1 h-3 w-3 border border-ink ${
                      isActive ? "bg-ink" : "bg-newsprint group-hover:bg-ink-muted"
                    } ${breaking ? "border-feyenoord" : ""}`}
                  />
                  {isActive && breaking && (
                    <span className="absolute -left-[21px] top-5 h-4 w-0.5 bg-feyenoord" />
                  )}
                  <div>
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
        className="sticky top-0 z-10 -mx-4 border-b newspaper-rule bg-newsprint px-4 py-3 lg:hidden"
        aria-label="Story timeline"
      >
        <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-ink-muted">
          Timeline
        </p>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {dispatches.map((dispatch) => {
            const isActive = dispatch.id === activeId;
            const breaking = isBreaking(dispatch);

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
