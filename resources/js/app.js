import './bootstrap';
import * as Vue from 'vue';
window.Vue = Vue;

import App from './components/App.vue'

//axios
import VueAxios from 'vue-axios'
import axios from 'axios'


//vue-router
import * as VueRouter from 'vue-router'
import {routes} from './routes'

//import  * as vue from 'vue';

//vue.use(VueAxios, axios)

const router = new VueRouter({
    mode:'history',
    routes: routes
})

const app = new Vue({
    el: '#app',
    router:router,
    render:h => h(App)
})

app.use(router)