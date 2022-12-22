<template>
  <header>
    <nav>
      <RouterLink to="/">Edit</RouterLink>
      <RouterLink to="/render">Render</RouterLink>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  @apply mb-8;
}

nav {
  @apply flex gap-4 justify-center;

  .router-link-active {
    @apply font-semibold;
  }
}
</style>
