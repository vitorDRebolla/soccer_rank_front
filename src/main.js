import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue';
import App from './App.vue';
import api from './configs/axios';

const app = createApp(App);

app.config.globalProperties.$axios = api;
app.mount('#app')

import "bootstrap/dist/js/bootstrap.js"
