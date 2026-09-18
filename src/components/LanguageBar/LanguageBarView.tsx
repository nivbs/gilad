"use client";

import { EditionTools } from "@/components/LanguageBar/EditionTools";
import { LanguageSwitcher } from "@/components/LanguageBar/LanguageSwitcher";
import type { LanguageBarViewProps } from "@/components/LanguageBar/types";

const EDITION_LANGUAGE_LABEL_ID = "edition-language-label";

export function LanguageBarView({
  locale,
  editionLabel,
  ui,
  isSoundtrackMuted,
  isTmiReady,
  isTmiUnlocked,
  onSoundtrackToggle,
  onTmiToggle,
  onChange,
}: LanguageBarViewProps) {
  return (
    <div className="language-bar sticky top-0 z-20 -mx-4 border-b-2 border-double border-ink bg-newsprint px-3 py-3 sm:px-4 md:-mx-8 md:px-8">
      <div className="language-bar-inner">
        <div className="language-bar-edition">
          <p id={EDITION_LANGUAGE_LABEL_ID} className="language-bar-kicker">
            {editionLabel}
          </p>
          <LanguageSwitcher
            locale={locale}
            labelledBy={EDITION_LANGUAGE_LABEL_ID}
            onChange={onChange}
          />
        </div>
        <EditionTools
          ui={ui}
          isSoundtrackMuted={isSoundtrackMuted}
          isTmiReady={isTmiReady}
          isTmiUnlocked={isTmiUnlocked}
          onSoundtrackToggle={onSoundtrackToggle}
          onTmiToggle={onTmiToggle}
        />
      </div>
    </div>
  );
}
