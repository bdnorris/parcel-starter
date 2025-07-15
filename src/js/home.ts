import '../scss/home.scss';

import './scripts/home';

// https://parceljs.org/languages/vue/
import { createApp } from 'vue';
import App from './scripts/vue-app.vue';
const app = createApp(App);
app.mount('#app');
