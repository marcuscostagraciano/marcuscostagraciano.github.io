<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

import { ref } from 'vue'

const theme = ref(false)

function changeTheme() {
  theme.value = !theme.value
}

</script>

<template>
  <v-app :theme="theme ? 'dark' : 'light'">
    <Header @change-Theme="changeTheme" :theme="theme" />

    <Suspense>
      <v-main>
        <template #default>
          <routerView />
        </template>
        <template #fallback>
          <span>Loading...</span>
        </template>
      </v-main>
    </Suspense>

    <!-- <v-main>
      <router-view />
    </v-main> -->

    <Footer />
  </v-app>
</template>

<style scoped>
html {
  height: 100vh;
}
</style>
