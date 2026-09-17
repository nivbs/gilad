import type { LifePhoto, LifeYearChapter, UiStrings } from "@/content/types";

export type LifeTimelineContent = {
  kicker: string;
  headline: string;
  dek: string;
  chapters: LifeYearChapter[];
};

export type LifeTimelineSharedProps = {
  ui: UiStrings;
  isRtl: boolean;
  prefersReducedMotion: boolean;
};

export type LifePhotoCardProps = LifeTimelineSharedProps & {
  photo: LifePhoto;
  index: number;
};

export type LifeYearChapterProps = LifeTimelineSharedProps & {
  chapter: LifeYearChapter;
};

export type LifeTimelineRailProps = LifeTimelineSharedProps & {
  chapters: LifeYearChapter[];
  activeId: string;
  onSelect: (id: string) => void;
};

export type LifeTimelineProps = LifeTimelineSharedProps & {
  lifeTimeline: LifeTimelineContent;
  onContinueToLoveStory: () => void;
};
