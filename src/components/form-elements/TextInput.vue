<template>
  <input v-model="inputValue" class="text-input" :name="fieldName" :type="type" />
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core';

const props = defineProps<{
  fieldName: string;
  modelValue: string | number;
  type: 'text' | 'number';
}>();

const emit = defineEmits(['update:modelValue']);

const inputValue = useVModel(props, 'modelValue', emit);
</script>

<style lang="scss" scoped>
.text-input {
  width: 100%;
}
</style>
