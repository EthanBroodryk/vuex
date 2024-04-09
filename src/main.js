import { createApp } from 'vue';
import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import store from './store'; //change the location as per your project directory (if needed)
// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.use(Vuetify)
const app = createApp(App);
app.use(store);
app.mount('#app');