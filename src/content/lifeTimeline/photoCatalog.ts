import type { LifePhoto } from "@/content/types";

type PhotoEntry = {
  id: string;
  src: string;
  alt: string;
  year: number;
  location?: string;
  caption?: string;
  placeholder?: boolean;
  objectFit?: "cover" | "contain";
};

function buildCaption({ year, location, caption }: PhotoEntry): string {
  return caption ?? location ?? String(year);
}

function toLifePhoto(entry: PhotoEntry): LifePhoto {
  return {
    id: entry.id,
    src: entry.src,
    alt: entry.alt,
    caption: buildCaption(entry),
    placeholder: entry.placeholder,
    objectFit: entry.objectFit,
  };
}

const catalog: PhotoEntry[] = [
  {
    id: "life-2001-01",
    src: "/life-timeline/2001/01.jpg",
    alt: "Newborn Gilad held by Sharon, his half-sister",
    year: 2001,
    caption: "Newborn Gilad in the arms of Sharon, his half-sister.",
    objectFit: "contain",
  },
  {
    id: "life-2001-02",
    src: "/life-timeline/2001/02.jpg",
    alt: "Gilad and Omri as babies lying side by side in a crib",
    year: 2001,
    caption: "Gilad and Omri sharing a crib.",
    objectFit: "contain",
  },
  {
    id: "life-2001-03",
    src: "/life-timeline/2001/03.jpg",
    alt: "Gilad and Omri asleep in a side-by-side pram",
    year: 2001,
    caption: "The twins asleep in the pram.",
  },
  {
    id: "life-2001-04",
    src: "/life-timeline/2001/04.jpg",
    alt: "Baby Gilad sitting in a bouncer",
    year: 2001,
    caption: "Baby Gilad in the bouncer.",
  },
  {
    id: "life-2002-01",
    src: "/life-timeline/2002/01.jpg",
    alt: "Gilad as a toddler close-up",
    year: 2002,
    caption: "One and a half, and already a biggy.",
    objectFit: "contain",
  },
  {
    id: "life-2002-02",
    src: "/life-timeline/2002/02.jpg",
    alt: "Gilad being fed in a high chair",
    year: 2002,
    caption: "Lunch in the high chair.",
  },
  {
    id: "life-2002-03",
    src: "/life-timeline/2002/03.jpg",
    alt: "Gilad and Omri standing together in a crib",
    year: 2002,
    caption: "Gilad and Omri were always next to each other.",
  },
  {
    id: "life-2003-01",
    src: "/life-timeline/2003/01.jpg",
    alt: "Gilad crying in day care with cotton in both ears",
    year: 2003,
    caption:
      "Almost two. Day care, both ears infected — cotton in both, and he did not like it.",
  },
  {
    id: "life-2004-01",
    src: "/life-timeline/2004/01.jpg",
    alt: "Gilad smiling on his third birthday wearing a flower crown",
    year: 2004,
    caption: "Gilad's third birthday. So cute.",
  },
  {
    id: "life-2004-02",
    src: "/life-timeline/2004/02.jpg",
    alt: "Gilad holding a snowball in winter",
    year: 2004,
    caption: "",
  },
  {
    id: "life-2004-03",
    src: "/life-timeline/2004/03.jpg",
    alt: "Gilad and Omri picking wildflowers in a field",
    year: 2004,
    caption: "Picking flowers with Omri.",
    objectFit: "contain",
  },
  {
    id: "life-2005-01",
    src: "/life-timeline/2005/01.jpg",
    alt: "Gilad and his brothers with their father Moti",
    year: 2005,
    caption: "Brothers with Abba Moti.",
  },
  {
    id: "life-2005-02",
    src: "/life-timeline/2005/02.jpg",
    alt: "Gilad and Omri smiling together as young boys",
    year: 2005,
    caption: "",
    objectFit: "contain",
  },
  {
    id: "life-2005-03",
    src: "/life-timeline/2005/03.jpg",
    alt: "Gilad outdoors on a grassy hillside",
    year: 2005,
    caption: "",
  },
  {
    id: "life-2005-04",
    src: "/life-timeline/2005/04.jpg",
    alt: "Gilad standing outdoors near palm trees",
    year: 2005,
    caption: "",
  },
  {
    id: "life-2005-05",
    src: "/life-timeline/2005/05.jpg",
    alt: "Gilad steering a small boat on a canal",
    year: 2005,
    caption: "",
    objectFit: "contain",
  },
  { id: "life-2017-01", src: "/life-timeline/2017/01.jpg", alt: "Gilad on the Alpe d'Huez podium", year: 2017 },
  { id: "life-2017-02", src: "/life-timeline/2017/02.jpg", alt: "Gilad in the sea", year: 2017 },
  { id: "life-2017-03", src: "/life-timeline/2017/03.jpg", alt: "Gilad playing cards outdoors", year: 2017 },
  { id: "life-2017-04", src: "/life-timeline/2017/04.jpg", alt: "Gilad cycling outdoors", year: 2017 },
  { id: "life-2017-05", src: "/life-timeline/2017/05.jpg", alt: "Gilad on an orange Trek bicycle", year: 2017 },
  { id: "life-2018-01", src: "/life-timeline/2018/01.jpg", alt: "Gilad at the beach", year: 2018 },
  { id: "life-2018-02", src: "/life-timeline/2018/02.jpg", alt: "Gilad at a gallery at night", year: 2018 },
  { id: "life-2018-03", src: "/life-timeline/2018/03.jpg", alt: "Gilad cycling on a road", year: 2018 },
  { id: "life-2018-04", src: "/life-timeline/2018/04.jpg", alt: "Gilad hugging a friend at the beach", year: 2018 },
  { id: "life-2018-05", src: "/life-timeline/2018/05.jpg", alt: "Gilad posing playfully at night", year: 2018 },
  { id: "life-2018-06", src: "/life-timeline/2018/06.jpg", alt: "Gilad on a sculptural bench", year: 2018 },
  { id: "life-2018-07", src: "/life-timeline/2018/07.jpg", alt: "Gilad on a winner's podium", year: 2018 },
  { id: "life-2018-08", src: "/life-timeline/2018/08.jpg", alt: "Gilad outdoors in summer", year: 2018 },
  { id: "life-2019-01", src: "/life-timeline/2019/01.jpg", alt: "Gilad at the gym with family", year: 2019 },
  { id: "life-2020-01", src: "/life-timeline/2020/01.jpg", alt: "Gilad at Changi Airport", year: 2020 },
  { id: "life-2020-02", src: "/life-timeline/2020/02.jpg", alt: "Gilad with family at home in Israel", year: 2020 },
  { id: "life-2020-03", src: "/life-timeline/2020/03.jpg", alt: "Gilad in the Negev desert", year: 2020 },
  { id: "life-2020-04", src: "/life-timeline/2020/04.jpg", alt: "Gilad floating in the Dead Sea", year: 2020 },
  { id: "life-2023-01", src: "/life-timeline/2023/01.jpg", alt: "Gilad in Haifa with the Baháʼí Gardens", year: 2023, location: "Haifa" },
  { id: "life-2024-01", src: "/life-timeline/2024/01.jpg", alt: "Gilad in Tel Aviv", year: 2024, location: "Tel Aviv" },
  { id: "life-2024-02", src: "/life-timeline/2024/02.jpg", alt: "Gilad on a bench in Norway", year: 2024, location: "Norway" },
  { id: "life-2024-03", src: "/life-timeline/2024/03.jpg", alt: "Gilad on a mountain in Norway", year: 2024, location: "Norway" },
  { id: "life-2025-01", src: "/life-timeline/2025/01.jpg", alt: "Gilad with family at the gym on New Year's Eve", year: 2025 },
];

export function getLifePhoto(id: string): LifePhoto {
  const entry = catalog.find((photo) => photo.id === id);
  if (!entry) {
    throw new Error(`Unknown life photo: ${id}`);
  }
  return toLifePhoto(entry);
}

export function getLifePhotos(ids: string[]): LifePhoto[] {
  return ids.map(getLifePhoto);
}
