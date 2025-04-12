<template>
  <v-card class="mx-auto" outlined>
    <v-card-title>{{ Name }}</v-card-title>
    <v-card-subtitle>{{ FullName }}</v-card-subtitle>
    <v-btn v-if="AM" color="primary" class="ma-2" rounded large :to="AMURL">
      {{ AM }}
    </v-btn>
    <v-btn v-else color="primary" class="ma-2" rounded large :to="AMURL">
      午前
    </v-btn>
    <v-btn v-if="PM" color="secondary" class="ma-2" rounded large :to="PMURL">
      {{ PM }}
    </v-btn>
    <v-btn v-else color="secondary" class="ma-2" rounded large :to="PMURL">
      午後
    </v-btn>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps<{
  Name: string
  FullName?: string
  URL?: string
  AM?: string
  AMURL?: string
  PM?: string
  PMURL?: string
}>();
</script>
