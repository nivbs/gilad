"use client";

import { useEffect, useMemo, useState } from "react";

import {
  BURST_DURATION_MS,
  SETTLE_DURATION_MS,
  buildAmbientPieces,
  buildBurstPieces,
  buildMarginPieces,
} from "@/components/BirthdayConfetti/confettiConfig";
import type { CelebrationPhase } from "@/components/BirthdayConfetti/types";

type UseCelebrationConfettiOptions = {
  isOpen: boolean;
  prefersReducedMotion: boolean;
};

export function useCelebrationConfetti({
  isOpen,
  prefersReducedMotion,
}: UseCelebrationConfettiOptions) {
  const [openPhase, setOpenPhase] = useState<"burst" | "settle" | "idle">("burst");

  const ambientPieces = useMemo(() => buildAmbientPieces(), []);
  const burstPieces = useMemo(() => buildBurstPieces(), []);
  const marginPieces = useMemo(() => buildMarginPieces(), []);

  useEffect(() => {
    if (prefersReducedMotion || !isOpen) {
      return;
    }

    const burstTimer = window.setTimeout(() => {
      setOpenPhase("settle");
    }, BURST_DURATION_MS);

    const settleTimer = window.setTimeout(() => {
      setOpenPhase("idle");
    }, BURST_DURATION_MS + SETTLE_DURATION_MS);

    return () => {
      window.clearTimeout(burstTimer);
      window.clearTimeout(settleTimer);
    };
  }, [isOpen, prefersReducedMotion]);

  const phase: CelebrationPhase = isOpen ? openPhase : "ambient";
  const showAmbient = !prefersReducedMotion && !isOpen;
  const showBurst = !prefersReducedMotion && isOpen && openPhase === "burst";
  const showMargins =
    !prefersReducedMotion &&
    isOpen &&
    (openPhase === "settle" || openPhase === "idle");
  const isSettling = !prefersReducedMotion && isOpen && openPhase === "settle";

  return {
    phase,
    ambientPieces,
    burstPieces,
    marginPieces,
    showAmbient,
    showBurst,
    showMargins,
    isSettling,
  };
}
