<script setup>
import WishlistIcon from '@/components/WishlistIcon.vue'
</script>

<template>
  <button class="wishlist-button">
    <WishlistIcon />
  </button>
</template>

<style scoped>
.wishlist-button {
  background: transparent;
  padding: 0;
  display: inline-block;
  border: none;
  cursor: pointer;
}
</style>
