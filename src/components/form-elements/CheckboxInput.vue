<template>
  <input v-model="isChecked" :name="fieldName" type="checkbox" />
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core';

const props = defineProps<{
  fieldName: string;
  modelValue: boolean;
}>();

const emit = defineEmits(['update:modelValue']);

const isChecked = useVModel(props, 'modelValue', emit);
</script>

<!-- <style lang="scss" scoped></style> -->
