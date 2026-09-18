import type { LifePhoto } from "@/content/types";

export type PhotoFrameVariant = "default" | "compact" | "dispatch" | "correspondence";

export type PhotoFrameProps = {
  photo: LifePhoto;
  variant: PhotoFrameVariant;
  eager?: boolean;
};

export type PhotoSliderSize = "archive" | "dispatch" | "correspondence";

export type PhotoSliderProps = {
  photos: LifePhoto[];
  size: PhotoSliderSize;
  ariaLabel: string;
  prefersReducedMotion: boolean;
  showCaption?: boolean;
};
