"use client";

import { useCallback, useEffect, useState } from "react";

import type { Locale } from "@/content/types";

const STORAGE_KEY = "gilad-times-locale";

export function useLocale() {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored === "en" || stored === "he" || stored === "nl") {
      setLocaleState(stored);
    }
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady) {
      return;
    }

    const dir = locale === "he" ? "rtl" : "ltr";
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
    sessionStorage.setItem(STORAGE_KEY, locale);
  }, [isReady, locale]);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
  }, []);

  return {
    locale,
    setLocale,
    dir: locale === "he" ? "rtl" : "ltr",
    isRtl: locale === "he",
    isReady,
  };
}
