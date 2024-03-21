import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from "@/router/router.js";
import '@vueform/toggle/themes/default.css'


import './style.css'
import App from './App.vue'
import 'primeicons/primeicons.css'

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount('#app')
