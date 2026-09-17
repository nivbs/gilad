import { buildLifeChapters } from "@/content/lifeTimeline/chapters";

const headlines: Record<string, string> = {
  "life-year-2017": "Early Editions",
  "life-year-2018": "Travels & Mischief",
  "life-year-2019": "A Quieter Year",
  "life-year-2020": "August in Israel",
  "life-year-2023": "Haifa on Record",
  "life-year-2024": "Netherlands, Tel Aviv, Norway",
  "life-year-2025": "New Year's Eve",
};

const kickers: Record<string, string> = {
  "life-year-2017": "Archive",
  "life-year-2018": "Archive",
  "life-year-2019": "Archive",
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
