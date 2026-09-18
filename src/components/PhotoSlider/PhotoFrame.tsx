"use client";

import Image from "next/image";

import type { PhotoFrameVariant } from "@/components/PhotoSlider/types";
import { TmiGate } from "@/components/Tmi/TmiGate";
import { useTmi } from "@/components/Tmi/TmiProvider";
import type { LifePhoto } from "@/content/types";

type PhotoFrameProps = {
  photo: LifePhoto;
  variant: PhotoFrameVariant;
};

const aspectClasses: Record<PhotoFrameVariant, string> = {
  default: "aspect-[4/5]",
  compact: "aspect-[3/4]",
  dispatch: "aspect-[3/4]",
  correspondence: "aspect-[9/16]",
};

const sizeHints: Record<PhotoFrameVariant, string> = {
  default: "(max-width: 768px) 100vw, 50vw",
  compact: "(max-width: 768px) 260px, 300px",
  dispatch: "(max-width: 768px) 200px, 220px",
  correspondence: "160px",
};

export function PhotoFrame({ photo, variant }: PhotoFrameProps) {
  const { tmiVersion, tmiLocked } = useTmi();
  const aspectClass = aspectClasses[variant];
  const wellClass =
    variant === "default"
      ? "life-photo-well"
      : "life-photo-well life-photo-well--compact";

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

  const frame = (
    <div className={`photo-well ${wellClass} relative ${aspectClass} overflow-hidden`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizeHints[variant]}
        className={photo.objectFit === "contain" ? "object-contain" : "object-cover"}
        draggable={false}
      />
    </div>
  );

  if (!photo.tmi) {
    return frame;
  }

  return (
    <TmiGate variant="media" label={tmiVersion} lockedLabel={tmiLocked}>
      {frame}
    </TmiGate>
  );
}
