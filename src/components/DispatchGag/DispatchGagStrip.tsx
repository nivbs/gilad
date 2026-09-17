"use client";

import { DispatchGag } from "@/components/DispatchGag/DispatchGag";
import { gagConfig } from "@/components/DispatchGag/gagConfig";
import type { DispatchGagStripProps } from "@/components/DispatchGag/types";
import { TmiGate } from "@/components/Tmi/TmiGate";
import { useTmi } from "@/components/Tmi/TmiProvider";

export function DispatchGagStrip({
  gags,
  isRtl,
  prefersReducedMotion,
  className = "",
}: DispatchGagStripProps) {
  const { tmiVersion, tmiLocked } = useTmi();

  if (gags.length === 0) {
    return null;
  }

  return (
    <aside
      className={`dispatch-gag-strip order-1 shrink-0 md:order-2 ${className}`}
      aria-hidden
    >
      {gags.map((gag) => {
        const gagNode = (
          <DispatchGag
            key={gag}
            gag={gag}
            isRtl={isRtl}
            prefersReducedMotion={prefersReducedMotion}
          />
        );

        if (!gagConfig[gag].tmi) {
          return gagNode;
        }

        return (
          <TmiGate
            key={gag}
            variant="media"
            label={tmiVersion}
            lockedLabel={tmiLocked}
          >
            {gagNode}
          </TmiGate>
        );
      })}
    </aside>
  );
}
