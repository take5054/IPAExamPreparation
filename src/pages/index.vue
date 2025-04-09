<template>
  <HeaderParallax text="TOP" />
  <v-container class="my-12">
    <v-row>
      <v-col>
        <h1>Top Page</h1>
        <v-divider :thickness="5" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import HeaderParallax from '@/components/HeaderParallax.vue';
</script>
