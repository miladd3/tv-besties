<script setup>
import EpisodeItem from '@/components/show/EpisodeItem.vue'

defineProps({
  episodes: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div class="episodes">
    <h3 class="widget-title">Latest Episodes</h3>
    <EpisodeItem v-for="episode in episodes" :key="episode.id" :episode="episode" />
  </div>
</template>

<style lang="scss" scoped>
.widget-title {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--color-text-muted);
  margin-bottom: 0.5rem;
}
</style>
