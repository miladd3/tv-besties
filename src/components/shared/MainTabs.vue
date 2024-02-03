<script setup>
import { Tabs } from 'vue3-tabs-component'
</script>

<template>
  <Tabs v-bind="$attrs">
    <slot />
  </Tabs>
</template>

<style>
.tabs-component-tabs {
  display: flex;
  border: 1px solid var(--color-border);
  margin-bottom: 8px;

  .tabs-component-tab-a {
    display: block;
    padding: 0.375rem 0.75rem;
    border-bottom: 1px solid var(--color-border);
    border-right: 1px solid var(--color-border);
    margin-bottom: -2px;
    color: var(--color-text-muted);

    &.is-active {
      border-bottom: 2px solid var(--color-primary-dark);
      color: var(--color-text);
    }
  }
}
</style>
