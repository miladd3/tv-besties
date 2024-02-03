<script setup>
import MainRating from '@/components/home/MainRating.vue'
import EpisodeItem from '@/components/show/EpisodeItem.vue'
import CastItem from '@/components/show/CastItem.vue'
import { computed } from 'vue'
import { Skeletor } from 'vue-skeletor'

const props = defineProps({
  show: {
    type: Object,
    default: () => ({})
  },
  episodes: {
    type: Array,
    default: () => []
  },
  cast: {
    type: Array,
    default: () => []
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const info = computed(() => ({
  webChannelName: props.show?.webChannel?.name,
  webChannelLink: props.show?.webChannel?.officialSite,
  schedule: `${props.show.schedule?.days?.length ? props.show.schedule.days.join(' and ') : ''}${props.show.schedule?.time ? ' at ' + props.show.schedule?.time : ''}`,
  status: props.show.status,
  type: props.show.type,
  genres: props.show.genres?.join(', '),
  website: props.show.officialSite
}))
</script>

<template>
  <main class="main">
    <div class="row">
      <div class="col-2">
        <template v-if="!loading">
          <figure class="thumb">
            <img :src="show?.image?.original" :alt="show.name" />
          </figure>
        </template>

        <Skeletor v-else height="300px" />
      </div>
      <div class="col-6">
        <div class="description" v-html="show.summary" v-if="!loading"></div>
        <template v-else>
          <Skeletor />
          <Skeletor />
          <Skeletor />
          <Skeletor />
          <Skeletor />
        </template>
      </div>
      <div class="col-4">
        <div class="info" v-if="!loading">
          <h3>Show Info</h3>
          <ul class="info-list">
            <li v-if="info.webChannelName">
              <div class="label">Web channel</div>
              <div class="value">
                <a :href="info.webChannelLink" :title="info.webChannelName" target="_blank">{{
                  info.webChannelName
                }}</a>
              </div>
            </li>
            <li>
              <div class="label">Schedule</div>
              <div class="value">{{ info.schedule }}</div>
            </li>
            <li>
              <div class="label">Status</div>
              <div class="value">{{ info.status }}</div>
            </li>
            <li>
              <div class="label">Show Type</div>
              <div class="value">{{ info.type }}</div>
            </li>
            <li>
              <div class="label">Genres</div>
              <div class="value">{{ info.genres }}</div>
            </li>
          </ul>

          <MainRating class="rating" fill="#666" :rating="show.rating?.average" />
        </div>
        <Skeletor v-else height="200px" />
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <div class="episodes">
          <h3 class="widget-title" v-if="!loading">Latest Episodes</h3>
          <h3 class="widget-title" v-else><Skeletor /></h3>
          <EpisodeItem
            v-if="!loading"
            v-for="episode in episodes"
            :key="episode.id"
            :episode="episode"
          />
          <EpisodeItem v-else v-for="index in 3" :key="index" loading />
          <a href="#episodes" title="More episodes" v-if="!loading">More episodes ></a>
        </div>
      </div>
      <div class="col-6" v-if="!loading">
        <div class="cast">
          <h3 class="widget-title">Casts</h3>
          <CastItem v-for="castItem in cast" :key="castItem.person.id" :cast="castItem" />
          <a href="#cast" title="More cast">More cast ></a>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main {
  .info {
    background: var(--color-border);
    padding: 0.75rem;
    border-radius: 8px;

    h3 {
      font-size: 1.125rem;
      font-weight: 300;
      color: var(--color-text-muted);
    }

    .info-list {
      li {
        display: flex;
      }

      .label {
        font-weight: bold;
        margin-right: 0.5rem;
        flex-shrink: 0;

        &:after {
          content: ':';
        }
      }

      .value {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .rating {
      margin-top: 1rem;
    }
  }

  .widget-title {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--color-text-muted);
    margin-bottom: 0.5rem;
  }

  .episodes,
  .cast {
    margin-top: 1.125rem;
  }

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
</style>
