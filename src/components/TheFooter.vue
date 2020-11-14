<template>
	<div class="c-footer">
		<div class="grid-container">
			<div class="grid-x">
				<div class="c-footer__info cell">
					footer info
				</div>
				<div class="c-footer__logo cell">
					<router-link class="logo-link" :to="'/'">
						<img src="@/assets/images/brand/logo.svg" alt="Logo" />
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "TheFooter",
	components: {},
	data() {
		return {};
	},
};
</script>

<style lang="scss">
.c-footer {
	width: 100%;
	background-color: $light-gray;

	padding: 20px 0;

	&__info {
		margin-bottom: 20vh;
	}

	&__logo {
		padding-top: 40px;
		padding-bottom: 20vh;
		border-top: 1px solid $gray;
	}
}
</style>
