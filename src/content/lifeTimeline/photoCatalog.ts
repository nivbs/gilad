import type { LifePhoto } from "@/content/types";

type PhotoEntry = LifePhoto;

const catalog: PhotoEntry[] = [
  { id: "life-2017-01", src: "/life-timeline/2017/01.jpg", alt: "Gilad on the Alpe d'Huez podium", caption: "Fig. — Alpe d'Huez, 2017" },
  { id: "life-2017-02", src: "/life-timeline/2017/02.jpg", alt: "Gilad in the sea", caption: "Fig. — Mediterranean, 2017" },
  { id: "life-2017-03", src: "/life-timeline/2017/03.jpg", alt: "Gilad playing cards outdoors", caption: "Fig. — Home, 2017" },
  { id: "life-2017-04", src: "/life-timeline/2017/04.jpg", alt: "Gilad cycling outdoors", caption: "Fig. — Outdoors, 2017" },
  { id: "life-2017-05", src: "/life-timeline/2017/05.jpg", alt: "Gilad on an orange Trek bicycle", caption: "Fig. — Outdoors, 2017" },
  { id: "life-2018-01", src: "/life-timeline/2018/01.jpg", alt: "Gilad at the beach", caption: "Fig. — Beach, 2018" },
  { id: "life-2018-02", src: "/life-timeline/2018/02.jpg", alt: "Gilad at a gallery at night", caption: "Fig. — Tel Aviv, 2018" },
  { id: "life-2018-03", src: "/life-timeline/2018/03.jpg", alt: "Gilad cycling on a road", caption: "Fig. — Outdoors, 2018" },
  { id: "life-2018-04", src: "/life-timeline/2018/04.jpg", alt: "Gilad hugging a friend at the beach", caption: "Fig. — Beach, 2018" },
  { id: "life-2018-05", src: "/life-timeline/2018/05.jpg", alt: "Gilad posing playfully at night", caption: "Fig. — Tel Aviv, 2018" },
  { id: "life-2018-06", src: "/life-timeline/2018/06.jpg", alt: "Gilad on a sculptural bench", caption: "Fig. — Outdoors, 2018" },
  { id: "life-2018-07", src: "/life-timeline/2018/07.jpg", alt: "Gilad on a winner's podium", caption: "Fig. — Alpe d'Huez, 2018" },
  { id: "life-2018-08", src: "/life-timeline/2018/08.jpg", alt: "Gilad outdoors in summer", caption: "Fig. — Outdoors, 2018" },
  { id: "life-2019-01", src: "/life-timeline/2019/01.jpg", alt: "Gilad at the gym with family", caption: "Fig. — Gym, 2019" },
  { id: "life-2020-01", src: "/life-timeline/2020/01.jpg", alt: "Gilad at Changi Airport", caption: "Fig. — Changi Airport, 2020" },
  { id: "life-2020-02", src: "/life-timeline/2020/02.jpg", alt: "Gilad with family at home in Israel", caption: "Fig. — Israel, 2020" },
  { id: "life-2020-03", src: "/life-timeline/2020/03.jpg", alt: "Gilad in the Negev desert", caption: "Fig. — Negev, 2020" },
  { id: "life-2020-04", src: "/life-timeline/2020/04.jpg", alt: "Gilad floating in the Dead Sea", caption: "Fig. — Dead Sea, 2020" },
  { id: "life-2023-01", src: "/life-timeline/2023/01.jpg", alt: "Gilad in Haifa with the Baháʼí Gardens", caption: "Fig. — Haifa, 2023" },
  { id: "life-2024-01", src: "/life-timeline/2024/01.jpg", alt: "Gilad in the Netherlands", caption: "Fig. — Netherlands, 2024" },
  { id: "life-2024-02", src: "/life-timeline/2024/02.jpg", alt: "Gilad in Tel Aviv", caption: "Fig. — Tel Aviv, 2024" },
  { id: "life-2024-03", src: "/life-timeline/2024/03.jpg", alt: "Gilad on a bench in Norway", caption: "Fig. — Norway, 2024" },
  { id: "life-2024-04", src: "/life-timeline/2024/04.jpg", alt: "Gilad on a mountain in Norway", caption: "Fig. — Norway, 2024" },
  { id: "life-2025-01", src: "", alt: "Gilad on New Year's Eve", caption: "Fig. — New Year's Eve, 2025", placeholder: true },
];

export function getLifePhoto(id: string): LifePhoto {
  const entry = catalog.find((photo) => photo.id === id);
  if (!entry) {
    throw new Error(`Unknown life photo: ${id}`);
  }
  return entry;
}

export function getLifePhotos(ids: string[]): LifePhoto[] {
  return ids.map(getLifePhoto);
}
