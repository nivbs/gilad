import { buildLifeChapters } from "@/content/lifeTimeline/chapters";

const headlines: Record<string, string> = {
  "life-year-2020": "אוגוסט בישראל",
  "life-year-2023": "חיפה בדפוס",
  "life-year-2024": "הולנד, תל אביב, נורבגיה",
  "life-year-2025": "ערב ראש השנה",
};

const kickers: Record<string, string> = {
  "life-year-2020": "מדור חוץ",
  "life-year-2023": "דיווח",
  "life-year-2024": "מסע",
  "life-year-2025": "מהדורה מאוחרת",
};

export const heLifeTimeline = {
  kicker: "ארכיון",
  headline: "כרוניקת החיים",
  dek:
    "תיעוד צילומי של שנות גלעד לפני שהכותרת השתנתה — משפחה, טיולים, ספורט, והימים הרגילים שהפכו את היוצרת לאפשרית.",
  chapters: buildLifeChapters(headlines, kickers),
};
