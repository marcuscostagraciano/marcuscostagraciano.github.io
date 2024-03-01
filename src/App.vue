<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <v-app theme="dark">
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<style scoped>
html {
  height: 100vh;
}
</style>
