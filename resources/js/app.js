import './bootstrap';
// import * as Vue from 'vue';
// window.Vue = Vue;
import { createApp } from 'vue'; 
import VueAxios from 'vue-axios'
import App from './components/App.vue'
import router from './routes'

//axios
import axios from 'axios'


createApp(App)
    .use(router)
    .use(VueAxios)
    .mount('#app')
    
//vue-router
//vue.use(VueAxios, axios)

// const router = new VueRouter({
//     mode:'history',
//     routes: routes
// })

// const app = new Vue({
//     el: '#app',
//     router:router,
//     render:h => h(App)
// })

