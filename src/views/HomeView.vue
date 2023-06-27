<script setup lang="ts">
import InspectionForm from '@/components/InspectorView/InspectionForm.vue';
import InspectionsTable from '@/components/InspectorView/InspectionsTable.vue';
import VehiclesTableVue from '@/components/InspectorView/VehiclesTable.vue';
</script>

<template>
  <main class="w-full border-dashed mx-auto my-4">
    <h1 class="border-2 p-4 text-2xl shadow-md">Inspector Dashboard</h1>
    <div class="grid grid-cols-2 gap-2 p-2 max-w-5xl mx-auto">
      <VehiclesTableVue />
      <InspectionsTable />
      <InspectionForm />
    </div>
  </main>
</template>
