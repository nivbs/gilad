"use client";

import { useCallback, useMemo, useState } from "react";

import {
  buildCakePieces,
  buildConfettiPieces,
  PARTY_BURST_DURATION_MS,
} from "@/components/LeadStory/partyBurstConfig";

type UseLeadStoryPartyBurstOptions = {
  prefersReducedMotion: boolean;
};

export function useLeadStoryPartyBurst({
  prefersReducedMotion,
}: UseLeadStoryPartyBurstOptions) {
  const [burstActive, setBurstActive] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  const confettiPieces = useMemo(() => buildConfettiPieces(), []);
  const cakePieces = useMemo(() => buildCakePieces(), []);

  const triggerBurst = useCallback(() => {
    if (prefersReducedMotion || hasPlayed) {
      return;
    }

    setBurstActive(true);
    setHasPlayed(true);

    window.setTimeout(() => {
      setBurstActive(false);
    }, PARTY_BURST_DURATION_MS);
  }, [hasPlayed, prefersReducedMotion]);

  return {
    burstActive,
    confettiPieces,
    cakePieces,
    triggerBurst,
  };
}
