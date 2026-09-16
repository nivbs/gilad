import type { Edition, Locale } from "../types";
import { enEdition } from "./en";
import { heEdition } from "./he";
import { nlEdition } from "./nl";

const editions: Record<Locale, Edition> = {
  en: enEdition,
  he: heEdition,
  nl: nlEdition,
};

export function getEdition(locale: Locale): Edition {
  return editions[locale];
}

export { enEdition, heEdition, nlEdition };
