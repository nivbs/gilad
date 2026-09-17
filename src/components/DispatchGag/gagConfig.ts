import type { GagConfig } from "@/components/DispatchGag/types";
import type { DispatchGag } from "@/content/types";

export const gagConfig: Record<DispatchGag, GagConfig> = {
  grindr: {
    icon: "/celebrations/grindr.svg",
  },
  heart: {
    icon: "/celebrations/heart.svg",
  },
  airplane: {
    icon: "/celebrations/airplane.svg",
  },
  scooter: {
    icon: "/celebrations/scooter.svg",
  },
  key: {
    icon: "/celebrations/key.svg",
  },
  weed: {
    icon: "/celebrations/weed-leaf.svg",
    tmi: true,
  },
  flags: {
    icon: "/celebrations/flags.svg",
  },
  home: {
    icon: "/celebrations/home-pin.svg",
  },
  pride: {
    icon: "/celebrations/pride-flag.svg",
  },
};
