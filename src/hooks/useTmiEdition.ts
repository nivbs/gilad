"use client";

import { useCallback, useEffect, useState } from "react";

import { isTmiPasswordValid } from "@/lib/tmiPassword";

const STORAGE_KEY = "gilad-times-tmi";

export function useTmiEdition() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isDeskOpen, setIsDeskOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    setIsUnlocked(stored === "true");
    setIsReady(true);
  }, []);

  const persistUnlock = useCallback((unlocked: boolean) => {
    setIsUnlocked(unlocked);
    if (unlocked) {
      localStorage.setItem(STORAGE_KEY, "true");
      return;
    }
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const requestUnlock = useCallback(() => {
    setIsDeskOpen(true);
  }, []);

  const closeDesk = useCallback(() => {
    setIsDeskOpen(false);
  }, []);

  const unlock = useCallback(
    (password: string) => {
      if (!isTmiPasswordValid(password)) {
        return false;
      }
      persistUnlock(true);
      return true;
    },
    [persistUnlock],
  );

  const lock = useCallback(() => {
    persistUnlock(false);
  }, [persistUnlock]);

  return {
    isUnlocked,
    isReady,
    isDeskOpen,
    requestUnlock,
    closeDesk,
    unlock,
    lock,
  };
}
