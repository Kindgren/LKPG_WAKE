<script setup>
import { useDeviceStore } from "../stores/useDeviceStore";

const deviceStore = useDeviceStore();
const isMobile = deviceStore.isMobile;
const openInNewWindow = () => {
  window.open("https://app.wakeque.com/lkpg-wake-park", "_blank", "noopener");
};
</script>

<template>
  <div class="iframe-wrapper">
    <iframe
      src="https://app.wakeque.com/lkpg-wake-park"
      width="100%"
      height="100%"
      frameborder="0"
      style="border: none"
      title="Boka LKPG Wake Park"
    ></iframe>
  </div>

  <div class="button-container" v-if="isMobile">
    <Button
      label="Öppna shoppen i nytt fönster"
      icon="pi pi-external-link"
      class="p-button-success mb-3"
      @click="openInNewWindow"
    />
  </div>
</template>

<style scoped>
.button-container {
  margin: 0 auto;
  padding: 10px;
  text-align: center; /* This centers inline/inline-block children */
}
.booking-container {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0rem 0rem;
  text-align: center;
  background-color: white;
  border-radius: 4px;
}

.booking-title {
  font-size: 2.25rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: #111827;
}

.booking-description {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  color: #4b5563;
}

.iframe-wrapper {
  margin-top: 22px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden; /* hides overflow outside container */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  height: 85vh; /* 70% of viewport height */
}
</style>
