"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import type { LifeYearChapter } from "@/content/types";

type UseLifeTimelineOptions = {
  chapters: LifeYearChapter[];
  defaultActiveId?: string;
};

export function useLifeTimeline({
  chapters,
  defaultActiveId,
}: UseLifeTimelineOptions) {
  const [activeId, setActiveId] = useState(
    defaultActiveId ?? chapters[0]?.id ?? "",
  );
  const observerRef = useRef<IntersectionObserver | null>(null);

  const scrollToChapter = useCallback((id: string) => {
    setActiveId(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    chapters.forEach((chapter) => {
      const element = document.getElementById(chapter.id);
      if (element) {
        observerRef.current?.observe(element);
      }
    });

    return () => observerRef.current?.disconnect();
  }, [chapters]);

  return {
    activeId,
    scrollToChapter,
  };
}
