<template>
  <HeaderParallax text="応用情報技術者試験 午前 過去問" />
  <v-container class="my-12">
    <v-row>
      <v-col>
        <h1>応用情報技術者試験 午前 過去問</h1>
        <v-divider :thickness="5" />
      </v-col>
    </v-row>
    <v-row>
      <!-- カードがある場合、各カードを横並びに表示 -->
      <v-col v-for="(card, index) in reversedCardsData" :key="index" cols="4" v-if="cardsData.length > 0">
        <v-card class="ma-0 pa-4" outlined elevation="6" :to="'/kakomon/AP-AM/' + card[3]">
          <v-card-title>{{ card[1] }} {{ card[2] === 1 ? '春' : '秋' }}期</v-card-title>
        </v-card>
      </v-col>
      <!-- カードがまだない場合 -->
      <v-col cols="12" v-else>
        データを取得中...
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import HeaderParallax from '../../components/HeaderParallax.vue'

const cardsData = ref<any[]>([])
// cardsData の逆順の配列をcomputedで作成
const reversedCardsData = computed(() => {
  return [...cardsData.value].reverse()
})

onMounted(async () => {
  try {
    const res = await axios.get("http://localhost:8000/ap-am-index")
    cardsData.value = res.data
  } catch (error) {
    console.error("データ取得エラー", error)
  }
})
</script>
