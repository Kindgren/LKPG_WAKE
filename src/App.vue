<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AppHeader from './components/Header.vue'
import AppDrawer from './components/SideMenu.vue'
import { useRoute } from 'vue-router'

const drawerVisible = ref(false)
const isMobile = ref(true)
const route = useRoute()

onMounted(() => {
  isMobile.value = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent)
  // isMobile.value = true;
})

</script>

<template>
  <div v-if="!isMobile" class="under-construction">
    <h1>🚧 Site Under Construction</h1>
    <p>This site is only available on mobile devices at the moment.</p>
  </div>

  <div v-else>
    <AppHeader @toggle-drawer="drawerVisible = true" />
    <AppDrawer v-model:visible="drawerVisible" />
    <main class="main-content">
      <router-view />
    </main>
  </div>
    <footer v-if="route.path !== '/booking'" class="site-footer">
  <p >© 2025 Gustav Kindgren.</p>
</footer>
</template>


<style>
.main-content {
  padding-top: 10px;
  
}

:root {
  color-scheme: light !important;
}

</style>
