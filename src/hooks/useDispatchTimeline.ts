"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import type { Dispatch } from "@/content/types";

type UseDispatchTimelineOptions = {
  dispatches: Dispatch[];
  defaultExpandedId?: string;
};

export function useDispatchTimeline({
  dispatches,
  defaultExpandedId,
}: UseDispatchTimelineOptions) {
  const [activeId, setActiveId] = useState(
    defaultExpandedId ?? dispatches[0]?.id ?? "",
  );
  const [expandedId, setExpandedId] = useState(
    defaultExpandedId ?? dispatches[0]?.id ?? "",
  );
  const observerRef = useRef<IntersectionObserver | null>(null);

  const open = useCallback(
    (id: string) => {
      setActiveId(id);
      setExpandedId(id);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    [],
  );

  const toggle = useCallback((id: string) => {
    setActiveId(id);
    setExpandedId((current) => (current === id ? "" : id));
  }, []);

  const goNext = useCallback(() => {
    const currentIndex = dispatches.findIndex((dispatch) => dispatch.id === expandedId);
    const nextDispatch = dispatches[currentIndex + 1];
    if (nextDispatch) {
      open(nextDispatch.id);
    }
  }, [dispatches, expandedId, open]);

  const goPrev = useCallback(() => {
    const currentIndex = dispatches.findIndex((dispatch) => dispatch.id === expandedId);
    const prevDispatch = dispatches[currentIndex - 1];
    if (prevDispatch) {
      open(prevDispatch.id);
    }
  }, [dispatches, expandedId, open]);

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

    dispatches.forEach((dispatch) => {
      const element = document.getElementById(dispatch.id);
      if (element) {
        observerRef.current?.observe(element);
      }
    });

    return () => observerRef.current?.disconnect();
  }, [dispatches]);

  const expandedIndex = dispatches.findIndex((dispatch) => dispatch.id === expandedId);

  return {
    activeId,
    expandedId,
    expandedIndex,
    open,
    toggle,
    goNext,
    goPrev,
    hasNext: expandedIndex < dispatches.length - 1,
    hasPrev: expandedIndex > 0,
  };
}
