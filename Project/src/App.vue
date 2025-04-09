<template>
  <v-app>
    <Appbar />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts" setup>
import Appbar from './components/Appbar.vue'
import Footer from './components/Footer.vue';
</script>
