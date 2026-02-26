import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './style.css'
import 'primeicons/primeicons.css'

import App from './App.vue'
import { setupPrimeVue } from './plugins/primevue'
import router from './router'

const app = createApp(App)

// Registrar Pinia
const pinia = createPinia()
app.use(pinia)

// Plugins y router
setupPrimeVue(app)
app.use(router)

app.mount('#app')