"use client";

import { DispatchGag } from "@/components/DispatchGag/DispatchGag";
import type { DispatchGagStripProps } from "@/components/DispatchGag/types";

export function DispatchGagStrip({
  gags,
  isRtl,
  prefersReducedMotion,
  className = "",
}: DispatchGagStripProps) {
  if (gags.length === 0) {
    return null;
  }

  return (
    <aside
      className={`dispatch-gag-strip order-1 shrink-0 md:order-2 ${className}`}
      aria-hidden
    >
      {gags.map((gag) => (
        <DispatchGag
          key={gag}
          gag={gag}
          isRtl={isRtl}
          prefersReducedMotion={prefersReducedMotion}
        />
      ))}
    </aside>
  );
}
