import type { Dispatch } from "@/content/types";

type DispatchesProps = {
  dispatches: Dispatch[];
};

function DispatchItem({ dispatch, index }: { dispatch: Dispatch; index: number }) {
  const isBreaking = dispatch.kicker === "Breaking";

  return (
    <article className="border-b newspaper-rule py-6 last:border-b-0">
      <div className="mb-2 flex flex-wrap items-center gap-2">
        {dispatch.kicker && (
          <span
            className={`kicker px-2 py-0.5 text-[10px] font-semibold ${
              isBreaking ? "breaking-kicker" : ""
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
      <p className="mt-2 text-base leading-relaxed text-ink">{dispatch.body}</p>
    </article>
  );
}

export function Dispatches({ dispatches }: DispatchesProps) {
  return (
    <section className="border-b newspaper-rule py-8">
      <div className="mb-6 flex items-baseline justify-between border-b newspaper-rule pb-2">
        <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-ink">
          Dispatches
        </h2>
        <span className="text-xs uppercase tracking-widest text-ink-muted">
          Field Reports
        </span>
      </div>
      <div className="columns-1 gap-8 md:columns-2">
        {dispatches.map((dispatch, index) => (
          <div key={dispatch.date} className="break-inside-avoid">
            <DispatchItem dispatch={dispatch} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
