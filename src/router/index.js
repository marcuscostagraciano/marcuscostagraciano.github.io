import { createRouter, createWebHistory } from 'vue-router'

import home from '../views/HomeView.vue'
import about_me from '../views/AboutMeView.vue'
import contact_me from '../views/ContactMeView.vue'
import projects from '../views/ProjectsListView.vue'

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
