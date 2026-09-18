"use client";

import { motion } from "motion/react";

import { SETTLE_DURATION_MS } from "@/components/BirthdayConfetti/confettiConfig";
import type { MarginPieceViewProps } from "@/components/BirthdayConfetti/types";

function getPieceDimensions(
  shape: MarginPieceViewProps["piece"]["shape"],
  size: number,
) {
  if (shape === "circle") {
    return { width: size, height: size, borderRadius: "50%" };
  }

  if (shape === "ribbon") {
    return { width: size * 0.35, height: size * 1.4, borderRadius: "1px" };
  }

  return { width: size, height: size * 0.65, borderRadius: "1px" };
}

export function MarginPieceView({
  piece,
  prefersReducedMotion,
  isSettling,
}: MarginPieceViewProps) {
  if (prefersReducedMotion) {
    return null;
  }

  const dimensions = getPieceDimensions(piece.shape, piece.size);
  const settleSeconds = SETTLE_DURATION_MS / 1000;

  return (
    <motion.span
      key={isSettling ? "settle" : "idle"}
      className="absolute block"
      style={{
        width: dimensions.width,
        height: dimensions.height,
        borderRadius: dimensions.borderRadius,
        backgroundColor: piece.color,
        left: `${piece.restX}%`,
        top: `${piece.restY}%`,
      }}
      initial={
        isSettling
          ? {
              opacity: 0,
              x: piece.driftX * 4,
              y: -24,
              rotate: piece.rotate - 90,
            }
          : {
              opacity: 1,
              x: 0,
              y: 0,
              rotate: piece.rotate,
            }
      }
      animate={
        isSettling
          ? {
              opacity: 1,
              x: 0,
              y: 0,
              rotate: piece.rotate,
            }
          : {
              x: [0, piece.driftX, 0, -piece.driftX * 0.6, 0],
              y: [0, -piece.driftY, 0, piece.driftY * 0.5, 0],
              rotate: [
                piece.rotate,
                piece.rotate + 18,
                piece.rotate + 8,
                piece.rotate - 12,
                piece.rotate,
              ],
            }
      }
      transition={
        isSettling
          ? {
              duration: settleSeconds,
              delay: piece.delay,
              ease: "easeOut",
            }
          : {
              duration: piece.idleDuration,
              delay: piece.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }
      }
    />
  );
}
