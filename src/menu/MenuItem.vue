<template>
  <li @click="navigateTo(path)">{{ label }}</li>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  label: string;
  path: string;
}>();

const navigateTo = (path: string) => {
  window.location.href = path;
};
</script>
