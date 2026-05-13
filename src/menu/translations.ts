// translations.ts
import type { TranslationKey } from "./translationKeys.ts";

export const translations: Record<
  "sv" | "en",
  Record<TranslationKey, string>
> = {
  sv: {
    start: "Hem",
    about: "Om oss",
    contact: "Kontakt",
  },
  en: {
    start: "Home",
    about: "About",
    contact: "Contact",
  },
};
