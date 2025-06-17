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
  { label: 'Shop', icon: 'pi pi-calendar',  command: () => (window.location.href = '/booking') },
  { label: 'Om oss', icon: 'pi pi-info-circle', command: () => (window.location.href ='/about') },
  { label: 'Kontakt', icon: 'pi pi-envelope', command: () => (window.location.href = 'contact') },
]
</script>

<template>
<Drawer v-model:visible="modelValue" position="left" modal style="width: 80vw;">
  <template #container>
    <div class="drawer-header">
      <div class="drawer-title"> <h2>LKPG WAKEPARK</h2>
      <Button icon="pi pi-times" text @click="modelValue = false" class="close-button" />
      </div>
    </div>
    <div class="drawer-content">
      <Menu style="font-size: large; padding:10pxß" :model="menuItems" />
    </div>
  </template>
</Drawer>

</template>

<style scoped>
.drawer-title {
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  color: var(--p-primary-color);
}

.drawer-content {
  border-radius: 4px;
  margin:6px;


}


</style>