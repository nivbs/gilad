"use client";

import type { SoundtrackToggleProps } from "@/components/SoundtrackToggle/types";

export function SoundtrackToggle({ isMuted, ui, onToggle }: SoundtrackToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={!isMuted}
      aria-label={isMuted ? ui.soundtrackUnmute : ui.soundtrackMute}
      className={`soundtrack-toggle min-h-11 px-3 py-2 ${
        isMuted ? "soundtrack-toggle--muted" : "soundtrack-toggle--playing"
      }`}
    >
      {isMuted ? ui.soundtrackUnmute : ui.soundtrackMute}
    </button>
  );
}
