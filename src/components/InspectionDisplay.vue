<script lang="ts" setup>
import { useRoute } from 'vue-router';
const route = useRoute()
const inspectionId = route.params.id

import { db } from '@/database/firebase';
import { useCurrentUser, useDocument } from 'vuefire';
import { collection, doc } from 'firebase/firestore';
import { ref } from 'vue';
const inspection = ref(useDocument(doc(collection(db, 'inspections'), inspectionId as string)))

import PartConditions from '@/components/InspectionDisplayStatus/PartConditions.vue'

const user = useCurrentUser()

</script>

<template>
  <main class="w-full border-dashed mx-auto mb-4">
    <h1 class="border-2 p-4 text-2xl shadow-md">Inspection Details</h1>
    <div class="border-2 md:m-16">
      <div class="font-bold text-lg m-4 text-center">
        <div>{{ inspection?.vehicleData.make }} {{ inspection?.vehicleData.model }} - Plate: {{ inspection?.vehicleData.plate_number }} | Driven By: {{ inspection?.vehicleData.driver }}</div>
        <div>Inspected by: {{ inspection?.inspector }}</div>
      </div>
      <h2 class="text-2xl font-bold">Under Chassis</h2>
      <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-2 p-2">
        <!-- start detail card -->
        <PartConditions :status="inspection?.underChassis.differential">Differential</PartConditions>
        <PartConditions :status="inspection?.underChassis.leftSpring">Left Spring</PartConditions>
        <PartConditions :status="inspection?.underChassis.wheelBearing">Wheel Bearing</PartConditions>
        <PartConditions :status="inspection?.underChassis.brakeShoe">Brake Shoe</PartConditions>
        <PartConditions :status="inspection?.underChassis.brakeChamber">Brake Chamber</PartConditions>
        <PartConditions :status="inspection?.underChassis.centerBolt">Center Bolt</PartConditions>
        <PartConditions :status="inspection?.underChassis.uBolt">U-Bolt</PartConditions>
        <PartConditions :status="inspection?.underChassis.steering">Steering</PartConditions>
        <PartConditions :status="inspection?.underChassis.gearBox">Gear Box</PartConditions>
        <PartConditions :status="inspection?.underChassis.airTank">Air Tank</PartConditions>
        <PartConditions :status="inspection?.underChassis.hydroVacAssembly">Hydrovac Assembly</PartConditions>
        <PartConditions :status="inspection?.underChassis.clutchBooster9070">Clutch Booster 90/70</PartConditions>
        <PartConditions :status="inspection?.underChassis.propellerShaft">Propeller Shaft</PartConditions>
        <PartConditions :status="inspection?.underChassis.brakeMaster">Brake Master</PartConditions>
        <PartConditions :status="inspection?.underChassis.primaryClutch">Primary Clutch</PartConditions>
      </div>
      <div class=" p-2">
        <h2 class="text-2xl font-bold">Transmission Assembly</h2>
      <PartConditions :status="inspection?.transmissionAssembly">Differential</PartConditions>
      </div>
      <div class="p-2">
        <h2 class="text-2xl font-bold">Engine Assembly</h2>
        <PartConditions :status="inspection?.transmissionAssembly">Differential</PartConditions>
      </div>
      <div class="p-2">
        <h2 class="text-2xl font-bold">Injection Pump</h2>
        <PartConditions :status="inspection?.transmissionAssembly">Differential</PartConditions>
        <h2 class="text-2xl font-bold">Electrical Parts</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2">
        <!-- start detail card -->
        <PartConditions :status="inspection?.underChassis.differential">Head Light</PartConditions>
        <PartConditions :status="inspection?.underChassis.leftSpring">Dome Lamp</PartConditions>
        <PartConditions :status="inspection?.underChassis.wheelBearing">Wiper</PartConditions>
        <PartConditions :status="inspection?.underChassis.brakeShoe">Tire Wrench</PartConditions>
        <PartConditions :status="inspection?.underChassis.brakeChamber">Signal Light</PartConditions>
        <PartConditions :status="inspection?.underChassis.centerBolt">Suun Visor</PartConditions>
        <PartConditions :status="inspection?.underChassis.uBolt">Seat Belt</PartConditions>
        <PartConditions :status="inspection?.underChassis.steering">Early Warning Device</PartConditions>
        <PartConditions :status="inspection?.underChassis.gearBox">Tail Light</PartConditions>
        <PartConditions :status="inspection?.underChassis.airTank">Side View Mirror</PartConditions>
        <PartConditions :status="inspection?.underChassis.hydroVacAssembly">Radiator Cap</PartConditions>
        <PartConditions :status="inspection?.underChassis.differential">Car Jack</PartConditions>
        <PartConditions :status="inspection?.underChassis.leftSpring">Fog Lamp</PartConditions>
        <PartConditions :status="inspection?.underChassis.wheelBearing">Fuel Tank Cap</PartConditions>
        <PartConditions :status="inspection?.underChassis.brakeShoe">Antenna</PartConditions>
        <PartConditions :status="inspection?.underChassis.brakeChamber">Tools</PartConditions>
        <PartConditions :status="inspection?.underChassis.centerBolt">Horn</PartConditions>
        <PartConditions :status="inspection?.underChassis.uBolt">Wheel Caps</PartConditions>
        <PartConditions :status="inspection?.underChassis.steering">Stereo</PartConditions>
        <PartConditions :status="inspection?.underChassis.gearBox">Spare Tire</PartConditions>
      </div>
    </div>
  </main>
</template>