import type { LifePhoto } from "@/content/types";

export type PhotoFrameVariant = "default" | "compact" | "dispatch" | "correspondence";

export type PhotoSliderSize = "archive" | "dispatch" | "correspondence";

export type PhotoSliderProps = {
  photos: LifePhoto[];
  size: PhotoSliderSize;
  ariaLabel: string;
  isRtl: boolean;
  prefersReducedMotion: boolean;
  showCaption?: boolean;
};
