<script setup>
import logo from '@/assets/logo.svg'
</script>

<template>
  <RouterLink class="logo" to="/">
    <img :src="logo" alt="" class="image" />
    <span class="title">TV Bestie</span>
  </RouterLink>
</template>

<style scoped lang="scss">
.logo {
  display: flex;
  align-items: center;

  .image {
    height: 1.5rem;
    margin-right: 0.75em;
  }

  .title {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-text);
  }
}
</style>
