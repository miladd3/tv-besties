<script setup>
defineProps({
  cast: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <div class="cast-item">
    <figure class="thumb">
      <img
        :src="cast?.character?.image?.medium || cast?.person?.image?.medium"
        :alt="cast?.character?.name"
      />
    </figure>
    <div class="content">
      <div class="name">{{ cast.person.name }}</div>
      <div class="as">As: {{ cast.character.name }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cast-item {
  color: var(--color-text);
  display: flex;

  .thumb {
    width: 6.25rem;
    margin-right: 0.75rem;

    > img {
      object-fit: cover;
      aspect-ratio: 1;
      width: 100%;
      border-radius: 100%;
    }
  }

  .name {
    font-size: 1rem;
    font-weight: bold;
  }
}
</style>
