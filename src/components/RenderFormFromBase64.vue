<template>
  <form ref="formRef" data-testid="render-form" @submit.prevent="submitHandler">
    <p v-if="hasParseError">Oops! Provided base64 string cannot be parsed to JSON</p>

    <template v-for="formField in formFields" :key="formField.id">
      <h2 v-if="formField.fieldType === FieldType.Divider">{{ formField.fieldId }}</h2>

      <TextInput
        v-if="formField.fieldType === FieldType.Number || formField.fieldType === FieldType.Text"
        v-model="formField.fieldValue"
        :field-id="formField.fieldId"
        :field-name="formField.fieldName"
        has-label
        :is-required="formField.isFieldRequired"
        :type="formField.fieldType"
      />

      <CheckboxInput
        v-if="formField.fieldType === FieldType.Checkbox"
        v-model="formField.fieldValue"
        :field-id="formField.fieldId"
        :field-name="formField.fieldName"
        has-label
        :is-required="formField.isFieldRequired"
      />
    </template>

    <button v-if="hasEditableFields" class="mt-4" type="submit">submit</button>
  </form>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { decode } from 'js-base64';
import CheckboxInput from '@/components/form-elements/CheckboxInput.vue';
import TextInput from '@/components/form-elements/TextInput.vue';
import { FieldType, type FormField } from '@/types/forms';

const props = defineProps<{
  base64string: string;
  isBase64stringValid: boolean;
}>();

const formFields = ref<FormField[]>([]);

const hasParseError = ref(false);

watch(
  () => props.base64string,
  () => {
    formFields.value = [];
    hasParseError.value = false;

    if (!props.base64string || !props.isBase64stringValid) return;

    try {
      formFields.value = JSON.parse(decode(props.base64string));
    } catch {
      hasParseError.value = true;
    }
  },
  { immediate: true }
);

const hasEditableFields = computed(() => formFields.value.some(field => 'fieldValue' in field));

const formRef = ref<HTMLFormElement | null>(null);

function submitHandler() {
  if (!formRef.value?.checkValidity()) return;

  const formData = formFields.value.reduce(
    (acc: Record<string, string | number | boolean>, field) => {
      if (field.fieldType === FieldType.Divider || field.fieldValue === null) return acc;

      acc[field.fieldId] = field.fieldValue;

      return acc;
    },
    {}
  );

  console.log('🚀 → submitHandler → formData', formData);
}
</script>
