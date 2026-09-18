"use client";

import Image from "next/image";

import { LeadStoryPartyBurst } from "@/components/LeadStory/LeadStoryPartyBurst";
import type { LeadStoryPhotoProps } from "@/components/LeadStory/types";
import { useLeadStoryPartyBurst } from "@/hooks/useLeadStoryPartyBurst";

export function LeadStoryPhoto({
  photoSrc,
  photoAlt,
  photoCaption,
  isRtl,
  prefersReducedMotion,
}: LeadStoryPhotoProps) {
  const { confettiPieces, cakePieces } = useLeadStoryPartyBurst();

  return (
    <figure className="lead-story-photo">
      <div dir="ltr" className="photo-well relative aspect-[4/5] overflow-hidden">
        <Image
          src={photoSrc}
          alt={photoAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover object-top"
          priority
        />
        <LeadStoryPartyBurst
          prefersReducedMotion={prefersReducedMotion}
          confettiPieces={confettiPieces}
          cakePieces={cakePieces}
        />
      </div>
      <figcaption
        className={`mt-2 text-xs uppercase tracking-wider text-ink-muted ${
          isRtl ? "text-right" : ""
        }`}
      >
        {photoCaption}
      </figcaption>
    </figure>
  );
}
