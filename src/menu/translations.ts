// translations.ts
import type { TranslationKey } from "./translationKeys.ts";

export const translations: Record<
  "sv" | "en",
  Record<TranslationKey, string>
> = {
  sv: {
    start: "Hem",
    queue: "Kö",
    shop: "Boka & Köp Pass",
    about: "Om oss",
    contact: "Kontakt",
  },
  en: {
    start: "Home",
    queue: "Queue",
    shop: "Book & Buy Pass",
    about: "About",
    contact: "Contact",
  },
};
