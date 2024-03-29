import './style.css'

import { createApp } from 'vue'
import { router } from './router'
import { vuetify } from './vuetify'

import App from './App.vue'

createApp(App)
    .use(router)
    .use(vuetify)
    .mount('#app')
