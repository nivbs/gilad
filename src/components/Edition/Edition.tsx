"use client";

import { motion, type Variants } from "motion/react";

import { Colophon } from "@/components/Colophon/Colophon";
import { Dispatches } from "@/components/Dispatches/Dispatches";
import { EditorLetter } from "@/components/EditorLetter/EditorLetter";
import { LeadStory } from "@/components/LeadStory/LeadStory";
import { Masthead } from "@/components/Masthead/Masthead";
import { PaperIntro } from "@/components/PaperIntro/PaperIntro";
import { SidebarGrid } from "@/components/SidebarGrid/SidebarGrid";
import { TimelineRail } from "@/components/TimelineRail/TimelineRail";
import type { Edition as EditionContent } from "@/content/types";
import { useDispatchTimeline } from "@/hooks/useDispatchTimeline";
import { usePaperIntro } from "@/hooks/usePaperIntro";

type EditionProps = {
  edition: EditionContent;
};

export function Edition({ edition }: EditionProps) {
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

  return (
    <>
      <PaperIntro
        isOpen={isOpen}
        prefersReducedMotion={prefersReducedMotion}
        title={edition.masthead.title}
        subtitle={edition.masthead.subtitle}
        tagline={edition.masthead.tagline}
        onOpen={open}
        onSkip={skip}
      />

      {isOpen && (
        <main className="min-h-screen bg-newsprint px-4 py-8 md:px-8 lg:px-12">
          <motion.div
            className="paper-grain edition-frame mx-auto max-w-6xl border-2 border-ink bg-newsprint px-4 py-8 shadow-lg md:px-8 md:py-12"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              custom={0}
              initial={prefersReducedMotion ? undefined : "hidden"}
              animate={prefersReducedMotion ? undefined : "visible"}
              variants={prefersReducedMotion ? undefined : sectionVariants}
            >
              <Masthead masthead={edition.masthead} />
            </motion.div>

            <motion.div
              custom={1}
              initial={prefersReducedMotion ? undefined : "hidden"}
              animate={prefersReducedMotion ? undefined : "visible"}
              variants={prefersReducedMotion ? undefined : sectionVariants}
            >
              <LeadStory
                leadStory={edition.leadStory}
                onContinue={scrollToDispatches}
              />
            </motion.div>

            <motion.div
              custom={2}
              initial={prefersReducedMotion ? undefined : "hidden"}
              animate={prefersReducedMotion ? undefined : "visible"}
              variants={prefersReducedMotion ? undefined : sectionVariants}
              className="flex flex-col gap-8 lg:flex-row"
            >
              <TimelineRail
                dispatches={edition.dispatches}
                activeId={timeline.activeId}
                onSelect={timeline.open}
              />
              <div className="min-w-0 flex-1">
                <Dispatches
                  dispatches={edition.dispatches}
                  expandedId={timeline.expandedId}
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
                onBackToIndex={scrollToIndex}
              />
            </motion.div>

            <motion.div
              custom={5}
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
