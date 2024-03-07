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
}

onBeforeMount(() => {
  window.addEventListener("resize", checkScreenWidth)
  checkScreenWidth()
})

// function toggleMobileNav() {
//   mobileNav.value = !mobileNav.value
//   console.log(mobileNav.value)
// }

</script>

<template>
  <v-app-bar density="comfortable" scroll-behavior="hide" scroll-threshold="1">
    <v-col>
      <v-app-bar-title class="text-center font-weight-black">
        Marcus Vinicius' Portfolio
      </v-app-bar-title>
    </v-col>

    <!-- QUEBRA ATÉ 918 -->
    <v-col v-show="!isMobile" class="text-center text-md-right">
      <v-btn @click="$emit('change-Theme')" :icon="theme ? 'mdi-white-balance-sunny' : 'mdi-weather-night'"
        :color="theme ? 'yellow' : 'black'"></v-btn>

      <v-btn v-for="route in routes" class="px-2 py-0"><router-link :to="route.path">{{ route.name
          }}</router-link></v-btn>
    </v-col>

    <v-col v-show="isMobile" class="text-right">
      <v-btn @click="$emit('change-Theme')" :icon="theme ? 'mdi-white-balance-sunny' : 'mdi-weather-night'"
        :color="theme ? 'yellow' : 'black'"></v-btn>

      <v-menu location="bottom">
        <template v-slot:activator="{ props }">
          <v-btn color="primary" dark v-bind="props" icon="mdi-menu">
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="route in routes">
            <v-list-item-title class="text-button text-center"><router-link :to="route.path">{{ route.name
                }}</router-link></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-col>

  </v-app-bar>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>
