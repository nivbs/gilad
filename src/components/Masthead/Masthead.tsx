import type { Edition } from "@/content/types";

type MastheadProps = {
  masthead: Edition["masthead"];
};

export function Masthead({ masthead }: MastheadProps) {
  return (
    <header className="border-b-2 border-ink pb-4 text-center">
      <p className="text-xs uppercase tracking-[0.25em] text-ink-muted">
        {masthead.tagline}
      </p>
      <div className="my-3 border-y newspaper-rule py-2">
        <p className="text-sm uppercase tracking-[0.2em] text-ink-muted">
          {masthead.printedIn}
        </p>
      </div>
      <h1 className="font-display text-5xl font-bold tracking-tight text-ink md:text-7xl">
        {masthead.title}
      </h1>
      <p className="mt-1 font-display text-xl italic text-ink-muted md:text-2xl">
        {masthead.subtitle}
      </p>
      <div className="mt-4 flex flex-col items-center gap-1 text-sm uppercase tracking-widest text-ink-muted md:flex-row md:justify-center md:gap-6">
        <span>{masthead.volume}</span>
        <span className="hidden md:inline">•</span>
        <span className="font-hebrew text-base normal-case tracking-normal">
          {masthead.dateLine}
        </span>
      </div>
    </header>
  );
}
