"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const AUTO_ADVANCE_MS = 4500;
const RESUME_AFTER_MS = 6000;

type UseLifePhotoSliderOptions = {
  slideCount: number;
  isRtl: boolean;
  prefersReducedMotion: boolean;
  containerRef: React.RefObject<HTMLElement | null>;
};

export function useLifePhotoSlider({
  slideCount,
  isRtl,
  prefersReducedMotion,
  containerRef,
}: UseLifePhotoSliderOptions) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isPointerDown, setIsPointerDown] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const [isPausedByUser, setIsPausedByUser] = useState(false);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const wrapIndex = useCallback(
    (index: number) => {
      if (slideCount <= 0) {
        return 0;
      }
      return ((index % slideCount) + slideCount) % slideCount;
    },
    [slideCount],
  );

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(wrapIndex(index));
    },
    [wrapIndex],
  );

  const goNext = useCallback(() => {
    goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  const goNextVisual = useCallback(() => {
    if (isRtl) {
      goPrev();
    } else {
      goNext();
    }
  }, [goNext, goPrev, isRtl]);

  const goPrevVisual = useCallback(() => {
    if (isRtl) {
      goNext();
    } else {
      goPrev();
    }
  }, [goNext, goPrev, isRtl]);

  const markUserInteraction = useCallback(() => {
    setIsPausedByUser(true);
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPausedByUser(false);
    }, RESUME_AFTER_MS);
  }, []);

  const onDragStart = useCallback(() => {
    setIsDragging(true);
    markUserInteraction();
  }, [markUserInteraction]);

  const onDragEnd = useCallback(() => {
    setIsDragging(false);
    markUserInteraction();
  }, [markUserInteraction]);

  const onPointerDown = useCallback(() => {
    setIsPointerDown(true);
    markUserInteraction();
  }, [markUserInteraction]);

  const onPointerUp = useCallback(() => {
    setIsPointerDown(false);
  }, []);

  const onSelectIndex = useCallback(
    (index: number) => {
      goTo(index);
      markUserInteraction();
    },
    [goTo, markUserInteraction],
  );

  useEffect(() => {
    const node = containerRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [containerRef]);

  useEffect(() => {
    if (
      prefersReducedMotion ||
      slideCount <= 1 ||
      isDragging ||
      isPointerDown ||
      !isInView ||
      isPausedByUser
    ) {
      return;
    }

    const timer = setInterval(() => {
      goNextVisual();
    }, AUTO_ADVANCE_MS);

    return () => clearInterval(timer);
  }, [
    goNextVisual,
    isDragging,
    isInView,
    isPausedByUser,
    isPointerDown,
    prefersReducedMotion,
    slideCount,
  ]);

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  const shouldAnimate = !prefersReducedMotion;

  return {
    activeIndex,
    slideCount,
    isDragging,
    shouldAnimate,
    goTo: onSelectIndex,
    goNext: goNextVisual,
    goPrev: goPrevVisual,
    onDragStart,
    onDragEnd,
    onPointerDown,
    onPointerUp,
    markUserInteraction,
  };
}
