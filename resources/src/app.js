import './bootstrap.js';
import './css/app.css';
import App from "./App.vue";
import { createApp } from "vue";
import router from "./router/index.js";

const app = createApp(App)
app.use(router)
app.mount("#app")
