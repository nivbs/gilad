"use client";

import { LanguageFlagButton } from "@/components/LanguageBar/LanguageFlagButton";
import type { LanguageOption, LanguageSwitcherProps } from "@/components/LanguageBar/types";

const languages: LanguageOption[] = [
  { locale: "he", flag: "/flags/il.svg", label: "Hebrew", code: "עב" },
  { locale: "en", flag: "/flags/us.svg", label: "English", code: "EN" },
  { locale: "nl", flag: "/flags/nl.svg", label: "Dutch", code: "NL" },
];

export function LanguageSwitcher({ locale, labelledBy, onChange }: LanguageSwitcherProps) {
  return (
    <div className="language-bar-languages" role="group" aria-labelledby={labelledBy}>
      {languages.map((language) => (
        <LanguageFlagButton
          key={language.locale}
          language={language}
          isActive={locale === language.locale}
          onSelect={onChange}
        />
      ))}
    </div>
  );
}
