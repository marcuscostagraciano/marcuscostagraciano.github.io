import { createRouter, createWebHistory } from 'vue-router'

import home from './pages/home.vue'
import about_me from './pages/about-me.vue'
import contact_me from './pages/contact-me.vue'

const routes = [
    { path: '/', component: home },
    { path: '/about-me', component: about_me },
    { path: '/contact-me', component: contact_me }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
