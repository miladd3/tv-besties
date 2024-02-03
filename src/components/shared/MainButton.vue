<script setup>
import { computed } from 'vue'

const props = defineProps({
  tag: {
    type: String,
    default: 'button'
  },
  to: {
    type: String,
    default: ''
  }
})

const computedTag = computed(() => (props.to ? 'RouterLink' : props.tag))
</script>

<template>
  <component :is="computedTag" :to="props.to" :v-bind="$attrs" class="button">
    <slot />
  </component>
</template>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  height: 2.5rem;
  box-sizing: border-box;
  border: none;
  justify-content: center;
  font-size: 0.75rem;
  background: linear-gradient(
    180deg,
    var(--color-primary-dark) 0%,
    var(--color-primary) 100%,
    var(--color-primary) 100.01%
  );
  color: var(--color-white);
  border-radius: 0.5rem;
}
</style>
