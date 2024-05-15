import './bootstrap';
// import * as Vue from 'vue';
// window.Vue = Vue;
import { createApp } from 'vue'; 
import VueAxios from 'vue-axios'
import App from './components/App.vue'
import router from './routes'

//axios
createApp(App)
    .use(router)
    .mount('#app')
    
