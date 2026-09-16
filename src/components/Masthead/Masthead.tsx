import type { Edition } from "@/content/types";

type MastheadProps = {
  masthead: Edition["masthead"];
  isRtl: boolean;
};

export function Masthead({ masthead, isRtl }: MastheadProps) {
  return (
    <header className="border-b-4 border-double border-ink pb-6 text-center">
      <p className="text-xs uppercase tracking-[0.25em] text-ink-muted">
        {masthead.tagline}
      </p>
      <div className="my-4 border-y-2 border-double newspaper-rule py-3">
        <p className="text-sm uppercase tracking-[0.2em] text-ink-muted">
          {masthead.printedIn}
        </p>
      </div>
      <h1
        className={`font-display text-5xl font-bold tracking-tight text-ink md:text-8xl ${
          isRtl ? "font-hebrew" : ""
        }`}
      >
        {masthead.title}
      </h1>
      <p
        className={`mt-2 font-display text-xl italic text-ink-muted md:text-3xl ${
          isRtl ? "font-hebrew not-italic" : ""
        }`}
      >
        {masthead.subtitle}
      </p>
      <div className="mt-6 border-y newspaper-rule py-3">
        <div className="flex flex-col items-center gap-1 text-sm uppercase tracking-widest text-ink-muted md:flex-row md:justify-center md:gap-6">
          <span>{masthead.volume}</span>
          <span className="hidden md:inline">§</span>
          <span
            className={`text-base normal-case tracking-normal ${
              isRtl ? "font-hebrew" : ""
            }`}
          >
            {masthead.dateLine}
          </span>
        </div>
      </div>
    </header>
  );
}
