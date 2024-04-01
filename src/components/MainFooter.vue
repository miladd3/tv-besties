<script setup>
import facebookIcon from '@/assets/fa-brands_facebook-square.svg'
import youtubeIcon from '@/assets/fa-brands_youtube.svg'
import twitterIcon from '@/assets/fa-brands_twitter.svg'
import instagramIcon from '@/assets/fa-brands_instagram.svg'
</script>

<template>
  <footer class="footer">
    <div class="container">
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
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  text-align: center;
  margin-top: 3.5rem;

  .social-icons,
  .footer-links {
    margin-bottom: 20px;
    display: flex;
    justify-content: center;

    a {
      text-decoration: none;
      color: #333;
      margin: 0 10px;

      &:hover {
        color: #555;
      }
    }
  }

  .social-icons {
    a {
      font-size: 24px;
    }
  }

  .footer-links {
    a {
      font-size: 16px;

      &:not(:last-child):after {
        margin-left: 10px;
      }
    }
  }

  .copyright {
    font-size: 14px;
  }
}
</style>
