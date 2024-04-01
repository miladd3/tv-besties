<script setup>
import RatingIcon from '@/components/RatingIcon.vue'

defineProps({
  rating: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="rating" v-if="rating">
    <RatingIcon />
    <span class="number">
      {{ rating }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.rating {
  display: flex;
  align-items: center;
  .number {
    margin-left: 0.5rem;
    font-size: 0.75rem;
    line-height: 1;
  }
}
</style>
