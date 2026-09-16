"use client";

import { useMemo } from "react";
import { motion } from "motion/react";

type BirthdayConfettiProps = {
  active: boolean;
  prefersReducedMotion: boolean;
};

const colors = [
  "var(--newsprint)",
  "var(--ink)",
  "var(--feyenoord)",
  "var(--rule)",
  "#FF6B6B",
  "#4ECDC4",
  "#FFE66D",
  "#FF8C42",
  "#9B59B6",
  "#2ECC71",
  "#F39C12",
  "#E74C3C",
  "#3498DB",
];

export function BirthdayConfetti({
  active,
  prefersReducedMotion,
}: BirthdayConfettiProps) {
  const pieces = useMemo(
    () =>
      Array.from({ length: 45 }, (_, index) => ({
        id: index,
        left: `${(index * 2.27) % 100}%`,
        delay: (index % 8) * 0.05,
        size: 12 + (index % 7) * 2.5,
        color: colors[index % colors.length],
        rotate: (index % 12) * 30,
        drift: (index % 9) * 14 - 56,
        isCircle: index % 4 === 0,
        duration: 2.8 + (index % 5) * 0.1,
      })),
    [],
  );

  if (!active || prefersReducedMotion) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden" aria-hidden>
      {pieces.map((piece) => (
        <motion.span
          key={piece.id}
          className="absolute top-0 block"
          style={{
            left: piece.left,
            width: piece.size,
            height: piece.isCircle ? piece.size : piece.size * 0.65,
            borderRadius: piece.isCircle ? "50%" : "1px",
            backgroundColor: piece.color,
          }}
          initial={{ opacity: 1, y: -30, rotate: piece.rotate }}
          animate={{
            opacity: [1, 1, 0],
            y: ["0vh", "60vh", "105vh"],
            x: [0, piece.drift, piece.drift * 1.4],
            rotate: piece.rotate + 360,
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
