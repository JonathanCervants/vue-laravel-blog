import { createRouter,createWebHistory, RouteRecordRaw } from 'vue-router'

import Home from './components/Home.vue';
import Contacto from './components/Contacto.vue';
import Mostrar from './components/blog/Mostrar.vue';
import Crear from './components/blog/Crear.vue';

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
        path: '/crear',
        name:'crearBlog',
        component: Crear
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