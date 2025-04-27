<template>
  <v-container class="mt-12">
    <v-row>
      <v-col>
        <h1>問 {{ route.params.questionID }}</h1>
        <v-divider thickness="5" class="mb-4" />
      </v-col>
    </v-row>
  </v-container>
  <v-container>
    <v-row>
      <v-col>
        <h1>{{ detailData.Text }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="pa-4" color="#e9e9e9">
          <div v-for="(ans, index) in detailData.Answers" :key="index" class="my-4" elevation="4"
            style="display: flex; align-items: center;">
            <v-btn>{{ answerOptions[index] }}</v-btn>
            <div style="display: inline" class="ml-2">{{ ans }}</div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-container class="mt-12">
    <v-row>
      <v-col>
        <h1>解説</h1>
        <v-divider thickness="5" class="mb-4" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div>{{ detailData.CorrectAnswer }}</div>
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
const answerOptions = ['ア', 'イ', 'ウ', 'エ'];

onMounted(async () => {
  try {
    let apiUrl = '';

    // 現在のURLに応じてAPIのURLを分ける
    if (route.path.includes('/kakomon/AP-AM')) {
      apiUrl = `http://localhost:8000/ap-am-data/${route.params.yearID}`;
    } else if (route.path.includes('/kakomon/FE-AM')) {
      apiUrl = `http://localhost:8000/fe-am-data/${route.params.yearID}`;
    } else {
      console.error('不明なパスです:', route.path);
      return;
    }
    apiUrl += `/${route.params.questionID}`; // 問題IDを追加

    // APIリクエストを送信
    const res = await axios.get(apiUrl);
    detailData.value = res.data;

  } catch (error) {
    console.error("データ取得エラー", error);
  }
});
</script>
