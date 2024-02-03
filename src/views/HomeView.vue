<script setup>
import MainHero from '@/components/home/MainHero.vue'
import { computed, onMounted, ref } from 'vue'
import { getAllShows, getShowById } from '@/API/index.js'
import { heroId } from '@/conts.js'
import ShowItem from '@/components/home/ShowItem.vue'
import useRequestStates from '@/composition/useRequestStates.js'

const shows = ref([])

const heroShow = ref({})
const heroShowImage = computed(
  () =>
    heroShow.value?._embedded?.images.filter((o) => (o.type = 'Background'))[2]?.resolutions
      .original.url
)
const first20Shows = computed(() => shows.value?.slice(0, 20))

const getShows = async () => {
  shows.value = await getAllShows()
}

const getHero = async () => {
  heroShow.value = await getShowById({ showId: heroId, embed: ['images'] })
}

const { loading, error, notFound } = useRequestStates(getShows)
const { loading: loadingHero, error: errorHero } = useRequestStates(getHero)
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
        :loading="loadingHero"
      />

      <h2 class="shows-title">Featured shows</h2>
      <div class="show-list" v-if="!loading">
        <div class="show-col" v-for="show in first20Shows" :key="show.id">
          <ShowItem
            :image="show?.image?.medium"
            :title="show.name"
            :rating="show.rating?.average"
            :more-link="`/show/${show.id}`"
          />
        </div>
      </div>
      <div class="show-list" v-else>
        <div class="show-col" v-for="index in 10" :key="index">
          <ShowItem loading />
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
</style>
