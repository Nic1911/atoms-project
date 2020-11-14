<template>
	<div id="app">
		<TheTopBar />

		<router-view />
		<TheFooter />
	</div>
</template>

<script>
// components
import TheTopBar from "@/components/TheTopBar.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
	components: { TheTopBar, TheFooter },
};
</script>

<style lang="scss"></style>
