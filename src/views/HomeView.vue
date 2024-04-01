<script setup>
import MainHero from '@/components/MainHero.vue'
import { computed, onMounted, ref } from 'vue'
import { getAllShows, getShowById } from '@/API/index.js'
import { heroId } from '@/conts.js'

const shows = ref([])

const heroShow = ref({})
const heroShowImage = computed(
  () =>
    heroShow.value?._embedded?.images.filter((o) => (o.type = 'Background'))[2].resolutions.original
      .url
)
onMounted(async () => {
  shows.value = await getAllShows()
  heroShow.value = await getShowById({ showId: heroId })
})
</script>

<template>
  <main>
    <!--    <div style="white-space: pre">{{ heroShow }}</div>-->
    <div class="container">
      <MainHero
        :image="heroShowImage"
        :title="heroShow.name"
        :description="heroShow.summary"
        :rating="heroShow.rating?.average"
        :more-link="`/show/${heroShow.id}`"
        class="hero"
      />
    </div>
  </main>
</template>

<style lang="scss" title="">
.hero {
  margin-top: 1.5rem;
}
</style>
