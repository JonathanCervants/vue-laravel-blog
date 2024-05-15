import { createRouter,createWebHistory, RouteRecordRaw } from 'vue-router'

import Home from './components/Home.vue';
import Mostrar from './components/Mostrar.vue';
import Contacto from './components/Contacto.vue';

const routes: RouteRecordRaw[] =[
    {
        path: '/',
        name:'Home',
        component: Home
    },  
    {
        path: '/mostrar',
        name:'Mostrar',
        component: Mostrar
    }, 
    {
        path: '/contacto',
        name:'Contacto',
        component: Contacto
    }
]

const router = createRouter({
    
                    
    history: createWebHistory(),
    routes,
})

export default router;