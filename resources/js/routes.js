import { createRouter,createWebHistory } from 'vue-router'

const Home = ()=> import('./components/Home.vue')
const Mostrar = ()=> import('./components/Mostrar.vue')
const Contacto = ()=> import('./components/Contacto.vue')


export const routes=[
    {
        path: '/', component: 'Home'},
    {
        path: '/mostrar', component: 'Mostrar',}, 
    {
        path: '/contacto', component: 'Contacto'}
    
]

const router = createRouter({
    //history navigation
    history: createWebHistory(),
    routes,
})