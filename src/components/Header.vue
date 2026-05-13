<script setup lang="ts">
import { computed, ref } from "vue";
import { useLanguageStore } from "../stores/languageStore";
import { useMediaQuery } from "@vueuse/core";
import { menuItems } from "../menu/menuData"; // Import the menu data
import Logo from "../assets/circleLogo.png";
import { useTranslation } from "../menu/useTranslation";
import { Toolbar } from "primevue";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();

const { t } = useTranslation();
const isMobile = useMediaQuery("(max-width: 808px)");

const openSettings = ref(false);

const languageStore = useLanguageStore();

const emit = defineEmits(["toggle-drawer"]);

const props = defineProps<{
  drawerOpen: boolean;
}>();

const currentLangDisplay = computed(() => {
  return currentLang.value === "sv"
    ? { flag: "🇸🇪", label: "SV" }
    : { flag: "🇬🇧", label: "EN" };
});

const setLanguage = (lang: "sv" | "en") => {
  // Update the store
  languageStore.setLanguage(lang);

  // Reconstruct the new path with the selected language
  const currentPathWithoutLang = route.fullPath.replace(/^\/(sv|en)/, "");
  router.push(`/${lang}${currentPathWithoutLang}`);

  openSettings.value = false;
};

const navigateTo = (path: string) => {
  if (path.startsWith("http")) {
    window.open(path, "_blank", "noopener");
    return;
  }
  const lang = languageStore.language || "sv";
  router.push(`/${lang}/${path.replace(/^\//, "")}`);
};

// Computed current language from store with fallback
const currentLang = computed<"sv" | "en">(() => {
  return languageStore.language === "sv" ? "sv" : "en";
});
</script>

<template>
  <Toolbar
    class="app-header"
  >
    <template #start>
      <div class="header-actions" v-if="isMobile">
        <div
          class="settings-wrapper"
        >
          <div class="hover-target" @click="openSettings = !openSettings">
            <span>
              {{ currentLangDisplay.flag }} {{ currentLangDisplay.label }}
              <i
                class="pi pi-chevron-down arrow-icon"
                :class="{ rotated: openSettings }"
              />
            </span>
          </div>

          <div
            class="settings-menu"
            v-if="openSettings"
          >
            <button class="lang-button" @click="setLanguage('sv')">
              🇸🇪 Svenska
            </button>
            <button class="lang-button" @click="setLanguage('en')">
              🇬🇧 English
            </button>
          </div>
        </div>
      </div>

      <img
        v-if="!isMobile"
        :src="Logo"
        alt="Logo"
        class="logo"
        @click="navigateTo('/home')"
      />
    </template>

    <template #center>
      <img
        v-if="isMobile"
        :src="Logo"
        alt="Logo"
        class="logo"
        @click="navigateTo('/home')"
      />

      <nav v-if="!isMobile" class="desktop-menu">
        <ul class="menu-list">
          <li
            v-for="item in menuItems"
            :key="item.key"
            @click="navigateTo(item.path)"
          >
            {{ t(item.key) }}
          </li>
        </ul>
      </nav>
    </template>

    <template #end>
      <div class="header-actions" v-if="!isMobile">
        <div
          class="settings-wrapper"
        >
          <div class="hover-target" @click="openSettings = !openSettings">
            <span>
              {{ currentLangDisplay.flag }} {{ currentLangDisplay.label }}
              <i
                class="pi pi-chevron-down arrow-icon"
                :class="{ rotated: openSettings }"
              />
            </span>
          </div>

          <div
            class="settings-menu"
            v-if="openSettings"
          >
            <button class="lang-button" @click="setLanguage('sv')">
              🇸🇪 Svenska
            </button>
            <button class="lang-button" @click="setLanguage('en')">
              🇬🇧 English
            </button>
          </div>
        </div>
      </div>
      <div class="header-actions" v-else></div>
      <i
        v-if="isMobile"
        :class="[
          'pi',
          props.drawerOpen ? 'pi-times' : 'pi-bars',
          'drawer-icon',
        ]"
        @click="emit('toggle-drawer')"
        role="button"
        tabindex="0"
      />
    </template>
  </Toolbar>
</template>

<style scoped>
.app-header {
  top: 0;
  padding: 0 4vw !important; /* Increased horizontal padding */
  margin: 0;
  width: 100%;
  height: 90px;
  background-color: #051c2c !important;
  border: none !important;
  color: white;
}

.logo {
  height: 60px;
  cursor: pointer;
}

.drawer-icon {
  font-size: 1.5rem; /* Make the icon bigger */
  color: var(--p-primary-color);
  cursor: pointer;
  padding: 1.5rem;
  border-radius: 6px;
  transition: background-color 0.2s ease;
  z-index: 10000;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
}

.settings-menu {
  position: absolute;
  background-color: var(--p-surface-500);
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  z-index: 10;
  width: 80px;
  margin-top: 0px;
  margin-left: 20px;
}

.lang-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.7rem;
  padding: 3px;
  text-align: left;
  color: white;
  width: 100%;
  transition: background-color 0.2s ease;
}

.lang-button:hover {
  background-color: var(--p-surface-700);
  color: white;
  border-radius: 4px;
}

.desktop-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.menu-list {
  list-style: none;
  display: flex;
  gap: clamp(1px, 4vw, 15rem);
  margin: 0;
  padding: 0;
}

.menu-list li {
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 800;
  transition: all 0.3s ease;
  color: #f8fafc;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.menu-list li:hover {
  color: #82ccdd;
  transform: translateY(-2px);
}

.hover-target {
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  padding: 6px 12px;
  color: white;
  display: inline-flex;
  align-items: center;
  font-size: 0.8rem;
  font-weight: bold;
}

.arrow-icon {
  transition: transform 0.2s ease;
  margin-left: 0.5rem;
}

.arrow-icon.rotated {
  transform: rotate(180deg);
}
</style>
