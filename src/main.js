import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue';
import App from './App.vue';
import api from './configs/axios';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faUserSecret)

const app = createApp(App);

app.config.globalProperties.$axios = api;
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount('#app')

import "bootstrap/dist/js/bootstrap.js"
