<script lang="ts" setup>
import { useFirestore } from 'vuefire';
const db = useFirestore();

import { useCollection } from 'vuefire';
import { collection } from 'firebase/firestore';
const vehicles = useCollection(collection(db, 'vehicles'));

import { useInspectionStore } from '@/stores/inspection';
const inspection = useInspectionStore();

import type { Vehicle } from '@/database/firestore-types'
function selectVehicle(vehicle: Vehicle) {
  alert("Selected vehicle: " + vehicle.make + " " + vehicle.model + " PLATE: " + vehicle.plate_number)
  inspection.selectVehicle(vehicle);
}
</script>
<template>
  <div class="col-span-2 border-2 w-full h-96">
    <h2 class="text-xl px-4 py-2">Vehicles</h2>
    <div class="relative overflow-x-auto">
      <table class="w-full">
        <thead class="text-gray-50 bg-blue-500 uppercase text-sm w-full text-left">
          <tr>
            <th class="px-2">
              Make
            </th>
            <th class="px-2">
              Model
            </th>
            <th class="px-2">
              Plate No.
            </th>
            <th class="px-2">
              Driver
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="hover:cursor-pointer hover:bg-slate-200" v-for="(vehicle, index) in vehicles" :key="index" @click="selectVehicle(vehicle as Vehicle)">
            <td class="px-2 font-medium">
              {{ vehicle.make }}
            </td>
            <td class="px-2">
              {{ vehicle.model }}
            </td>
            <td class="px-2">
              {{ vehicle.plate_number }}
            </td>
            <td class="px-2">
              {{ vehicle.driver }}
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  </div>
</template>