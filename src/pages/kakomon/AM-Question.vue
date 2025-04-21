<template>
  <v-container class="my-12">
    <v-row>
      <v-col>
        <h1>問題一覧</h1>
        <v-divider thickness="5" class="mb-4" />
        <!-- Questions の Text を表示 -->
        <v-card v-for="(question, index) in detailData.Questions" :key="index" class="mb-2" elevation="4">
          <v-card-title>
            <div style="display: inline;">問{{ index + 1 }}</div>
            <div style="display: inline;" class="ml-4">{{ question.Text }}</div>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const detailData = ref<any>({});

onMounted(async () => {
  try {
    let apiUrl = '';

    // 現在のURLに応じてAPIのURLを分ける
    if (route.path.includes('/kakomon/AP-AM')) {

      apiUrl = `http://localhost:8000/ap-am-data/${route.params.id}`;
    } else if (route.path.includes('/kakomon/FE-AM')) {
      apiUrl = `http://localhost:8000/fe-am-data/${route.params.id}`;
    } else {
      console.error('不明なパスです:', route.path);
      return;
    }

    // APIリクエストを送信
    const res = await axios.get(apiUrl);
    detailData.value = res.data;

  } catch (error) {
    console.error("データ取得エラー", error);
  }
});
</script>
