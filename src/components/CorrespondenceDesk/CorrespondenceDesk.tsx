"use client";

import { PhotoSlider } from "@/components/PhotoSlider/PhotoSlider";
import type { CorrespondenceDeskProps } from "@/components/CorrespondenceDesk/types";

export function CorrespondenceDesk({
  correspondence,
  ui,
  isRtl,
  prefersReducedMotion,
}: CorrespondenceDeskProps) {
  return (
    <aside
      className={`sidebar-card border newspaper-rule p-6 md:col-span-2 ${
        isRtl ? "font-hebrew text-right" : ""
      }`}
    >
      <p className="kicker mb-3 inline-block px-2 py-0.5 text-[10px] font-semibold">
        {correspondence.kicker}
      </p>
      <h3 className="font-display text-xl font-bold text-ink md:text-2xl">
        {correspondence.headline}
      </h3>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted md:text-base">
        {correspondence.dek}
      </p>
      <div className="mt-6">
        <PhotoSlider
          photos={correspondence.photos}
          size="correspondence"
          ariaLabel={ui.longDistance}
          prefersReducedMotion={prefersReducedMotion}
          showCaption={false}
        />
      </div>
    </aside>
  );
}
