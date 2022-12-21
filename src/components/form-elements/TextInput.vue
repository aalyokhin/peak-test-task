<template>
  <input v-model="inputValue" :name="fieldName" type="text" />
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core';

const props = defineProps<{
  fieldName: string;
  modelValue: string;
}>();

const emit = defineEmits(['update:modelValue']);

const inputValue = useVModel(props, 'modelValue', emit);
</script>

<!-- <style lang="scss" scoped></style> -->
