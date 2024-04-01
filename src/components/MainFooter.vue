<script setup>
import facebookIcon from '@/assets/fa-brands_facebook-square.svg'
import youtubeIcon from '@/assets/fa-brands_youtube.svg'
import twitterIcon from '@/assets/fa-brands_twitter.svg'
import instagramIcon from '@/assets/fa-brands_instagram.svg'
</script>

<template>
  <div class="footer">
    <div class="social-icons">
      <a href="https://www.facebook.com" target="_blank">
        <img :src="facebookIcon" alt="facebook" />
      </a>
      <a href="https://www.instagram.com" target="_blank">
        <img :src="youtubeIcon" alt="youtube" />
      </a>
      <a href="https://www.twitter.com" target="_blank">
        <img :src="twitterIcon" alt="twitter" />
      </a>
      <a href="https://www.youtube.com" target="_blank">
        <img :src="instagramIcon" alt="instagram" />
      </a>
    </div>
    <div class="footer-links">
      <RouterLink to="/conditions">Conditions of Use</RouterLink>
      <RouterLink to="/privacy">Privacy & Policy</RouterLink>
      <RouterLink to="/press">Press Room</RouterLink>
    </div>
    <div class="copyright">© 2024 TV Bestie</div>
  </div>
</template>

<style lang="scss" scoped></style>
