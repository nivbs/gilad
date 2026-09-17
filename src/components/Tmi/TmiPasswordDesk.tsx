"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { NewspaperButton } from "@/components/NewspaperButton/NewspaperButton";
import type { TmiPasswordDeskProps } from "@/components/Tmi/types";

export function TmiPasswordDesk({
  ui,
  isOpen,
  isRtl,
  prefersReducedMotion,
  onClose,
  onUnlock,
}: TmiPasswordDeskProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) {
      setPassword("");
      setError(false);
      setSuccess(false);
      return;
    }

    const timer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 50);

    return () => window.clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = () => {
    const accepted = onUnlock(password);
    if (accepted) {
      setError(false);
      setSuccess(true);
      window.setTimeout(() => {
        onClose();
      }, prefersReducedMotion ? 0 : 700);
      return;
    }
    setError(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="tmi-desk-backdrop fixed inset-0 z-50 flex items-center justify-center bg-ink/50 px-4"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="tmi-desk-title"
            dir={isRtl ? "rtl" : "ltr"}
            className={`tmi-desk paper-grain mx-auto w-full max-w-md border-2 border-ink bg-newsprint p-6 shadow-2xl md:p-8 ${
              error && !prefersReducedMotion ? "tmi-desk--rejected" : ""
            } ${isRtl ? "font-hebrew text-right" : ""}`}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
          >
            <p className="kicker mb-3 inline-block px-2 py-0.5 text-[10px] font-semibold">
              {ui.tmiPasswordKicker}
            </p>
            <h2
              id="tmi-desk-title"
              className="font-display text-2xl font-bold text-ink md:text-3xl"
            >
              {ui.tmiPasswordHeadline}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted md:text-base">
              {ui.tmiPasswordDek}
            </p>

            {success ? (
              <p className="tmi-desk-success mt-6 font-display text-lg font-semibold text-ink">
                {ui.tmiPasswordSuccess}
              </p>
            ) : (
              <form
                className="mt-6 space-y-4"
                onSubmit={(event) => {
                  event.preventDefault();
                  handleSubmit();
                }}
              >
                <input
                  ref={inputRef}
                  type="password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    setError(false);
                  }}
                  placeholder={ui.tmiPasswordPlaceholder}
                  className="tmi-desk-input w-full border-2 border-ink bg-newsprint px-3 py-2 text-base text-ink outline-none focus:ring-2 focus:ring-ink/20"
                  autoComplete="off"
                />
                {error && (
                  <p className="text-sm font-semibold text-red-700">{ui.tmiPasswordWrong}</p>
                )}
                <div className={`flex flex-wrap gap-3 ${isRtl ? "justify-end" : ""}`}>
                  <NewspaperButton type="submit">{ui.tmiPasswordSubmit}</NewspaperButton>
                  <NewspaperButton type="button" variant="secondary" onClick={onClose}>
                    {ui.tmiPasswordClose}
                  </NewspaperButton>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
