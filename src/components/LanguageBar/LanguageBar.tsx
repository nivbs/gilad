"use client";

import { LanguageBarView } from "@/components/LanguageBar/LanguageBarView";
import type { Locale, UiStrings } from "@/content/types";
import { useTmi } from "@/components/Tmi/TmiProvider";

type LanguageBarProps = {
  locale: Locale;
  editionLabel: string;
  ui: UiStrings;
  isSoundtrackMuted: boolean;
  onSoundtrackToggle: () => void;
  onChange: (locale: Locale) => void;
};

export function LanguageBar({
  locale,
  editionLabel,
  ui,
  isSoundtrackMuted,
  onSoundtrackToggle,
  onChange,
}: LanguageBarProps) {
  const { isUnlocked, isReady, requestUnlock, lock } = useTmi();

  const handleTmiToggle = () => {
    if (isUnlocked) {
      lock();
      return;
    }
    requestUnlock();
  };

  return (
    <LanguageBarView
      locale={locale}
      editionLabel={editionLabel}
      ui={ui}
      isSoundtrackMuted={isSoundtrackMuted}
      isTmiReady={isReady}
      isTmiUnlocked={isUnlocked}
      onSoundtrackToggle={onSoundtrackToggle}
      onTmiToggle={handleTmiToggle}
      onChange={onChange}
    />
  );
}
