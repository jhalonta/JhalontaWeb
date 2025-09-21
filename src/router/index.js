// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Contacto from '../pages/Contacto.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/contacto', name: 'contacto', component: Contacto },
        { path: '/:pathMatch(.*)*', redirect: '/' }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition
        return { top: 0 }
    }
})

export default router
