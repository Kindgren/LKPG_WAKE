<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div class="app-layout">
    <main class="main-content">
      <router-view />
    </main>

    <footer
      v-if="route.path !== '/booking' && route.path !== '/queue'"
      class="site-footer"
    >
      <p>
        2025 - Website powered by
        <a
          href="https://www.linkedin.com/in/gustav-kindgren"
          target="_blank"
          rel="noopener noreferrer"
          class="linkedin-link"
        >
          @Gustav Kindgren
        </a>
      </p>
    </footer>
  </div>
</template>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
}

.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #e0f7fa, #ffffff);
  margin: -2px;
  color: black;
}

.main-content {
  flex: 1;
}

.site-footer {
  padding: 1rem;
  background: var(--p-primary-900);
  text-align: center;
  color: white;
  font-size: 1.1rem;
}

.linkedin-link {
  color: var(--p-primary-300);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.linkedin-link:hover {
  color: var(--p-primary-200);
  text-decoration: underline;
}
</style>
