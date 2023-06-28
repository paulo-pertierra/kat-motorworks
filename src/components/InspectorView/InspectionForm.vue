<script lang="ts" setup>

import { useCurrentUser, useFirebaseAuth } from 'vuefire';
const auth = useFirebaseAuth()!;

console.log(auth?.currentUser?.displayName)

import { reactive } from 'vue';


import { useFirestore } from 'vuefire';
const db = useFirestore();

import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { useInspectionStore } from '@/stores/inspection';
import type { Inspection } from '@/database/firestore-types';
const inspection = useInspectionStore();

const user = useCurrentUser()!
const userEmail = user.value?.email || "Unknown: Refer to Admin"

const inspectionFormData: Inspection = reactive({
  vehicleId: inspection.vehicleId,
  inspector: userEmail,
  date: Timestamp.fromDate(new Date()),
  underChassis: {
    differential: "GOOD",
    leftSpring: "GOOD",
    wheelBearing: "GOOD",
    brakeShoe: "GOOD",
    brakeChamber: "GOOD",
    centerBolt: "GOOD",
    uBolt: "GOOD",
    steering: "GOOD",
    gearBox: "GOOD",
    airTank: "GOOD",
    hydroVacAssembly: "GOOD",
    clutchBooster9070: "GOOD",
    propellerShaft: "GOOD",
    brakeMaster: "GOOD",
    primaryClutch: "GOOD",
  },
  transmissionAssembly: "GOOD",
  engineAssembly: "GOOD",
  injectionPump: "GOOD",
  electricalParts: {
    headLight: "GOOD",
    domeLamp: "GOOD",
    wiper: "GOOD",
    tireWrench: "GOOD",
    signalLight: "GOOD",
    sunVisor: "GOOD",
    seatBelt: "GOOD",
    earlyWarningDevice: "GOOD",
    tailLight: "GOOD",
    sideViewMirror: "GOOD",
    radiatorCap: "GOOD",
    carJack: "GOOD",
    fogLamp: "GOOD",
    fuelTankCap: "GOOD",
    antenna: "GOOD",
    tools: "GOOD",
    horn: "GOOD",
    wheelCaps: "GOOD",
    stereo: "GOOD",
    spareTire: "GOOD",
  }
})

async function uploadToVehicleDoc() {
  inspectionFormData.vehicleId = inspection.vehicleId;
  const vehicleData = inspection.vehicleData;
  await addDoc(collection(db, 'vehicles', inspection.vehicleId, 'inspections'), {...inspectionFormData, vehicleData})
    .then(() => { alert("Success.") }).catch((error) => { alert("Failed."); console.log(error) })
}

async function uploadToInspectionsColl() {
  inspectionFormData.vehicleId = inspection.vehicleId;
  const vehicleData = inspection.vehicleData;
  await addDoc(collection(db, 'inspections'), {...inspectionFormData, vehicleData})
}

async function uploadInspection() {
  if (!inspection.vehicleId) {
    alert("There is no vehicle to be inspected.")
    return;
  }
  await uploadToVehicleDoc();
  await uploadToInspectionsColl();

  inspection.vehicleId = "";
}
</script>

