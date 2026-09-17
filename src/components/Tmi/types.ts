import type { ReactNode } from "react";

import type { UiStrings } from "@/content/types";

export type TmiGateVariant = "inline" | "block" | "media";

export type TmiGateProps = {
  children: ReactNode;
  variant: TmiGateVariant;
  label: string;
  lockedLabel: string;
  className?: string;
};

export type TmiPasswordDeskProps = {
  ui: UiStrings;
  isOpen: boolean;
  isRtl: boolean;
  prefersReducedMotion: boolean;
  onClose: () => void;
  onUnlock: (password: string) => boolean;
};

export type TmiContextValue = {
  isUnlocked: boolean;
  isReady: boolean;
  requestUnlock: () => void;
  lock: () => void;
  tmiVersion: string;
  tmiLocked: string;
};
