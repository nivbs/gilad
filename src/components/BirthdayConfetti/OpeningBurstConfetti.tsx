"use client";

import { ConfettiPieceView } from "@/components/BirthdayConfetti/ConfettiPieceView";
import type { OpeningBurstConfettiProps } from "@/components/BirthdayConfetti/types";

export function OpeningBurstConfetti({
  pieces,
  active,
  prefersReducedMotion,
}: OpeningBurstConfettiProps) {
  if (!active || prefersReducedMotion) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
      aria-hidden
    >
      {pieces.map((piece) => (
        <ConfettiPieceView
          key={piece.id}
          piece={piece}
          phase="burst"
          prefersReducedMotion={prefersReducedMotion}
        />
      ))}
    </div>
  );
}
