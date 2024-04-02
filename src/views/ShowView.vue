<script setup>
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'
import { getShowById } from '@/API/index.js'
import MainTabs from '@/components/shared/MainTabs.vue'
import MainTab from '@/components/shared/MainTab.vue'
import ShowMain from '@/components/show/ShowMain.vue'
import ShowEpisodes from '@/components/show/ShowEpisodes.vue'
import ShowCast from '@/components/show/ShowCast.vue'
import useRequestStates from '@/composition/useRequestStates.js'
import { Skeletor } from 'vue-skeletor'

const route = useRoute()

const show = ref({})

const getShow = async () => {
  show.value = await getShowById({ showId: route.params.id, embed: ['images', 'episodes', 'cast'] })
}

const { loading } = useRequestStates(getShow)

const episodes = computed(() =>
  ({ ...show?.value })?._embedded?.episodes
    .sort((a, b) => (parseInt(a.id) > parseInt(b.id) ? -1 : 1))
    .slice(0, 3)
)
const cast = computed(() => show.value._embedded?.cast.slice(0, 3))
</script>

<template>
  <div class="container">
    <div class="show">
      <h1 class="title" v-if="!loading">{{ show.name }}</h1>
      <h1 class="title" v-else><Skeletor /></h1>

      <MainTabs>
        <MainTab name="Show">
          <ShowMain :show="show" :episodes="episodes" :cast="cast" :loading="loading" />
        </MainTab>
        <MainTab name="Episodes">
          <ShowEpisodes :episodes="show?._embedded?.episodes" :loading="loading" />
        </MainTab>
        <MainTab name="Cast">
          <ShowCast :cast="show?._embedded?.cast" :loading="loading" />
        </MainTab>
      </MainTabs>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-size: 2rem;
  font-weight: bold;
}

.show {
  margin-top: 1.5rem;
}
</style>
