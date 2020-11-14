<template>
	<div class="c-banner-overlay">
		<div class="c-banner-overlay__picture">
			<img
				v-if="item.imgSrc"
				:src="require(`@/assets${item.imgSrc}`)"
				alt=""
			/>
		</div>

		<div class="c-banner-overlay__content">
			<BaseLead
				class="c-banner-overlay__title"
				:tag="'p'"
				:label="item.title"
				align="right"
				mode="bold"
			/>
			<BaseLead
				class="c-banner-overlay__body"
				:tag="'p'"
				:label="item.body"
				align="right"
				mode="medium"
			/>
			<router-link
				class="c-banner-overlay__link call-to-action -outline -light"
				:to="item.link"
				><span>Discover</span></router-link
			>
		</div>
	</div>
</template>

<script>
// components
import BaseLead from "@/components/BaseLead.vue";
export default {
	name: "TextbannerOverlay",
	props: { item: Object },
	components: {
		BaseLead,
	},
};
</script>

<style lang="scss">
.c-banner-overlay {
	position: relative;
	&__picture {
		width: 100%;
		padding-top: (5 / 3) * 100%;

		position: relative;
		overflow: hidden;

		background-color: $dark-blue;

		@include breakpoint(large) {
			padding-top: (15 / 32) * 100%;
		}

		&::before {
			content: "";
			position: absolute;
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;

			z-index: 1;

			background: -moz-linear-gradient(
				45deg,
				rgba(125, 185, 232, 0) 0%,
				rgba(0, 0, 0, 1) 100%
			);
			background: -webkit-linear-gradient(
				45deg,
				rgba(125, 185, 232, 0) 0%,
				rgba(0, 0, 0, 1) 100%
			);
			background: linear-gradient(
				45deg,
				rgba(125, 185, 232, 0) 0%,
				rgba(0, 0, 0, 1) 100%
			);
			filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#007db9e8', endColorstr='#000000',GradientType=1 );
		}

		img {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;

			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;

			opacity: 0.6;
		}
	}

	&__title {
		font-size: 48px;
		color: $color-white;
	}
	&__body {
		color: $color-white;
		font-size: 16px;
		width: 100%;
		margin: 20px 0;
	}

	&__content {
		position: relative;
		z-index: 2;
		max-width: 400px;

		padding: 20px;

		display: flex;
		flex-wrap: wrap;
		align-items: center;
		align-content: center;
		justify-content: flex-end;

		position: absolute;
		bottom: 0;
		right: 0;

		@include breakpoint(large) {
			height: 100%;
			padding: 0 40px;
		}
	}
}
</style>
