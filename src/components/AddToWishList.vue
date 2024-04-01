<script setup>
import WishlistIcon from '@/components/WishlistIcon.vue'
</script>

<template>
  <button class="add-to-wishlist">
    <WishlistIcon fill="#fff" width="12px" height="12px" />
  </button>
</template>

<style lang="scss" scoped>
.add-to-wishlist {
  background-color: transparent;
  line-height: 1;
  border: none;
  display: block;
  cursor: pointer;
}
</style>
