"use client";

import type { KeyboardEvent } from "react";

import type { TmiGateProps } from "@/components/Tmi/types";
import { useTmi } from "@/components/Tmi/TmiProvider";

export function TmiGate({
  children,
  variant,
  label,
  lockedLabel,
  className = "",
}: TmiGateProps) {
  const { isUnlocked, isReady, requestUnlock } = useTmi();

  if (!isReady || isUnlocked) {
    return <>{children}</>;
  }

  const handleActivate = () => {
    requestUnlock();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      requestUnlock();
    }
  };

  return (
    <div
      className={`tmi-gate tmi-gate--${variant} ${className}`}
      role="button"
      tabIndex={0}
      aria-label={lockedLabel}
      onClick={handleActivate}
      onKeyDown={handleKeyDown}
    >
      <div className="tmi-gate-content" aria-hidden>
        {children}
      </div>
      <div className="tmi-gate-overlay">
        <span className="tmi-gate-stamp">{label}</span>
      </div>
    </div>
  );
}
