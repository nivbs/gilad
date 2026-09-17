import type { LifePhoto } from "@/content/types";

type PhotoEntry = {
  id: string;
  src: string;
  alt: string;
  year: number;
  location?: string;
  placeholder?: boolean;
};

function buildCaption({ year, location }: PhotoEntry): string {
  return location ? `Fig. — ${location}, ${year}` : `Fig. — ${year}`;
}

function toLifePhoto(entry: PhotoEntry): LifePhoto {
  return {
    id: entry.id,
    src: entry.src,
    alt: entry.alt,
    caption: buildCaption(entry),
    placeholder: entry.placeholder,
  };
}

const catalog: PhotoEntry[] = [
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
  { id: "life-2024-01", src: "/life-timeline/2024/01.jpg", alt: "Gilad in the Netherlands", year: 2024, location: "Netherlands" },
  { id: "life-2024-02", src: "/life-timeline/2024/02.jpg", alt: "Gilad in Tel Aviv", year: 2024, location: "Tel Aviv" },
  { id: "life-2024-03", src: "/life-timeline/2024/03.jpg", alt: "Gilad on a bench in Norway", year: 2024, location: "Norway" },
  { id: "life-2024-04", src: "/life-timeline/2024/04.jpg", alt: "Gilad on a mountain in Norway", year: 2024, location: "Norway" },
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
