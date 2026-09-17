import type { LifePhoto } from "@/content/types";

type PhotoEntry = {
  id: string;
  src: string;
  alt: string;
  location?: string;
  tmi?: boolean;
};

function buildCaption({ location }: PhotoEntry): string {
  return location ?? "";
}

function toLifePhoto(entry: PhotoEntry): LifePhoto {
  return {
    id: entry.id,
    src: entry.src,
    alt: entry.alt,
    caption: buildCaption(entry),
    tmi: entry.tmi,
  };
}

const catalog: PhotoEntry[] = [
  { id: "love-barcelona-01", src: "/love-timeline/barcelona/01.jpg", alt: "Gilad and Niv in Barcelona", location: "Barcelona" },
  { id: "love-barcelona-02", src: "/love-timeline/barcelona/02.jpg", alt: "Gilad and Niv on a Barcelona street", location: "Barcelona" },
  { id: "love-barcelona-03", src: "/love-timeline/barcelona/03.jpg", alt: "Gilad and Niv at a Barcelona club", location: "Barcelona" },
  { id: "love-sublets-01", src: "/love-timeline/sublets/01.jpg", alt: "Gilad and Niv in a Tel Aviv sublet", location: "Tel Aviv" },
  { id: "love-sublets-02", src: "/love-timeline/sublets/02.jpg", alt: "Gilad and Niv together in Tel Aviv", location: "Tel Aviv" },
  { id: "love-sublets-03", src: "/love-timeline/sublets/03.jpg", alt: "Gilad and Niv in their Tel Aviv apartment", location: "Tel Aviv" },
  { id: "love-sublets-04", src: "/love-timeline/sublets/04.jpg", alt: "Gilad and Niv at home in Tel Aviv", location: "Tel Aviv" },
  { id: "love-sublets-05", src: "/love-timeline/sublets/05.jpg", alt: "Gilad and Niv sharing a moment in Tel Aviv", location: "Tel Aviv" },
  { id: "love-europe-01", src: "/love-timeline/europe/01.jpg", alt: "Gilad and Niv on their European tour" },
  { id: "love-europe-02", src: "/love-timeline/europe/02.jpg", alt: "Gilad and Niv traveling in Europe" },
  { id: "love-europe-03", src: "/love-timeline/europe/03.jpg", alt: "Gilad and Niv during their month-long European trip" },
  { id: "love-europe-04", src: "/love-timeline/europe/04.jpg", alt: "Gilad and Niv on the European tour" },
  { id: "love-home-01", src: "/love-timeline/home/01.jpg", alt: "Gilad and Niv at Ben Gurion 50", location: "Tel Aviv" },
  { id: "love-home-02", src: "/love-timeline/home/02.jpg", alt: "Gilad and Niv in their new apartment", location: "Tel Aviv" },
  { id: "love-home-03", src: "/love-timeline/home/03.jpg", alt: "Gilad and Niv at home together", location: "Tel Aviv" },
  { id: "love-home-04", src: "/love-timeline/home/04.jpg", alt: "Gilad and Niv in their Tel Aviv home", location: "Tel Aviv" },
  { id: "love-home-05", src: "/love-timeline/home/05.jpg", alt: "Gilad and Niv living together in Tel Aviv", location: "Tel Aviv" },
  { id: "love-home-06", src: "/love-timeline/home/06.jpg", alt: "Gilad and Niv at Ben Gurion 50 apartment", location: "Tel Aviv" },
  { id: "love-closet-01", src: "/love-timeline/closet/01.jpg", alt: "Gilad and Niv after coming out", location: "Tel Aviv" },
  { id: "love-closet-02", src: "/love-timeline/closet/02.jpg", alt: "Gilad and Niv celebrating coming out of the closet", location: "Tel Aviv", tmi: true },
  { id: "love-closet-03", src: "/love-timeline/closet/03.jpg", alt: "Gilad and Niv together after going public", location: "Tel Aviv" },
  { id: "love-rome-01", src: "/love-timeline/rome/01.jpg", alt: "Gilad and Niv in Rome", location: "Rome" },
  { id: "love-rome-02", src: "/love-timeline/rome/02.jpg", alt: "Gilad and Niv exploring Rome", location: "Rome" },
  { id: "love-rome-03", src: "/love-timeline/rome/03.jpg", alt: "Gilad and Niv in Rome after coming out", location: "Rome" },
  { id: "love-rome-04", src: "/love-timeline/rome/04.jpg", alt: "Gilad and Niv in Napoli", location: "Rome" },
  { id: "love-rome-05", src: "/love-timeline/rome/05.jpg", alt: "Gilad and Niv on their Rome trip", location: "Rome" },
  { id: "love-rome-06", src: "/love-timeline/rome/06.jpg", alt: "Gilad and Niv celebrating in Italy", location: "Rome" },
  { id: "love-correspondence-01", src: "/love-timeline/correspondence/01.jpg", alt: "WhatsApp video call screenshot" },
  { id: "love-correspondence-02", src: "/love-timeline/correspondence/02.jpg", alt: "WhatsApp video call screenshot" },
  { id: "love-correspondence-03", src: "/love-timeline/correspondence/03.jpg", alt: "WhatsApp video call screenshot" },
  { id: "love-correspondence-04", src: "/love-timeline/correspondence/04.jpg", alt: "WhatsApp video call screenshot" },
  { id: "love-correspondence-05", src: "/love-timeline/correspondence/05.jpg", alt: "WhatsApp video call screenshot" },
  { id: "love-correspondence-06", src: "/love-timeline/correspondence/06.jpg", alt: "WhatsApp video call screenshot" },
  { id: "love-correspondence-07", src: "/love-timeline/correspondence/07.jpg", alt: "WhatsApp video call screenshot" },
  { id: "love-correspondence-08", src: "/love-timeline/correspondence/08.jpg", alt: "WhatsApp video call screenshot" },
  { id: "love-correspondence-09", src: "/love-timeline/correspondence/09.jpg", alt: "WhatsApp video call screenshot" },
  { id: "love-correspondence-10", src: "/love-timeline/correspondence/10.jpg", alt: "WhatsApp video call screenshot" },
  { id: "love-correspondence-11", src: "/love-timeline/correspondence/11.jpg", alt: "WhatsApp video call screenshot" },
  { id: "love-correspondence-12", src: "/love-timeline/correspondence/12.jpg", alt: "WhatsApp video call screenshot" },
];

