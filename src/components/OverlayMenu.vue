<script setup lang="ts">
import { computed } from "vue";
import { menuItems } from "../menu/menuData"; // Import the menu data
import { useLanguageStore } from "../stores/languageStore";
import { useTranslation } from "../menu/useTranslation";
import { useRouter } from "vue-router";
const { t } = useTranslation();
const languageStore = useLanguageStore();
const props = defineProps<{
  visible: boolean;
}>();

const emit = defineEmits(["update:visible"]);
const router = useRouter();
const modelValue = computed({
  get: () => props.visible,
  set: (value: boolean) => emit("update:visible", value),
});

const navigateTo = (path: string) => {
  emit("update:visible");
  const lang = languageStore.language; // Get current language from store
  router.push(`/${lang}${path}`);
};
</script>

<template>
  <Transition name="fade">
    <div
      v-if="modelValue"
      class="overlay-menu"
      @click.self="modelValue = false"
    >
      <div class="menu-content">
        <ul class="menu-links">
          <li
            v-for="item in menuItems"
            :key="item.key"
            @click="navigateTo(item.path)"
            class="menu-item"
          >
            <i :class="item.icon"></i> <span>{{ t(item.key) }}</span>
          </li>
        </ul>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.overlay-menu {
  position: fixed;
  inset: 0;
  background-color: #000;
  opacity: 80%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.menu-header {
  position: absolute;
  top: 0;
  right: 0;
  padding: 1.4rem;
  display: flex;
  justify-content: flex-end;
  width: calc(100% - 2rem);
  align-items: center;
  color: var(--p-primary-color);
}

.pi {
  font-size: 2rem;
}

.menu-links {
  list-style: none;
  padding: 0;
  font-weight: bolder;
}

.menu-links li {
  font-size: 1.5rem;
  margin: 2rem 0;
  cursor: pointer;
  transition: color 0.3s ease;
  display: flex;
  gap: 0.8rem;
  color: var(--text-color);
}

.menu-links li:hover {
  color: var(--p-primary-color);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
