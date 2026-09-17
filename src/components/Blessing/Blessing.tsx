"use client";

import { NewspaperButton } from "@/components/NewspaperButton/NewspaperButton";
import { TmiGate } from "@/components/Tmi/TmiGate";
import type { Edition, UiStrings } from "@/content/types";

type BlessingProps = {
  blessing: Edition["blessing"];
  ui: UiStrings;
  isRtl: boolean;
  onBackToLetter: () => void;
};

export function Blessing({ blessing, ui, isRtl, onBackToLetter }: BlessingProps) {
  return (
    <section
      id="blessing"
      className="scroll-mt-28 border-b newspaper-rule py-8 lg:scroll-mt-8"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="blessing-insert mx-auto max-w-3xl px-4 py-8 md:px-8 md:py-10">
        <div className="blessing-corners relative">
          <span className="blessing-corner blessing-corner-tl" />
          <span className="blessing-corner blessing-corner-tr" />
          <span className="blessing-corner blessing-corner-bl" />
          <span className="blessing-corner blessing-corner-br" />

          <div className="text-center">
            <p className="kicker mb-4 inline-block px-2 py-0.5 text-[10px] font-semibold">
              {ui.specialInsert}
            </p>
            <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
              {ui.blessingHeadline}
            </h2>
          </div>

          <p
            className={`mt-8 font-display text-xl font-semibold leading-relaxed text-ink md:text-2xl ${
              isRtl ? "font-hebrew text-right" : "text-center"
            }`}
          >
            {blessing.openingLine}
          </p>

          <div
            className={`mt-8 space-y-5 text-base leading-relaxed md:text-lg ${
              isRtl ? "font-hebrew text-right" : "text-left"
            }`}
          >
            {blessing.paragraphs.map((paragraph) => {
              const paragraphClass =
                paragraph.emphasis === "opening"
                  ? "font-semibold"
                  : paragraph.emphasis === "highlight"
                    ? "font-display text-lg italic md:text-xl"
                    : "";

              const paragraphNode = (
                <p key={paragraph.text.slice(0, 40)} className={paragraphClass}>
                  {paragraph.text}
                </p>
              );

              if (!paragraph.tmi) {
                return paragraphNode;
              }

              return (
                <TmiGate
                  key={paragraph.text.slice(0, 40)}
                  variant="block"
                  label={ui.tmiVersion}
                  lockedLabel={ui.tmiLocked}
                >
                  {paragraphNode}
                </TmiGate>
              );
            })}
          </div>

          <p
            className={`mt-10 font-display text-xl italic text-ink ${
              isRtl ? "font-hebrew text-right" : "text-center"
            }`}
          >
            {blessing.signoff}
          </p>

          <div className="mt-8 flex justify-center">
            <NewspaperButton variant="secondary" onClick={onBackToLetter}>
              {ui.backToLetter}
            </NewspaperButton>
          </div>
        </div>
      </div>
    </section>
  );
}
