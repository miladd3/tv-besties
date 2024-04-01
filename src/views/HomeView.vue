<script setup>
import MainHero from '@/components/MainHero.vue'
import { computed, onMounted, ref } from 'vue'
import { getAllShows, getShowById } from '@/API/index.js'
import { heroId } from '@/conts.js'
import ShowItem from '@/components/ShowItem.vue'

const shows = ref([])

const heroShow = ref({})
const heroShowImage = computed(
  () =>
    heroShow.value?._embedded?.images.filter((o) => (o.type = 'Background'))[2]?.resolutions
      .original.url
)
const first20Shows = computed(() => shows.value?.slice(0, 20))
onMounted(async () => {
  shows.value = await getAllShows()
  heroShow.value = await getShowById({ showId: heroId, embed: ['images'] })
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

      <h2 class="shows-title">Featured shows</h2>
      <div class="shows">
        <div class="show-col" v-for="show in first20Shows" :key="show.id">
          <ShowItem
            :image="show?.image?.medium"
            :title="show.name"
            :rating="show.rating?.average"
            :more-link="`/show/${show.id}`"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" title="">
.hero {
  margin-top: 1.5rem;
}

.shows-title {
  font-size: 1.125rem;
  font-weight: 700;
  margin-top: 1.375rem;
}

.shows {
  display: flex;
  margin: 0 -1.125rem;
  flex-wrap: wrap;

  .show-col {
    padding: 1.125rem;
    width: 20%;
  }
}
</style>
