<script setup lang="ts">
import AppHeader from "./Header.vue";
import AppDrawer from "./OverlayMenu.vue";
import { ref } from "vue";
// (Import Footer if needed)
const drawerOpen = ref(false);
</script>

<template>
  <div>
    <AppHeader
      :drawer-open="drawerOpen"
      @toggle-drawer="drawerOpen = !drawerOpen"
    />
    <AppDrawer :visible="drawerOpen" />
    <main class="main-content">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>
