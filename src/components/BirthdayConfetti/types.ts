export type CelebrationPhase = "ambient" | "burst" | "settle" | "idle";

export type GutterSide = "left" | "right" | "top";

export type ConfettiShape = "circle" | "rectangle" | "ribbon";

export type CelebrationConfettiPiece = {
  id: number;
  color: string;
  shape: ConfettiShape;
  size: number;
  rotate: number;
  delay: number;
  duration: number;
  drift: number;
  left: string;
  top?: string;
  wave?: 0 | 1;
  opacity?: number;
};

export type MarginConfettiPiece = {
  id: number;
  color: string;
  shape: ConfettiShape;
  size: number;
  rotate: number;
  delay: number;
  idleDuration: number;
  driftX: number;
  driftY: number;
  gutter: GutterSide;
  restX: number;
  restY: number;
};

export type ConfettiPieceViewProps = {
  piece: CelebrationConfettiPiece;
  phase: "ambient" | "burst";
  prefersReducedMotion: boolean;
};

export type MarginPieceViewProps = {
  piece: MarginConfettiPiece;
  prefersReducedMotion: boolean;
  isSettling: boolean;
};

export type IntroAmbientConfettiProps = {
  pieces: CelebrationConfettiPiece[];
  prefersReducedMotion: boolean;
};

export type OpeningBurstConfettiProps = {
  pieces: CelebrationConfettiPiece[];
  active: boolean;
  prefersReducedMotion: boolean;
};

export type MarginConfettiProps = {
  pieces: MarginConfettiPiece[];
  visible: boolean;
  isSettling: boolean;
  prefersReducedMotion: boolean;
};

