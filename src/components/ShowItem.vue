<script setup>
import MainRating from '@/components/MainRating.vue'
import AddToWishList from '@/components/AddToWishList.vue'

defineProps({
  image: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  rating: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  moreLink: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <article class="show">
    <RouterLink :to="moreLink" class="link">
      <figure class="thumb">
        <img :src="image" :alt="title" />

        <div class="overlay">
          <MainRating :rating="rating" />

          <AddToWishList />
        </div>
      </figure>

      <h3>{{ title }}</h3>
    </RouterLink>
  </article>
</template>

<style lang="scss" scoped>
.show {
  .thumb {
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    display: block;
    box-sizing: border-box;

    img {
      width: 100%;
      margin: 0;
      padding: 0;
      display: block;
    }

    .overlay {
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      color: var(--color-white);
      background: rgba(0, 0, 0, 0.4);
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.7) 0%,
        rgba(0, 0, 0, 0.5) 47.5%,
        rgba(0, 0, 0, 0) 100%
      );
      height: 3rem;
      margin: 0;
      display: flex;
      align-items: flex-end;
      padding: 0.625rem;
      justify-content: space-between;
      transition: all 0.3s ease-in-out;
    }
  }

  h3 {
    font-size: 1rem;
    color: var(--color-text);
    margin-top: 0.5rem;
    max-height: 3.1875rem;
  }

  &:hover {
    .thumb .overlay {
      height: 5rem;
    }
  }
}
</style>
