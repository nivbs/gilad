"use client";

import Image from "next/image";

import type { LanguageFlagButtonProps } from "@/components/LanguageBar/types";

export function LanguageFlagButton({
  language,
  isActive,
  onSelect,
}: LanguageFlagButtonProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(language.locale)}
      aria-label={language.label}
      aria-pressed={isActive}
      className={`language-flag ${
        isActive
          ? "language-flag--active"
          : "language-flag--idle"
      }`}
    >
      <Image
        src={language.flag}
        alt=""
        width={20}
        height={14}
        className="language-flag-icon"
      />
      <span className="language-flag-code">{language.code}</span>
    </button>
  );
}
