"use client";

import { TmiToggle } from "@/components/LanguageBar/TmiToggle";
import type { EditionToolsProps } from "@/components/LanguageBar/types";
import { SoundtrackToggle } from "@/components/SoundtrackToggle/SoundtrackToggle";

export function EditionTools({
  ui,
  isSoundtrackMuted,
  isTmiReady,
  isTmiUnlocked,
  onSoundtrackToggle,
  onTmiToggle,
}: EditionToolsProps) {
  return (
    <div className="language-bar-tools">
      <SoundtrackToggle
        isMuted={isSoundtrackMuted}
        ui={ui}
        onToggle={onSoundtrackToggle}
      />
      {isTmiReady && (
        <TmiToggle isUnlocked={isTmiUnlocked} ui={ui} onToggle={onTmiToggle} />
      )}
    </div>
  );
}
