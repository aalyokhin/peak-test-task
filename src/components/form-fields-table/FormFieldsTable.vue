<template>
  <button @click="addFieldHandler">Add new field</button>

  <table class="form-fields-table" data-testid="form-fields-table">
    <thead>
      <th id="table-cell-type">Type</th>
      <th id="table-cell-id">Id</th>
      <th id="table-cell-name">Name</th>
      <th id="table-cell-default">Default</th>
      <th id="table-cell-required">Required</th>
      <th id="table-cell-actions">Actions</th>
    </thead>

    <VueDraggable v-model="formFields" handle=".dnd-button" item-key="id" tag="tbody">
      <template #item="{ element }">
        <FieldRow
          :field-data="element"
          @delete="deleteFormFieldHandler(element.id)"
          @update="updateFormFieldHandler"
        />
      </template>
    </VueDraggable>
  </table>

  <TextareaInput
    field-id="base64string"
    field-name="Form Base64 string"
    has-label
    is-read-only
    :model-value="base64string"
  />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { encode } from 'js-base64';
import VueDraggable from 'vuedraggable';
import FieldRow from '@/components/form-fields-table/FieldRow.vue';
import TextareaInput from '@/components/form-elements/TextareaInput.vue';
import { getRandomId } from '@/utils';
import { FieldType, type FormField } from '@/types/forms';

const formFields = ref<FormField[]>([]);
const base64string = computed(() => encode(JSON.stringify(formFields.value)));

addFieldHandler();

function addFieldHandler() {
  formFields.value.push({
    id: getRandomId(),
    fieldType: FieldType.Divider,
    fieldId: '',
  });
}

function updateFormFieldHandler(fieldData: FormField) {
  const itemIndex = formFields.value.findIndex(item => item.id === fieldData.id);

  if (itemIndex < 0) return;

  formFields.value.splice(itemIndex, 1, fieldData);
}

function deleteFormFieldHandler(fieldId: FormField['id']) {
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
    width: 100px;
  }

  #table-cell-id {
    width: 15%;
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

.sortable-ghost {
  opacity: 0.5;
}
</style>
