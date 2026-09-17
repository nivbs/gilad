import type { CakePiece, ConfettiPiece } from "@/components/LeadStory/types";

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

const cakeEmojis = ["🎂", "🧁", "🍰", "🎂", "🧁"];

export function buildConfettiPieces(): ConfettiPiece[] {
  return Array.from({ length: 28 }, (_, index) => ({
    id: index,
    left: `${(index * 3.7) % 100}%`,
    delay: (index % 6) * 0.04,
    size: 8 + (index % 5) * 2,
    color: colors[index % colors.length],
    rotate: (index % 10) * 36,
    drift: (index % 7) * 12 - 36,
    isCircle: index % 3 === 0,
    duration: 1.8 + (index % 4) * 0.15,
  }));
}

export function buildCakePieces(): CakePiece[] {
  return Array.from({ length: 6 }, (_, index) => ({
    id: index,
    emoji: cakeEmojis[index % cakeEmojis.length],
    left: `${12 + index * 14}%`,
    top: `${8 + (index % 3) * 6}%`,
    delay: index * 0.12,
    duration: 1.6 + (index % 2) * 0.2,
    rotate: (index % 2 === 0 ? -1 : 1) * (12 + index * 4),
  }));
}
