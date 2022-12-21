<template>
  <template v-for="formField in formFields" :key="formField.id">
    <h2 v-if="formField.fieldType === FieldType.Divider">{{ formField.fieldId }}</h2>

    <TextInput
      v-if="formField.fieldType === FieldType.Number || formField.fieldType === FieldType.Text"
      :field-id="formField.fieldId"
      :field-name="formField.fieldName"
      has-label
      :model-value="formField.fieldDefaultValue"
      :type="formField.fieldType"
    />

    <CheckboxInput
      v-if="formField.fieldType === FieldType.Checkbox"
      :field-id="formField.fieldId"
      :field-name="formField.fieldName"
      has-label
      :model-value="formField.fieldDefaultValue"
    />
  </template>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { decode, isValid } from 'js-base64';
import CheckboxInput from '@/components/form-elements/CheckboxInput.vue';
import TextInput from '@/components/form-elements/TextInput.vue';
import { FieldType, type FormField } from '@/types/forms';

const props = defineProps<{
  base64string: string;
}>();

const formFields = computed<FormField[]>(() => {
  if (!props.base64string) return [];
  if (!isValid(props.base64string)) return [];

  return JSON.parse(decode(props.base64string));
});
</script>
