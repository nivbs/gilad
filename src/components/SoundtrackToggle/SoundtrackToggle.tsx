"use client";

import type { SoundtrackToggleProps } from "@/components/SoundtrackToggle/types";

export function SoundtrackToggle({ isMuted, ui, onToggle }: SoundtrackToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={!isMuted}
      aria-label={isMuted ? ui.soundtrackUnmute : ui.soundtrackMute}
      className={`soundtrack-toggle ${
        isMuted ? "soundtrack-toggle--muted" : "soundtrack-toggle--playing"
      }`}
    >
      <span className="soundtrack-toggle-label">
        {isMuted ? ui.soundtrackUnmute : ui.soundtrackMute}
      </span>
    </button>
  );
}
