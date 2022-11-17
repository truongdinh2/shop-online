import App from "./App.vue";
import { createApp } from "vue";
import router from "./router/index.js";
import { createPinia } from 'pinia'
import './assets/scss/index.scss';
import vue3StarRatings from "vue3-star-ratings";
import vuetify from './plugins/vuetify'
const app = createApp(App);
import './validators';

const pinia = createPinia();
app.component('star-rating',vue3StarRatings)
app.use(pinia)
app.use(vuetify)
app.use(router)
app.mount("#app")
