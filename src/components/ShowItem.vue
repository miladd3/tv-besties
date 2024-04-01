<script setup>
defineProps({
  image: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  rating: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  moreLink: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <article class="show">
    <figure>
      <img src="" alt="" />
    </figure>
  </article>
</template>

<style lang="scss" scoped></style>
