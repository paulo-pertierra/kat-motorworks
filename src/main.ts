// TailwindCSS
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './database/firebase'
app.use(VueFire, {
  firebaseApp,
  modules: [
    VueFireAuth()
  ]
})

import { createPinia } from 'pinia'
app.use(createPinia())

import router from './router'
app.use(router)

app.mount('#app')
