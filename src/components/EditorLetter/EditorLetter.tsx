"use client";

import { NewspaperButton } from "@/components/NewspaperButton/NewspaperButton";
import type { Edition, UiStrings } from "@/content/types";

type EditorLetterProps = {
  editorLetter: Edition["editorLetter"];
  ui: UiStrings;
  isRtl: boolean;
  onBackToIndex: () => void;
  onGoToBlessing: () => void;
};

function paragraphClass(emphasis?: string, isRtl?: boolean) {
  const base = isRtl ? "font-hebrew text-right" : "text-left";

  if (emphasis === "opening" || emphasis === "highlight") {
    return `${base} font-semibold`;
  }
  if (emphasis === "closing") {
    return `${base} font-display text-lg italic`;
  }
  return base;
}

export function EditorLetter({
  editorLetter,
  ui,
  isRtl,
  onBackToIndex,
  onGoToBlessing,
}: EditorLetterProps) {
  return (
    <section
      id="editor-letter"
      className="section-divider scroll-mt-36 border-b newspaper-rule py-8 lg:scroll-mt-8"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="kicker mb-4 inline-block px-2 py-0.5 text-[10px] font-semibold">
          {ui.opEd}
        </p>
        <h2
          className={`font-display text-3xl font-bold text-ink ${
            isRtl ? "font-hebrew" : ""
          }`}
        >
          {editorLetter.headline}
        </h2>
        <div className="mt-8 space-y-4 text-base leading-relaxed">
          {editorLetter.paragraphs.map((paragraph) => (
            <p
              key={paragraph.text.slice(0, 40)}
              className={paragraphClass(paragraph.emphasis, isRtl)}
            >
              {paragraph.text}
            </p>
          ))}
        </div>
        <p
          className={`mt-8 font-display text-xl italic text-ink ${
            isRtl ? "font-hebrew" : ""
          }`}
        >
          {editorLetter.signoff}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <NewspaperButton variant="secondary" onClick={onBackToIndex}>
            {ui.backToIndex}
          </NewspaperButton>
          <NewspaperButton onClick={onGoToBlessing}>
            {ui.blessingHeadline} →
          </NewspaperButton>
        </div>
      </div>
    </section>
  );
}
