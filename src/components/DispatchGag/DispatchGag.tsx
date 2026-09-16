"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

import { gagAnimations } from "@/components/DispatchGag/gagAnimations";
import { gagConfig } from "@/components/DispatchGag/gagConfig";
import type { DispatchGag as DispatchGagType } from "@/content/types";

type DispatchGagProps = {
  gag: DispatchGagType;
  index: number;
  isRtl: boolean;
  prefersReducedMotion: boolean;
};

export function DispatchGag({
  gag,
  index,
  isRtl,
  prefersReducedMotion,
}: DispatchGagProps) {
  const config = gagConfig[gag];
  const animation = gagAnimations[gag];
  const [phase, setPhase] = useState<"entrance" | "idle">(
    prefersReducedMotion ? "idle" : "entrance",
  );

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timer = window.setTimeout(() => {
      setPhase("idle");
    }, animation.durationMs);

    return () => window.clearTimeout(timer);
  }, [animation.durationMs, prefersReducedMotion]);

  const settledEntrance = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
  };

  const initial = prefersReducedMotion ? settledEntrance : animation.initial;
  const animate =
    phase === "entrance"
      ? animation.entrance
      : prefersReducedMotion
        ? settledEntrance
        : animation.idle;
  const transition =
    phase === "entrance" ? animation.transition : animation.idleTransition;

  const offsetTop = 8 + index * 88;

  return (
    <motion.div
      className={`dispatch-gag dispatch-gag--${gag} pointer-events-none absolute z-10 flex flex-col items-center ${
        isRtl ? "left-2" : "right-2"
      }`}
      style={{ top: offsetTop }}
      aria-hidden
      initial={initial}
      animate={animate}
      transition={transition}
    >
      <div className="dispatch-gag-icon relative h-20 w-20 md:h-28 md:w-28">
        <Image src={config.icon} alt="" fill className="object-contain drop-shadow-md" />
      </div>
      <p className="dispatch-gag-caption mt-1 text-[9px] uppercase tracking-widest text-ink-muted">
        {config.caption}
      </p>
    </motion.div>
  );
}
