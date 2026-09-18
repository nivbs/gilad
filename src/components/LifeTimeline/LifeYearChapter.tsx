"use client";

import { motion } from "motion/react";

import { LifePhotoCard } from "@/components/LifeTimeline/LifePhotoCard";
import { LifePhotoSlider } from "@/components/LifeTimeline/LifePhotoSlider";
import type { LifeYearChapterProps } from "@/components/LifeTimeline/types";

export function LifeYearChapter({
  chapter,
  ui,
  isRtl,
  prefersReducedMotion,
}: LifeYearChapterProps) {
  const hasMultiplePhotos = chapter.photos.length > 1;

  return (
    <article
      id={chapter.id}
      className={`life-year-chapter scroll-mt-36 border newspaper-rule p-3 lg:scroll-mt-8 ${
        isRtl ? "font-hebrew text-right" : ""
      }`}
    >
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="mb-3 flex flex-wrap items-center gap-2">
          {chapter.kicker && (
            <span className="kicker px-2 py-0.5 text-[10px] font-semibold">
              {chapter.kicker}
            </span>
          )}
          <span className="text-xs uppercase tracking-widest text-ink-muted">
            {chapter.yearLabel ?? chapter.year}
          </span>
          <span className="text-xs text-ink-muted">{ui.photoDesk}</span>
        </div>
        {chapter.headline && (
          <h3 className="font-display text-xl font-bold text-ink md:text-2xl">
            {chapter.headline}
          </h3>
        )}
        <div className="mt-4">
          {hasMultiplePhotos ? (
            <LifePhotoSlider
              photos={chapter.photos}
              chapterYear={chapter.year}
              chapterYearLabel={chapter.yearLabel}
              ui={ui}
              isRtl={isRtl}
              prefersReducedMotion={prefersReducedMotion}
            />
          ) : (
            <LifePhotoCard
              photo={chapter.photos[0]}
              variant="compact"
              ui={ui}
              isRtl={isRtl}
              prefersReducedMotion={prefersReducedMotion}
            />
          )}
        </div>
      </motion.div>
    </article>
  );
}
