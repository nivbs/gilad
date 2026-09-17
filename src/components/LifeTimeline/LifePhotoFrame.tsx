"use client";

import Image from "next/image";

import type { LifePhoto } from "@/content/types";
import type { LifePhotoVariant } from "@/components/LifeTimeline/types";

type LifePhotoFrameProps = {
  photo: LifePhoto;
  variant: LifePhotoVariant;
};

export function LifePhotoFrame({ photo, variant }: LifePhotoFrameProps) {
  const aspectClass = variant === "compact" ? "aspect-[3/4]" : "aspect-[4/5]";
  const wellClass =
    variant === "compact" ? "life-photo-well life-photo-well--compact" : "life-photo-well";

  if (photo.placeholder) {
    return (
      <div
        className={`photo-well ${wellClass} flex ${aspectClass} items-center justify-center p-4`}
      >
        <span className="text-xs uppercase tracking-widest text-ink-muted">
          Archive pending
        </span>
      </div>
    );
  }

  return (
    <div className={`photo-well ${wellClass} relative ${aspectClass} overflow-hidden`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="(max-width: 768px) 260px, 300px"
        className="object-cover"
        draggable={false}
      />
    </div>
  );
}
