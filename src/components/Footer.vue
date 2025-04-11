<template>
  <v-footer app color="indigo-darken-4" class="white--text">
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="auto">
          <h2>Take</h2>
        </v-col>
        <!--<v-col cols="auto">
          
        </v-col>-->
      </v-row>
      <v-row align="center">
        <v-col class="text-center">
          <v-btn icon @click="shareTwitter" color="primary">
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-divider />
        <v-col class="text-center ">
          <span>&copy; 2025</span>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script lang="ts" setup>
const shareTwitter = () => {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent("");
  window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
};
</script>
