"use client";

import { motion } from "motion/react";

import { LifePhotoFrame } from "@/components/LifeTimeline/LifePhotoFrame";
import type { LifePhotoCardProps } from "@/components/LifeTimeline/types";

export function LifePhotoCard({
  photo,
  index = 0,
  variant = "default",
  prefersReducedMotion,
}: LifePhotoCardProps) {
  const isCompact = variant === "compact";
  const figureClass = isCompact
    ? "life-photo-card mx-auto w-full max-w-[260px] md:max-w-[300px]"
    : "life-photo-card";

  if (photo.placeholder || prefersReducedMotion) {
    return (
      <figure className={figureClass}>
        <LifePhotoFrame photo={photo} variant={variant} />
        <figcaption className="mt-2 text-center text-[10px] uppercase tracking-widest text-ink-muted">
          {photo.caption}
        </figcaption>
      </figure>
    );
  }

  return (
    <motion.figure
      className={figureClass}
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: index * 0.05,
        ease: "easeOut",
      }}
    >
      <LifePhotoFrame photo={photo} variant={variant} />
      <figcaption className="mt-2 text-center text-[10px] uppercase tracking-widest text-ink-muted">
        {photo.caption}
      </figcaption>
    </motion.figure>
  );
}
