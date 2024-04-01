<script setup>
import { useRoute } from 'vue-router'
import { computed, onMounted, ref } from 'vue'
import { getShowById } from '@/API/index.js'

import WishlistIcon from '@/components/WishlistIcon.vue'
import MainRating from '@/components/MainRating.vue'

const route = useRoute()

const show = ref({})

onMounted(async () => {
  show.value = await getShowById({ showId: route.params.id, embed: ['images', 'episodes', 'cast'] })
})

const info = computed(() => ({
  webChannelName: show.value?.webChannel?.name,
  webChannelLink: show.value?.webChannel?.officialSite,
  schedule: `${show.value.schedule?.days?.length ? show.value.schedule.days.join(' and ') : ''}${show.value.schedule?.time ? 'at ' + show.value.schedule?.time : ''}`,
  status: show.value.status,
  type: show.value.type,
  Genres: show.value.genres?.join(', ')
}))
</script>

<template>
  <div class="container">
    <div class="show">
      <h1 class="title">{{ show.name }}</h1>

      <main class="main">
        <div class="row">
          <div class="col-2">
            <figure class="thumb">
              <img :src="show?.image?.original" :alt="show.name" />
              <div class="wishlist">
                <button class="wish-list-big-button">
                  <WishlistIcon class="icon" /> Add to wish list
                </button>
              </div>
            </figure>
          </div>
          <div class="col-7">
            <div class="description" v-html="show.summary"></div>
          </div>
          <div class="col-3">
            <div class="info">
              <h3>Show Info</h3>
              <ul>
                <li>
                  <div class="label">Web channel</div>
                  <div class="value"></div>
                </li>
                <li>
                  <div class="label">Schedule</div>
                  <div class="value"></div>
                </li>
                <li>
                  <div class="label">Status</div>
                  <div class="value"></div>
                </li>
                <li>
                  <div class="label">Show Type</div>
                  <div class="value"></div>
                </li>
                <li>
                  <div class="label">Genres</div>
                  <div class="value"></div>
                </li>
                <li>
                  <div class="label">Official site</div>
                  <div class="value"></div>
                </li>
              </ul>

              <MainRating />
            </div>
          </div>
        </div>

        <div class="episodes">
          <h3>Episodes</h3>
        </div>
      </main>
    </div>
  </div>
  ------------------------
  <div style="white-space: pre">{{ show }}</div>
</template>

<style lang="scss" scoped>
.title {
  font-size: 2rem;
  font-weight: bold;
}

.show {
  margin-top: 1.5rem;
}

.main {
  .thumb img {
    width: 100%;
    border-radius: 0.5rem;
  }

  .wish-list-big-button {
    border: none;
    display: flex;
    align-items: center;
    background-color: var(--color-border);
    cursor: pointer;
    padding: 12px;
    width: 100%;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 8px;
    color: var(--color-text);

    .icon {
      margin-right: 0.5rem;
    }
  }
}

.show {
  .info {
    background: var(--color-border);
    padding: 0.75rem;

    h3 {
      font-size: 18px;
      font-weight: 500;
    }

    .label {
      font-weight: bold;

      &:after {
        content: ':';
      }
    }
  }
}
</style>
