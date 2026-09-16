"use client";

import { NewspaperButton } from "@/components/NewspaperButton/NewspaperButton";
import type { Edition } from "@/content/types";

type EditorLetterProps = {
  editorLetter: Edition["editorLetter"];
  onBackToIndex: () => void;
};

export function EditorLetter({ editorLetter, onBackToIndex }: EditorLetterProps) {
  return (
    <section id="editor-letter" className="scroll-mt-28 border-b newspaper-rule py-8 lg:scroll-mt-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="kicker mb-4 inline-block px-2 py-0.5 text-[10px] font-semibold">
          Op-Ed
        </p>
        <h2 className="font-display text-3xl font-bold text-ink">
          {editorLetter.headline}
        </h2>
        <div className="mt-8 space-y-4 text-left text-base leading-relaxed">
          {editorLetter.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className={
                paragraph.startsWith("Gilad") || paragraph.startsWith("Happy")
                  ? "font-semibold"
                  : paragraph.startsWith("I love")
                    ? "font-display text-lg italic"
                    : ""
              }
            >
              {paragraph}
            </p>
          ))}
        </div>
        <p className="mt-8 font-display text-xl italic text-ink">
          {editorLetter.signoff}
        </p>
        <div className="mt-8 flex justify-center">
          <NewspaperButton variant="secondary" onClick={onBackToIndex}>
            Back to index
          </NewspaperButton>
        </div>
      </div>
    </section>
  );
}
