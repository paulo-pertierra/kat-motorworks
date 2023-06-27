import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Vehicle } from '@/database/firestore-types';

export const useInspectionStore = defineStore('inspection', () => {
  const vehicleId = ref('');
  const vehicleData = ref({})
  function selectVehicle(vehicle: Vehicle) {
    vehicleId.value = vehicle.id
    vehicleData.value = vehicle;
  }

  return { vehicleId, selectVehicle, vehicleData }
})
