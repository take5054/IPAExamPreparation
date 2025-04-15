<template>
  <HeaderParallax text="TOP" />
  <v-container class="my-12">
    <v-row>
      <v-col>
        <h1>Top Page</h1>
        <v-divider :thickness="5" />
      </v-col>
    </v-row>
    <!-- 新着情報リスト -->
    <v-row>
      <v-col>
        <h2>新着情報</h2>
        <div class="whats-news">
          <v-card v-for="(item, index) in updateHistory" :key="index" class="mb-2" outlined>
            <v-card-title>{{ item.description }}</v-card-title>
            <v-card-subtitle class="mb-2">更新日 {{ item.date }}</v-card-subtitle>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import HeaderParallax from '@/components/HeaderParallax.vue';

// 更新履歴データ(仮置き・バックエンドから取得するように変更予定)
const updateHistory = ref([
  { date: '2025-04-09', description: 'test' },
  { date: '2025-04-09', description: 'test' },
  { date: '2025-04-09', description: 'test' },
  { date: '2025-04-09', description: 'test' },
  { date: '2025-04-09', description: 'test' },
  { date: '2025-04-09', description: 'test' },
  { date: '2025-04-09', description: 'test' },
  { date: '2025-04-09', description: 'test' },
  { date: '2025-04-09', description: 'test' },
  { date: '2025-04-09', description: 'サイトの開発を開始' },
]);
</script>

<style scoped>
.whats-news {
  max-height: 300px; /* 最大の高さ設定 */
  overflow-y: auto;
  padding: 16px;
  margin-top: 4px;
  margin-bottom: 4px;
  border-radius: 5px;
  background-color: #e9e9e9;
}
</style>