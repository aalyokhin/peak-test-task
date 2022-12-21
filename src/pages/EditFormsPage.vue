<template>
  <div class="edit-forms-page">
    <h2>Edit forms</h2>

    <button>Add new one</button>
    <button>Save</button>

    <FormsTable />
  </div>
</template>

<script setup lang="ts">
import FormsTable from '@/components/forms-table/FormsTable.vue';
</script>
