<script setup>
import { RouterView } from 'vue-router'
import MainNav from '@/components/layout/MainNav.vue'
import MainFooter from '@/components/layout/MainFooter.vue'
</script>

<template>
  <header>
    <MainNav />
  </header>

  <RouterView />
  <MainFooter />
</template>

<style scoped></style>
