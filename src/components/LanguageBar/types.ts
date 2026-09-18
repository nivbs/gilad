import type { Locale, UiStrings } from "@/content/types";

export type LanguageOption = {
  locale: Locale;
  flag: string;
  label: string;
  code: string;
};

export type LanguageBarViewProps = {
  locale: Locale;
  editionLabel: string;
  ui: UiStrings;
  isSoundtrackMuted: boolean;
  isTmiReady: boolean;
  isTmiUnlocked: boolean;
  onSoundtrackToggle: () => void;
  onTmiToggle: () => void;
  onChange: (locale: Locale) => void;
};

export type LanguageFlagButtonProps = {
  language: LanguageOption;
  isActive: boolean;
  onSelect: (locale: Locale) => void;
};

export type LanguageSwitcherProps = {
  locale: Locale;
  labelledBy: string;
  onChange: (locale: Locale) => void;
};

export type EditionToolsProps = {
  ui: UiStrings;
  isSoundtrackMuted: boolean;
  isTmiReady: boolean;
  isTmiUnlocked: boolean;
  onSoundtrackToggle: () => void;
  onTmiToggle: () => void;
};

export type TmiToggleProps = {
  isUnlocked: boolean;
  ui: UiStrings;
  onToggle: () => void;
};
