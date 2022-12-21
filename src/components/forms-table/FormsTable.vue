<template>
  <table class="forms-table">
    <thead>
      <th>Type</th>
      <th>Id</th>
      <th>Name</th>
      <th>Default</th>
      <th>Required</th>
      <th>Actions</th>
    </thead>

    <tbody>
      <tr>
        <td>
          <SelectInput v-model="fieldType" field-name="fieldType" :options="fieldTypeOptions" />
        </td>

        <td>
          <TextInput v-model="fieldId" field-name="fieldId" />
        </td>

        <td>
          <TextInput v-model="fieldName" field-name="fieldName" />
        </td>

        <td>
          <TextInput v-model="fieldDefaultValue" field-name="fieldDefaultValue" />
        </td>

        <td>
          <CheckboxInput v-model="isFieldRequired" field-name="isFieldRequired" />
        </td>

        <td>
          <button>move</button>
          <button>delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SelectInput from '@/components/form-elements/SelectInput.vue';
import TextInput from '@/components/form-elements/TextInput.vue';
import CheckboxInput from '@/components/form-elements/CheckboxInput.vue';

const fieldTypeOptions = [
  { label: 'Divider', value: 'divider' },
  { label: 'Number', value: 'number' },
  { label: 'Input', value: 'input' },
  { label: 'Checkbox', value: 'checkbox' },
];

const fieldType = ref(fieldTypeOptions[0].value);
const fieldId = ref('');
const fieldName = ref('');
const fieldDefaultValue = ref('');
const isFieldRequired = ref(false);
</script>
