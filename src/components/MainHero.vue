<script setup>
import MainRating from '@/components/MainRating.vue'
import MainButton from '@/components/MainButton.vue'

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
    type: [String, Number],
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
  <div class="hero" :style="`background-image: url(${image})`">
    <div class="overlay">
      <div class="content">
        <h2>{{ title }}</h2>

        <MainRating :rating="rating" v-if="rating" />
        <div class="description" v-html="description" />
        <MainButton :to="moreLink" class="button">See More</MainButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  height: 22.5rem;
  background-size: cover;
  background-position: top;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;

  .overlay {
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);

    .content {
      position: absolute;
      bottom: 40px;
      left: 2.1875rem;
      right: 30%;
      color: var(--color-white);

      h2 {
        font-weight: 700;
        font-size: 3rem;
      }

      .description {
        margin-top: 0.5rem;
      }
    }
  }

  .button {
    width: 7.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    margin-top: 0.75rem;
  }
}
</style>
