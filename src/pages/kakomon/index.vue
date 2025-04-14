<template>
  <HeaderParallax text="過去問" />
  <v-container class="my-12">
    <v-row>
      <v-col>
        <h1>過去問</h1>
        <v-divider :thickness="5" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <ExamCategory Name="FE" FullName="基本情報技術者試験" AM="科目A" PM="科目B" AMURL="/kakomon/FE-AM" />
      </v-col>
      <v-col>
        <ExamCategory Name="AP" FullName="応用情報技術者試験" AMURL="/kakomon/AP-AM" />
      </v-col>
    </v-row>
    <router-view />
  </v-container>
</template>

<script lang="ts" setup>
import HeaderParallax from '../../components/HeaderParallax.vue';
import ExamCategory from '@/components/ExamCategory.vue';
</script>