export function getLovePhoto(id: string): LifePhoto {
  const entry = catalog.find((photo) => photo.id === id);
  if (!entry) {
    throw new Error(`Unknown love photo: ${id}`);
  }
  return toLifePhoto(entry);
}

export function getLovePhotos(ids: string[]): LifePhoto[] {
  return ids.map(getLovePhoto);
}

export const correspondencePhotoIds = catalog
  .filter((entry) => entry.id.startsWith("love-correspondence-"))
  .map((entry) => entry.id);

export const dispatchPhotoMap: Record<string, string[]> = {
  "dispatch-late-feb-2025": ["love-barcelona-01", "love-barcelona-02", "love-barcelona-03"],
  "dispatch-jun-aug-2025": [
    "love-sublets-01",
    "love-sublets-02",
    "love-sublets-03",
    "love-sublets-04",
    "love-sublets-05",
  ],
  "dispatch-dec-2025-jan-2026": [
    "love-europe-01",
    "love-europe-02",
    "love-europe-03",
    "love-europe-04",
  ],
  "dispatch-jun-2026": [
    "love-home-01",
    "love-home-02",
    "love-home-03",
    "love-home-04",
    "love-home-05",
    "love-home-06",
  ],
  "dispatch-jun-12-2026": ["love-closet-01", "love-closet-02", "love-closet-03"],
  "dispatch-rome-2026": [
    "love-rome-01",
    "love-rome-02",
    "love-rome-03",
    "love-rome-04",
    "love-rome-05",
    "love-rome-06",
  ],
};
