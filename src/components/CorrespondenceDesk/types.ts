import type { Edition, UiStrings } from "@/content/types";

export type CorrespondenceDeskProps = {
  correspondence: Edition["correspondence"];
  ui: UiStrings;
  isRtl: boolean;
  prefersReducedMotion: boolean;
};
