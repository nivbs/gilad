"use client";

import { motion } from "motion/react";

import { LifePhotoCaption } from "@/components/LifeTimeline/LifePhotoCaption";
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
        <LifePhotoFrame photo={photo} variant={variant} eager />
        <LifePhotoCaption caption={photo.caption} />
      </figure>
    );
  }

  return (
    <motion.figure
      className={figureClass}
      initial={prefersReducedMotion ? false : { y: 12, scale: 0.98 }}
      whileInView={prefersReducedMotion ? undefined : { y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.45,
        delay: index * 0.05,
        ease: "easeOut",
      }}
    >
      <LifePhotoFrame photo={photo} variant={variant} eager />
      <LifePhotoCaption caption={photo.caption} />
    </motion.figure>
  );
}
