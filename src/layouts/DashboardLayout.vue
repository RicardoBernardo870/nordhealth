<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <HeaderComponent />
  <main>
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
</template>

<style scoped>
main {
  padding: 20px;
}
</style>
