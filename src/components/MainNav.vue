<script setup>
import MainLogo from '@/components/MainLogo.vue'
import SearchInput from '@/components/SearchInput.vue'
import MainMenu from '@/components/MainMenu.vue'
import WishlistButton from '@/components/WishlistButton.vue'
</script>

<template>
  <nav class="main-nav">
    <div class="container">
      <div class="left">
        <MainLogo />
        <SearchInput class="search" />
      </div>

      <div class="right">
        <MainMenu />
        <WishlistButton />
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.main-nav .container {
  display: flex;
  justify-content: space-between;
  margin-top: 1.25rem;

  .left,
  .right {
    display: flex;
    align-items: center;
  }

  .search {
    margin-left: 50px;
  }
}
</style>
