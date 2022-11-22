import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import { createPinia } from 'pinia'
import vue3StarRatings from "vue3-star-ratings";
import vuetify from './plugins/vuetify'
import './assets/scss/index.scss';
import './validation.js';
const app = createApp(App);

const pinia = createPinia();
app.component('star-rating',vue3StarRatings)
app.use(pinia)
app.use(vuetify)
app.use(router)
app.mount("#app")
