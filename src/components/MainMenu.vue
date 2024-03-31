<script setup></script>

<template>
  <div class="main-menu">
    <ul>
      <li>
        <RouterLink to="/" active-class="-active">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/shows">Shows</RouterLink>
      </li>
      <li>
        <RouterLink to="/people">People</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.main-menu {
  margin-right: 6.25rem;

  ul {
    display: flex;
    margin: 0 -0.75rem;

    li {
      padding: 0 0.75rem;
    }

    a {
      font-size: 1rem;
      color: var(--color-text-muted);
      padding: 0.25rem;

      &.-active {
        color: var(--color-text);
        border-bottom: 2px solid var(--color-primary);
      }
    }
  }
}
</style>
