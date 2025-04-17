<template>
  <v-container class="my-12">
    <v-row>
      <v-col>
        <h1>問題一覧</h1>
        <!-- Questions の Text を表示 -->
        <div v-for="(question, index) in detailData.Questions" :key="index">
          <p>{{ question.Text }}</p>
        </div>
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
    const res = await axios.get(`http://localhost:8000/ap-am-data/${route.params.id}`);
    detailData.value = res.data;
  } catch (error) {
    console.error("データ取得エラー", error);
  }
});
</script>
