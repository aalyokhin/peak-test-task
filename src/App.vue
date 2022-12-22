<template>
  <div class="main-layout">
    <NavigationHeader />

    <div class="content-wrapper">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import NavigationHeader from '@/components/NavigationHeader.vue';
</script>

<style lang="scss" scoped>
.main-layout {
  @apply p-8;
}

.content-wrapper {
  @apply m-auto max-w-screen-xl;
}
</style>
