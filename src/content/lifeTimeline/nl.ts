import { buildLifeChapters } from "@/content/lifeTimeline/chapters";

const headlines: Record<string, string> = {
  "life-year-2017": "Vroege edities",
  "life-year-2018": "Reizen & streken",
  "life-year-2019": "Een rustiger jaar",
  "life-year-2020": "Augustus in Israël",
  "life-year-2023": "Haifa in beeld",
  "life-year-2024": "Nederland, Tel Aviv, Noorwegen",
  "life-year-2025": "Oudejaarsavond",
};

const kickers: Record<string, string> = {
  "life-year-2017": "Archief",
  "life-year-2018": "Archief",
  "life-year-2019": "Archief",
  "life-year-2020": "Buitenland",
  "life-year-2023": "Bericht",
  "life-year-2024": "Reizen",
  "life-year-2025": "Late editie",
};

export const nlLifeTimeline = {
  kicker: "Archief",
  headline: "De Levenskroniek",
  dek:
    "Een fotografisch overzicht van Gilads jaren voordat de kop veranderde — familie, reizen, sport en de gewone dagen die het buitengewone mogelijk maakten.",
  chapters: buildLifeChapters(headlines, kickers),
};
