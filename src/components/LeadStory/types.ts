export type ConfettiPiece = {
  id: number;
  left: string;
  delay: number;
  size: number;
  color: string;
  rotate: number;
  drift: number;
  isCircle: boolean;
  duration: number;
};

export type CakePiece = {
  id: number;
  emoji: string;
  left: string;
  top: string;
  delay: number;
  duration: number;
  rotate: number;
};

export type LeadStoryPhotoProps = {
  photoSrc: string;
  photoAlt: string;
  photoCaption: string;
  isRtl: boolean;
  prefersReducedMotion: boolean;
};

export type LeadStoryPartyBurstProps = {
  active: boolean;
  prefersReducedMotion: boolean;
  confettiPieces: ConfettiPiece[];
  cakePieces: CakePiece[];
};
