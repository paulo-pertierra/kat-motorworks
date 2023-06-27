<script lang="ts" setup>
import * as fns from 'date-fns'

import { useFirestore } from 'vuefire';
const db = useFirestore();

import { useCollection } from 'vuefire';
import { Timestamp, collection } from 'firebase/firestore';
const inspections = useCollection(collection(db, 'inspections'));

</script>
<template>
  <div class="col-span-2 lg:col-span-1 border-2 w-full h-96">
  <h2 class="text-xl px-4 py-2">All Inspections</h2>
  <div class="relative overflow-x-auto">
    <table class="w-full">
    <thead class="text-gray-50 bg-blue-500 uppercase text-sm w-full text-left">
      <tr>
        <th class="px-2">
          Date
        </th>
        <th class="px-2">
          Vehicle/Plate
        </th>
        <th class="px-2">
          Status
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="hover:cursor-pointer hover:bg-slate-200" v-for="(inspection, index) in inspections" :key="index">
        <td class="px-2 font-medium">
          {{ fns.format(new Date(inspection.date.seconds * 1000), "PPp") }}
        </td>
        <td class="px-2">
          {{ inspection?.vehicleData.model }} | {{ inspection?.vehicleData.plate_number }}
        </td>
        <td class="px-2 underline-offset-4 underline hover:text-blue-500">
          View
        </td>
      </tr>
    </tbody>
  </table>
  </div>
</div>
</template>