import type { TargetAndTransition, Transition } from "motion/react";

import type { DispatchGag } from "@/content/types";

export type GagAnimationConfig = {
  entrance: TargetAndTransition;
  initial: TargetAndTransition;
  transition: Transition;
  idle: TargetAndTransition;
  idleTransition: Transition;
  durationMs: number;
};

export type GagConfig = {
  icon: string;
  tmi?: boolean;
};

export type DispatchGagStripProps = {
  gags: DispatchGag[];
  isRtl: boolean;
  prefersReducedMotion: boolean;
  className?: string;
};

export type { DispatchGag };
