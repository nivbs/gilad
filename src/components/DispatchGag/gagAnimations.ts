import type { GagAnimationConfig } from "@/components/DispatchGag/types";
import type { DispatchGag } from "@/content/types";

const idleFloat = {
  y: [0, -5, 0],
};

const idleFloatTransition = {
  duration: 3,
  repeat: Infinity,
  ease: "easeInOut" as const,
};

const idleWiggle = {
  rotate: [-3, 3, -3],
};

export const gagAnimations: Record<DispatchGag, GagAnimationConfig> = {
  grindr: {
    initial: { opacity: 0, y: -80, scale: 1.5, rotate: -14 },
    entrance: { opacity: 1, y: 0, scale: 1, rotate: [-14, 10, -5, 0] },
    transition: { duration: 0.95, ease: "easeOut" },
    idle: idleFloat,
    idleTransition: idleFloatTransition,
    durationMs: 950,
  },
  heart: {
    initial: { opacity: 0, scale: 0 },
    entrance: { opacity: 1, scale: [0, 1.25, 1, 1.1, 1] },
    transition: { duration: 1.1, ease: "easeOut" },
    idle: { scale: [1, 1.06, 1] },
    idleTransition: { duration: 1.4, repeat: Infinity, ease: "easeInOut" },
    durationMs: 1100,
  },
  airplane: {
    initial: { opacity: 0, x: 60, y: -50, rotate: 25 },
    entrance: { opacity: 1, x: 0, y: 0, rotate: [-8, 4, 0] },
    transition: { duration: 1.2, ease: "easeOut" },
    idle: { x: [0, 6, 0], y: [0, -3, 0] },
    idleTransition: idleFloatTransition,
    durationMs: 1200,
  },
  scooter: {
    initial: { opacity: 0, x: 70, rotate: 18, scale: 0.8 },
    entrance: { opacity: 1, x: 0, rotate: [18, -10, 6, 0], scale: [0.8, 1.15, 1] },
    transition: { duration: 1.0, ease: "easeOut" },
    idle: idleWiggle,
    idleTransition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
    durationMs: 1000,
  },
  key: {
    initial: { opacity: 0, rotate: -50, scale: 0.7 },
    entrance: { opacity: 1, rotate: [-50, 14, -8, 0], scale: 1 },
    transition: { duration: 1.0, ease: "easeOut" },
    idle: { rotate: [-4, 4, -4] },
    idleTransition: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
    durationMs: 1000,
  },
  weed: {
    initial: { opacity: 0, y: -50, scale: 0.6 },
    entrance: { opacity: 1, y: [ -50, 8, -4, 0 ], scale: [0.6, 1.1, 1] },
    transition: { duration: 1.1, ease: "easeOut" },
    idle: { y: [0, -6, 0], rotate: [-2, 2, -2] },
    idleTransition: idleFloatTransition,
    durationMs: 1100,
  },
  flags: {
    initial: { opacity: 0, scale: 0.4, x: -20 },
    entrance: { opacity: 1, scale: [0.4, 1.15, 1], x: 0 },
    transition: { duration: 1.0, ease: "easeOut" },
    idle: { scale: [1, 1.04, 1] },
    idleTransition: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
    durationMs: 1000,
  },
  home: {
    initial: { opacity: 0, y: -60, scale: 1.2 },
    entrance: { opacity: 1, y: [ -60, 10, -5, 0 ], scale: [1.2, 0.95, 1.05, 1] },
    transition: { duration: 1.1, ease: "easeOut" },
    idle: idleFloat,
    idleTransition: idleFloatTransition,
    durationMs: 1100,
  },
  pride: {
    initial: { opacity: 0, scale: 0.5, rotate: -20 },
    entrance: { opacity: 1, scale: [0.5, 1.2, 1], rotate: [-20, 8, -3, 0] },
    transition: { duration: 1.2, ease: "easeOut" },
    idle: { rotate: [-2, 2, -2], y: [0, -3, 0] },
    idleTransition: idleFloatTransition,
    durationMs: 1200,
  },
};
