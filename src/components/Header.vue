<script setup>
import { onBeforeMount, onMounted, ref } from 'vue';
import { routes } from '../router.js'

defineProps({ theme: Boolean })
const windowWidth = ref(0)
const isMobile = ref(false)
const mobileNav = ref(false)

function checkScreenWidth() {
  windowWidth.value = window.innerWidth
  if (windowWidth.value <= 768) {
    isMobile.value = true
  }
  else {
    isMobile.value = false
    mobileNav.value = false
  }

  console.log("WINDOW WIDTH:", windowWidth.value)
  console.log("ISMOBILE:", isMobile.value)
  console.log("MOBILENAV:", mobileNav.value)
}

onBeforeMount(() => {
  window.addEventListener("resize", checkScreenWidth)
  checkScreenWidth()
})

function toggleMobileNav() {
  mobileNav.value = !mobileNav.value
  console.log(mobileNav.value)
}

</script>


<!-- QUEBRA ATÉ 918 -->

<template>
  <v-app-bar density="comfortable" scroll-behavior="hide" scroll-threshold="1">
    <v-col>
      <v-app-bar-title class="text-center font-weight-black">
        Marcus Vinicius' Portfolio
      </v-app-bar-title>
    </v-col>

    <v-col v-show="!isMobile" class="text-center text-md-right">
      <v-btn @click="$emit('change-Theme')" :icon="theme ? 'mdi-white-balance-sunny' : 'mdi-weather-night'"
        :color="theme ? 'yellow' : 'black'"></v-btn>

      <v-btn v-for="route in routes" class="px-2 py-0"><router-link :to="route.path">{{ route.name
          }}</router-link></v-btn>
    </v-col>

    <v-col v-show="isMobile" class="text-right">
      <v-btn icon="mdi-menu" @click="toggleMobileNav"></v-btn>

      <ul v-show="mobileNav">
        <li v-for="route in routes"><router-link :to="route.path">{{ route.name
            }}</router-link></li>
      </ul>
    </v-col>

  </v-app-bar>
</template>

<style scoped>
ul {
  display: block;
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  height: 100vh;
  width: 50vw;
  overflow: visible;
  background-color: yellow;
}

ul li {
  align-items: center;
  display: flex;
  justify-content: center;
  list-style: none;
}

a {
  text-decoration: none;
}
</style>
