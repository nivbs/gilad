"use client";

import { PhotoSlider } from "@/components/PhotoSlider/PhotoSlider";
import type { LifePhotoSliderProps } from "@/components/LifeTimeline/types";

export function LifePhotoSlider({
  photos,
  chapterYear,
  isRtl,
  prefersReducedMotion,
}: LifePhotoSliderProps) {
  return (
    <PhotoSlider
      photos={photos}
      size="archive"
      ariaLabel={`${chapterYear} photographs`}
      isRtl={isRtl}
      prefersReducedMotion={prefersReducedMotion}
    />
  );
}
