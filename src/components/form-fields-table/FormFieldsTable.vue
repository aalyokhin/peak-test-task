<template>
  <button @click="addFieldHandler">Add new field</button>

  <table class="form-fields-table">
    <thead>
      <th id="table-cell-type">Type</th>
      <th id="table-cell-id">Id</th>
      <th id="table-cell-name">Name</th>
      <th id="table-cell-default">Default</th>
      <th id="table-cell-required">Required</th>
      <th id="table-cell-actions">Actions</th>
    </thead>

    <tbody>
      <FieldRow
        v-for="field in formFields"
        :key="field.id"
        :field-data="field"
        @delete="deleteFormFieldHandler(field.id)"
        @update="updateFormFieldHandler"
      />
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import FieldRow from '@/components/form-fields-table/FieldRow.vue';
import { getRandomId } from '@/utils';
import { FieldType, type FormItem } from '@/types/forms';

const formFields = ref<FormItem[]>([]);

addFieldHandler();

function addFieldHandler() {
  formFields.value.push({
    id: getRandomId(),
    fieldType: FieldType.Divider,
    fieldId: '',
  });
}

function updateFormFieldHandler(fieldData: FormItem) {
  const itemIndex = formFields.value.findIndex(item => item.id === fieldData.id);

  if (itemIndex < 0) return;

  formFields.value.splice(itemIndex, 1, fieldData);
}

function deleteFormFieldHandler(fieldId: FormItem['id']) {
  const itemIndex = formFields.value.findIndex(item => item.id === fieldId);

  if (itemIndex < 0) return;

  formFields.value.splice(itemIndex, 1);
}
</script>

<style lang="scss" scoped>
.form-fields-table {
  width: 100%;

  th {
    text-align: left;
  }

  #table-cell-type {
    width: 10%;
  }

  #table-cell-id {
    width: 15%;
  }

  #table-cell-name {
    width: 40%;
  }

  #table-cell-default {
    width: 20%;
  }

  #table-cell-required {
    width: 5%;
  }

  #table-cell-actions {
    width: 10%;
  }
}
</style>
