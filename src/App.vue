<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser, faHouse, faTable } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faTable, faHouse, faUser)

</script>

<template>
  <div class="flex flex-col min-h-screen">
  <div class="flex-1">
    <!-- Content of the page -->
    <RouterView />
  </div>
  <div class="sticky bottom-2">
    <!-- Content of the sticky element -->
      <div class="bg-white flex items-center justify-center border-2 w-fit mx-auto h-12 overflow-hidden rounded-lg text-blue-800">
        <RouterLink to="/dashboard/user" class="block">
          <FontAwesomeIcon class="text-2xl px-6 hover:text-blue-600 transition-all" icon="fa-solid fa-user" />
        </RouterLink>
        <RouterLink to="/dashboard/main" class="block rounded-full hover:bg-gray-200 transition-all duration-200 border-2">
          <FontAwesomeIcon class="text-2xl p-6 hover:text-blue-600 transition-all ease-in-out duration-100" icon="fa-solid fa-house" />
        </RouterLink>
        <RouterLink to="/dashboard/tables" class="block rounded-full">
          <FontAwesomeIcon class="text-2xl px-6 hover:text-blue-600 transition-all ease-in-out duration-100" icon="fa-solid fa-table" />
        </RouterLink>
      </div>
  </div>
</div>
</template>