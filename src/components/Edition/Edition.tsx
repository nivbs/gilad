"use client";

import { motion, type Variants } from "motion/react";

import { Blessing } from "@/components/Blessing/Blessing";
import { Colophon } from "@/components/Colophon/Colophon";
import { Dispatches } from "@/components/Dispatches/Dispatches";
import { EditorLetter } from "@/components/EditorLetter/EditorLetter";
import { LanguageBar } from "@/components/LanguageBar/LanguageBar";
import { LeadStory } from "@/components/LeadStory/LeadStory";
import { Masthead } from "@/components/Masthead/Masthead";
import { PaperIntro } from "@/components/PaperIntro/PaperIntro";
import { SidebarGrid } from "@/components/SidebarGrid/SidebarGrid";
import { TimelineRail } from "@/components/TimelineRail/TimelineRail";
import { getEdition } from "@/content/locales";
import { useDispatchTimeline } from "@/hooks/useDispatchTimeline";
import { useLocale } from "@/hooks/useLocale";
import { usePaperIntro } from "@/hooks/usePaperIntro";

export function Edition() {
  const { locale, setLocale, isRtl, isReady } = useLocale();
  const edition = getEdition(locale);
  const { isOpen, prefersReducedMotion, open, skip } = usePaperIntro();
  const timeline = useDispatchTimeline({
    dispatches: edition.dispatches,
    defaultExpandedId: "dispatch-feb-6-2025",
  });

  const scrollToDispatches = () => {
    document.getElementById("dispatches")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    timeline.open("dispatch-feb-6-2025");
  };

  const scrollToLetter = () => {
    document.getElementById("editor-letter")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToBlessing = () => {
    document.getElementById("blessing")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToIndex = () => {
    document.getElementById("dispatches")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.15 + index * 0.08,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  if (!isReady) {
    return null;
  }

  return (
    <>
      <PaperIntro
        isOpen={isOpen}
        prefersReducedMotion={prefersReducedMotion}
        title={edition.masthead.title}
        subtitle={edition.masthead.subtitle}
        tagline={edition.masthead.tagline}
        ui={edition.ui}
        onOpen={open}
        onSkip={skip}
      />

      {isOpen && (
        <main
          className="min-h-screen bg-newsprint px-4 py-8 md:px-8 lg:px-12"
          dir={isRtl ? "rtl" : "ltr"}
        >
          <motion.div
            className="paper-grain edition-sheet edition-frame mx-auto max-w-6xl border-2 border-ink bg-newsprint px-4 py-4 shadow-lg md:px-8 md:py-8"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <LanguageBar
              locale={locale}
              editionLabel={edition.ui.languageEdition}
              onChange={setLocale}
            />

            <motion.div
              custom={0}
              initial={prefersReducedMotion ? undefined : "hidden"}
              animate={prefersReducedMotion ? undefined : "visible"}
              variants={prefersReducedMotion ? undefined : sectionVariants}
            >
              <Masthead masthead={edition.masthead} isRtl={isRtl} />
            </motion.div>

            <motion.div
              custom={1}
              initial={prefersReducedMotion ? undefined : "hidden"}
              animate={prefersReducedMotion ? undefined : "visible"}
              variants={prefersReducedMotion ? undefined : sectionVariants}
            >
              <LeadStory
                leadStory={edition.leadStory}
                ui={edition.ui}
                isRtl={isRtl}
                onContinue={scrollToDispatches}
              />
            </motion.div>

            <motion.div
              custom={2}
              initial={prefersReducedMotion ? undefined : "hidden"}
              animate={prefersReducedMotion ? undefined : "visible"}
              variants={prefersReducedMotion ? undefined : sectionVariants}
              className={`flex flex-col gap-8 lg:flex-row ${isRtl ? "lg:flex-row-reverse" : ""}`}
            >
              <TimelineRail
                dispatches={edition.dispatches}
                activeId={timeline.activeId}
                ui={edition.ui}
                isRtl={isRtl}
                onSelect={timeline.open}
              />
              <div className="min-w-0 flex-1">
                <Dispatches
                  dispatches={edition.dispatches}
                  expandedId={timeline.expandedId}
                  ui={edition.ui}
                  isRtl={isRtl}
                  onOpen={timeline.open}
                  onToggle={timeline.toggle}
                  onNext={timeline.goNext}
                  onPrev={timeline.goPrev}
                  onGoToLetter={scrollToLetter}
                />
              </div>
            </motion.div>

            <motion.div
              custom={3}
              initial={prefersReducedMotion ? undefined : "hidden"}
              animate={prefersReducedMotion ? undefined : "visible"}
              variants={prefersReducedMotion ? undefined : sectionVariants}
            >
              <SidebarGrid
                sidebarColumns={edition.sidebarColumns}
                nicknames={edition.nicknames}
                hebrewNicknames={edition.hebrewNicknames}
                ui={edition.ui}
                isRtl={isRtl}
              />
            </motion.div>

            <motion.div
              custom={4}
              initial={prefersReducedMotion ? undefined : "hidden"}
              animate={prefersReducedMotion ? undefined : "visible"}
              variants={prefersReducedMotion ? undefined : sectionVariants}
            >
              <EditorLetter
                editorLetter={edition.editorLetter}
                ui={edition.ui}
                isRtl={isRtl}
                onBackToIndex={scrollToIndex}
                onGoToBlessing={scrollToBlessing}
              />
            </motion.div>

            <motion.div
              custom={5}
              initial={prefersReducedMotion ? undefined : "hidden"}
              animate={prefersReducedMotion ? undefined : "visible"}
              variants={prefersReducedMotion ? undefined : sectionVariants}
            >
              <Blessing
                blessing={edition.blessing}
                ui={edition.ui}
                isRtl={isRtl}
                onBackToLetter={scrollToLetter}
              />
            </motion.div>

            <motion.div
              custom={6}
              initial={prefersReducedMotion ? undefined : "hidden"}
              animate={prefersReducedMotion ? undefined : "visible"}
              variants={prefersReducedMotion ? undefined : sectionVariants}
            >
              <Colophon colophon={edition.colophon} />
            </motion.div>
          </motion.div>
        </main>
      )}
    </>
  );
}
