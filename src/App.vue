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
