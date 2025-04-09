<template>
  <v-card :href="url">
    <v-img :src="imageSrc" position="center bottom" />
    <v-card-title class="text-center">{{ title }}</v-card-title>
    <v-card-text>{{ text }}</v-card-text>
    <v-divider :thickness="2" />
    <v-card-actions class="d-flex justify-space-between">
      <v-btn icon>
        <v-icon size="36">mdi-twitter</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon size="36">mdi-open-in-new</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps<{
  url: string
  imageSrc: string
  title: string
  text: string
}>();
</script>