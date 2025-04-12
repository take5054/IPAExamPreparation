<template>
	<v-app-bar app scroll-behavior="hide  collapse" color="indigo darken-4" dark>
		<template v-slot:prepend>
			<v-app-bar-nav-icon></v-app-bar-nav-icon>
		</template>
		<v-toolbar-items>
			<v-btn to="/">TOP</v-btn>
			<v-btn to="/kakomon">過去問</v-btn>
			<v-btn to="/about">About</v-btn>
		</v-toolbar-items>
	</v-app-bar>
</template>

<script setup lang="ts">
//
</script>
