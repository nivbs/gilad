import { buildLifeChapters } from "@/content/lifeTimeline/chapters";

const headlines: Record<string, string> = {
  "life-year-2001": "Infant Year",
  "life-year-2002": "Age One",
  "life-year-2003": "Age Two",
  "life-year-2004": "Age Three",
  "life-year-2005": "Childhood",
  "life-year-2020": "August in Israel",
  "life-year-2023": "Haifa on Record",
  "life-year-2024": "Tel Aviv, Norway",
  "life-year-2025": "New Year's Eve",
};

const kickers: Record<string, string> = {
  "life-year-2001": "Childhood",
  "life-year-2002": "Childhood",
  "life-year-2003": "Childhood",
  "life-year-2004": "Childhood",
  "life-year-2005": "Childhood",
  "life-year-2020": "Foreign Desk",
  "life-year-2023": "Dispatch",
  "life-year-2024": "Travel",
  "life-year-2025": "Late Edition",
};

export const enLifeTimeline = {
  kicker: "Archive",
  headline: "The Life Chronicle",
  dek:
    "A photographic record of Gilad's years before the headline changed — family, travel, sport, and the ordinary days that made the extraordinary possible.",
  chapters: buildLifeChapters(headlines, kickers),
};
