"use client";

import { motion } from "motion/react";

import type { ConfettiPieceViewProps } from "@/components/BirthdayConfetti/types";

function getPieceDimensions(
  shape: ConfettiPieceViewProps["piece"]["shape"],
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

export function ConfettiPieceView({
  piece,
  phase,
  prefersReducedMotion,
}: ConfettiPieceViewProps) {
  if (prefersReducedMotion) {
    return null;
  }

  const dimensions = getPieceDimensions(piece.shape, piece.size);
  const isAmbient = phase === "ambient";

  return (
    <motion.span
      className="absolute top-0 block"
      style={{
        left: piece.left,
        top: piece.top,
        width: dimensions.width,
        height: dimensions.height,
        borderRadius: dimensions.borderRadius,
        backgroundColor: piece.color,
        opacity: piece.opacity ?? 1,
      }}
      initial={{
        opacity: isAmbient ? piece.opacity ?? 0.7 : 1,
        y: isAmbient ? "-8%" : "-4vh",
        rotate: piece.rotate,
        rotateZ: 0,
      }}
      animate={
        isAmbient
          ? {
              opacity: [piece.opacity ?? 0.7, piece.opacity ?? 0.7, 0],
              y: ["-8%", "55%", "108%"],
              x: [0, piece.drift * 0.5, piece.drift],
              rotate: piece.rotate + 180,
              rotateZ: [0, piece.rotate * 0.15, 0],
            }
          : {
              opacity: [1, 1, 0.85, 0],
              y: ["0vh", "45vh", "88vh", "108vh"],
              x: [0, piece.drift * 0.7, piece.drift, piece.drift * 1.2],
              rotate: piece.rotate + 540,
              rotateZ: [0, 25, -15, 0],
            }
      }
      transition={{
        duration: piece.duration,
        delay: piece.delay,
        repeat: isAmbient ? Infinity : 0,
        ease: isAmbient ? "linear" : "easeOut",
      }}
    />
  );
}
