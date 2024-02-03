<script setup>
import CastItem from '@/components/show/CastItem.vue'

defineProps({
  cast: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div class="episodes">
    <h3 class="widget-title">Cast</h3>
    <div class="row">
      <div class="col-6" v-for="castItem in cast" :key="castItem.id">
        <CastItem :cast="castItem" />
      </div>
    </div>
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
