<script setup>
import { RouterView } from 'vue-router'
import MainNav from '@/components/MainNav.vue'
import MainFooter from '@/components/MainFooter.vue'
</script>

<template>
  <header>
    <MainNav />
  </header>

  <RouterView />
  <MainFooter />
</template>

<style scoped></style>
