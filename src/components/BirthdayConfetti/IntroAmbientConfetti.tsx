"use client";

import { ConfettiPieceView } from "@/components/BirthdayConfetti/ConfettiPieceView";
import type { IntroAmbientConfettiProps } from "@/components/BirthdayConfetti/types";

export function IntroAmbientConfetti({
  pieces,
  prefersReducedMotion,
}: IntroAmbientConfettiProps) {
  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {pieces.map((piece) => (
        <ConfettiPieceView
          key={piece.id}
          piece={piece}
          phase="ambient"
          prefersReducedMotion={prefersReducedMotion}
        />
      ))}
    </div>
  );
}
