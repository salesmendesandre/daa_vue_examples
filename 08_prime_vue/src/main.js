import { createApp } from 'vue'
import './style.css'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import App from './App.vue'
import { router } from './router'
import { createPinia } from 'pinia'
import ToastService from 'primevue/toastservice'

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})
app.use(router)
app.use(createPinia())
app.use(ToastService)

app.mount('#app')