import { createRouter, createWebHistory } from 'vue-router'

import home from './pages/home.vue'
import about_me from './pages/about-me.vue'
import contact_me from './pages/contact-me.vue'
import projects from './pages/projects.vue'

export const routes = [
    { path: '/', component: home, name: "Home" },
    { path: '/about-me', component: about_me, name: "About me" },
    { path: '/projects', component: projects, name: "Projects" },
    { path: '/contact-me', component: contact_me, name: "Contact me" },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
