<template>
  <div class="text-input">
    <label v-if="hasLabel" :for="fieldId">{{ fieldName }}</label>
    <input v-model="inputValue" class="text-input" :name="fieldId" :type="type" />
  </div>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core';

const props = defineProps<{
  fieldId: string;
  fieldName?: string;
  hasLabel?: boolean;
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
