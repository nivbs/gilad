"use client";

import { useCallback, useEffect, useState } from "react";

export function usePaperIntro() {
  const [isOpen, setIsOpen] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyPreference = () => {
      const reduced = mediaQuery.matches;
      setPrefersReducedMotion(reduced);
      if (reduced) {
        setIsOpen(true);
      }
    };

    applyPreference();
    mediaQuery.addEventListener("change", applyPreference);
    return () => mediaQuery.removeEventListener("change", applyPreference);
  }, []);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const skip = useCallback(() => {
    setIsOpen(true);
  }, []);

  return {
    isOpen,
    prefersReducedMotion,
    open,
    skip,
  };
}
