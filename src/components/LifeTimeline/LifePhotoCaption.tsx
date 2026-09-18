import type { LifePhotoCaptionProps } from "@/components/LifeTimeline/types";

export function LifePhotoCaption({ caption }: LifePhotoCaptionProps) {
  if (caption.length === 0) {
    return null;
  }

  return (
    <figcaption className="mt-2 text-center text-xs leading-snug text-ink-muted">
      {caption}
    </figcaption>
  );
}
