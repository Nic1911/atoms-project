<template>
	<div class="c-basemessage">
		<h1>{{ msg }}</h1>
		<h2>{{ desc }}</h2>
	</div>
</template>

<script>
export default {
	name: "BaseMessage",
	props: {
		msg: String,
		desc: String,
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.c-basemessage {
}
</style>
