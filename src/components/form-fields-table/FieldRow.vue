<template>
  <tr :data-testid="fieldData.id">
    <td>
      <SelectInput
        field-name="fieldType"
        :model-value="currentFieldData.fieldType"
        :options="FIELD_TYPE_OPTIONS"
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
        <CheckboxInput v-model="currentFieldData.fieldValue" field-id="fieldDefaultValue" />
      </td>

      <td v-else>
        <TextInput
          v-model="currentFieldData.fieldValue"
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
import { FIELD_TYPE_OPTIONS } from '@/constants/forms';

const props = defineProps<{
  fieldData: FormField;
}>();

const emit = defineEmits(['delete', 'update']);

const currentFieldData = ref<FormField>(JSON.parse(JSON.stringify(props.fieldData)));

function fieldTypeSelectHandler(fieldType: FieldType) {
  currentFieldData.value =
    fieldType === FieldType.Divider
      ? {
          id: currentFieldData.value.id,
          fieldId: currentFieldData.value.fieldId,
          fieldType,
        }
      : {
          id: currentFieldData.value.id,
          fieldId: currentFieldData.value.fieldId,
          fieldName: '',
          fieldType,
          fieldValue: null,
          isFieldRequired: false,
        };

  emit('update', currentFieldData.value);
}

watchEffect(() => {
  emit('update', currentFieldData.value);
});
</script>
