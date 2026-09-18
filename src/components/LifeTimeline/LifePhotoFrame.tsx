"use client";

import { PhotoFrame } from "@/components/PhotoSlider/PhotoFrame";
import type { LifePhoto } from "@/content/types";
import type { LifePhotoVariant } from "@/components/LifeTimeline/types";

type LifePhotoFrameProps = {
  photo: LifePhoto;
  variant: LifePhotoVariant;
  eager?: boolean;
};

export function LifePhotoFrame({ photo, variant, eager = false }: LifePhotoFrameProps) {
  const frameVariant = variant === "compact" ? "compact" : "default";
  return <PhotoFrame photo={photo} variant={frameVariant} eager={eager} />;
}
