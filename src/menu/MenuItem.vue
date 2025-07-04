<template>
  <li @click="navigateTo(path)">{{ label }}</li>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useRoute, useRouter } from "vue-router";

defineProps<{
  label: string;
  path: string; // e.g. "booking", "contact", etc.
}>();

const router = useRouter();
const route = useRoute();

const navigateTo = (path: string) => {
  const lang = route.params.lang || "sv";
  router.push(`/${lang}/${path.replace(/^\//, "")}`);
};
</script>
