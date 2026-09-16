import type { GagConfig } from "@/components/DispatchGag/types";
import type { DispatchGag } from "@/content/types";

export const gagConfig: Record<DispatchGag, GagConfig> = {
  grindr: {
    icon: "/celebrations/grindr.svg",
    caption: "Fig. — classified",
  },
  heart: {
    icon: "/celebrations/heart.svg",
    caption: "Fig. — tearful",
  },
  airplane: {
    icon: "/celebrations/airplane.svg",
    caption: "Fig. — cover story",
  },
  scooter: {
    icon: "/celebrations/scooter.svg",
    caption: "Fig. — field report",
  },
  key: {
    icon: "/celebrations/key.svg",
    caption: "Fig. — classified",
  },
  weed: {
    icon: "/celebrations/weed-leaf.svg",
    caption: "Fig. — foreign desk",
  },
  flags: {
    icon: "/celebrations/flags.svg",
    caption: "Fig. — travel log",
  },
  home: {
    icon: "/celebrations/home-pin.svg",
    caption: "Fig. — address",
  },
  pride: {
    icon: "/celebrations/pride-flag.svg",
    caption: "Fig. — official",
  },
};
