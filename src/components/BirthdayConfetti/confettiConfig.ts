import type {
  CelebrationConfettiPiece,
  ConfettiShape,
  GutterSide,
  MarginConfettiPiece,
} from "@/components/BirthdayConfetti/types";

export const CONFETTI_COLORS = [
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

export const EDITION_SHEET_MAX_REM = 72;
export const BURST_DURATION_MS = 3800;
export const SETTLE_DURATION_MS = 1400;

const SHAPES: ConfettiShape[] = ["circle", "rectangle", "ribbon"];

function pickShape(index: number, weights?: { ribbon?: number }): ConfettiShape {
  if (weights?.ribbon && index % 5 === 0) {
    return "ribbon";
  }
  return SHAPES[index % SHAPES.length];
}

function pickGutter(index: number, total: number): GutterSide {
  const ratio = index / total;
  if (ratio < 0.42) {
    return "left";
  }
  if (ratio < 0.84) {
    return "right";
  }
  return "top";
}

export function buildAmbientPieces(): CelebrationConfettiPiece[] {
  return Array.from({ length: 42 }, (_, index) => ({
    id: index,
    left: `${(index * 2.41) % 100}%`,
    top: `${-5 - (index % 6) * 3}%`,
    delay: (index % 10) * 0.35,
    size: 8 + (index % 5) * 2,
    color: CONFETTI_COLORS[index % CONFETTI_COLORS.length],
    rotate: (index % 12) * 30,
    drift: (index % 11) * 10 - 50,
    shape: pickShape(index),
    duration: 8 + (index % 7) * 0.9,
    opacity: 0.55 + (index % 4) * 0.1,
  }));
}

export function buildBurstPieces(): CelebrationConfettiPiece[] {
  return Array.from({ length: 105 }, (_, index) => {
    const wave = index < 55 ? 0 : 1;
    const waveOffset = wave * 0.18;

    return {
      id: index,
      left: `${((index * 1.87 + wave * 17) % 98) + 1}%`,
      delay: waveOffset + (index % 9) * 0.04,
      size: 16 + (index % 9) * 2.5,
      color: CONFETTI_COLORS[index % CONFETTI_COLORS.length],
      rotate: (index % 16) * 22.5,
      drift: (index % 13) * 18 - 108,
      shape: pickShape(index, { ribbon: 1 }),
      duration: 2.6 + (index % 6) * 0.12,
      wave,
    };
  });
}

export function buildMarginPieces(): MarginConfettiPiece[] {
  return Array.from({ length: 48 }, (_, index) => {
    const gutter = pickGutter(index, 48);

    return {
      id: index,
      gutter,
      restX: 8 + (index * 7.3) % 84,
      restY: gutter === "top" ? 12 + (index % 8) * 9 : 6 + (index * 5.7) % 88,
      size: 12 + (index % 7) * 2,
      color: CONFETTI_COLORS[(index + 3) % CONFETTI_COLORS.length],
      rotate: (index % 14) * 25,
      shape: pickShape(index + 2, { ribbon: 1 }),
      delay: (index % 12) * 0.06,
      idleDuration: 4.5 + (index % 5) * 0.7,
      driftX: 3 + (index % 4) * 1.5,
      driftY: 5 + (index % 3) * 2,
    };
  });
}
