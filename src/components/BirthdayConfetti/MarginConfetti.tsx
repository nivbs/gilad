"use client";

import type { CSSProperties } from "react";

import { EDITION_SHEET_MAX_REM } from "@/components/BirthdayConfetti/confettiConfig";
import { MarginPieceView } from "@/components/BirthdayConfetti/MarginPieceView";
import type { GutterSide, MarginConfettiProps } from "@/components/BirthdayConfetti/types";

const gutterWidth = `max(1rem, calc((100vw - ${EDITION_SHEET_MAX_REM}rem) / 2))`;
const gutterWidthMd = `max(2rem, calc((100vw - ${EDITION_SHEET_MAX_REM}rem) / 2))`;
const gutterWidthLg = `max(3rem, calc((100vw - ${EDITION_SHEET_MAX_REM}rem) / 2))`;

function filterByGutter(
  pieces: MarginConfettiProps["pieces"],
  gutter: GutterSide,
) {
  return pieces.filter((piece) => piece.gutter === gutter);
}

type GutterBandProps = {
  side: GutterSide;
  pieces: MarginConfettiProps["pieces"];
  prefersReducedMotion: boolean;
  isSettling: boolean;
  className: string;
  style?: CSSProperties;
};

function GutterBand({
  pieces,
  prefersReducedMotion,
  isSettling,
  className,
  style,
}: GutterBandProps) {
  return (
    <div className={className} style={style}>
      {pieces.map((piece) => (
        <MarginPieceView
          key={piece.id}
          piece={piece}
          prefersReducedMotion={prefersReducedMotion}
          isSettling={isSettling}
        />
      ))}
    </div>
  );
}

export function MarginConfetti({
  pieces,
  visible,
  isSettling,
  prefersReducedMotion,
}: MarginConfettiProps) {
  if (!visible || prefersReducedMotion) {
    return null;
  }

  const leftPieces = filterByGutter(pieces, "left");
  const rightPieces = filterByGutter(pieces, "right");
  const topPieces = filterByGutter(pieces, "top");

  const gutterVars = {
    "--confetti-gutter-width": gutterWidth,
    "--confetti-gutter-width-md": gutterWidthMd,
    "--confetti-gutter-width-lg": gutterWidthLg,
  } as CSSProperties;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={gutterVars}
      aria-hidden
    >
      <GutterBand
        side="left"
        pieces={leftPieces}
        prefersReducedMotion={prefersReducedMotion}
        isSettling={isSettling}
        className="confetti-gutter confetti-gutter-left absolute inset-y-0 left-0 overflow-hidden"
      />
      <GutterBand
        side="right"
        pieces={rightPieces}
        prefersReducedMotion={prefersReducedMotion}
        isSettling={isSettling}
        className="confetti-gutter confetti-gutter-right absolute inset-y-0 right-0 overflow-hidden"
      />
      <GutterBand
        side="top"
        pieces={topPieces}
        prefersReducedMotion={prefersReducedMotion}
        isSettling={isSettling}
        className="confetti-gutter-top absolute top-0 h-20 overflow-hidden md:h-24"
      />
    </div>
  );
}
