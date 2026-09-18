import type { UiStrings } from "@/content/types";

export type SoundtrackToggleProps = {
  isMuted: boolean;
  ui: UiStrings;
  onToggle: () => void;
};
