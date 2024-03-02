<script setup>
const props = defineProps(['theme'])

</script>

<template>
  <v-app-bar density="comfortable" scroll-behavior="hide" scroll-threshold="1">
    <v-col class="d-none d-sm-block">
      <v-app-bar-title class="text-center font-weight-black">
        Marcus Vinicius' Portfolio
      </v-app-bar-title>
    </v-col>

    <v-col class="text-center text-md-right">
      <v-btn @click="$emit('change-Theme')" :icon="theme ? 'mdi-white-balance-sunny' : 'mdi-weather-night'"
        :color="theme ? 'yellow' : 'black'"></v-btn>
      <v-btn class="px-2 py-0"><router-link to="/">Home</router-link></v-btn>
      <v-btn class="px-2 py-0"><router-link to="/about-me">About Me</router-link></v-btn>
      <v-btn class="px-2 py-0"><router-link to="/contact-me">Contact Me</router-link></v-btn>
    </v-col>
  </v-app-bar>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>
