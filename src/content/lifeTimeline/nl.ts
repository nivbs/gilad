import { buildLifeChapters } from "@/content/lifeTimeline/chapters";

const headlines: Record<string, string> = {
  "life-year-2001": "Babyjaar",
  "life-year-2002": "Eén jaar",
  "life-year-2003": "Twee jaar",
  "life-year-2004": "Drie jaar",
  "life-year-2005": "Jeugd",
  "life-year-2020": "Augustus in Israël",
  "life-year-2023": "Haifa op papier",
  "life-year-2024": "Tel Aviv, Noorwegen",
  "life-year-2025": "Oudejaarsavond",
};

const kickers: Record<string, string> = {
  "life-year-2001": "Jeugd",
  "life-year-2002": "Jeugd",
  "life-year-2003": "Jeugd",
  "life-year-2004": "Jeugd",
  "life-year-2005": "Jeugd",
  "life-year-2020": "Buitenland",
  "life-year-2023": "Bericht",
  "life-year-2024": "Reizen",
  "life-year-2025": "Late editie",
};

const captions: Record<string, string> = {
  "life-2001-01": "Pasgeboren Gilad in de armen van een oudere zus.",
  "life-2001-02": "Gilad en Omri delen een wieg.",
  "life-2001-03": "De tweeling slaapt in de kinderwagen.",
  "life-2001-04": "Baby Gilad in de wipstoel.",
  "life-2002-01": "Anderhalf, en al een flinke jongen.",
  "life-2002-02": "Lunch in de kinderstoel.",
  "life-2002-03": "Gilad en Omri waren altijd naast elkaar.",
  "life-2003-01":
    "Bijna twee. In de crèche, beide oren geïnfecteerd — watten in beide, en dat vond hij niks.",
  "life-2004-01": "Gilads derde verjaardag. Zo schattig.",
  "life-2004-02": "Eerste sneeuw.",
  "life-2004-03": "Bloemen plukken met Omri.",
  "life-2005-01": "Broers met Abba Moti.",
  "life-2005-02": "Met Omri.",
  "life-2005-03": "Op de heuvel.",
  "life-2005-04": "Onder de palmen.",
  "life-2005-05": "Al aan het roer.",
};

export const nlLifeTimeline = {
  kicker: "Archief",
  headline: "De Levenskroniek",
  dek:
    "Een fotografisch overzicht van Gilads jaren voordat de kop veranderde — familie, reizen, sport en de gewone dagen die het buitengewone mogelijk maakten.",
  chapters: buildLifeChapters(headlines, kickers, captions),
};
