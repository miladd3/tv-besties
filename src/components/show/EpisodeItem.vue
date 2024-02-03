<script setup>
import { Skeletor } from 'vue-skeletor'

defineProps({
  episode: {
    type: Object,
    default: () => ({})
  },
  loading: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="episode" v-if="!loading">
    <div class="number">{{ episode.season }}x{{ episode.number }}</div>
    <div class="name">{{ episode.name }}</div>
    <div class="air-date" v-if="episode.airdate">{{ episode.airdate }}</div>
  </div>
  <Skeletor v-else height="40px" class="episode" />
</template>

<style lang="scss" scoped>
.episode {
  background-color: var(--color-border);
  padding: 0.5rem;
  display: flex;
  margin-bottom: 0.5rem;
  border-radius: 4px;

  > div {
    padding: 0 0.25rem;
  }

  .number {
    font-weight: 700;
  }

  .name {
    font-weight: 300;
  }
}
</style>
