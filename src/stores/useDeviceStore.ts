// stores/useDeviceStore.ts
import { defineStore } from "pinia";
import { ref } from "vue";

export const useDeviceStore = defineStore("device", () => {
  const isMobile = ref(false);

  function detectDevice() {
    isMobile.value =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(
        navigator.userAgent
      );
  }

  return {
    isMobile,
    detectDevice,
  };
});
