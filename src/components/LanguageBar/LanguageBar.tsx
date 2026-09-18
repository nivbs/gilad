"use client";

import Image from "next/image";

import { SoundtrackToggle } from "@/components/SoundtrackToggle/SoundtrackToggle";
import { useTmi } from "@/components/Tmi/TmiProvider";
import type { Locale, UiStrings } from "@/content/types";

type LanguageOption = {
  locale: Locale;
  flag: string;
  label: string;
  code: string;
};

const languages: LanguageOption[] = [
  { locale: "he", flag: "/flags/il.svg", label: "Hebrew", code: "עב" },
  { locale: "en", flag: "/flags/us.svg", label: "English", code: "EN" },
  { locale: "nl", flag: "/flags/nl.svg", label: "Dutch", code: "NL" },
];

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

  return (
    <div className="language-bar sticky top-0 z-20 -mx-4 border-b-2 border-double border-ink bg-newsprint px-4 py-3 md:-mx-8 md:px-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[10px] uppercase tracking-[0.2em] text-ink-muted">
          {editionLabel}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <SoundtrackToggle
            isMuted={isSoundtrackMuted}
            ui={ui}
            onToggle={onSoundtrackToggle}
          />
          {isReady && (
            <button
              type="button"
              onClick={() => {
                if (isUnlocked) {
                  lock();
                  return;
                }
                requestUnlock();
              }}
              aria-pressed={isUnlocked}
              aria-label={isUnlocked ? ui.tmiOn : ui.tmiLocked}
              className={`tmi-toggle min-h-11 px-3 py-2 ${
                isUnlocked ? "tmi-toggle--unlocked" : "tmi-toggle--locked"
              }`}
            >
              {isUnlocked ? ui.tmiOn : ui.tmiUnlock}
              {isUnlocked && (
                <span className="tmi-toggle-lock">{ui.tmiLock}</span>
              )}
            </button>
          )}
          {languages.map((language) => {
            const isActive = locale === language.locale;

            return (
              <button
                key={language.locale}
                type="button"
                onClick={() => onChange(language.locale)}
                aria-label={language.label}
                aria-pressed={isActive}
                className={`language-flag flex min-h-11 min-w-11 items-center gap-2 border px-3 py-2 transition-colors ${
                  isActive
                    ? "border-ink bg-ink text-newsprint"
                    : "border-ink bg-newsprint text-ink hover:bg-ink hover:text-newsprint"
                }`}
              >
                <Image
                  src={language.flag}
                  alt=""
                  width={20}
                  height={14}
                  className="shrink-0"
                />
                <span className="text-[10px] font-semibold uppercase tracking-wider">
                  {language.code}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
