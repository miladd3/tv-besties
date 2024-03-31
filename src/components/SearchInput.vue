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

<style lang="scss" scoped>
.search-input {
  position: relative;
  display: flex;
  align-items: center;

  input[type='search'] {
    padding: 9px 15px;
    width: 439px;
    height: 42px;
    background: var(--color-gray-100);
    border-radius: 100px;
    border: none;
    box-sizing: border-box;
  }

  button {
    background-color: transparent;
    border: none;
    position: absolute;
    right: 1rem;
    padding: 0;
    cursor: pointer;
  }
}
</style>
