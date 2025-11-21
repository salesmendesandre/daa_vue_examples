import "primeicons/primeicons.css";
import "./style.css";
import "./flags.css";


import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Aura from '@primevue/themes/aura'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'

import ConfirmationService from 'primevue/confirmationservice'
import DialogService from 'primevue/dialogservice'
import ToastService from 'primevue/toastservice';
import Noir from './presets/Noir.js';
import App from "./App.vue";



const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Noir,
        options: {
            prefix: 'p',
            cssLayer: false,
        }
    }
});

app.use(ConfirmationService);
app.use(ToastService);
app.use(DialogService);



app.mount("#app");
