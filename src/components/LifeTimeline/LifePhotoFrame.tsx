"use client";

import { PhotoFrame } from "@/components/PhotoSlider/PhotoFrame";
import type { LifePhoto } from "@/content/types";
import type { LifePhotoVariant } from "@/components/LifeTimeline/types";

type LifePhotoFrameProps = {
  photo: LifePhoto;
  variant: LifePhotoVariant;
};

export function LifePhotoFrame({ photo, variant }: LifePhotoFrameProps) {
  const frameVariant = variant === "compact" ? "compact" : "default";
  return <PhotoFrame photo={photo} variant={frameVariant} />;
}
