<template>
  <div class="checkbox-input">
    <label v-if="hasLabel" :for="fieldId">{{ fieldName }}</label>
    <input v-model="isChecked" :name="fieldId" type="checkbox" />
  </div>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core';

const props = defineProps<{
  fieldId: string;
  fieldName?: string;
  hasLabel?: boolean;
  modelValue: boolean;
}>();

const emit = defineEmits(['update:modelValue']);

const isChecked = useVModel(props, 'modelValue', emit);
</script>

<!-- <style lang="scss" scoped></style> -->
