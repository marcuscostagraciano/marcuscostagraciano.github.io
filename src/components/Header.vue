<script setup>
import { onBeforeMount, onMounted, ref } from 'vue';
import { routes } from '../router'

defineProps({ theme: Boolean })
const windowWidth = ref(0)
const isMobile = ref(false)
const mobileNav = ref(false)

function checkScreenWidth() {
  windowWidth.value = window.innerWidth
  if (windowWidth.value < 1024) {
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


</script>

<template>
  <v-app-bar density="comfortable" scroll-behavior="hide" scroll-threshold="1" id="app-bar">
    <v-col id="app-bar-title">
      <v-app-bar-title class="text-center font-weight-black">
        Marcus Vinicius' Portfolio
      </v-app-bar-title>
    </v-col>

    <!-- QUEBRA ATÉ 918 -->
    <v-col id="app-navbar">
      <v-col class="text-right" id="button-col">
        <v-btn @click="$emit('change-Theme')" :icon="theme ? 'mdi-white-balance-sunny' : 'mdi-weather-night'"
          :color="theme ? 'yellow' : 'black'"></v-btn>
      </v-col>

      <v-col v-show="!isMobile" class="" id="desktop-navbar">
        <v-btn v-for="route in routes" class="px-2 py-0">
          <router-link :to="route.path">{{ route.name }}</router-link>
        </v-btn>
      </v-col>

      <v-col v-show="isMobile" class="text-right" id="mobile-navbar">
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
    </v-col>

  </v-app-bar>
</template>

<style scoped>
/* VUE Cols = 12
    1 Col to CSS = 8.3
*/

#app-bar-title {
  @media screen and (max-width: 768px) {
    flex: 0 0 58%;
    max-width: 58%;
  }

  @media screen and (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

#app-navbar {
  justify-content: right !important;
  justify-items: right !important;
  display: flex;
  flex: 1;
}

#button-col {
  @media screen and (max-width: 768px) {
    /* 100 / 12 = 8.3 */
    flex: 0 0 80%;
    max-width: 80%;
  }

  @media screen and (min-width: 768px) {
    flex: 0 0 30%;
    max-width: 30%;
  }
}

#desktop-navbar {
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    margin: 1vh auto 0px;
  }
}

#mobile-navbar {
  justify-content: right;
  display: flex;
  flex: 0 0 20%;
  max-width: 20%;

  @media screen and (width: 320px) {
    max-width: 50%;
  }
}

a {
  text-decoration: none;
}
</style>../router/router.js
