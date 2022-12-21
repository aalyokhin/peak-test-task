<template>
  <select v-model="selectedOption" :name="fieldName">
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core';
import type { SelectOption } from '@/types/forms';

const props = defineProps<{
  fieldName: string;
  modelValue: SelectOption['value'];
  options: SelectOption[];
}>();

const emit = defineEmits(['update:modelValue']);

const selectedOption = useVModel(props, 'modelValue', emit);
</script>

<!-- <style lang="scss" scoped></style> -->
