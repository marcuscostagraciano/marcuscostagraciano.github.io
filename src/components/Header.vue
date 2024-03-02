<script setup>
const props = defineProps(['theme'])

</script>

<template>
  <v-app-bar density="comfortable" scroll-behavior="hide" scroll-threshold="1">
    <v-app-bar-title class="text-center d-none d-sm-inline">
      Marcus Vinicius' Portfolio
    </v-app-bar-title>

    <v-btn @click="$emit('change-Theme')" :icon="theme ? 'mdi-white-balance-sunny' : 'mdi-weather-night'"
      :color="theme ? 'yellow' : 'black'"></v-btn>
    <v-btn><router-link to="/">Home</router-link></v-btn>
    <v-btn><router-link to="/about-me">About Me</router-link></v-btn>
    <v-btn><router-link to="/contact-me">Contact Me</router-link></v-btn>
  </v-app-bar>
</template>

<style scoped>
a {
  text-decoration: none !important;
}
</style>
