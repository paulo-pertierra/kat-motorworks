<script lang="ts" setup>
const props = defineProps(['status'])

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleCheck, faCircleExclamation, faCircleQuestion, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { ref } from 'vue';
library.add(faCircleCheck, faCircleXmark, faCircleExclamation, faCircleQuestion)
</script>

<template>
  <div class="w-full my-2 p-2 border-2 rounded-xl bg-green-100 border-green-300 text-green-600"
    v-if="props.status === 'GOOD'">
    <h3 class="font-bold text-lg">
      <slot></slot>
    </h3>
    <div class="flex items-center">
      <FontAwesomeIcon class="text-xl" icon="fa-solid fa-circle-check" />
      <h4 class="mx-2 font-bold">Good Condition</h4>
    </div>
  </div>
  <div class="w-full my-2 p-2 border-2 rounded-xl bg-red-50 border-red-400 text-red-800"
    v-else-if="props.status === 'BAD'">
    <h3 class="font-bold text-lg">
      <slot></slot>
    </h3>
    <div class="flex items-center">
      <FontAwesomeIcon class="text-xl animate-ping" icon="fa-solid fa-circle-xmark" />
      <h4 class="mx-2 font-bold">Bad Condition</h4>
    </div>
  </div>
  <div class="w-full my-2 p-2 border-2 rounded-xl bg-orange-50 border-orange-400 text-orange-600"
    v-else-if="props.status === 'MAINTAIN'">
    <h3 class="font-bold text-lg">
      <slot></slot>
    </h3>
    <div class="flex items-center">
      <FontAwesomeIcon class="text-xl animate-pulse" icon="fa-solid fa-circle-exclamation" />
      <h4 class="mx-2 font-bold">Needs Maintenance</h4>
    </div>
  </div>
  <div class="w-full my-2 p-2 border-2 rounded-xl bg-orange-50 border-orange-400 text-orange-600" v-else-if="props.status === 'MISSING'">
    <h3 class="font-bold text-lg"><slot></slot></h3>
    <div class="flex items-center">
      <FontAwesomeIcon class="text-xl animate-pulse" icon="fa-solid fa-circle-question" />
      <h4 class="mx-2 font-bold">Missing Part</h4>
    </div>
  </div>
  <div class="w-full my-2 p-2 border-2 rounded-xl bg-blue-50 border-blue-400 text-blue-600" v-else>
    <h3 class="font-bold text-lg"><slot></slot></h3>
    <div class="flex items-center">
      <FontAwesomeIcon class="text-xl animate-pulse" icon="fa-solid fa-circle-question" />
      <h4 class="mx-2 font-bold">Waiting</h4>
    </div>
  </div>
</template>