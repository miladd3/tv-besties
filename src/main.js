import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { initAxios } from '@/axiosInit.js'

const app = createApp(App)

initAxios()

app.use(createPinia())
app.use(router)

app.mount('#app')
