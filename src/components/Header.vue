<script setup lang="ts">
import { defineEmits } from 'vue'
import Toolbar from 'primevue/toolbar'
import Button from 'primevue/button'
import Logo from '../assets/circleLogo.png'
import { useLanguageStore } from '../stores/languageStore'

const emit = defineEmits(['toggle-drawer'])
const languageStore = useLanguageStore()


</script>

<template>
  <Toolbar class="app-header">
    <template #start>
  <i
    class="pi pi-bars drawer-icon"
    @click="emit('toggle-drawer')"
    role="button"
    tabindex="0"
  ></i>
    </template>

    <template #center>
      <h1 class="header-text"></h1>
    </template>

<template #end>
  <div class="flagg-container" @click="languageStore.toggleLanguage()">
       <div class = "flagpole"></div>
    <div class="flag-wrapper">
  
      <span class="flag-emoji">
        {{ languageStore.language === 'sv' ? '🇸🇪' : '🇬🇧' }}
      </span>
    </div>
  </div>
 </template>

  </Toolbar>
  <img :src="Logo" alt="Logo" class="logo" />
</template>

<style scoped>
.flag-wrapper {
  margin-left:-9px;
  margin-top: -9px;
}
.flagg-container{
  rotate: 50deg;
    cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.8rem;
  font-size: xx-large;
  margin-top:-30px;
}
.flagpole {
  width: 1px;
  height: 30px;
  background-color: white;
  margin-right: 8px;
  border-radius: 1px;
}
.app-header {
  top: 0;
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 80px;
}

.logo {
  height: 100px;
  right: 12%;
  top: 2px;
  position: absolute;
}

.drawer-icon {
  font-size: 1.5rem; /* Make the icon bigger */
  color: var(--p-primary-color);
  cursor: pointer;
  padding: 1.5rem;
  border-radius: 6px;
  transition: background-color 0.2s ease;
}
</style>
