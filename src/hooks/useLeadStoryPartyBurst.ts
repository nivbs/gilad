"use client";

import { useMemo } from "react";

import {
  buildCakePieces,
  buildConfettiPieces,
} from "@/components/LeadStory/partyBurstConfig";

export function useLeadStoryPartyBurst() {
  const confettiPieces = useMemo(() => buildConfettiPieces(), []);
  const cakePieces = useMemo(() => buildCakePieces(), []);

  return {
    confettiPieces,
    cakePieces,
  };
}
