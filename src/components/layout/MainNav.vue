<script setup>
import MainLogo from '@/components/shared/MainLogo.vue'
import SearchInput from '@/components/layout/SearchInput.vue'
</script>

<template>
  <nav class="main-nav">
    <div class="container">
      <div class="left">
        <MainLogo />
        <SearchInput class="search" />
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@use '@/assets/grid';

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

  @media only screen and (max-width: map-get(grid.$breakpoints, 'md')) {
    display: block;

    .left,
    .right {
      display: block;
    }

    .search {
      margin-top: 20px;
      margin-left: 0;
    }
  }
}
</style>
