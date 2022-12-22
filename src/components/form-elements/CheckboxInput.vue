<template>
  <div class="checkbox-input">
    <label v-if="hasLabel" class="mr-1" :for="fieldId">{{ fieldName }}</label>

    <input
      :id="fieldId"
      :aria-label="fieldId"
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
