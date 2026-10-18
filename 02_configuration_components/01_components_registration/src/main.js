import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import TarjetaInfo from './components/TarjetaInfo.vue'

const app = createApp(App)
app.component('TarjetaInfo', TarjetaInfo)
app.mount('#app')
