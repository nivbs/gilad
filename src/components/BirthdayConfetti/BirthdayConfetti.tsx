"use client";

import { OpeningBurstConfetti } from "@/components/BirthdayConfetti/OpeningBurstConfetti";
import type { CelebrationConfettiPiece } from "@/components/BirthdayConfetti/types";

type BirthdayConfettiProps = {
  burstPieces: CelebrationConfettiPiece[];
  showBurst: boolean;
  prefersReducedMotion: boolean;
};

export function BirthdayConfetti({
  burstPieces,
  showBurst,
  prefersReducedMotion,
}: BirthdayConfettiProps) {
  return (
    <OpeningBurstConfetti
      pieces={burstPieces}
      active={showBurst}
      prefersReducedMotion={prefersReducedMotion}
    />
  );
}
