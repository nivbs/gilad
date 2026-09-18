"use client";

import type { TmiToggleProps } from "@/components/LanguageBar/types";

export function TmiToggle({ isUnlocked, ui, onToggle }: TmiToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isUnlocked}
      aria-label={isUnlocked ? ui.tmiOn : ui.tmiLocked}
      className={`tmi-toggle ${
        isUnlocked ? "tmi-toggle--unlocked" : "tmi-toggle--locked"
      }`}
    >
      <span className="tmi-toggle-label">
        {isUnlocked ? ui.tmiOn : ui.tmiUnlock}
      </span>
      {isUnlocked && <span className="tmi-toggle-lock">{ui.tmiLock}</span>}
    </button>
  );
}
