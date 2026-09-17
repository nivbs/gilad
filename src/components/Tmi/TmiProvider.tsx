"use client";

import { createContext, useContext, type ReactNode } from "react";

import { TmiPasswordDesk } from "@/components/Tmi/TmiPasswordDesk";
import type { TmiContextValue } from "@/components/Tmi/types";
import type { UiStrings } from "@/content/types";
import { useTmiEdition } from "@/hooks/useTmiEdition";

const TmiContext = createContext<TmiContextValue | null>(null);

type TmiProviderProps = {
  children: ReactNode;
  ui: UiStrings;
  isRtl: boolean;
  prefersReducedMotion: boolean;
};

export function TmiProvider({
  children,
  ui,
  isRtl,
  prefersReducedMotion,
}: TmiProviderProps) {
  const {
    isUnlocked,
    isReady,
    isDeskOpen,
    requestUnlock,
    closeDesk,
    unlock,
    lock,
  } = useTmiEdition();

  return (
    <TmiContext.Provider
      value={{
        isUnlocked,
        isReady,
        requestUnlock,
        lock,
        tmiVersion: ui.tmiVersion,
        tmiLocked: ui.tmiLocked,
      }}
    >
      {children}
      <TmiPasswordDesk
        ui={ui}
        isOpen={isDeskOpen}
        isRtl={isRtl}
        prefersReducedMotion={prefersReducedMotion}
        onClose={closeDesk}
        onUnlock={unlock}
      />
    </TmiContext.Provider>
  );
}

export function useTmi() {
  const context = useContext(TmiContext);
  if (!context) {
    throw new Error("useTmi must be used within TmiProvider");
  }
  return context;
}
