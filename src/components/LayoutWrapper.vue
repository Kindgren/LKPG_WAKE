<script setup lang="ts">
import AppHeader from "./Header.vue";
import AppDrawer from "./OverlayMenu.vue";
// (Import Footer if needed)
const drawerOpen = false;
</script>

<template>
  <div>
    <AppHeader :drawer-open="drawerOpen" />
    <AppDrawer :visible="drawerOpen" />
    <main class="main-content">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>
