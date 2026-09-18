import { buildLifeChapters } from "@/content/lifeTimeline/chapters";

const headlines: Record<string, string> = {
  "life-year-2001": "שנת התינוקות",
  "life-year-2002": "גיל אחד",
  "life-year-2003": "גיל שניים",
  "life-year-2004": "גיל שלוש",
  "life-year-2005": "ילדות",
  "life-year-2020": "אוגוסט בישראל",
  "life-year-2023": "חיפה בדפוס",
  "life-year-2024": "תל אביב, נורבגיה",
  "life-year-2025": "סילבסטר",
};

const kickers: Record<string, string> = {
  "life-year-2001": "ילדות",
  "life-year-2002": "ילדות",
  "life-year-2003": "ילדות",
  "life-year-2004": "ילדות",
  "life-year-2005": "ילדות",
  "life-year-2020": "מדור חוץ",
  "life-year-2023": "דיווח",
  "life-year-2024": "מסע",
  "life-year-2025": "מהדורה מאוחרת",
};

const captions: Record<string, string> = {
  "life-2001-01": "גלעד היונק בזרועותיה של שרון, אחותו למחצה.",
  "life-2001-02": "גלעד ועומרי חולקים עריסה.",
  "life-2001-03": "התאומים ישנים בעגלה.",
  "life-2001-04": "גלעד התינוק בנדנדה.",
  "life-2002-01": "גיל וחצי, וכבר היה ממש גדול.",
  "life-2002-02": "ארוחת צהריים בכיסא גבוה.",
  "life-2002-03": "גלעד ועומרי תמיד היו ליד אחד השני.",
  "life-2003-01":
    "כמעט בן שנתיים. בגן, שתי האוזניים היו מדורבנות — צמר גפן בשתיהן, והוא לא אהב את זה.",
  "life-2004-01": "יום ההולדת השלישי של גלעד. כל כך חמוד.",
  "life-2004-03": "אוספים פרחים עם עומרי.",
  "life-2005-01": "האחים עם אבא מוטי.",
};

export const heLifeTimeline = {
  kicker: "ארכיון",
  headline: "כרוניקת החיים",
  dek:
    "תיעוד צילומי של שנות גלעד לפני שהכותרת השתנתה — משפחה, טיולים, ספורט, והימים הרגילים שהפכו את יוצא הדופן לאפשרי.",
  chapters: buildLifeChapters(headlines, kickers, captions),
};
