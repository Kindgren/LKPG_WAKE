<script setup lang="ts">
import { defineEmits } from 'vue'
import Toolbar from 'primevue/toolbar'
import Button from 'primevue/button'
import Logo from '../assets/circleLogo.png'

const emit = defineEmits(['toggle-drawer'])
</script>

<template>
  <Toolbar class="app-header">
    <template #start>
      <Button severity ="warning" icon= "pi pi-bars" text @click="emit('toggle-drawer')" />
    </template>
    <template #center>
      <h1 class="header-text"></h1>
    </template>
    <template #end>
    </template>
  </Toolbar>
        <img :src="Logo" alt="Logo" class="logo" />

</template>

<style scoped>
.app-header {
  top: 0;
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 80px;
}

.logo {
  height: 110px; /* or whatever fits your design */
  right: 10%;
  top:-7px;
  position: absolute;

}

.header-text{
    
}
</style>
