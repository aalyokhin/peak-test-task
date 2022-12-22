<template>
  <div class="checkbox-input">
    <label v-if="hasLabel" :for="fieldId">{{ fieldName }}</label>

    <input
      :checked="modelValue ?? false"
      :name="fieldId"
      :required="isRequired"
      type="checkbox"
      @input="inputHandler"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  fieldId: string;
  fieldName?: string;
  hasLabel?: boolean;
  isRequired?: boolean;
  modelValue: boolean | null;
}>();

const emit = defineEmits(['update:modelValue']);

function inputHandler(event: Event) {
  const target = event.target as HTMLInputElement;

  emit('update:modelValue', target.checked);
}
</script>

<!-- <style lang="scss" scoped></style> -->
