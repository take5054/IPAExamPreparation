<template>
	<v-container fluid>
		<v-parallax :src="imageSrc" height="500">
			<v-row class="fill-height" align="center" justify="center">
				<v-col class="text-center">
					<h1 class="display-3 font-weight-bold white--text pa-4" style="background-color: rgba(0, 0, 0, 0.5); color: white;">
						{{ text }}
					</h1>
					<v-divider :thickness="15" class="border-opacity-75" color="success" />
				</v-col>
			</v-row>
		</v-parallax>
	</v-container>
</template>

<script lang="ts" setup>
const props = defineProps<{
  imageSrc?: string
  text: string
}>();
</script>