<template>
  <div class="col-span-2 gap-4 p-4">
    <h1
      class="w-full border-2 h-16 items-center flex justify-center text-2xl lg:text-3xl font-bold bg-blue-600 text-white rounded-3xl">
      Ready for Inspection?</h1>
    <div v-if="inspection.vehicleId">
      <h3 class="text-2xl my-4">Under-chassis</h3>
      <div class="grid grid-cols-1 lg:grid-cols-3">
        <div>
          <label class="block" for="differential">Differential</label>
          <select class="rounded-lg" name="uc-differential" id="" v-model="inspectionFormData.underChassis.differential">
            <option value="GOOD">Good Condition</option>
            <option value="MAINTAIN">Needs Maintenance</option>
            <option value="BAD">Bad Condition</option>
            <option value="MISSING">Missing</option>
          </select>
        </div>
        <div>
          <label class="block" for="differential">Left Spring</label>
          <select class="rounded-lg" name="uc-differential" id="" v-model="inspectionFormData.underChassis.leftSpring">
            <option value="GOOD">Good Condition</option>
            <option value="MAINTAIN">Needs Maintenance</option>
            <option value="BAD">Bad Condition</option>
            <option value="MISSING">Missing</option>
          </select>
        </div>
        <div>
          <label class="block" for="differential">Wheel Bearing</label>
          <select class="rounded-lg" name="uc-differential" id="" v-model="inspectionFormData.underChassis.wheelBearing">
            <option value="GOOD">Good Condition</option>
            <option value="MAINTAIN">Needs Maintenance</option>
            <option value="BAD">Bad Condition</option>
            <option value="MISSING">Missing</option>
          </select>
        </div>
        <div>
          <label class="block" for="differential">Brake Shoe</label>
          <select class="rounded-lg" name="uc-differential" id="" v-model="inspectionFormData.underChassis.brakeShoe">
            <option value="GOOD">Good Condition</option>
            <option value="MAINTAIN">Needs Maintenance</option>
            <option value="BAD">Bad Condition</option>
            <option value="MISSING">Missing</option>
          </select>
        </div>
        <div>
          <label class="block" for="differential">Center Bolt</label>
          <select class="rounded-lg" name="uc-differential" id="" v-model="inspectionFormData.underChassis.centerBolt">
            <option value="GOOD">Good Condition</option>
            <option value="MAINTAIN">Needs Maintenance</option>
            <option value="BAD">Bad Condition</option>
            <option value="MISSING">Missing</option>
          </select>
        </div>
        <div>
          <label class="block" for="differential">U-Bolt</label>
          <select class="rounded-lg" name="uc-differential" id="" v-model="inspectionFormData.underChassis.uBolt">
            <option value="GOOD">Good Condition</option>
            <option value="MAINTAIN">Needs Maintenance</option>
            <option value="BAD">Bad Condition</option>
            <option value="MISSING">Missing</option>
          </select>
        </div>
        <div>
          <label class="block" for="differential">Steering</label>
          <select class="rounded-lg" name="uc-differential" id="" v-model="inspectionFormData.underChassis.steering">
            <option value="GOOD">Good Condition</option>
            <option value="MAINTAIN">Needs Maintenance</option>
            <option value="BAD">Bad Condition</option>
            <option value="MISSING">Missing</option>
          </select>
        </div>
        <div>
          <label class="block" for="differential">Gear Box</label>
          <select class="rounded-lg" name="uc-differential" id="" v-model="inspectionFormData.underChassis.gearBox">
            <option value="GOOD">Good Condition</option>
            <option value="MAINTAIN">Needs Maintenance</option>
            <option value="BAD">Bad Condition</option>
            <option value="MISSING">Missing</option>
          </select>
        </div>
        <div>
          <label class="block" for="differential">Air Tank</label>
          <select class="rounded-lg" name="uc-differential" id="" v-model="inspectionFormData.underChassis.airTank">
            <option value="GOOD">Good Condition</option>
            <option value="MAINTAIN">Needs Maintenance</option>
            <option value="BAD">Bad Condition</option>
            <option value="MISSING">Missing</option>
          </select>
        </div>
        <div>
          <label class="block" for="differential">Hydro Vac Assembly</label>
          <select class="rounded-lg" name="uc-differential" id=""
            v-model="inspectionFormData.underChassis.hydroVacAssembly">
            <option value="GOOD">Good Condition</option>
            <option value="MAINTAIN">Needs Maintenance</option>
            <option value="BAD">Bad Condition</option>
            <option value="MISSING">Missing</option>
          </select>
        </div>
        <div>
          <label class="block" for="differential">Clutch Booster 90/70</label>
          <select class="rounded-lg" name="uc-differential" id=""
            v-model="inspectionFormData.underChassis.clutchBooster9070">
            <option value="GOOD">Good Condition</option>
            <option value="MAINTAIN">Needs Maintenance</option>
            <option value="BAD">Bad Condition</option>
            <option value="MISSING">Missing</option>
          </select>
        </div>
        <div>
          <label class="block" for="differential">Propeller Shaft</label>
          <select class="rounded-lg" name="uc-differential" id=""
            v-model="inspectionFormData.underChassis.propellerShaft">
            <option value="GOOD">Good Condition</option>
            <option value="MAINTAIN">Needs Maintenance</option>
            <option value="BAD">Bad Condition</option>
            <option value="MISSING">Missing</option>
          </select>
        </div>
        <div>
          <label class="block" for="differential">Brake Master</label>
          <select class="rounded-lg" name="uc-differential" id="" v-model="inspectionFormData.underChassis.brakeMaster">
            <option value="GOOD">Good Condition</option>
            <option value="MAINTAIN">Needs Maintenance</option>
            <option value="BAD">Bad Condition</option>
            <option value="MISSING">Missing</option>
          </select>
        </div>
        <div>
          <label class="block" for="differential">Primary Clutch</label>
          <select class="rounded-lg" name="uc-differential" id="" v-model="inspectionFormData.underChassis.primaryClutch">
            <option value="GOOD">Good Condition</option>
            <option value="MAINTAIN">Needs Maintenance</option>
            <option value="BAD">Bad Condition</option>
            <option value="MISSING">Missing</option>
          </select>
        </div>
      </div>
      <h3 class="text-2xl my-4">Transmission Assembly</h3>
      <div>
        <label class="block" for="differential">Transmission Assembly</label>
        <select class="rounded-lg" name="uc-differential" id="" v-model="inspectionFormData.transmissionAssembly">
          <option value="GOOD">Good Condition</option>
          <option value="MAINTAIN">Needs Maintenance</option>
          <option value="BAD">Bad Condition</option>
          <option value="MISSING">Missing</option>
        </select>
      </div>
      <h3 class="text-2xl my-4">Engine Assembly</h3>
      <div>
        <label class="block" for="differential">Engine Assembly</label>
        <select class="rounded-lg" name="uc-differential" id="" v-model="inspectionFormData.engineAssembly">
          <option value="GOOD">Good Condition</option>
          <option value="MAINTAIN">Needs Maintenance</option>
          <option value="BAD">Bad Condition</option>
          <option value="MISSING">Missing</option>
        </select>
      </div>
      <h3 class="text-2xl my-4">Electrical Parts</h3>
      <div class="grid grid-cols-1 lg:grid-cols-3">
        <div>
          <label class="block" for="differential">Head Light</label>
          <select class="rounded-lg" name="uc-differential" id="" v-model="inspectionFormData.electricalParts.headLight">
            <option value="GOOD">Good Condition</option>
            <option value="MAINTAIN">Needs Maintenance</option>
            <option value="BAD">Bad Condition</option>
            <option value="MISSING">Missing</option>
          </select>
        </div>
        <div>
          <label class="block" for="differential">Dome Lamp</label>
          <select class="rounded-lg" name="uc-differential" id="" v-model="inspectionFormData.electricalParts.domeLamp">
            <option value="GOOD">Good Condition</option>
            <option value="MAINTAIN">Needs Maintenance</option>
            <option value="BAD">Bad Condition</option>
            <option value="MISSING">Missing</option>
          </select>
        </div>
        <div>
          <label class="block" for="differential">Wiper</label>
          <select class="rounded-lg" name="uc-differential" id="" v-model="inspectionFormData.electricalParts.wiper">
            <option value="GOOD">Good Condition</option>
            <option value="MAINTAIN">Needs Maintenance</option>
            <option value="BAD">Bad Condition</option>
            <option value="MISSING">Missing</option>
          </select>
        </div>
        <div>
          <label class="block" for="differential">Tire Wrench</label>
          <select class="rounded-lg" name="uc-differential" id="" v-model="inspectionFormData.electricalParts.tireWrench">
            <option value="GOOD">Good Condition</option>
            <option value="MAINTAIN">Needs Maintenance</option>
            <option value="BAD">Bad Condition</option>
            <option value="MISSING">Missing</option>
          </select>
        </div>
        <div>
          <label class="block" for="differential">Signal Light</label>
          <select class="rounded-lg" name="uc-differential" id="" v-model="inspectionFormData.electricalParts.signalLight">
            <option value="GOOD">Good Condition</option>
            <option value="MAINTAIN">Needs Maintenance</option>
            <option value="BAD">Bad Condition</option>
            <option value="MISSING">Missing</option>
          </select>
        </div>
        <div>
          <label class="block" for="differential">Sun Visor</label>
          <select class="rounded-lg" name="uc-differential" id="" v-model="inspectionFormData.electricalParts.sunVisor">
            <option value="GOOD">Good Condition</option>
            <option value="MAINTAIN">Needs Maintenance</option>
            <option value="BAD">Bad Condition</option>
            <option value="MISSING">Missing</option>
          </select>
        </div>
        <div>
          <label class="block" for="differential">Seat Belt</label>
          <select class="rounded-lg" name="uc-differential" id="" v-model="inspectionFormData.electricalParts.seatBelt">
            <option value="GOOD">Good Condition</option>
            <option value="MAINTAIN">Needs Maintenance</option>
            <option value="BAD">Bad Condition</option>
            <option value="MISSING">Missing</option>
          </select>
        </div>
        <div>
          <label class="block" for="differential">Early Warning Device</label>
          <select class="rounded-lg" name="uc-differential" id="" v-model="inspectionFormData.electricalParts.earlyWarningDevice">
            <option value="GOOD">Good Condition</option>
            <option value="MAINTAIN">Needs Maintenance</option>
            <option value="BAD">Bad Condition</option>
            <option value="MISSING">Missing</option>
          </select>
        </div>
        <div>
          <label class="block" for="differential">Tail Light</label>
          <select class="rounded-lg" name="uc-differential" id="" v-model="inspectionFormData.electricalParts.tailLight">
            <option value="GOOD">Good Condition</option>
            <option value="MAINTAIN">Needs Maintenance</option>
            <option value="BAD">Bad Condition</option>
            <option value="MISSING">Missing</option>
          </select>
        </div>
        <div>
          <label class="block" for="differential">Side View Mirror</label>
          <select class="rounded-lg" name="uc-differential" id="" v-model="inspectionFormData.electricalParts.sideViewMirror">
            <option value="GOOD">Good Condition</option>
            <option value="MAINTAIN">Needs Maintenance</option>
            <option value="BAD">Bad Condition</option>
            <option value="MISSING">Missing</option>
          </select>
        </div>
        <div>
          <label class="block" for="differential">Radiator Cap</label>
          <select class="rounded-lg" name="uc-differential" id="" v-model="inspectionFormData.electricalParts.radiatorCap">
            <option value="GOOD">Good Condition</option>
            <option value="MAINTAIN">Needs Maintenance</option>
            <option value="BAD">Bad Condition</option>
            <option value="MISSING">Missing</option>
          </select>
        </div>
        <div>
          <label class="block" for="differential">Car Jack</label>
          <select class="rounded-lg" name="uc-differential" id="" v-model="inspectionFormData.electricalParts.carJack">
            <option value="GOOD">Good Condition</option>
            <option value="MAINTAIN">Needs Maintenance</option>
            <option value="BAD">Bad Condition</option>
            <option value="MISSING">Missing</option>
          </select>
        </div>
        <div>
          <label class="block" for="differential">Fog Lamp</label>
          <select class="rounded-lg" name="uc-differential" id="" v-model="inspectionFormData.electricalParts.fogLamp">
            <option value="GOOD">Good Condition</option>
            <option value="MAINTAIN">Needs Maintenance</option>
            <option value="BAD">Bad Condition</option>
            <option value="MISSING">Missing</option>
          </select>
        </div>
        <div>
          <label class="block" for="differential">Fuel Tank Cap</label>
          <select class="rounded-lg" name="uc-differential" id="" v-model="inspectionFormData.electricalParts.fuelTankCap">
            <option value="GOOD">Good Condition</option>
            <option value="MAINTAIN">Needs Maintenance</option>
            <option value="BAD">Bad Condition</option>
            <option value="MISSING">Missing</option>
          </select>
        </div>
        <div>
          <label class="block" for="differential">Antenna</label>
          <select class="rounded-lg" name="uc-differential" id="" v-model="inspectionFormData.electricalParts.antenna">
            <option value="GOOD">Good Condition</option>
            <option value="MAINTAIN">Needs Maintenance</option>
            <option value="BAD">Bad Condition</option>
            <option value="MISSING">Missing</option>
          </select>
        </div>
        <div>
          <label class="block" for="differential">Tools</label>
          <select class="rounded-lg" name="uc-differential" id="" v-model="inspectionFormData.electricalParts.tools">
            <option value="GOOD">Good Condition</option>
            <option value="MAINTAIN">Needs Maintenance</option>
            <option value="BAD">Bad Condition</option>
            <option value="MISSING">Missing</option>
          </select>
        </div>
        <div>
          <label class="block" for="differential">Horn</label>
          <select class="rounded-lg" name="uc-differential" id="" v-model="inspectionFormData.electricalParts.horn">
            <option value="GOOD">Good Condition</option>
            <option value="MAINTAIN">Needs Maintenance</option>
            <option value="BAD">Bad Condition</option>
            <option value="MISSING">Missing</option>
          </select>
        </div>
        <div>
          <label class="block" for="differential">Wheel Caps</label>
          <select class="rounded-lg" name="uc-differential" id="" v-model="inspectionFormData.electricalParts.wheelCaps">
            <option value="GOOD">Good Condition</option>
            <option value="MAINTAIN">Needs Maintenance</option>
            <option value="BAD">Bad Condition</option>
            <option value="MISSING">Missing</option>
          </select>
        </div>
        <div>
          <label class="block" for="differential">Stereo</label>
          <select class="rounded-lg" name="uc-differential" id="" v-model="inspectionFormData.electricalParts.stereo">
            <option value="GOOD">Good Condition</option>
            <option value="MAINTAIN">Needs Maintenance</option>
            <option value="BAD">Bad Condition</option>
            <option value="MISSING">Missing</option>
          </select>
        </div>
        <div>
          <label class="block" for="differential">Spare Tire</label>
          <select class="rounded-lg" name="uc-differential" id="" v-model="inspectionFormData.electricalParts.spareTire">
            <option value="GOOD">Good Condition</option>
            <option value="MAINTAIN">Needs Maintenance</option>
            <option value="BAD">Bad Condition</option>
            <option value="MISSING">Missing</option>
          </select>
        </div>
      </div>
      <button class="w-full my-4 bg-blue-600 text-white font-bold h-10 rounded-lg hover:bg-blue-400" @click.prevent="uploadInspection()">Finish Inspection</button>
    </div>
    <div>
    </div>
  </div>
</template>