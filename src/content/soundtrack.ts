export type SoundtrackTrackId = "opening" | "lifeChronicle" | "loveStory";

export type SoundtrackTrack = {
  id: SoundtrackTrackId;
  src: string;
  startOffset: number;
  sectionId: string;
};

export const editionSoundtrack = {
  volume: 0.4,
  crossfadeMs: 500,
  sectionThresholdRatio: 0.25,
  tracks: [
    {
      id: "opening",
      src: "/audio/happy-birthday.mp3",
      startOffset: 170,
      sectionId: "opening",
    },
    {
      id: "lifeChronicle",
      src: "/audio/het-regent-zonnestralen.mp3",
      startOffset: 12,
      sectionId: "life-timeline",
    },
    {
      id: "loveStory",
      src: "/audio/zachiti-leehov.mp3",
      startOffset: 0,
      sectionId: "dispatches",
    },
  ] satisfies SoundtrackTrack[],
} as const;
