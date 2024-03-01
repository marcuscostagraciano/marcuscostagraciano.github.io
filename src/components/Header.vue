<script setup>
const props = defineProps(['theme'])

</script>

<template>
  <v-app-bar density="comfortable" scroll-behavior="hide" scroll-threshold="1">
    <v-app-bar-title class="text-center d-none d-sm-inline">
      Marcus Vinicius' Portfolio
    </v-app-bar-title>

    <v-btn @click="$emit('change-Theme')" :icon="theme ? 'mdi-lightbulb-on' : 'mdi-lightbulb-off'"></v-btn>
    <v-btn><router-link to="/">Home</router-link></v-btn>
    <v-btn><router-link to="/about-me">About Me</router-link></v-btn>
    <v-btn><router-link to="/contact-me">Contact Me</router-link></v-btn>
  </v-app-bar>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  padding: 50px;
  background: blue;
}

.navbar ul {
  display: flex;
}

.navbar ul li {
  text-decoration: none;
  list-style: none;
  margin: -1em 2rem;
}

a {
  text-decoration: none !important;
}
</style>
