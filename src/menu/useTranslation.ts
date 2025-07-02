// useTranslation.ts
import { computed } from "vue";
import { translations } from "./translations";
import type { TranslationKey } from "./translationKeys";
import { useLanguageStore } from "../stores/languageStore";

// Export a function that provides the translation helper
export function useTranslation() {
  const languageStore = useLanguageStore();

  const currentLang = computed<"sv" | "en">(() => {
    return languageStore.language === "sv" ? "sv" : "en";
  });

  function t(key: TranslationKey): string {
    return translations[currentLang.value][key];
  }

  return { t };
}
