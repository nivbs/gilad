"use client";

import { PhotoSlider } from "@/components/PhotoSlider/PhotoSlider";
import type { LifePhotoSliderProps } from "@/components/LifeTimeline/types";

export function LifePhotoSlider({
  photos,
  chapterYear,
  chapterYearLabel,
  isRtl,
  prefersReducedMotion,
}: LifePhotoSliderProps) {
  const yearLabel = chapterYearLabel ?? String(chapterYear);

  return (
    <PhotoSlider
      photos={photos}
      size="archive"
      ariaLabel={`${yearLabel} photographs`}
      isRtl={isRtl}
      prefersReducedMotion={prefersReducedMotion}
    />
  );
}
