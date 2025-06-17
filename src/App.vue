<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from './components/Header.vue'
import AppDrawer from './components/SideMenu.vue'

const drawerVisible = ref(false)
</script>

<template>
  <AppHeader @toggle-drawer="drawerVisible = true" />
  <AppDrawer v-model:visible="drawerVisible" />

  <!-- Dynamic routing -->
  <main class="main-content">
    <router-view />
  </main>
</template>

<style scoped>
.main-content {
  padding-top: 20px;
}
</style>
