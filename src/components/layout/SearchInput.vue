<script setup>
import searchIcon from '@/assets/search.svg'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const searchKey = ref('')
const router = useRouter()
const onSubmit = () => {
  router.push(`/search/?q=${searchKey.value}`)
}
</script>

<template>
  <form class="search-input" @submit.prevent="onSubmit">
    <input type="search" v-model="searchKey" placeholder="Search Movies and series" />
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
