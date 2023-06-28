<script lang="ts" setup>
import router from '@/router';
import { signOut } from 'firebase/auth';
import { onMounted, reactive, ref } from 'vue';
import { useCurrentUser, useFirebaseAuth } from 'vuefire';
const auth = useFirebaseAuth()!

const user = useCurrentUser()!


async function signOutInspector() {
  await signOut(auth);
  router.push('/')
}
</script>

<template>
  <div class="flex justify-center items-center w-screen h-screen">
    <div class="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
		<img src="https://placehold.co/30?text=KM" alt="" class="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square">
		<div class="space-y-4 text-center divide-y divide-gray-700">
			<div class="my-2 space-y-1">
				<h2 class="text-xl font-semibold sm:text-2xl">{{ user?.email }}</h2>
			</div>
			<div class="flex justify-center pt-2 space-x-4 align-center">
        <button class="bg-blue-700 text-white font-bold p-2 w-full rounded-lg hover:bg-blue-600" @click="signOutInspector()">Log Out</button>  
			</div>
		</div>
	</div>
  </div>
</template>