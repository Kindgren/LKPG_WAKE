<script setup lang="ts">
import { computed, ref } from "vue";
import { useLanguageStore } from "../stores/languageStore";
import { useMediaQuery } from "@vueuse/core";
import { menuItems } from "../menu/menuData"; // Import the menu data
import MenuItem from "../menu/MenuItem.vue";
import Logo from "../assets/circleLogo.png";
import { useTranslation } from "../menu/useTranslation";
import { Toolbar } from "primevue";
const isHeaderCollapsed = ref(false);

const toggleHeader = () => {
  // Only allow toggle on mobile
  if (isMobile.value) {
    isHeaderCollapsed.value = !isHeaderCollapsed.value;
  }
};

const { t } = useTranslation();
const isMobile = useMediaQuery("(max-width: 808px)");

const openSettings = ref(false);
const languageStore = useLanguageStore();

const emit = defineEmits(["toggle-drawer"]);

const toggleLangSettings = () => {
  openSettings.value = !openSettings;
};

const props = defineProps<{
  drawerOpen: boolean;
}>();

const currentLangDisplay = computed(() => {
  return currentLang.value === "sv"
    ? { flag: "🇸🇪", label: "SV" }
    : { flag: "🇬🇧", label: "EN" };
});

const setLanguage = (lang: "sv" | "en") => {
  toggleLangSettings();
  languageStore.setLanguage(lang);
  openSettings.value = false; // Close after selection
};

const navigateTo = (path: string) => {
  window.location.href = path;
};

// Computed current language from store with fallback
const currentLang = computed<"sv" | "en">(() => {
  return languageStore.language === "sv" ? "sv" : "en";
});
</script>

<template>
  <Toolbar
    :class="['app-header', { collapsed: isHeaderCollapsed && isMobile }]"
  >
    <template #start>
      <div class="header-actions" v-if="isMobile && !isHeaderCollapsed">
        <div
          class="settings-wrapper"
          @mouseenter="openSettings = true"
          @mouseleave="openSettings = false"
        >
          <div class="hover-target" @click="toggleLangSettings">
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
            @mouseleave="toggleLangSettings"
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

      <button
        v-if="isMobile"
        :class="['collapse-btn', { collapsed: isHeaderCollapsed }]"
        @click="toggleHeader"
        aria-label="Toggle Header"
      >
        <i
          :class="isHeaderCollapsed ? 'pi pi-chevron-down' : 'pi pi-chevron-up'"
        />
      </button>
    </template>

    <template #center>
      <img
        v-if="isMobile && !isHeaderCollapsed"
        :src="Logo"
        alt="Logo"
        class="logo"
        @click="navigateTo('/home')"
      />

      <nav v-if="!isMobile" class="desktop-menu">
        <ul class="menu-list">
          <!-- Loop through the menu items -->
          <MenuItem
            v-for="item in menuItems"
            :key="item.key"
            :label="t(item.key)"
            :path="item.path"
          />
        </ul>
      </nav>
    </template>

    <template #end>
      <div class="header-actions" v-if="!isMobile">
        <div
          class="settings-wrapper"
          @mouseenter="openSettings = true"
          @mouseleave="openSettings = false"
        >
          <div class="hover-target" @click="toggleLangSettings">
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
            @mouseleave="toggleLangSettings"
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
        v-if="isMobile && !isHeaderCollapsed"
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
  height: 160px;
  transition: height 0.3s ease;
  overflow: visible;
}

.app-header.collapsed {
  height: 0px;
}

.collapse-btn {
  background: none;
  border: none;
  color: black;
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  top: 115px;
  left: calc(51% + 5px);
}
.collapse-btn.collapsed {
  top: 0;
  color: black;
}
.hover-target {
  cursor: pointer;
  background-color: var(--p-surface-700);
  border-radius: 4px;
  padding: 5px;
  margin-left: 10px;
  margin-right: clamp(2px, 3vw, 300px);
  display: inline-block;
}

.lang-label {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  z-index: 20000;
  overflow: visible;
}

.arrow-icon {
  transition: transform 0.2s ease;
  font-size: 0.7rem;
}

/* Rotate the arrow on hover of the wrapper */
.arrow-icon.rotated {
  transform: rotate(180deg);
}

.app-header {
  top: 0;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 120px;
}

.logo {
  height: 100px;
  margin-left: 5vw;
  cursor: pointer;
}

.drawer-icon {
  font-size: 1.5rem; /* Make the icon bigger */
  color: var(--p-primary-color);
  cursor: pointer;
  padding: 1.5rem;
  border-radius: 6px;
  transition: background-color 0.2s ease;
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
  width: 130px;
  margin-top: 0px;
}

.lang-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 4px;
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
  font-size: 1.4rem;
  font-weight: bold;
  transition: color 0.3s ease;
  color: var(--text-color);
}

.menu-list li:hover {
  color: var(--p-primary-color);
}
</style>
