<script setup>
import { useRoute } from 'vue-router'
import { computed, onMounted, ref, watch } from 'vue'
import { searchShows } from '@/API/index.js'
import ShowItem from '@/components/home/ShowItem.vue'
import useRequestStates from '@/composition/useRequestStates.js'

const route = useRoute()

const result = ref([])
const searchKey = computed(() => route.query?.q)

const getResult = async () => {
  result.value = await searchShows({ query: searchKey.value })
}

const { doRequest, loading } = useRequestStates(getResult)

watch(searchKey, doRequest)
</script>

<template>
  <div class="search">
    <div class="container">
      <h3>searching for {{ searchKey }}:</h3>

      <div class="show-list">
        <div class="show-col" v-for="index in 10" :key="index" v-if="loading">
          <ShowItem loading />
        </div>
        <div class="show-col" v-for="{ show } in result" :key="show.id" v-else-if="result.length">
          <ShowItem
            :image="show?.image?.medium"
            :title="show.name"
            :rating="show.rating?.average"
            :more-link="`/show/${show.id}`"
          />
        </div>
        <div class="show-col" v-else>Result not found try with different search key</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h3 {
  font-size: 24px;
  margin-top: 20px;
}
</style>
