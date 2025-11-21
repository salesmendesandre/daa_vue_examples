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
import { subscribeToAuth } from '@/services/authService'
import { useUserStore } from '@/stores/user'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})
app.use(router)
app.use(pinia)
app.use(ToastService)

let appMounted = false

subscribeToAuth((user) => {
    console.log('Auth state changed:', user)
    const userStore = useUserStore(pinia)
    userStore.currentUser = user

    if (!appMounted) {
        app.mount('#app')
        appMounted = true
    }
})