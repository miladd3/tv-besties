<script setup>
import { RouterView } from 'vue-router'
import MainNav from '@/components/MainNav.vue'
</script>

<template>
  <header>
    <MainNav />
    <div class="wrapper"></div>
  </header>

  <RouterView />
</template>

<style scoped></style>
