<template>
  <h1>Render form</h1>

  <TextareaInput
    v-model="base64string"
    field-id="base64string"
    field-name="Form Base64 string"
    has-label
  />

  <p v-if="base64string && !isBase64StringValid">Base64 string is not valid</p>

  <RenderFormFromBase64 :base64string="base64string" :is-base64string-valid="isBase64StringValid" />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { isValid } from 'js-base64';
import RenderFormFromBase64 from '@/components/RenderFormFromBase64.vue';
import TextareaInput from '@/components/form-elements/TextareaInput.vue';

const base64string = ref('');
const isBase64StringValid = computed(() => isValid(base64string.value));
</script>
