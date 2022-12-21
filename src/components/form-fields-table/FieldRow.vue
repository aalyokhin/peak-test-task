<template>
  <tr>
    <td>
      <SelectInput
        field-name="fieldType"
        :model-value="currentFieldData.fieldType"
        :options="fieldTypeOptions"
        @update:model-value="fieldTypeSelectHandler"
      />
    </td>

    <td v-if="currentFieldData.fieldType === FieldType.Divider" colspan="4">
      <TextInput v-model="currentFieldData.fieldId" field-id="fieldId" :type="FieldType.Text" />
    </td>

    <template v-else>
      <td>
        <TextInput v-model="currentFieldData.fieldId" field-id="fieldId" :type="FieldType.Text" />
      </td>

      <td>
        <TextInput
          v-model="currentFieldData.fieldName"
          field-id="fieldName"
          :type="FieldType.Text"
        />
      </td>

      <td v-if="currentFieldData.fieldType === FieldType.Checkbox">
        <CheckboxInput v-model="currentFieldData.fieldDefaultValue" field-id="fieldDefaultValue" />
      </td>

      <td v-else>
        <TextInput
          v-model="currentFieldData.fieldDefaultValue"
          field-id="fieldDefaultValue"
          :type="currentFieldData.fieldType"
        />
      </td>

      <td>
        <CheckboxInput v-model="currentFieldData.isFieldRequired" field-id="isFieldRequired" />
      </td>
    </template>

    <td>
      <button class="dnd-button">move</button>
      <button @click="$emit('delete')">delete</button>
    </td>
  </tr>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import SelectInput from '@/components/form-elements/SelectInput.vue';
import TextInput from '@/components/form-elements/TextInput.vue';
import CheckboxInput from '@/components/form-elements/CheckboxInput.vue';
import { FieldType, type FormField } from '@/types/forms';
import { fieldTypeOptions } from '@/constants/forms';

const props = defineProps<{
  fieldData: FormField;
}>();

const emit = defineEmits(['delete', 'update']);

const currentFieldData = ref<FormField>(JSON.parse(JSON.stringify(props.fieldData)));

function fieldTypeSelectHandler(fieldType: FieldType) {
  if (fieldType === FieldType.Divider) {
    currentFieldData.value = {
      id: currentFieldData.value.id,
      fieldId: currentFieldData.value.fieldId,
      fieldType,
    };
  } else {
    let fieldDefaultValue = '';

    // @ts-expect-error see below
    if (fieldType === FieldType.Checkbox) fieldDefaultValue = false;
    // @ts-expect-error see below
    if (fieldType === FieldType.Number) fieldDefaultValue = 0;

    currentFieldData.value = {
      id: currentFieldData.value.id,
      fieldId: currentFieldData.value.fieldId,
      fieldName: '',
      isFieldRequired: false,
      fieldType,
      // @ts-expect-error make default value as null, to be supported in form components
      fieldDefaultValue,
    };
  }

  emit('update', currentFieldData.value);
}

watchEffect(() => {
  emit('update', currentFieldData.value);
});
</script>
