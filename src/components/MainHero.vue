<script setup>
import RatingIcon from '@/components/RatingIcon.vue'

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
  <div class="hero">
    <img :src="image" :alt="title" />

    <div class="overlay">
      <div class="content">
        <h2>{{ title }}</h2>

        <div class="rating">
          <RatingIcon />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
