import './css/app.css';
import App from "./App.vue";
import { createApp } from "vue";
import router from "./router/index.js";
import { createPinia } from 'pinia'

const app = createApp(App);
const pinia = createPinia();
app.use(pinia)
app.use(router)
app.mount("#app")
