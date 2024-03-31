<script setup>
import searchIcon from '@/assets/search.svg'
</script>

<template>
  <form class="search-input">
    <input type="search" placeholder="Search Movies and series" />
    <button type="submit">
      <img :src="searchIcon" alt="search" />
    </button>
  </form>
</template>

<style scoped></style>
