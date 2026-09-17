"use client";

import { motion } from "motion/react";

import type { LeadStoryPartyBurstProps } from "@/components/LeadStory/types";

export function LeadStoryPartyBurst({
  active,
  prefersReducedMotion,
  confettiPieces,
  cakePieces,
}: LeadStoryPartyBurstProps) {
  if (!active || prefersReducedMotion) {
    return null;
  }

  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden" aria-hidden>
      {confettiPieces.map((piece) => (
        <motion.span
          key={`confetti-${piece.id}`}
          className="absolute top-0 block"
          style={{
            left: piece.left,
            width: piece.size,
            height: piece.isCircle ? piece.size : piece.size * 0.65,
            borderRadius: piece.isCircle ? "50%" : "1px",
            backgroundColor: piece.color,
          }}
          initial={{ opacity: 1, y: -20, rotate: piece.rotate }}
          animate={{
            opacity: [1, 1, 0],
            y: ["0%", "55%", "100%"],
            x: [0, piece.drift, piece.drift * 1.3],
            rotate: piece.rotate + 280,
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            ease: "easeOut",
          }}
        />
      ))}
      {cakePieces.map((piece) => (
        <motion.span
          key={`cake-${piece.id}`}
          className="absolute text-2xl drop-shadow-md md:text-3xl"
          style={{ left: piece.left, top: piece.top }}
          initial={{ opacity: 0, y: -40, scale: 0.4, rotate: piece.rotate }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [-40, 8, 12, 20],
            scale: [0.4, 1.15, 1, 0.9],
            rotate: [piece.rotate, -piece.rotate * 0.3, piece.rotate * 0.2, 0],
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            ease: "easeOut",
          }}
        >
          {piece.emoji}
        </motion.span>
      ))}
    </div>
  );
}
