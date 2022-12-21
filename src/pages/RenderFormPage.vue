<template>
  <h1>Render form</h1>

  <!-- <textarea v-model="base64string" cols="30" rows="10"></textarea> -->

  <RenderFormFromBase64 :base64string="base64string" />
</template>

<script setup lang="ts">
import RenderFormFromBase64 from '@/components/RenderFormFromBase64.vue';

defineProps<{
  base64string: string;
}>();
</script>
