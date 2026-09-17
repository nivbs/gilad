"use client";

import Image from "next/image";
import { motion } from "motion/react";

import type { LifePhotoCardProps } from "@/components/LifeTimeline/types";

export function LifePhotoCard({
  photo,
  index,
  prefersReducedMotion,
}: LifePhotoCardProps) {
  if (photo.placeholder) {
    return (
      <figure className="life-photo-card">
        <div className="photo-well life-photo-well flex aspect-[4/5] items-center justify-center p-4">
          <span className="text-xs uppercase tracking-widest text-ink-muted">
            Archive pending
          </span>
        </div>
        <figcaption className="mt-2 text-center text-[10px] uppercase tracking-widest text-ink-muted">
          {photo.caption}
        </figcaption>
      </figure>
    );
  }

  return (
    <motion.figure
      className="life-photo-card"
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: prefersReducedMotion ? 0 : index * 0.05,
        ease: "easeOut",
      }}
    >
      <div className="photo-well life-photo-well relative aspect-[4/5] overflow-hidden">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <figcaption className="mt-2 text-center text-[10px] uppercase tracking-widest text-ink-muted">
        {photo.caption}
      </figcaption>
    </motion.figure>
  );
}
