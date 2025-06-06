import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Vueform from '@vueform/vueform';
import vueformConfig from './vueform.config.js';

library.add(faInstagram, faFacebook, faLinkedin);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(Vueform, vueformConfig);
app.use(router);

app.mount('#app');