"use client";

import { LanguageFlagButton } from "@/components/LanguageBar/LanguageFlagButton";
import { TmiToggle } from "@/components/LanguageBar/TmiToggle";
import type { LanguageBarViewProps, LanguageOption } from "@/components/LanguageBar/types";
import { SoundtrackToggle } from "@/components/SoundtrackToggle/SoundtrackToggle";

const languages: LanguageOption[] = [
  { locale: "he", flag: "/flags/il.svg", label: "Hebrew", code: "עב" },
  { locale: "en", flag: "/flags/us.svg", label: "English", code: "EN" },
  { locale: "nl", flag: "/flags/nl.svg", label: "Dutch", code: "NL" },
];

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
        <p className="text-[10px] uppercase tracking-[0.2em] text-ink-muted">
          {editionLabel}
        </p>
        <div className="language-bar-controls">
          <SoundtrackToggle
            isMuted={isSoundtrackMuted}
            ui={ui}
            onToggle={onSoundtrackToggle}
          />
          {isTmiReady && (
            <TmiToggle
              isUnlocked={isTmiUnlocked}
              ui={ui}
              onToggle={onTmiToggle}
            />
          )}
          {languages.map((language) => (
            <LanguageFlagButton
              key={language.locale}
              language={language}
              isActive={locale === language.locale}
              onSelect={onChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
