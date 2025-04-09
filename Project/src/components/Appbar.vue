<template>
	<v-app-bar app scroll-behavior="hide  collapse">
		<template v-slot:prepend>
			<v-app-bar-nav-icon></v-app-bar-nav-icon>
		</template>
		<v-toolbar-items>
			<v-btn to="/">TOP</v-btn>
			<v-btn to="/about">About</v-btn>
		</v-toolbar-items>
	</v-app-bar>
</template>

<script setup lang="ts">
//
</script>
