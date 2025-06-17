<script setup lang="ts">
import { computed } from 'vue'
import Drawer from 'primevue/drawer'
import Menu from 'primevue/menu'

const props = defineProps<{
  visible: boolean
}>()

const emit = defineEmits(['update:visible'])

const modelValue = computed({
  get: () => props.visible,
  set: (value: boolean) => emit('update:visible', value)
})

const menuItems = [
  { label: 'Start', icon: 'pi pi-home', command: () => (window.location.href = '/home') },
  { label: 'Boka', icon: 'pi pi-calendar',  command: () => (window.location.href = '/booking') },
  { label: 'Om oss', icon: 'pi pi-info-circle' },
  { label: 'Kontakt', icon: 'pi pi-envelope' },
]
</script>

<template>
<Drawer v-model:visible="modelValue" position="left" modal style="width: 80vw;">
  <template #container>
    <div class="drawer-header">
      <div class="drawer-title"> <h2>LKPG WAKE</h2>
      <Button icon="pi pi-times" text @click="modelValue = false" class="close-button" />
      </div>
    </div>

    <div class="drawer-content">
      <Menu style="margin:2%" :model="menuItems" />
    </div>
  </template>
</Drawer>

</template>

<style scoped>
.drawer-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  padding: 15px;
}
</style>