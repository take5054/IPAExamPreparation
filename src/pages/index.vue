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
          <v-card v-for="(item, index) in whatsNews" :key="index" class="mb-2" outlined>
            <v-card-title>{{ item[1] }}</v-card-title>
            <v-card-subtitle class="mb-2">更新日 {{ item[0] }}</v-card-subtitle>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import HeaderParallax from '../components/HeaderParallax.vue'

const whatsNews = ref<any[]>([])

onMounted(async () => {
  try {
    const res = await axios.get("http://localhost:8000/whats-new")
    whatsNews.value = res.data.sort((a: (string | number | Date)[], b: (string | number | Date)[]) => {
      // 日付を比較して降順にソート
      return new Date(b[0]).getTime() - new Date(a[0]).getTime();
    });
  } catch (error) {
    console.error("データ取得エラー", error);
  }
})
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