<template>
  <div class="textarea-input">
    <label v-if="hasLabel" :for="fieldId">{{ fieldName }}</label>

    <textarea
      :id="fieldId"
      v-model="inputValue"
      :cols="cols"
      :name="fieldId"
      :readonly="isReadOnly"
      :rows="rows"
    />
  </div>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core';

const props = withDefaults(
  defineProps<{
    cols?: number;
    fieldId: string;
    fieldName?: string;
    hasLabel?: boolean;
    isReadOnly?: boolean;
    modelValue: string;
    rows?: number;
  }>(),
  {
    cols: 30,
    rows: 10,
  }
);

const emit = defineEmits(['update:modelValue']);

const inputValue = useVModel(props, 'modelValue', emit);
</script>

<style lang="scss" scoped>
.textarea-input {
  width: 100%;

  label {
    display: block;
    font-weight: 500;
  }

  textarea {
    resize: none;
  }
}
</style>
