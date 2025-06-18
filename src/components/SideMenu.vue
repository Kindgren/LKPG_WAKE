<script setup lang="ts">
import { computed } from 'vue'
import { useLanguageStore } from '../stores/languageStore' // adjust path to your actual store


const languageStore = useLanguageStore()


const props = defineProps<{
  visible: boolean
}>()

const emit = defineEmits(['update:visible'])

const modelValue = computed({
  get: () => props.visible,
  set: (value: boolean) => emit('update:visible', value)
})

const navigateTo = (path: string) => {
  window.location.href = path
}

// Define keys of translations for type safety
type TranslationKey = 'start' | 'queue' | 'shop' | 'about' | 'contact'

// Translation dictionary with strict typing
const translations: Record<'sv' | 'en', Record<TranslationKey, string>> = {
  sv: {
    start: 'Start',
    queue: 'Kö',
    shop: 'Shop',
    about: 'Om oss',
    contact: 'Kontakt'
  },
  en: {
    start: 'Home',
    queue: 'Queue',
    shop: 'Shop',
    about: 'About',
    contact: 'Contact'
  }
}

// Computed current language from store with fallback
const currentLang = computed<'sv' | 'en'>(() => {
  return languageStore.language === 'sv' ? 'sv' : 'en'
})

// Translation helper function, typed
function t(key: TranslationKey): string {
  return translations[currentLang.value][key]
}

</script>

<template>
  <Transition name="slide-fade">
  <div v-if="modelValue" class="custom-drawer-overlay" @click.self="modelValue = false">
      <div class="custom-drawer">
        <div class="drawer-header">
          <div class="drawer-title">
            <h2>LKPG WAKEPARK</h2>
            <Button icon="pi pi-times" text @click="modelValue = false" class="close-button" />
          </div>
        </div>
        <div class="drawer-content">
          <div class="custom-menu">
         <ul>
            <li @click="navigateTo('/home')">
              <i class="pi pi-home"></i>
              <span>{{ t('start') }}</span>
            </li>
            <li @click="navigateTo('/queue')">
              <i class="pi pi-clock"></i>
              <span>{{ t('queue') }}</span>
            </li>
            <li @click="navigateTo('/booking')">
              <i class="pi pi-shopping-cart"></i>
              <span>{{ t('shop') }}</span>
            </li>
            <li @click="navigateTo('/about')">
              <i class="pi pi-info-circle"></i>
              <span>{{ t('about') }}</span>
            </li>
            <li @click="navigateTo('/contact')">
              <i class="pi pi-envelope"></i>
              <span>{{ t('contact') }}</span>
            </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>




<style scoped>
@keyframes slideFadeIn {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.animated-drawer :deep(.p-drawer) {
  animation: slideFadeIn 1.4s ease forwards;
}

/* Custom menu styles */
.custom-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  color: white;
}

.custom-menu li {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;
  padding: 1rem;
  padding-bottom: 3rem;
  cursor: pointer;
  border-radius: var(--border-radius);
  transition: background-color 0.2s ease, transform 0.2s ease;
  color: var(--text-color);
}

.custom-menu li:hover {
  background-color: var(--surface-hover);
  transform: translateX(4px);
  color: var(--p-primary-color);
}

.custom-menu i {
  color: var(--p-primary-color);
}

.drawer-title {
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  color: var(--p-primary-color);
}

.drawer-content {
  border-radius: 4px;
  margin: 6px;
}


.slide-fade-enter-active {
  animation: slideFadeIn 0.4s ease forwards;
}

.slide-fade-leave-active {
  animation: slideFadeOut 0.3s ease forwards;
}

@keyframes slideFadeIn {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideFadeOut {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
}

.custom-drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 68vw;
  height: 100vh;
  background: #000; /* ← changed from rgba(0, 0, 0, 0.3) */
  z-index: 1000;
}

.custom-drawer {
    pointer-events: auto; /* Ensure clicks go through overlay properly */
  width: 70w;
  max-width: 400px;
  height: 100%;
  background-color: var(--surface-ground);
  position: absolute;
  left: 0;
  top: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.close-button {
  margin-left: 15px;

}



</style>