import { getLifePhotos } from "@/content/lifeTimeline/photoCatalog";
import type { LifeYearChapter } from "@/content/types";

type ChapterMeta = {
  id: string;
  year: number;
  yearLabel?: string;
  kicker?: string;
  headline?: string;
  photoIds: string[];
};

const chapterMeta: ChapterMeta[] = [
  {
    id: "life-year-2001",
    year: 2001,
    kicker: "Childhood",
    headline: "Infant Year",
    photoIds: ["life-2001-01", "life-2001-02", "life-2001-03", "life-2001-04"],
  },
  {
    id: "life-year-2002",
    year: 2002,
    kicker: "Childhood",
    headline: "Age One",
    photoIds: ["life-2002-01", "life-2002-02", "life-2002-03"],
  },
  {
    id: "life-year-2003",
    year: 2003,
    kicker: "Childhood",
    headline: "Age Two",
    photoIds: ["life-2003-01"],
  },
  {
    id: "life-year-2004",
    year: 2004,
    kicker: "Childhood",
    headline: "Age Three",
    photoIds: ["life-2004-01", "life-2004-02", "life-2004-03"],
  },
  {
    id: "life-year-2005",
    year: 2005,
    yearLabel: "2005–09",
    kicker: "Childhood",
    headline: "Childhood",
    photoIds: [
      "life-2005-01",
      "life-2005-02",
      "life-2005-03",
      "life-2005-04",
      "life-2005-05",
    ],
  },
  {
    id: "life-year-2017",
    year: 2017,
    photoIds: [
      "life-2017-01",
      "life-2017-02",
      "life-2017-03",
      "life-2017-04",
      "life-2017-05",
    ],
  },
  {
    id: "life-year-2018",
    year: 2018,
    photoIds: [
      "life-2018-01",
      "life-2018-02",
      "life-2018-03",
      "life-2018-04",
      "life-2018-05",
      "life-2018-06",
      "life-2018-07",
      "life-2018-08",
    ],
  },
  {
    id: "life-year-2019",
    year: 2019,
    photoIds: ["life-2019-01"],
  },
  {
    id: "life-year-2020",
    year: 2020,
    kicker: "Foreign Desk",
    headline: "August in Israel",
    photoIds: [
      "life-2020-01",
      "life-2020-02",
      "life-2020-03",
      "life-2020-04",
    ],
  },
  {
    id: "life-year-2023",
    year: 2023,
    kicker: "Dispatch",
    headline: "Haifa on Record",
    photoIds: ["life-2023-01"],
  },
  {
    id: "life-year-2024",
    year: 2024,
    kicker: "Travel",
    headline: "Tel Aviv, Norway",
    photoIds: ["life-2024-01", "life-2024-02", "life-2024-03"],
  },
  {
    id: "life-year-2025",
    year: 2025,
    kicker: "Late Edition",
    headline: "New Year's Eve",
    photoIds: ["life-2025-01"],
  },
];

export function buildLifeChapters(
  headlines: Record<string, string>,
  kickers: Record<string, string>,
  captions: Record<string, string> = {},
): LifeYearChapter[] {
  return chapterMeta.map((chapter) => ({
    id: chapter.id,
    year: chapter.year,
    yearLabel: chapter.yearLabel,
    kicker: kickers[chapter.id] ?? chapter.kicker,
    headline: headlines[chapter.id] ?? chapter.headline,
    photos: getLifePhotos(chapter.photoIds).map((photo) => ({
      ...photo,
      caption: captions[photo.id] ?? photo.caption,
    })),
  }));
}

export const lifeChapterIds = chapterMeta.map((chapter) => chapter.id);
