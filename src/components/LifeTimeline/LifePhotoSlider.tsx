"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, animate, motion, useMotionValue } from "motion/react";

import { LifePhotoFrame } from "@/components/LifeTimeline/LifePhotoFrame";
import type { LifePhotoSliderProps } from "@/components/LifeTimeline/types";
import { useLifePhotoSlider } from "@/hooks/useLifePhotoSlider";

const SLIDE_RATIO = 0.92;
const GAP_RATIO = 0.04;

export function LifePhotoSlider({
  photos,
  chapterYear,
  isRtl,
  prefersReducedMotion,
}: LifePhotoSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [viewportWidth, setViewportWidth] = useState(0);
  const x = useMotionValue(0);

  const {
    activeIndex,
    isDragging,
    shouldAnimate,
    goTo,
    goNext,
    goPrev,
    onDragStart,
    onDragEnd,
    onPointerDown,
    onPointerUp,
    markUserInteraction,
  } = useLifePhotoSlider({
    slideCount: photos.length,
    isRtl,
    prefersReducedMotion,
    containerRef,
  });

  const slideWidth = viewportWidth * SLIDE_RATIO;
  const gap = viewportWidth * GAP_RATIO;
  const stride = slideWidth + gap;
  const maxOffset = Math.max(0, (photos.length - 1) * stride);
  const centerOffset = (viewportWidth - slideWidth) / 2;

  const getOffsetForIndex = useCallback(
    (index: number) => -index * stride + centerOffset,
    [centerOffset, stride],
  );

  useEffect(() => {
    const node = containerRef.current;
    if (!node) {
      return;
    }

    const updateWidth = () => {
      setViewportWidth(node.offsetWidth);
    };

    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (viewportWidth <= 0) {
      return;
    }

    const target = getOffsetForIndex(activeIndex);
    if (shouldAnimate) {
      animate(x, target, { type: "spring", stiffness: 320, damping: 32 });
    } else {
      x.set(target);
    }
  }, [activeIndex, getOffsetForIndex, shouldAnimate, viewportWidth, x]);

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number }; velocity: { x: number } },
  ) => {
    onDragEnd();

    if (viewportWidth <= 0 || stride <= 0) {
      return;
    }

    const threshold = slideWidth * 0.18;
    const velocityThreshold = 250;
    let nextIndex = activeIndex;

    if (isRtl) {
      if (info.offset.x > threshold || info.velocity.x > velocityThreshold) {
        nextIndex = activeIndex - 1;
      } else if (info.offset.x < -threshold || info.velocity.x < -velocityThreshold) {
        nextIndex = activeIndex + 1;
      }
    } else {
      if (info.offset.x < -threshold || info.velocity.x < -velocityThreshold) {
        nextIndex = activeIndex + 1;
      } else if (info.offset.x > threshold || info.velocity.x > velocityThreshold) {
        nextIndex = activeIndex - 1;
      }
    }

    goTo(nextIndex);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      if (isRtl) {
        goNext();
      } else {
        goPrev();
      }
      markUserInteraction();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      if (isRtl) {
        goPrev();
      } else {
        goNext();
      }
      markUserInteraction();
    }
  };

  const activePhoto = photos[activeIndex];
  const dragConstraints = isRtl
    ? { left: -maxOffset + centerOffset, right: centerOffset }
    : { left: -maxOffset + centerOffset, right: centerOffset };

  return (
    <figure className="life-photo-slider mx-auto w-full max-w-[260px] md:max-w-[300px]">
      <div
        ref={containerRef}
        role="region"
        aria-roledescription="carousel"
        aria-label={`${chapterYear} photographs`}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="life-photo-slider-viewport relative overflow-hidden"
      >
        <motion.div
          className={`life-photo-slider-track flex ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          style={{ x, gap: `${gap}px`, touchAction: "pan-y" }}
          drag={viewportWidth > 0 ? "x" : false}
          dragConstraints={dragConstraints}
          dragElastic={0.1}
          onDragStart={onDragStart}
          onDragEnd={handleDragEnd}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="life-photo-slider-slide shrink-0"
              style={{ width: slideWidth > 0 ? `${slideWidth}px` : `${SLIDE_RATIO * 100}%` }}
              aria-hidden={index !== activeIndex}
            >
              <LifePhotoFrame photo={photo} variant="compact" />
            </div>
          ))}
        </motion.div>

        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-8 bg-gradient-to-r from-newsprint/80 to-transparent md:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-8 bg-gradient-to-l from-newsprint/80 to-transparent md:block" />
      </div>

      <figcaption
        className="mt-2 min-h-[1.25rem] text-center text-[10px] uppercase tracking-widest text-ink-muted"
        aria-live="polite"
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={activePhoto.id}
            initial={shouldAnimate ? { opacity: 0, y: 4 } : false}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldAnimate ? { opacity: 0, y: -4 } : undefined}
            transition={{ duration: 0.2 }}
          >
            {activePhoto.caption}
          </motion.span>
        </AnimatePresence>
      </figcaption>

      <div
        className={`mt-3 flex items-center justify-center gap-3 ${
          isRtl ? "flex-row-reverse" : ""
        }`}
      >
        <button
          type="button"
          onClick={() => {
            goPrev();
            markUserInteraction();
          }}
          className="life-photo-slider-nav hidden border border-ink px-2 py-1 text-[10px] uppercase tracking-wider text-ink hover:bg-ink hover:text-newsprint md:inline-flex"
          aria-label="Previous photograph"
        >
          ‹
        </button>

        <div className={`flex gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
          {photos.map((photo, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={photo.id}
                type="button"
                onClick={() => goTo(index)}
                className={`life-photo-slider-dot h-2.5 w-2.5 border border-ink transition-colors ${
                  isActive ? "bg-ink" : "bg-newsprint hover:bg-ink-muted"
                }`}
                aria-label={`Go to photograph ${index + 1}`}
                aria-current={isActive ? "true" : undefined}
              />
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => {
            goNext();
            markUserInteraction();
          }}
          className="life-photo-slider-nav hidden border border-ink px-2 py-1 text-[10px] uppercase tracking-wider text-ink hover:bg-ink hover:text-newsprint md:inline-flex"
          aria-label="Next photograph"
        >
          ›
        </button>
      </div>
    </figure>
  );
}
