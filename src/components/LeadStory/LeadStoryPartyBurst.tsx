"use client";

import { motion } from "motion/react";

import type { LeadStoryPartyBurstProps } from "@/components/LeadStory/types";

export function LeadStoryPartyBurst({
  prefersReducedMotion,
  confettiPieces,
  cakePieces,
}: LeadStoryPartyBurstProps) {
  if (prefersReducedMotion) {
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
          initial={{ opacity: 0.9, y: "-12%", rotate: piece.rotate }}
          animate={{
            opacity: [0.9, 0.9, 0.6, 0],
            y: ["-12%", "45%", "110%"],
            x: [0, piece.drift * 0.6, piece.drift],
            rotate: piece.rotate + 360,
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      {cakePieces.map((piece) => (
        <motion.span
          key={`cake-${piece.id}`}
          className="absolute text-2xl drop-shadow-md md:text-3xl"
          style={{ left: piece.left, top: piece.top }}
          initial={{ y: 0, rotate: piece.rotate }}
          animate={{
            y: [0, -6, 0],
            rotate: [piece.rotate, -piece.rotate * 0.4, piece.rotate],
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {piece.emoji}
        </motion.span>
      ))}
    </div>
  );
}
